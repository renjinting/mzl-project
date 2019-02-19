<template>
  <div>
    <div class="bgc" v-for="(item,index) in 3">
      <div class="flex-jc-between pd-15">
        <div>深圳魅姿莱美容馆</div>
        <div class="fc-grey fz12 flex-align-items">
          <span>查看更多</span>

          <van-icon name="arrow"/>
        </div>
      </div>

      <div class="storeimglist" v-for="(item,index) in 4">
        <img class="img_store" src="../../assets/photo/banner.png">
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
.fz12 {
  font-size: 12px;
}
.storeimglist {
  display: inline-block;
  width: 143px;
  height: 120px;
  margin: 0 0 10px 10px;
}
.img_store {
  border-radius: 10px;
}
</style>
