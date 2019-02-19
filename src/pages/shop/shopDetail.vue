<template>
  <div>
    <!-- <div class="flex-jc-between shop"  :style="bgimg"> -->
    <div class="position">
      <img src="../../assets/photo/shopimg1.png">
      <div class="shop_mess pd-15">
        <div class="shop_name">龙华魅姿莱美容馆</div>
        <div class="fz12 pd-tb-15">营业时间: 10:30~23:00</div>
        <div class="flex-jc-between">
          <div class="fz12 address">
            深圳市龙华新区人民北路788号(龙华友谊
            书城隔壁)
          </div>
          <img class="img_location" src="../../assets/photo/locations.png">
        </div>
      </div>
    </div>

    <div class="item" id="shopnav">
      <van-tabs @click="ontab" v-model="ind">
        <van-tab :title="item" v-for="(item,index) in navtitle" :key="index">
          <div
            class="coupon_box position"
            v-for="(item,index) in list"
            :key="index"
            v-show="ind ==0||ind==2"
          >
            <div class="coupon_con flex-jc-around flex-align-items">
              <div>
                <span class="num">101111111111111</span>
              </div>
            </div>
          </div>

          <div v-show="ind ==1">
            <div class="flexbox flex-align-items">
              <div>
                <img class="img_header" src="../../assets/photo/banner.png">
              </div>

              <div class="flex-jc-between border-b">
                <div>
                  <div class="name">依依</div>
                  <div class="fz12 fc-grey">服务1500次</div>
                  <div>好评 99%</div>
                </div>
                <div>
                  <div class="small_btn">可服务</div>
                </div>
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>

    <!-- </div> -->
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      navtitle: ["服务项目", "美容师", "服务评价"],
      list: [{}],

      ind: 1
      // bgimg: {
      //   background:
      //     "url(" +
      //     require("../../assets/photo/shopimg1.png") +
      //     ") no-repeat top",
      //   backgroundSize: "100% 100%"
      // }
    };
  },
  created() {},
  methods: {
    ontab(index, title) {
      console.log(index, title);
      if (this.ind == 3) {
        this.show = true;
      } else {
        this.show = false;
      }

      this.index = index;
    }
  }
};
</script>
<style>
#shopnav .van-tabs__line {
  background-color: #fff;
  background-image: linear-gradient(90deg, #fe4171 100%, #ff5491 100%);
}
#shopnav .van-tab {
  color: black;
}
#shopnav .van-tab--active {
  color: #fe4171;
}
</style>
<style scoped>
.fz12 {
  font-size: 12px;
}
.item {
  background: #fff;
  padding: 10px 20px;
  margin: 0px 15px 0 15px;
  border-radius: 10px;
  box-shadow: 1px 0px 6px 1px rgba(237, 237, 237, 1);
}
.shop {
  align-items: center;
  width: 100%;
  height: 180px;
}
.shop_mess {
  width: 290px;
  position: absolute;
  top: 0;
  color: #fff;
}
.shop_name {
  font-size: 16px;
}
.address {
  width: 200px;
}
.img_location {
  width: 12px;
  height: 15px;
}
.img_header {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.name {
  font-size: 17px;
  font-weight: 600;
}

.small_btn {
  background: linear-gradient(90deg, #ff5491, #fe4171);
  border-radius: 20px;
  color: #fff;
  padding: 3px 15px;
}
</style>