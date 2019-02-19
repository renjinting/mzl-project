<template>
  <div>
    <div class="bgc pd-15 border-b">
      <div class="flex-align-items">
        <img class="img_logo border" src="../../assets/photo/yanzhengma.png">
        <div>
          <div class="fc-fen fz15">魅姿莱</div>
          <div class="fc-grey fsz12">2018-12-28 10:40:30</div>
        </div>
      </div>

      <div class="pd-tb-15">魅资莱一站式共享M肤中心是你创业最好的平台</div>
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
        "http://www.pptbz.com/pptpic/UploadFiles_6909/201306/2013062320262198.jpg",
        "http://www.pptbz.com/pptpic/UploadFiles_6909/201306/2013062320262198.jpg",
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
.fz12 {
  font-size: 12px;
}
.border-l {
  border-left: #f0f0f0 1px solid;
}
.img_logo {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}
.imglist {
  /* display: inline-block; */
}
.itemimg {
  width: 290px;
  height: 130px;
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


