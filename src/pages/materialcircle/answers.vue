<template>
  <div>
    <div class="pd-15 border-b bgc">
      <div class="title">会员卡列表里没有9.9元体验卡?</div>

      <div class="flex-align-items pd-tb-15">
        <img class="img_logo border" src="../../assets/photo/yanzhengma.png">
        <span class="fz12">魅姿莱</span>
        <span class="fc-grey fz12">2018-12-28 10:40:30</span>
      </div>
      <div class="pd-tb-15">
        答答答答答答答答答答答答答答答答答答答答答答答答答
        答答答答答答答答答答答答答答答答答答答答答答答答答
        答答答答答答答答答答答答答答答答答答答答答答答答答
        答答答答答答答答答答答答答答答答答答答答答答答答答
        答答答答答答答答答答答答答答答答答答答答答答答答答
        答
      </div>
      <div class="title">问答</div>
      <div class="flex-align-items pd-tb-15">
        <img class="img_header border" src="../../assets/photo/banner.png">
        <span class="fz12 welcome">欢迎提问~</span>
      </div>
      <div v-for="(item,index) in 2">
        <div class="flexbox pd-tb-15">
          <img class="img_header border" src="../../assets/photo/kefu.png">
          <div class="right">
            <div class="fz12">小仙女</div>
            <div class="fc-grey fz12">2018-12-28 10:40:30</div>
            <div class="pd-tb-15">会员卡列表里没有9.9元体验卡?</div>
            <div class="answer">魅姿莱(作者):亲,有的哦亲,有的哦亲,有的哦亲,有的哦亲,有的哦</div>
          </div>
        </div>
      </div>
    </div>
    <div class="img_box flex-jc-around flex-align-items bgc">
      <div class="text-c border-l">
        <img class="img_commit" src="../../assets/photo/commit.png">
      </div>
      <div @click="ondianzan" class="text-c border-l">
        <img v-if="isdianzan" class="img_commit" src="../../assets/photo/dianzans.png">
        <img v-else class="img_commit" src="../../assets/photo/dianzan.png">
      </div>
      <div class="text-c border-l">
        <img class="img_fenxiang" src="../../assets/photo/fenxiang.png">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return { isdianzan: false };
  },
  methods: {
    //点赞
    ondianzan() {
      this.isdianzan = !this.isdianzan;
    }
  }
};
</script>
<style scoped>
.fz12 {
  font-size: 12px;
}
.title {
  font-size: 17px;
  font-weight: 600;
}
.img_logo {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  margin-right: 10px;
}
.right {
  padding-top: 10px;
}
.img_header {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}
.welcome {
  width: 220px;
  background: #f0f0f0;
  border-radius: 20px;
  padding: 5px 10px;
}
.answer {
  width: 220px;
  background: #f0f0f0;
  padding: 5px 10px;
}
.img_box {
  height: 40px;
}
.img_box > div {
  width: 200px;
}
.border-l {
  border-left: #f0f0f0 1px solid;
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
</style>
