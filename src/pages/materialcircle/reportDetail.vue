<template>
  <div>
    <div class="bgc pd-15 border-b">
      <div class="title">魅资莱深圳龙华分店盛大开业</div>
      <div class="flexbox pd-tb-15">
        <img class="img_logo border" src="../../assets/photo/yanzhengma.png">
        <div class="fc-grey fsz12">
          <span>魅姿莱</span>
          <span>2018-12-28 10:40:30</span>
        </div>
      </div>

      <div>
        <p>
          报道内容报道内容报道内容报道内容报道内容报道内容报
          道内容报道内容报道内容报道内容报道内容
        </p>
        <p>
          报道内容报道内容报道内容报道内容报道内容报道内容报
          道内容报道内容报道内容报道内容报道内容
        </p>
        <p>
          报道内容报道内容报道内容报道内容报道内容报道内容报
          道内容报道内容报道内容报道内容报道内容
        </p>
        <p>
          报道内容报道内容报道内容报道内容报道内容报道内容报
          道内容报道内容报道内容报道内容报道内容
        </p>
      </div>
      <div class="imglist_box">
        <div class="imglist" v-for="(item,index) in imglist" :key="index">
          <img class="itemimg" :src="item">
        </div>
      </div>
    </div>
    <div class="flex-align-items bgc img_box">
      <div class="text-c" @click="ondianzan1">
        <div>
          <img v-if="isdianzan1" class="img_commit" src="../../assets/photo/dianzans.png" alt>
          <img v-else class="img_commit" src="../../assets/photo/dianzan.png" alt>
        </div>
      </div>
      <div class="border-l text-c">
        <img class="img_fenxiang" src="../../assets/photo/fenxiang.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imglist: [
        "http://www.pptbz.com/pptpic/UploadFiles_6909/201306/2013062320262198.jpg"
      ],
      isdianzan1: false
    };
  },
  methods: {
    ondianzan1() {
      this.isdianzan1 = !this.isdianzan1;
    }
  }
};
</script>
<style scoped>
.fsz12 {
  font-size: 12px;
}
.border-l {
  border-left: #f0f0f0 1px solid;
}
.title {
  font-size: 17px;
  font-weight: 600;
}
.img_logo {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 10px;
}

.itemimg {
  width: 290px;
  height: 190px;
  margin-top: 10px;
}
.img_box {
  height: 40px;
}
.img_box > div {
  width: 200px;
}
.img_commit {
  width: 16px;
  height: 16px;
}
.img_fenxiang {
  width: 15px;
  height: 16px;
}
.photo {
  padding-top: 15px;
}
.photo img {
  border-radius: 10px;
}
</style>


