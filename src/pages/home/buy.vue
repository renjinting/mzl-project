<template>
  <div>
    <div class="bgc">
      <div class="pd-15">取货方式</div>
      <div class="nav bgc pd-lr-15">
        <div :class="{ 'fc-blue selected': typenum==0 }" @click="typenum=0">自取</div>
        <div :class="{ 'fc-blue selected': typenum==1 }" @click="typenum=1">快递</div>
        <div :class="{ 'fc-blue selected': typenum==2 }" @click="typenum=2">配送</div>
      </div>
    </div>
    <div class="mar-b-10 main">
      <van-cell is-link center @click="go('/addresslist/buy')" v-show="typenum==1||typenum==2">
        <div slot="title">
          <div>收货地址</div>
          <div>
            {{getaddress.ads_user||''}} {{getaddress.ads_phone||''}}
            <van-tag plain v-if="getaddress.ads_state==2">默认</van-tag>
          </div>
          <div>{{(getaddress.ads_province||'')+(getaddress.ads_city||'')+(getaddress.ads_district||'')+(getaddress.ads_address||'')}}</div>
        </div>
      </van-cell>
      <template v-if="typenum==0">
        <van-cell is-link center @click="go(`/locationList/buy/${goodid}`)">
          <template slot="title">
            <div>自取地点</div>
            <div>{{getlocation.store_name||''}}</div>
            <div>{{(getlocation.store_province||'')+(getlocation.store_city||'')+(getlocation.store_district||'')+(getlocation.store_Address||'')}}</div>
          </template>
        </van-cell>
        <van-cell is-link center @click="go('/calendar/buy')">
          <template slot="title">
            <div>自取时间</div>
            <div>{{getdate}}</div>
          </template>
        </van-cell>
        <van-cell is-link center @click="go('/people/buy')">
          <template slot="title">
            <div>自取人</div>
            <div>{{people.name}} {{people.phone}}</div>
          </template>
        </van-cell>
      </template>
    </div>

    <div class="pd-15 bgc">
      <div class="goods flexbox">
        <img :src="detail.gd_img[0]" alt>
        <div class="flex-1">
          <div class="mar-b-10">{{detail.goods_name}}</div>
          <div>
            <span v-for="(item,index) in guiges" :key="index">{{item.attr_name}}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="mar-b-10">
      <van-cell title="租期" center>
        <div class="time">
          <div class="border text-line flex-center" @click="showweek = true">
            {{weektext}}
            <img src="../../assets/icon-triangle.png" class="triangleimg">
          </div>
          <div class="border flex-center">
            <input type="number" v-model.trim="weekval" :disabled="isdisabled" class="bgc">
          </div>
        </div>
      </van-cell>
      <!-- <van-cell title="期望收到的日期" is-link center v-show="typenum==0" @click="go('/calendar/expectdateTobuy/pre')" :value="expectdate"></van-cell> -->
      <van-cell
        is-link
        center
        v-show="typenum==1||typenum==2"
        @click="go('/calendar/expectdateTobuy/pre')"
        :value="expectdate"
      >
        <template slot="title">
          <div>期望收到的日期</div>
          <div style="font-size:12px" class="fc-grey">收到货的次日起算租金</div>
        </template>
      </van-cell>
      <van-cell
        title="配送时间段"
        center
        :value="timequantumtext"
        is-link
        v-show="typenum==2"
        @click="showtimequantum=true"
      ></van-cell>
      <!-- <van-cell title="时间点" is-link center @click="showtime=true" :value="timetext" v-show="typenum==0"></van-cell> -->
    </div>

    <div class="mar-b-10">
      <van-cell title="运费" center :value="'￥'+freight" v-show="typenum==1"></van-cell>
      <van-cell title="配送运费" center :value="'￥'+freight" v-show="typenum==2"></van-cell>
      <van-cell title="优惠券" is-link center :value="couponstext" @click="showcoupon=true"></van-cell>
      <van-cell :title="'保险费 ￥'+detail.safe_price" center>
        <div class="flex-align-items" style="justify-content: flex-end">
          <van-switch @change="onswitch" v-model="isinsurance" size="20px" :disabled="Dinsurance"/>
        </div>
      </van-cell>
      <van-cell title="享受优惠" is-link center :value="activitytext" @click="discountmodel=true"></van-cell>
      <van-cell center v-show="typenum==2">
        <div slot="title" class="flex-align-items">
          <span>特殊需求备注</span>
          <input type="text" placeholder="请输入" v-model="remarkval" class="pdl10">
        </div>
      </van-cell>
    </div>

    <div class="mar-b-10">
      <van-cell title="押金" center :value="'￥'+detail.gd_deposit"></van-cell>
      <van-cell title="租金" center :value="'￥'+rent"></van-cell>
      <van-cell title="应付总金额" center>
        <span class="fc-red">￥{{sum}}</span>
      </van-cell>
    </div>

    <div class="bgc pd-15">
      <div class="mar-b-10 flexbox">
        <van-checkbox checked-color="#2DBBF1" v-model="isconsent"></van-checkbox>
        <div class="pdl10">同意
          <span @click="go('/zagreement')" class="fc-blue">租赁协议</span>
        </div>
      </div>
      <div>
        <div class="btn text-c" @click="nextface">信用免押支付</div>
      </div>
    </div>

    <!-- 弹框 -->
    <van-popup v-model="showtime" position="bottom" :close-on-click-overlay="false">
      <van-datetime-picker type="time" show-toolbar @cancel="showtime=false" @confirm="onConfirm"/>
    </van-popup>

    <van-popup v-model="showtimequantum" position="bottom" :close-on-click-overlay="false">
      <van-picker
        :columns="timequantumarr"
        show-toolbar
        @cancel="showtimequantum = false"
        @confirm="onConfirmTimequantum"
      />
    </van-popup>

    <van-popup v-model="showweek" position="bottom" :close-on-click-overlay="false">
      <van-picker
        :columns="columns"
        show-toolbar
        @cancel="showweek = false"
        @confirm="onConfirmWeek"
      />
    </van-popup>
    <!-- 优惠活动弹窗 -->
    <van-popup v-model="discountmodel" position="bottom" :close-on-click-overlay="false">
      <div class="position">
        <div class="flex-jc-center">
          <div class="s_title border-b fsz text-c">优惠活动</div>
        </div>
        <div class="flexbox">
          <div class="lineheight pd-lr-15 border-b">
            <span class="dis_clasify">[新用户]</span>
            <span class="grey_12">新人下单立减50元</span>
          </div>
        </div>

        <div class="close text-c" @click="discountmodel = false">取消</div>
      </div>
    </van-popup>

    <van-actionsheet v-model="showcoupon" title="优惠券">
      <div>
        <div class="coupon_box position" v-for="(item,index) in couponlist" :key="index">
          <div>
            <img src="../../assets/1.png">
          </div>

          <div class="coupon_con flex-jc-around flex-align-items">
            <div>
              <span class="num">{{item.price}}</span>
              <span class="yuan">元</span>
            </div>
            <div>
              <div class="coupon_fl">新人专享红包</div>
              <div class="limit">
                <div>有效期至2019.01.15</div>
                <div>满50可用</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </van-actionsheet>
  </div>
</template>

<script>
import { Toast } from "vant";
import { accAdd, accSub } from "@/utils/util.js";
import { log } from "util";

export default {
  data() {
    return {
      goodid: this.$route.query.id,
      typenum: 0,
      showtime: false,
      timetext: "",
      getdate: "",
      expectdate: "", //期望收到日期
      people: "",
      getlocation: "",
      getaddress: "",
      couponstext: "", //优惠券
      showcoupon: false, //优惠券
      activitytext: "", //优惠活动
      showweek: false, //租期
      // columns: ['天', '小时'],
      weektext: "请选择", //租期
      isdisabled: true,
      weekval: "", //租期
      isinsurance: true, //保险
      isconsent: true, //协议
      discountmodel: false, //优惠活动
      couponlist: [{ price: 10 }, { price: 20 }], //优惠券
      remarkval: "",
      timequantumtext: "", //时间段
      showtimequantum: false, //时间段
      timequantumarr: [], //时间段
      detail: "",
      Dinsurance: false,
      hire_cate: 1,
      guiges: [],
      rent: 0, //租金
      freight: 0, //运费
      sum: 0
    };
  },
  watch: {
    weekval() {
      if (this.weekval == "") {
        this.rent = 0;
        return;
      }
      let postData = this.$qs.stringify({
        goods_id: this.$route.query.id,
        rent_num: this.weekval,
        unt: this.weektext == "天" ? "1" : "2"
      });
      this.axios
        .post(this.API + "api/Order/GetHirePrice", postData)
        .then(res => {
          console.log(res.data, "weekval");
          let resdata = res.data;
          if (resdata.code == 200) {
            this.rent = resdata.data;

            if (this.typenum == 0) {
              if (this.Dinsurance || this.isinsurance) {
                let a = accAdd(this.detail.pay_safe, this.detail.safe_price);
                this.sum = accAdd(a, this.rent);
              } else {
                this.sum = accAdd(this.detail.pay_safe, this.rent);
              }
            } else {
              if (this.Dinsurance || this.isinsurance) {
                let a = accAdd(this.detail.pay_safe, this.detail.safe_price);
                let b = accAdd(a, this.rent);
                this.sum = accAdd(b, this.freight);
              } else {
                let a = accAdd(this.detail.pay_safe, this.rent);
                this.sum = accAdd(a, this.freight);
              }
            }
          } else {
            Toast(resdata.message);
          }
        });
    },
    getaddress() {
      if (this.typenum == 0) {
        return;
      }
      this.getfreight();
    }
  },
  computed: {
    columns: function() {
      if (this.typenum == 0) {
        if (this.Dinsurance || this.isinsurance) {
          this.sum = accAdd(this.detail.pay_safe, this.detail.safe_price);
        } else {
          this.sum = this.detail.pay_safe;
        }

        if (this.weektext == "天") {
          this.weekval = "";
          this.isdisabled = false;
        } else if (this.weektext == "小时") {
          this.isdisabled = true;
        } else {
          this.weektext = "请选择";
          this.weekval = "";
          this.rent = 0;
        }
        // return ['天', '小时']

        if (this.hire_cate == 1) {
          return ["天"];
        }
        if (this.hire_cate == 2) {
          return ["天", "小时"];
        }
      } else {
        if (this.weektext == "天") {
          this.isdisabled = false;
        } else {
          this.weektext = "天";
          this.weekval = "";
          this.rent = 0;
          this.isdisabled = false;
        }

        this.getfreight();
        return ["天"];
      }
    }
  },
  created() {
    let buySession = JSON.parse(window.sessionStorage.getItem("buySession"));
    if (buySession) {
      this.typenum = buySession.gettype;
      this.getlocation = buySession.getlocation;
      this.getdate = buySession.getdate;
      this.expectdate = buySession.expectdate;
      this.timetext = buySession.gettime;
      this.people = buySession.getpeople;
      this.getaddress = buySession.getaddress;
      this.weektext = buySession.weektext;
      this.weekval = buySession.weekval;
      this.isinsurance = buySession.isinsurance;
      this.couponstext = buySession.couponstext;
      this.activitytext = buySession.activitytext;
      this.remarkval = buySession.remarkval;
      this.timequantumtext = buySession.timequantumtext;
    } else {
      this.getdefaultaddress();
    }
    //取缓存 end
    this.getotherprice();
  },
  methods: {
    go(url) {
      let buySession = {
        gettype: String(this.typenum), //取货方式
        getlocation: this.getlocation, //自取地点
        getdate: this.getdate,
        expectdate: this.expectdate,
        gettime: this.timetext,
        getpeople: this.people,
        getaddress: this.getaddress,
        weektext: this.weektext, //租期
        weekval: this.weekval, //租期
        isinsurance: this.isinsurance,
        couponstext: this.couponstext,
        activitytext: this.activitytext,
        remarkval: this.remarkval,
        timequantumtext: this.timequantumtext
      };
      window.sessionStorage.setItem("buySession", JSON.stringify(buySession));
      this.$router.push({ path: url });
    },
    onConfirm(value) {
      console.log(`当前值：${value}`);
      this.timetext = value;
      this.showtime = false;
    },
    onConfirmWeek(value, index) {
      console.log(`当前值：${value}, 当前索引：${index}`);
      this.weektext = value;
      if (value == "小时") {
        this.weekval = 6;
        this.isdisabled = true;
      }
      if (value == "天") {
        this.isdisabled = false;
      }
      this.showweek = false;
    },
    onConfirmTimequantum(value, index) {
      console.log(`当前值：${value}, 当前索引：${index}`);
      this.timequantumtext = value;
      this.showtimequantum = false;
    },
    onswitch(val) {
      if (val) {
        this.sum = accAdd(this.sum, this.detail.safe_price);
      } else {
        this.sum = accSub(this.sum, this.detail.safe_price);
      }
    },

    getdefaultaddress() {
      let postData = this.$qs.stringify({
        users_id: JSON.parse(window.localStorage.getItem("userinfo")).users_id
      });
      this.axios.post(this.API + "api/Lease/ads_select", postData).then(res => {
        console.log(res.data, "address");
        let resdata = res.data;
        if (resdata.code == 200) {
          for (let v of resdata.data) {
            if (v.ads_state == 2) {
              this.getaddress = v;
            }
          }
        } else {
          Toast(resdata.message);
        }
      });
    },
    getotherprice() {

      let postData = this.$qs.stringify({
        users_id: JSON.parse(window.localStorage.getItem("userinfo")).users_id,
        goods_id: this.$route.query.id || "",
        sku: this.$route.query.guige
          ? decodeURI(this.$route.query.guige)
          : "",
        cart_id: this.$route.query.cartid || ""
      })
      this.axios
        .post(this.API + "api/Order/GetGoodsDetail", postData)
        .then(res => {
          console.log(res.data, "getotherprice");
          let resdata = res.data;
          if (resdata.code == 200) {
            this.detail = resdata.data;
            this.Dinsurance = resdata.data.safe_status == 1 ? true : false;
            this.hire_cate = resdata.data.hire_cate;
            this.guiges = JSON.parse(resdata.data.sku);

            if (this.Dinsurance || this.isinsurance) {
              this.sum = accAdd(resdata.data.pay_safe, resdata.data.safe_price);
            } else {
              this.sum = resdata.data.pay_safe;
            }
          } else {
            Toast(resdata.message);
          }
        });
    },
    getfreight() {
      let postData = this.$qs.stringify({
        type: this.typenum,
        ads_id: this.getaddress.ads_id
      })
      this.axios
        .post(this.API + "api/Order/ExpressPrice", postData)
        .then(res => {
          console.log(res.data, "freight");
          let resdata = res.data;
          if (resdata.code == 200) {
            this.freight = resdata.data.price;
            this.timequantumarr = resdata.data.timelist;

            if (this.Dinsurance || this.isinsurance) {
              let a = accAdd(this.detail.pay_safe, this.detail.safe_price);
              this.sum = accAdd(a, this.freight);
            } else {
              this.sum = accAdd(this.detail.pay_safe, this.freight);
            }
          } else {
            Toast(resdata.message);
          }
        });
    },

    nextface() {
      if (this.isconsent) {
        if (this.typenum == 0) {
          // if(this.getlocation==''||this.getdate==''||this.people == ''||this.weektext=='请选择'||this.weekval==''||this.expectdate==''||this.timetext==''){
          //     Toast('还有未填写')
          //     return
          // }
          if (
            this.getlocation == "" ||
            this.getdate == "" ||
            this.people == "" ||
            this.weektext == "请选择" ||
            this.weekval == ""
          ) {
            Toast("还有未填写");
            return;
          }
          var postData = this.$qs.stringify({
            unt: this.weektext == "天" ? 1 : 2,
            rent_num: this.weekval,
            goods_id: this.$route.query.id,
            users_id: JSON.parse(window.localStorage.getItem("userinfo")).users_id,
            users_name: this.people.name,
            users_phone: this.people.phone,
            users_type: this.people.type == 0 ? 1 : 2,
            store_id: this.getlocation.store_id,
            order_delivery_time: this.getdate,
            safe_status: this.isinsurance ? 1 : 2,
            delivery_way: this.typenum == 0 ? 3 : this.typenum == 1 ? 1 : 2,
            // qwsh_time: this.expectdate,
            qwsh_time: "",
            sku: this.detail.sku,
            // time: this.timetext,
            time: "",
            ads_id: "",
            way_price: "",
            remark: "",
            timelist: ""
          });
        }
        if (this.typenum == 1) {
          if (
            this.getaddress == "" ||
            this.weektext == "请选择" ||
            this.weekval == "" ||
            this.expectdate == ""
          ) {
            Toast("还有未填写");
            return;
          }
          var postData = this.$qs.stringify({
            unt: this.weektext == "天" ? 1 : 2,
            rent_num: this.weekval,
            goods_id: this.$route.query.id,
            users_id: JSON.parse(window.localStorage.getItem("userinfo"))
              .users_id,
            safe_status: this.isinsurance ? 1 : 2,
            delivery_way: this.typenum == 0 ? 3 : this.typenum == 1 ? 1 : 2,
            qwsh_time: this.expectdate,
            sku: this.detail.sku,
            ads_id: this.getaddress.ads_id,
            way_price: this.freight,
            users_name: "",
            users_phone: "",
            users_type: "",
            store_id: "",
            order_delivery_time: "",
            time: "",
            remark: "",
            timelist: ""
          });
        }
        if (this.typenum == 2) {
          if (
            this.getaddress == "" ||
            this.weektext == "请选择" ||
            this.weekval == "" ||
            this.expectdate == "" ||
            this.timequantumtext == ""
          ) {
            Toast("还有未填写");
            return;
          }
          var postData = this.$qs.stringify({
            unt: this.weektext == "天" ? 1 : 2,
            rent_num: this.weekval,
            goods_id: this.$route.query.id,
            users_id: JSON.parse(window.localStorage.getItem("userinfo"))
              .users_id,
            safe_status: this.isinsurance ? 1 : 2,
            delivery_way: this.typenum == 0 ? 3 : this.typenum == 1 ? 1 : 2,
            qwsh_time: this.expectdate,
            sku: this.detail.sku,
            ads_id: this.getaddress.ads_id,
            way_price: this.freight,
            remark: this.remarkval,
            timelist: this.timequantumtext,
            users_name: "",
            users_phone: "",
            users_type: "",
            store_id: "",
            order_delivery_time: "",
            time: ""
          });
        }
        Toast.loading({ mask: true, message: "加载中..." });
        this.axios.post(this.API + "api/Order/AddOrder", postData).then(res => {
          console.log(res.data, "order");
          let resdata = res.data;
          if (resdata.code == 200) {
            Toast.clear();
            this.$router.push({ path: "/face/" + resdata.data });
          } else {
            Toast.clear();
            Toast(resdata.message);
          }
        });
      } else {
        Toast("您还未同意协议");
      }
    }
  }
};
</script>

<style scoped>
.pdl10 {
  padding-left: 10px;
}
.nav {
  /* padding: 15px; */
  padding-bottom: 20px;
}
.nav > div {
  width: 80px;
  height: 30px;
  line-height: 30px;
  /* color: #666; */
  display: inline-block;
  box-shadow: 0 1px 7px 1px #e8e9ea;
  /* margin-left: 10px; */
  border-radius: 20px;
  text-align: center;
  box-sizing: border-box;
  font-size: 13px;
  margin-right: 10px;
}
.nav .selected {
  box-shadow: 0 1px 7px 1px #def4fd;
}

.goods {
  background-color: #f6f6f6;
  padding: 10px;
}
.goods img {
  width: 66px;
  height: 66px;
  background-color: #fff;
  margin-right: 10px;
}

.triangleimg {
  width: 10px;
  height: 6px;
  vertical-align: middle;
  margin-left: 2px;
}
.time {
  display: flex;
}
.time > div {
  width: 70px;
  height: 25px;
  border-radius: 5px;
  overflow: hidden;
  /* font-size: 12px; */
}
.time > div:nth-of-type(1) {
  margin-right: 5px;
}
.time input {
  width: 100%;
  text-align: center;
}

.btn {
  height: 42px;
  line-height: 42px;
  border-radius: 20px;
  color: #fff;
  background-image: linear-gradient(90deg, #2dbbf1 0%, #4ea9f9 100%);
}

.s_title {
  width: 92%;
  height: 40px;
  line-height: 40px;
}
.close,
.lineheight {
  height: 50px;
  line-height: 50px;
  width: 100%;
}
.dis_clasify {
  font-size: 12px;
  color: #fc3434;
}
.grey_12 {
  font-size: 12px;
  color: #979797;
}

/* 优惠券 */
.coupon_con {
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
}
.num {
  font-size: 70px;
  font-weight: lighter;
  color: #4ea9f9;
}

.yuan {
  font-size: 25px;
  color: #4ea9f9;
}

.coupon_fl {
  font-size: 15px;
}
.limit {
  font-size: 12px;
  color: #aeaeae;
}
</style>
