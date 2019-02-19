<template>
  <div>
    <div class="bgc pd-15">
      <div class="mar-b-10 flexbox" v-for="(item,index) in 3">
        <img class="img_slt" src="../../assets/photo/banner.png">
        <div class="flex-column-space-between right">
          <div class="newline pro_title fsz12">欧莱雅清润葡萄籽精华膜力水 欧莱雅清润葡萄籽精华膜力水130ml</div>
          <div class="flex-jc-between">
            <span class="fc-grey fsz12">2018-12-26</span>
            <img class="img_fx" src="../../assets/photo/fenxiang.png">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
.fsz12 {
  font-size: 12px;
}
.fsz10 {
  font-size: 10px;
}
.img_slt {
  width: 120px;
  height: 80px;
  border-radius: 10px;
}
.right {
  padding: 10px 0 10px 10px;
}
.pro_title {
  width: 160px;
}
.img_fx {
  width: 12px;
  height: 12px;
}
</style>
