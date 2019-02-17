<template>
  <div>
    <div class="box" id="pse">
      <van-collapse v-model="activeNames">
        <van-collapse-item name="2">
          <div slot="title">关于下单</div>如何获取免押额度如何获取免押额度如何获取免押额度如何获取免押额度
        </van-collapse-item>
      </van-collapse>
    </div>
    <div class="box" id="pse">
      <van-collapse v-model="activeNames1">
        <van-collapse-item name="2">
          <div slot="title">关于审核</div>如何获取免押额度如何获取免押额度如何获取免押额度如何获取免押额度
        </van-collapse-item>
      </van-collapse>
    </div>
    <div class="box" id="pse">
      <van-collapse v-model="activeNames2">
        <van-collapse-item name="2">
          <div slot="title">关于维修</div>如何获取免押额度如何获取免押额度如何获取免押额度如何获取免押额度
        </van-collapse-item>
      </van-collapse>
    </div>
    <div class="box" id="pse">
      <van-collapse v-model="activeNames3">
        <van-collapse-item name="2">
          <div slot="title">关于退货</div>如何获取免押额度如何获取免押额度如何获取免押额度如何获取免押额度
        </van-collapse-item>
      </van-collapse>
    </div>
    <div class="box" id="pse">
      <van-collapse v-model="activeNames4">
        <van-collapse-item name="2">
          <div slot="title">关于归还</div>如何获取免押额度如何获取免押额度如何获取免押额度如何获取免押额度
        </van-collapse-item>
      </van-collapse>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeNames: ["1"],
      activeNames1: ["1"],
      activeNames2: ["1"],
      activeNames3: ["1"],
      activeNames4: ["1"]
    };
  },
  methods: {}
};
</script>
<style>
#pse .van-collapse-item__content {
  background-color: #f6f6f6;
}
</style>



<style scoped>
.box {
  border-radius: 5px;
  margin: 10px 15px;
  overflow: hidden;
}
</style>
