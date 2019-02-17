<template>
  <div>
    <div class="bgc">
      <div class="flexbox pd-15">
        <img class="img_slt" src="../../assets/photo/index.png">
        <div style="margin-left: 10px;">
          <div class="text-line pro_title">欧莱雅清润葡萄籽精华膜力水 130ml</div>
          <div class="fsz12 fc-grey" style="padding:10px 0">1件</div>
          <div class="fc-fen">¥259.00</div>
        </div>
      </div>
      <div class="pd-15 flex-jc-between border-b border-top">
        <div>商品总额:</div>
        <div>¥259.00</div>
      </div>

      <div class="pd-15 flex-jc-between flex-align-items border-b">
        <div>配送方式:</div>

        <div class="nav bgc">
          <div :class="{ 'selected': typenum==0 }" @click="typenum=0">到店自提</div>
          <div :class="{ 'selected': typenum==1 }" @click="typenum=1">快递配送</div>
        </div>
      </div>
      <div v-show="typenum==0" class="border-b">
        <div class="pd-lr-15" style=" padding-top: 10px;">自提门店:</div>
        <van-cell is-link @click="go('/locationList')">
          <template slot="title">
            <div>龙华魅姿莱美容馆</div>
            <div>深圳市龙华新区人民北路788号(龙华友谊书城隔壁)</div>
          </template>
        </van-cell>
      </div>
      <div v-show="typenum==1" class="border-b">
        <div class="pd-lr-15" style=" padding-top: 10px;">收件地址:</div>
        <van-cell is-link @click="go('/addresslist')">
          <template slot="title">
            <div>
              <span>曾小姐</span>
              <span>18822815858</span>
              <span class="moren">默认</span>
            </div>
            <div>广东省 深圳市 龙华新区天汇大厦b座206室</div>
          </template>
        </van-cell>
      </div>
      <div class="pd-15 flex-jc-between border-b">
        <div>运费:</div>
        <div>¥0.00</div>
      </div>
      <div class="pd-15">
        <span>备注:</span>
        <input placeholder="备注">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      typenum: 0
    };
  },
  methods: {
    go(url) {}
  }
};
</script>
<style scoped>
.img_slt {
  width: 80px;
  height: 80px;
}

.pro_title {
  width: 190px;
}
.border-top {
  border-top: 10px solid #f0f0f0;
}
.fsz12 {
  font-size: 12px;
}

.nav > div {
  height: 25px;
  padding: 0 5px;
  line-height: 25px;
  display: inline-block;
  border-radius: 5px;
  text-align: center;
  border: 1px solid black;
  box-sizing: border-box;
  font-size: 13px;
  margin-left: 5px;
}
.nav .selected {
  color: #fe4476;
  border: 1px solid #fe4476;
}

.moren {
  background: linear-gradient(90deg, #ff5491, #fe4171);
  color: #fff;
  font-size: 10px;
  padding: 2px 5px;
  border-radius: 5px;
}
</style>
