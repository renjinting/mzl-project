<template>
  <div>
    <!-- <div class="flex-jc-between top_sear bgc">
      <div class="dw flex-align-items">
        附近门店：
        <span class="fc-blue text-line">{{nearShop}}</span>
      </div>
      <div class="sear flex-align-items" @click="gosearch">
        <van-icon name="search"/>
        <span>搜索你想要的商品</span>
      </div>
    </div>-->
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

    <div class="flex-jc-around bgc">
      <div class="tg" @click="gohosting">
        <img src="../assets/photo/gsjs.png"> 公司介绍
      </div>
      <div class="tg">
        <router-link to="/Extension">
          <img src="../assets/photo/dpfc.png"> 店铺风采
        </router-link>
      </div>
      <div class="tg">
        <router-link to="/WelfareAgency">
          <img src="../assets/photo/czzy.png"> 操作指引
        </router-link>
      </div>
      <div class="tg">
        <router-link to="/WelfareAgency">
          <img src="../assets/photo/tdfc.png"> 团队风采
        </router-link>
      </div>
    </div>

    <div class="flex-jc-around bgc">
      <div class="tg" @click="gohosting">
        <img src="../assets/photo/yjdh.png"> 一键导航
      </div>
      <div class="tg">
        <router-link to="/Extension">
          <img src="../assets/photo/zxhd.png"> 最新活动
        </router-link>
      </div>
      <div class="tg">
        <router-link to="/WelfareAgency">
          <img src="../assets/photo/xptj.png"> 新品推荐
        </router-link>
      </div>
      <div class="tg">
        <router-link to="/WelfareAgency">
          <img src="../assets/photo/sjrz.png"> 商家入驻
        </router-link>
      </div>
    </div>
    <div id="notice" class="pd-lr-15 bgc">
      <van-notice-bar text="最新公告:店铺共享客户利润分红通告" left-icon="volume-o"/>
    </div>
    <div class="bgc">
      <div class="title flex-align-items">
        <img src="../assets/photo/sjrz.png" class="img_rx"> 热销产品
      </div>

      <div class="product" v-for="(item,index) in 4">
        <div @click="toDetail">
          <div class="img_pro">
            <img src="../assets/photo/banner.png">
          </div>
          <div class="pro_title newline">
            欧莱雅清润葡萄籽精华 欧莱雅清润葡萄籽精华
            膜力水 130ml
          </div>

          <div class="pro_price">
            <span class="n_price fc-fen">¥259.00</span>
            <del class="o_price fc-grey">¥289.00</del>
          </div>
        </div>
      </div>
    </div>

    <div class="em bgc"></div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    let self = this;
    return {
      lat: "",
      lng: "",
      images: [
        "http://www.pptbz.com/pptpic/UploadFiles_6909/201306/2013062320262198.jpg",
        "http://www.pptbz.com/pptpic/UploadFiles_6909/201306/2013062320262198.jpg"
      ],

      nearShop: ""
    };
  },

  created() {
    if (!window.localStorage.getItem("userinfo")) {
      this.$router.replace({ path: "/login" });
    }
    this.getLocation();
  },

  methods: {
    getLocation() {
      if (window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(position => {
          var lat = position.coords.latitude; //纬度
          var lng = position.coords.longitude; //经度
          this.lat = lat;
          this.lng = lng;
          this.getNearShop(lat, lng);
          let center = {
            lat,
            lng
          };
          window.localStorage.setItem("center", JSON.stringify(center));
        });
      } else {
        Toast("浏览器不支持地理定位");
      }
    },
    gohosting() {
      window.sessionStorage.removeItem("gohostingSession");
      this.$router.push({ path: "/CompanyIntroduction" });
    },

    //产品详情
    toDetail(id) {
      this.$router.push({ path: "/ProductDetail/" + id });
    },

    getNearShop(lat, lng) {
      let postData = this.$qs.stringify({
        lat: lat,
        lng: lng
        // lat:'22.54605355',
        // lng:'114.02597366'
      });
      this.axios
        .post(this.API + "api/Lease/Nearby_store", postData)
        .then(res => {
          console.log(res.data, "Nearby_store");
          let resdata = res.data;
          if (resdata.code == 200) {
            this.nearShop =
              resdata.data.store_province +
              resdata.data.store_district +
              resdata.data.store_city;
          } else {
            Toast(resdata.message);
          }
        });
    }
  }
};
</script>

<style>
#notice {
  padding-top: 10px;
}
#notice .van-notice-bar {
  background-color: #faf2f2;
  border-radius: 20px;
  height: 30px;
}
</style>

<style scoped>
.f12 {
  font-size: 12px;
}

/* .top_sear {
  width: 100%;
  height: 44px;
}

.sear {
  width: 50%;
  height: 32px;
  margin: 5px 12px 0 0;
  border-radius: 15px;
  background: #f6f5f5;
}

.sear .van-icon {
  padding-left: 10px;
}

.dw {
  width: 50%;
  height: 44px;
  line-height: 44px;
  margin-left: 13px;
  font-size: 13px;
}
.dw span {
  display: inline-block;
  width: 50px;
  height: 100%;
} */

.banner {
  width: 100%;
  height: 184px;
}
.img_box {
  width: 100%;
  height: 184px;
}
.img_box img {
  width: 100%;
  height: 100%;
}
.tg {
  text-align: center;
  line-height: 30px;
  padding-top: 10px;
}

.tg img {
  display: block;
  width: 48px;
  height: 48px;
}
.notice {
}
.title {
  font-size: 17px;
  font-weight: 600;
  padding: 10px;
  height: 30px;
  line-height: 30px;
}

.img_rx {
  width: 16px;
  height: 22px;
  margin-right: 10px;
}

.product {
  display: inline-block;
  width: 142px;
  height: 259px;
  border-radius: 10px;
  box-shadow: 0px 3px 7px 0px rgba(238, 238, 238, 1);
  margin: 0 0 20px 10px;
}
.img_pro {
  width: 142px;
  height: 160px;
}
.img_pro img {
  width: 100%;
  height: 100%;
}

.pro_title {
  width: 122px;
  height: 40px;
  margin: 10px 0 10px 10px;
}

.pro_price {
  width: 122px;
  height: 20px;
  line-height: 20px;
  margin-left: 10px;
}

.n_price {
  font-size: 15px;
}
.o_price {
  font-size: 12px;
  margin-left: 10px;
}
.em {
  width: 100%;
  height: 60px;
}
</style>