<template>
  <div>
    <div class="bgc pd-15">自取联系人</div>
    <div class="nav bgc">
      <div :class="{ 'fc-blue selected': selected==0 }" @click="selected=0">本人</div>
      <div :class="{ 'fc-blue selected': selected==1 }" @click="selected=1">朋友代取</div>
    </div>

    <div class="bgc" v-show="selected==0">
      <div class="border-b inputbox pd-15">
        <span>姓名</span>
        <input type="text" v-model.trim="nameval">
      </div>
      <div class="inputbox pd-15">
        <span>手机号码</span>
        <input type="number" v-model.trim="phoneval" maxlength="11">
      </div>
    </div>
    <div class="bgc" v-show="selected==1">
      <div class="border-b inputbox pd-15">
        <span>姓名</span>
        <input type="text" v-model.trim="nameval1">
      </div>
      <div class="inputbox pd-15">
        <span>手机号码</span>
        <input type="number" v-model.trim="phoneval1" maxlength="11">
      </div>
    </div>

    <div class="pd-t-100">
      <div class="btn text-c" @click="onbtn">确认</div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      selected: 0,
      nameval: "",
      phoneval: "",
      nameval1: "",
      phoneval1: ""
    };
  },
  created() {
    this.nameval = JSON.parse(
      window.localStorage.getItem("userinfo")
    ).users_name;
    this.phoneval = JSON.parse(
      window.localStorage.getItem("userinfo")
    ).users_phone;
  },
  methods: {
    onbtn() {
      let people = {};
      if (this.selected == 0) {
        if (this.nameval == "" || this.phoneval == "") {
          Toast("不能为空");
          return;
        }
        if (this.phoneval.length != 11) {
          Toast("手机号格式不正确");
          return;
        }
        people.type = String(this.selected);
        people.name = this.nameval;
        people.phone = this.phoneval;
      } else {
        if (this.nameval1 == "" || this.phoneval1 == "") {
          Toast("不能为空");
          return;
        }
        if (this.phoneval1.length != 11) {
          Toast("手机号格式不正确");
          return;
        }
        people.type = String(this.selected);
        people.name = this.nameval1;
        people.phone = this.phoneval1;
      }

      if (this.$route.params.type == "shopping") {
        let shoppingSession = JSON.parse(
          window.sessionStorage.getItem("shoppingSession")
        );
        shoppingSession.getpeople = people;
        window.sessionStorage.setItem(
          "shoppingSession",
          JSON.stringify(shoppingSession)
        );
      }
      if (this.$route.params.type == "buy") {
        let buySession = JSON.parse(
          window.sessionStorage.getItem("buySession")
        );
        buySession.getpeople = people;
        window.sessionStorage.setItem("buySession", JSON.stringify(buySession));
      }
      if (this.$route.params.type == "preBuy") {
        let prebuySession = JSON.parse(
          window.sessionStorage.getItem("prebuySession")
        );
        prebuySession.getpeople = people;
        window.sessionStorage.setItem(
          "prebuySession",
          JSON.stringify(prebuySession)
        );
      }

      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.nav {
  padding: 15px;
}
.nav > div {
  width: 103px;
  height: 37px;
  line-height: 37px;
  /* color: #666; */
  display: inline-block;
  box-shadow: 0 1px 7px 1px #e8e9ea;
  margin-left: 10px;
  border-radius: 20px;
  text-align: center;
}
.nav .selected {
  box-shadow: 0 1px 7px 1px #def4fd;
}
.pd-t-100 {
  padding: 0 15px;
  padding-top: 100px;
}
.btn {
  height: 42px;
  line-height: 42px;
  border-radius: 20px;
  color: #fff;
  background-image: linear-gradient(90deg, #2dbbf1 0%, #4ea9f9 100%);
}

.inputbox > span {
  width: 60px;
  display: inline-block;
}
</style>
