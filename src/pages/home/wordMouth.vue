<template>
  <div>
    <div class="bgc">
      <div class="border-b">
        <div class="flex-align-items xx_comment pd-lr-15">
          <span>评分</span>
          <span class="wuxing">
            <van-rate v-model="value" disabled disabled-color="#FFB10E"/>
          </span>
          <span>97.6%</span>
        </div>

        <div class="bgc pd-lr-15 mar-b-10">
          <div class="nav bgc">
            <div :class="{ 'selected': typenum==0 }" @click="typenum=0">全部(1230)</div>
            <div :class="{ 'selected': typenum==1 }" @click="typenum=1">好评(869)</div>
            <div :class="{ 'selected': typenum==2 }" @click="typenum=2">一般(69)</div>
            <div :class="{ 'selected': typenum==3 }" @click="typenum=3">不好(0)</div>
          </div>
        </div>
      </div>
      <div class="word_mouth_box">
        <div class="word_mouth">
          <div v-for="(item,index ) in wordlist" :key="index">
            <div class="flex-align-items head_name">
              <img class="head_img" src="../../assets/photo/dpfc.png" alt>
              <span>李***莉</span>
              <span>
                <van-rate v-model="value" disabled disabled-color="#FFB10E" size="12"/>
              </span>
            </div>
            <div>
              <span class="grey_12">2018-12-5 15:00</span>
            </div>
            <div class="com_det">
              很优秀哦 相机很好看 拍出来的照片也很好看 总体都很优秀 超
              级喜欢 加上水晶壳就更优秀了 很多模式可以玩 适合爱拍照的
              人 如果只是想记录生活的话 我觉得mini9就够了 总之很喜欢！
            </div>
            <div class="imglist_b">
              <div class="imglist" v-for="(item,index) in imglist" :key="index">
                <img class="itemimg" :src="item">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-c fc-grey pd-15" v-show="wordlist.length==0">没有更多了</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imglist: [
        "http://www.pptbz.com/pptpic/UploadFiles_6909/201306/2013062320262198.jpg",
        "http://www.pptbz.com/pptpic/UploadFiles_6909/201306/2013062320262198.jpg",
        "http://www.pptbz.com/pptpic/UploadFiles_6909/201306/2013062320262198.jpg",
        "http://www.pptbz.com/pptpic/UploadFiles_6909/201306/2013062320262198.jpg",
        "http://www.pptbz.com/pptpic/UploadFiles_6909/201306/2013062320262198.jpg"
      ],
      wordlist: [{}, {}],
      value: 5,
      typenum: 0
    };
  }
};
</script>

<style scoped>
.fsize13 {
  font-size: 13px;
}
.grey_12 {
  font-size: 12px;
  color: #979797;
}

.nav > div {
  height: 25px;
  padding: 0 5px;
  line-height: 25px;
  display: inline-block;
  border-radius: 20px;
  text-align: center;
  border: 1px solid black;
  box-sizing: border-box;
  font-size: 13px;
  margin-right: 5px;
}
.nav .selected {
  color: #fff;
  background: linear-gradient(90deg, #fe4171, #ff5491);
  border: none;
}

.comment {
  font-size: 12px;
  padding: 5px 10px;
  border-radius: 20px;
}
.wuxing {
  padding: 0 10px 0 5px;
}
.product {
  width: 92%;
  height: 100%;
  padding-top: 10px;
}
.product_title {
  font-size: 17px;
  font-weight: 500;
}
.img_sc {
  width: 19px;
  height: 20px;
}
.price_box {
  padding: 15px 0;
}
.price {
  color: #f21e1e;
  font-size: 18px;
}

.lab {
  background: #fc3434;
  color: #fff;
  padding: 2px 5px;
}
.rule {
  padding: 15px 0 12px 10px;
  font-size: 15px;
  font-weight: 600;
}

.img_xdlc {
  width: 35px;
  height: 35px;
}
.duo_mian {
  height: 36px;
  line-height: 36px;
}

.xx_comment {
  line-height: 40px;
}
.img_zq {
  width: 13px;
  height: 16px;
  margin-right: 10px;
}
.img_myj {
  width: 17px;
  height: 17px;
  margin-right: 10px;
}
.process {
  margin-top: 10px;
}
.process_det {
  padding-bottom: 15px;
}
.grey_line1 {
  position: absolute;
  width: 50px;
  border-bottom: 2px #aeaeae dashed;
  height: 2px;
  top: 15px;
  left: 80px;
}
.grey_line2 {
  position: absolute;
  width: 50px;
  border-bottom: 2px #aeaeae dashed;
  height: 2px;
  top: 15px;
  left: 190px;
}
.word_mouth_box {
  border-top: 10px solid #f0f0f0;
}
.word_mouth {
  margin: 0 10px;
  height: 100%;
}

.word_mouth > div {
  border-bottom: 1px solid #f0f0f0;
}

.word_mouth :last-child {
  border-bottom: 1px solid #fff;
}
.head_name,
.com_det {
  padding: 5px 0;
}
.head_img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.img_r {
  width: 7px;
  height: 11px;
}
.imglist_b {
  margin: 5px 0 10px 0;
}
.imglist {
  display: inline-block;
  margin-top: 5px;
}
.itemimg {
  width: 88px;
  height: 89px;
  border-radius: 5px;
  margin-right: 10px;
}
.product_det {
  width: 92%;
  height: 100%;
}
.dettail {
  font-size: 15px;
  font-weight: 600;
  padding: 13px 0;
}
.weight {
  padding: 10px 0;
}
.pro_img {
  width: 100%;
  height: 450px;
  border-radius: 5px;
  padding: 10px 0;
}
.footer {
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
}
.btn {
  height: 32px;
  line-height: 32px;
  color: #fff;
  font-size: 14px;
  text-align: center;
  border-radius: 20px;
}
.bcolor {
  background: #b49a7a;
}
.bcol {
  background: linear-gradient(90deg, #60c0fd, #4ea9f9);
}

.img_kf {
  width: 18px;
  height: 18px;
}
.f10_col {
  font-size: 10px;
  color: #030303;
}
.padding_lr {
  padding: 0 15px;
}
.margin_left {
  margin-left: 10px;
}
</style>

