<template>
  <div>
    <div class="flex-jc-center bgc">
      <div class="banner bgc">
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(item, index) in images" :key="index">
            <div class="img_box">
              <img :src="item">
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>

    <div class="bgc flex-jc-between pd-15 border-b">
      <div>
        <div class="text-line pro_title">欧莱雅清润葡萄籽精华膜力水欧莱雅清润葡萄籽精华膜力水 130ml</div>
        <div class="pro_price">
          <span class="n_price fc-fen">¥259.00</span>
          <del class="o_price fc-grey">¥289.00</del>
        </div>
      </div>
      <div>
        <div>
          <img class="img_fen" src="../../assets/photo/fenxiang.png">
        </div>
        <div class="fc-grey fz-10">分享</div>
      </div>
    </div>
    <van-cell is-link @click="showinfo=true">
      <template slot="title">
        <span class="c-text">选择规格</span>
      </template>
    </van-cell>
    <div class="bgc flex-jc-center word_mouth_box">
      <div class="word_mouth">
        <div class="flex-jc-between border-b word_num" @click="toMouthw">
          <div>
            <span>商品评价</span>
            <span>(999+)</span>
          </div>
          <div class="fc-grey flex-align-items">
            <span>好评度</span>
            <span>97.6%</span>
            <van-icon name="arrow"/>
          </div>
        </div>
      </div>
    </div>
    <div class="bgc" style="margin-top:10px">
      <div class="product_det text-c flex-jc-center">
        <div class="dettail pd-lr-15">商品详情</div>
        <div class="line"></div>
      </div>
      <div>
        <img src="../../assets/photo/banner.png">
      </div>
    </div>

    <div class="height"></div>
    <div class="bgc footer flex-align-items border-t flex-jc-between">
      <div class="text-c margin_l">
        <div>
          <img class="img_sy" src="../../assets/photo/index.png">
        </div>
        <div class="f10_col">
          <a href="tel:400-0000-688">首页</a>
        </div>
      </div>
      <div class="text-c">
        <div>
          <img class="img_kf" src="../../assets/photo/kefu.png">
        </div>
        <div class="f10_col">在线客服</div>
      </div>
      <div class="flexbox">
        <div class="btn bcolor fc-fen" @click="showinfocar=true">加入购物车</div>
        <div class="btn bcol" @click="gohosting">立即购买</div>
      </div>
      <!-- <div class="btn_pj bcol">我要评价</div> -->
    </div>

    <!-- 选择规格 -->
    <div class="model full" v-show="showinfo||showinfocar">
      <div class="main bgc">
        <div class="goods1 flexbox pd-15">
          <div class="flex-1">
            <div class="mar-b-10 position">
              <div class="closeicon" @click="showinfo=false,showinfocar=false">
                <van-icon name="close"/>
              </div>
            </div>
            <div class="mar-b-10 flexbox">
              <img class="img_slt" src="../../assets/photo/index.png">
              <div class="pd-15">
                <div class="text-line pro_title1">欧莱雅清润葡萄籽精华膜力水 130ml</div>
                <div class="fc-fen" style="padding:10px 0">¥259.00</div>
                <div class="fsz12">请选择规格</div>
              </div>
            </div>
          </div>
        </div>
        <div class="pd-lr-15">
          <div v-for="(item,index) in speclist" :key="index">
            <div class="mar-b-10 fsz12">{{item.spec_name}}</div>
            <div class="items">
              <div
                :class="items.checked?'border-fen fc-fen':'border'"
                v-for="(items,indexs) in item.spec"
                :key="indexs"
                @click="onchooseguige(index,indexs)"
              >{{items.attr_name}}</div>
            </div>
          </div>
        </div>
        <div>
          <div class="pd-15">数量</div>
          <div class="pd-lr-15">
            <van-stepper :value="value" async-change @change="onChange"/>
          </div>
        </div>
        <div class="pd-15" v-show="showinfo">
          <div class="gbtn text-c" @click="gobuy">确定</div>
        </div>
        <div class="pd-15" v-show="showinfocar">
          <div class="gbtn text-c" @click="addcart">加入购物车</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      images: [
        "http://www.pptbz.com/pptpic/UploadFiles_6909/201306/2013062320262198.jpg",
        "http://www.pptbz.com/pptpic/UploadFiles_6909/201306/2013062320262198.jpg"
      ],
      discountlist: [],
      showmodel: false,
      discountmodel: false,
      numval: "",
      showinfo: false,
      showinfocar: false,
      iscollection: false,
      value: 1,
      detail: "",
      speclist: [
        {
          spec_name: "尺寸",
          spec: [
            {
              attr_name: "A"
            },
            {
              attr_name: "B"
            }
          ]
        }
      ]
    };
  },
  created() {},
  methods: {
    //选择规格
    onchooseguige(index, indexs) {
      let speclist = this.speclist;
      for (let [k, v] of speclist.entries()) {
        if (k == index) {
          for (let [k1, v1] of v.spec.entries()) {
            if (k1 == indexs) {
              v1.checked = true;
              console.log(v1);
            } else {
              v1.checked = false;
            }
          }
        }
      }
      this.speclist = [...speclist];
    },
    onChange(value) {
      setTimeout(() => {
        this.value = value;
      }, 500);
    },
    //口碑
    toMouthw() {
      this.$router.push({ path: "/WordMouth" });
    },
    // 确认订单
    gohosting() {
      this.$router.push({ path: "/ConfirmationOrder" });
    },
    gobuy() {
      let arr = [];
      for (let v of this.speclist) {
        for (let v1 of v.spec) {
          if (v1.checked) {
            arr.push(v1);
          }
        }
      }
      if (arr.length == this.speclist.length) {
        window.sessionStorage.removeItem("buySession");
        this.$router.replace({
          path: "/buy",
          query: {
            id: this.$route.params.id,
            guige: encodeURI(JSON.stringify(arr))
          }
        });
      } else {
        Toast("请先选择规格");
      }
    },
    addcart() {
      let arr = [];
      let attr_ids = [];
      let attr_names = [];
      for (let v of this.speclist) {
        for (let v1 of v.spec) {
          if (v1.checked) {
            arr.push(v1);
            attr_ids.push(v1.guigezhi_id);
            attr_names.push(v1.attr_name);
          }
        }
      }
      if (arr.length == this.speclist.length) {
      } else {
        Toast("请先选择规格");
      }
    }
  }
};
</script>

<style scoped>
.fz-10 {
  font-size: 10px;
}
.banner {
  width: 100%;
  height: 320px;
}
.img_box {
  width: 100%;
  height: 320px;
}
.img_box img {
  width: 100%;
  height: 100%;
}
.pro_title {
  width: 260px;
}
.pro_price {
  width: 122px;
  height: 20px;
  line-height: 20px;
  margin-top: 10px;
}

.n_price {
  font-size: 15px;
}
.o_price {
  font-size: 12px;
  margin-left: 10px;
}
.c-text {
  font-size: 13px;
}
.img_fen {
  width: 18px;
  height: 18px;
  margin-left: 2px;
}

.word_num {
  height: 36px;
  line-height: 36px;
}
.img_zq {
  width: 13px;
  height: 16px;
  margin-right: 10px;
}
.img_myj {
  width: 17px;
  height: 17px;
  margin-right: 10px;
}
.process {
  margin-top: 10px;
}
.process_det {
  padding-bottom: 15px;
}

.word_mouth_box {
  margin-top: 10px;
}
.word_mouth {
  width: 92%;
  height: 100%;
}
.wordlist_box {
  border-bottom: 1px solid #f0f0f0;
}

.itemimg {
  width: 88px;
  height: 89px;
  border-radius: 5px;
  margin-right: 10px;
}
.product_det {
  width: 100%;
  height: 40px;
  padding: 10px;
  position: relative;
}
.dettail {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 10px;
  background: #fff;
  position: absolute;
  top: 20px;
  left: 115px;
}
.line {
  width: 180px;
  height: 1px;
  background: #fe4171;
  margin-top: 20px;
}
.height {
  width: 100%;
  height: 45px;
}
.footer {
  width: 100%;
  height: 40px;
  position: fixed;
  bottom: 0;
}
.btn {
  height: 40px;
  line-height: 40px;
  width: 108px;
  font-size: 14px;
  text-align: center;
}
.btn_pj {
  height: 40px;
  line-height: 40px;
  width: 228px;
  font-size: 14px;
  text-align: center;
}
.bcolor {
  background: linear-gradient(90deg, #fdebf1, #fdd3e1);
}
.bcol {
  background: linear-gradient(90deg, #ff5491, #fe4171);
  color: #fff;
}
.img_sy {
  width: 20px;
  height: 20px;
}
.img_kf {
  width: 18px;
  height: 18px;
}
.f10_col {
  font-size: 10px;
  color: #030303;
}
.margin_l {
  margin-left: 10px;
}

.model {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
}
.model .main {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}

.s_title {
  width: 92%;
  height: 40px;
  line-height: 40px;
}
.img_fx {
  width: 50px;
  height: 50px;
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

.caricon {
  position: absolute;
  bottom: 10px;
  right: 20px;
  font-size: 24px;
  z-index: 100;
}
/* 选择规格 */
.fsz12 {
  font-size: 12px;
}
.fsz10 {
  font-size: 10px;
}
.img_slt {
  width: 80px;
  height: 80px;
}

.pro_title1 {
  width: 190px;
}
.model .items > div {
  padding: 2px 10px;
  display: inline-block;
  border-radius: 2px;
  margin-right: 10px;
}
.model .closeicon {
  position: absolute;
  right: 5px;
  top: -5px;
  font-size: 18px;
}

.gbtn {
  height: 42px;
  line-height: 42px;
  border-radius: 20px;
  color: #fff;
  background-image: linear-gradient(90deg, #ff5190 100%, #fe4171 100%);
}
</style>

