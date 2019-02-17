<template>
  <div>
    <div class="bgc">
      <div class="nav bgc">
        <div :class="{ 'fc-blue selected': typenum==0 }" @click="typenum=0">百问百答</div>
        <div :class="{ 'fc-blue selected': typenum==1 }" @click="typenum=1">素材发圈</div>
        <div :class="{ 'fc-blue selected': typenum==2 }" @click="typenum=2">图文专栏</div>
        <div :class="{ 'fc-blue selected': typenum==3 }" @click="typenum=3">宣传报道</div>
      </div>
    </div>
    <div v-show="typenum==0">百问百答</div>
    <div v-show="typenum==1">素材发圈</div>
    <div v-show="typenum==2">图文专栏</div>
    <div v-show="typenum==3">宣传报道</div>
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
      canceltext: [
        { id: 1, text: "我不想租了" },
        { id: 2, text: "收货地址写错了" },
        { id: 3, text: "重新下单" },
        { id: 4, text: "测试下单/误下单" },
        { id: 5, text: "其他" }
      ],
      showmodel: true
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
  }
};
</script>



<style scoped>
.nav {
  padding: 15px 10px;
}
.nav > div {
  width: 68px;
  height: 25px;
  line-height: 25px;
  display: inline-block;
  box-shadow: 0 1px 7px 1px #e8e9ea;
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