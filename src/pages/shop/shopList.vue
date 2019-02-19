<template>
  <div>
    <div class="pd-lr-15 sear_box flexbox">
      <div class="flex-align-items">
        <span>深圳</span>
        <img class="img_sanjiao" src="../../assets/photo/sanjiao.png">
      </div>
      <div class="sear flex-align-items bgc" @click="gosearch">
        <van-icon name="search" size="20px" color="#979797"/>
        <span class="fc-grey fz12">搜索店铺</span>
      </div>
    </div>

    <div class="shoplist">
      <div v-for="(item,index) in 9" :key="index" :title="item" @click="goshopDetail">
        <div class="item">
          <div class="flex-jc-between">
            <div class="shop_title">龙华魅姿莱美容馆</div>
            <div>1.3km</div>
          </div>
          <div class="flexbox" style=" padding-top: 10px;">
            <img class="img_location" src="../../assets/photo/location.png">
            <div class="fz12 fc-grey">
              深圳市龙华新区人民北路788号(龙华友谊
              书城隔壁
            </div>
          </div>
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
      list: [],
      value: ""
    };
  },
  created() {},
  methods: {
    // 搜索
    gosearch() {
      this.$router.push({ path: "/answersSearch/" });
    },
    goshopDetail() {
      this.$router.push({ path: "/shopDetail/" });
    }
  }
};
</script>

<style scoped>
.fz12 {
  font-size: 12px;
}
.img_sanjiao {
  width: 12px;
  height: 10px;
  margin-right: 10px;
}
.sear_box {
  padding-top: 10px;
}
.sear {
  width: 240px;
  height: 30px;
  line-height: 30px;
  border-radius: 20px;
  background: #fff;
}

.sear .van-icon {
  padding-left: 80px;
}

.shoplist {
  margin-bottom: 60px;
}
.item {
  background: #fff;
  padding: 10px 20px;
  margin: 12px 14px 0 14px;
  border-radius: 10px;
  box-shadow: 1px 0px 6px 1px rgba(237, 237, 237, 1);
}
.shop_title {
  font-size: 15px;
  font-weight: 600;
}
.img_sanjiao {
  width: 12px;
  height: 10px;
}
.img_location {
  width: 12px;
  height: 16px;
  margin: 3px 5px 0 0;
}
</style>