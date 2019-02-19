<template>
  <div>
    <div class="bgc">
      <div class="nav bgc border-b">
        <div :class="{ 'fc-blue selected': typenum==0 }" @click="typenum=0">百问百答</div>
        <div :class="{ 'fc-blue selected': typenum==1 }" @click="typenum=1">素材发圈</div>
        <div :class="{ 'fc-blue selected': typenum==2 }" @click="typenum=2">图文专栏</div>
        <div :class="{ 'fc-blue selected': typenum==3 }" @click="typenum=3">宣传报道</div>
      </div>
    </div>

    <div v-show="typenum==0">
      <div class="bgc pd-lr-15 sear_box">
        <div class="sear flex-align-items" @click="gosearch">
          <van-icon name="search" size="20px" color="#979797"/>
          <span class="fc-grey fz12">输入问答关键字</span>
        </div>
      </div>
      <div class="bgc merch-box">
        <div class="merchlist pd-15" v-for="(item,index) in 3">
          <div @click="toAnswers">
            <div class="problem">会员卡列表里没有9.9元体验卡?</div>
            <div class="fsz12 flex-align-items store_name">
              <img class="img_logo" src="../../assets/photo/yanzhengma.png">
              <span>魅姿莱</span>
            </div>
          </div>
          <div class="flex-jc-between fsz12">
            <span class="fc-grey">2018-12-28 10:40:30</span>
            <div class="img_box flexbox">
              <img class="img_commit" src="../../assets/photo/commit.png">

              <div class="text-c" @click="ondianzan">
                <div>
                  <img v-if="isdianzan" class="img_commit" src="../../assets/photo/dianzan.png" alt>
                  <img v-else class="img_commit" src="../../assets/photo/dianzans.png" alt>
                </div>
              </div>
              <img class="img_fenxiang" src="../../assets/photo/fenxiang.png">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-show="typenum==1">
      <div class="flexbox pd-15 circle_box bgc" v-for="(item,index) in 3" @click="tomalDetail">
        <div>
          <img class="img_logo1 border" src="../../assets/photo/yanzhengma.png">
        </div>
        <div>
          <div class="fc-fen fz15" style="padding-top:10px">魅姿莱</div>
          <div class="pd-tb-15">魅资莱一站式共享M肤中心是你创业最好的平台</div>
          <div class="imglist_box">
            <div class="imglist" v-for="(item,index) in imglist" :key="index">
              <img class="itemimg" :src="item">
            </div>
          </div>
          <div class="flex-jc-between fsz12" style="padding-top:10px">
            <span class="fc-grey">2018-12-28 10:40:30</span>
            <div class="img_box flexbox">
              <div class="text-c" @click="ondianzan1">
                <div>
                  <img
                    v-if="isdianzan1"
                    class="img_commit"
                    src="../../assets/photo/dianzans.png"
                    alt
                  >
                  <img v-else class="img_commit" src="../../assets/photo/dianzan.png" alt>
                </div>
              </div>
              <img class="img_fenxiang" src="../../assets/photo/fenxiang.png">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-show="typenum==2" class="bgc pd-lr-15">
      <div v-for="(item,index) in 2" @click="toimageText">
        <div class="photo">
          <img src="../../assets/photo/banner.png">
        </div>
        <div class="txt">教你如何改善熬夜带来的脸色蜡黄</div>
      </div>
    </div>
    <div v-show="typenum==3">
      <div class="circle_box bgc flexbox pd-15" v-for="(item,index) in 3" @click="toreportDetail">
        <div class="report">
          <img src="../../assets/photo/banner.png">
        </div>
        <div class="flex-column-space-between right_box">
          <div>魅资莱深圳龙华分店盛大开业</div>
          <div class="flex-jc-between fsz12" style="padding-top:10px">
            <span class="fc-grey">2018-12-28</span>
            <div class="img_box flexbox">
              <div class="text-c" @click="ondianzan1">
                <div>
                  <img
                    v-if="isdianzan1"
                    class="img_commit"
                    src="../../assets/photo/dianzan.png"
                    alt
                  >
                  <img v-else class="img_commit" src="../../assets/photo/dianzans.png" alt>
                </div>
              </div>
              <img class="img_fenxiang" src="../../assets/photo/fenxiang.png">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="height:40px"></div>
    <!-- <div
      class="flex-center border"
      @click="onshowmodel(item.order_id)"
      v-if="item.order_status==1"
    >取消订单</div>

    <van-popup v-model="showmodel" position="bottom" :close-on-click-overlay="false">
      <div class="text-c position title">取消订单
        <div class="closeicon">
          <van-icon name="close" @click="onshowmodel"/>
        </div>
      </div>
      <div class="pd-lr-15">
        <div style="padding:20px 0">请选择取消订单的原因,帮助我们改进(必选):</div>
        <van-radio-group v-model="radio">
          <div
            class="flex-jc-between mar-b-10"
            @click="radio = index"
            v-for="(item,index) in canceltext"
            :key="index"
          >
            <span>{{index+1}}、{{item.text}}</span>
            <van-radio :name="index" checked-color="#2DBBF1"></van-radio>
          </div>
        </van-radio-group>
      </div>
      <div class="pd-15">
        <div class="btn text-c" @click="cancelOrder(orderid)">提交</div>
      </div>
    </van-popup>-->
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      typenum: 0,
      radio: 0,
      isdianzan: false,
      isdianzan1: false,
      canceltext: [
        { id: 1, text: "我不想租了" },
        { id: 2, text: "收货地址写错了" },
        { id: 3, text: "重新下单" },
        { id: 4, text: "测试下单/误下单" },
        { id: 5, text: "其他" }
      ],
      showmodel: true,
      imglist: [
        "http://www.pptbz.com/pptpic/UploadFiles_6909/201306/2013062320262198.jpg",
        "http://www.pptbz.com/pptpic/UploadFiles_6909/201306/2013062320262198.jpg",
        "http://www.pptbz.com/pptpic/UploadFiles_6909/201306/2013062320262198.jpg"
      ]
    };
  },
  created() {},
  methods: {
    // onshowmodel(id) {
    //   this.orderid = id;
    //   if (this.showmodel) {
    //     this.showmodel = false;
    //   } else {
    //     this.showmodel = true;
    //   }
    // }

    //点赞
    ondianzan() {
      this.isdianzan = !this.isdianzan;
    },
    ondianzan1() {
      this.isdianzan1 = !this.isdianzan1;
    },
    // 百问百答搜索
    gosearch() {
      this.$router.push({ path: "/answersSearch/" });
    },
    // 百问百答详情
    toAnswers() {
      this.$router.push({ path: "/answers/" });
    },
    // 素材发圈详情

    tomalDetail() {
      this.$router.push({ path: "/materialDetail/" });
    },
    // 图文专栏详情
    toimageText() {
      this.$router.push({ path: "/imageText/" });
    },
    // 宣传报道详情
    toreportDetail() {
      this.$router.push({ path: "/reportDetail/" });
    }
  }
};
</script>



<style scoped>
.fz15 {
  font-size: 15px;
}
.nav {
  padding: 15px 10px;
}
.nav > div {
  width: 68px;
  height: 25px;
  line-height: 25px;
  display: inline-block;
  /* box-shadow: 0 1px 7px 1px #e8e9ea;*/
  border-radius: 20px;
  text-align: center;
  box-sizing: border-box;
  font-size: 13px;
  margin-right: 3px;
}
.nav .selected {
  color: #fff;
  background: linear-gradient(90deg, #fe4171, #ff5491);
}
.fz12 {
  font-size: 12px;
}
.sear_box {
  padding-top: 10px;
}
.sear {
  height: 30px;
  line-height: 30px;
  border-radius: 20px;
  background: #f6f5f5;
}

.sear .van-icon {
  padding-left: 100px;
}

.fsz12 {
  font-size: 12px;
}
.fsz10 {
  font-size: 10px;
}

.merchlist {
  border-bottom: 10px solid #f0f0f0;
}

.merchlist:last-child {
  border: none;
}
.problem {
  font-size: 17px;
  font-weight: 600;
}

.store_name {
  padding: 10px 0;
}
.circle_box {
  /* border-bottom: 10px solid #f0f0f0; */
  margin-bottom: 10px;
}

.img_logo {
  width: 23px;
  height: 23px;
  border-radius: 50%;
  margin-right: 10px;
}
.img_logo1 {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}
.img_slt {
  width: 80px;
  height: 80px;
  padding: 15px;
  border-radius: 20px;
}
.img_box img {
  margin-left: 15px;
}
.img_location {
  width: 11px;
  height: 14px;
}

.img_commit {
  width: 16px;
  height: 16px;
}
.img_fenxiang {
  width: 15px;
  height: 16px;
}

.imglist {
  display: inline-block;
}
.itemimg {
  width: 75px;
  height: 75px;
  border-radius: 5px;
  margin-right: 3px;
}

.photo {
  padding-top: 15px;
}
.photo img {
  border-radius: 10px;
}
.txt {
  line-height: 40px;
}

.report img {
  width: 104px;
  height: 80px;
  border-radius: 5px;
}

.right_box {
  padding-left: 10px;
}
.tag .dot {
  position: absolute;
  top: 0;
  right: 0;
}

.list {
  padding: 14px;
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
.btn {
  height: 42px;
  line-height: 42px;
  border-radius: 20px;
  color: #fff;
  background-image: linear-gradient(90deg, #2dbbf1 0%, #4ea9f9 100%);
}
.codeimg {
  width: 180px;
  height: 180px;
  margin-bottom: 20px;
}
.closeimg {
  width: 34px;
  height: 34px;
  position: absolute;
  right: 20px;
  top: 100px;
  font-size: 34px;
}
.title .closeicon {
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 20px;
}
.title {
  font-size: 16px;
  padding-top: 15px;
}
</style>