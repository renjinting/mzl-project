<template>
  <div>
    <div class="bgc">
      <div class="pd-15">
        <img class="img_team" src="../../assets/photo/banner.png">
        <div class="text-line">李敖团队参加xxx新闻发布会</div>
      </div>
      <div class="teamlist" v-for="(item,index) in 4">
        <img class="img_team1" src="../../assets/photo/banner.png">
        <div class="text-line title">李敖团队参加xxx新闻发布会</div>
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
.img_team {
  border-radius: 10px;
}
.teamlist {
  display: inline-block;
  margin: 0 0 10px 10px;
}
.img_team1 {
  width: 143px;
  height: 120px;
  border-radius: 10px;
}
.title {
  width: 143px;
}
</style>
