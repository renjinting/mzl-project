<template>
  <div>
    <van-search placeholder="请输入搜索关键词" v-model.trim="value" show-action>
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>

    <div class="bgc">
      <div
        class="fl_pro_list"
        v-for="(item, index) in flprolist"
        :key="index"
        @click="toDetail(item.goods_id)"
      >
        <div class="img_box">
          <img class="sy_img" :src="item.gd_img[0]">
        </div>
        <div class="f14 pro_name">{{item.goods_name}}</div>
        <div class="com_like">
          <van-rate v-model="item.rate" disabled disabled-color="#FFB10E"/>
          <span class="f12">0</span>
          <div>
            <img class="chat" src="../../assets/chat.png">
            <span class="f12">0</span>
          </div>
        </div>
        <div class="zj">
          <span class="f14">租金：</span>
          <span class="price">¥{{item.hire_price.price}}</span>
          <span class="f12">/{{item.hire_price.unt}}</span>
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
      value: "",
      flprolist: []
    };
  },
  created() {
    let searchSession = JSON.parse(
      window.sessionStorage.getItem("searchSession")
    );
    if (searchSession) {
      this.value = searchSession.value;
    }
  },
  methods: {
    onSearch() {
      console.log(this.value);
      this.getsearch();
    },
    //产品详情
    toDetail(id) {
      let searchSession = {
        value: this.value
      };
      window.sessionStorage.setItem(
        "searchSession",
        JSON.stringify(searchSession)
      );
      this.$router.push({ path: "/ProductDetail/" + id });
    },
    getsearch() {
      Toast.loading({ mask: true, message: "加载中..." });
      let postData = this.$qs.stringify({
        goods_name: this.value
      });
      this.axios
        .post(this.API + "api/Lease/search_goods", postData)
        .then(res => {
          console.log(res.data, "getdetail");
          let resdata = res.data;
          if (resdata.code == 200) {
            if (resdata.data.length == 0) {
              Toast.clear();
              Toast({
                message: " 没有匹配的产品",
                duration: "5000"
              });
              this.flprolist = "";
            } else {
              Toast.clear();
              this.flprolist = resdata.data;
            }
          } else {
            Toast.clear();
            Toast(resdata.message);
          }
        });
    }
  }
};
</script>

<style scoped>
/*分类 所有产品*/
.fl_pro_list {
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  padding-top: 10px;
}

.img_box {
  width: 100%;
  height: 150px;
}

.sy_img {
  width: 300px;
  height: 150px;
  border-radius: 10px;
}

.pro_name {
  margin-top: 5px;
  line-height: 30px;
}
.com_like {
  display: flex;
  line-height: 22px;
}
.zj {
  line-height: 30px;
}
.chat {
  width: 16px;
  height: 14px;
  padding-left: 15px;
  vertical-align: middle;
}
</style>
