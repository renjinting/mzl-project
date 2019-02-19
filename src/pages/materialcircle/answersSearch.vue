<template>
  <div>
    <div id="search">
      <van-search
        v-model="value"
        placeholder="体验"
        show-action
        @search="onSearch"
        background="#fafafa"
      >
        <div slot="action" @click="onSearch">搜索</div>
      </van-search>
    </div>
    <div class="merchlist pd-15 bgc" v-for="(item,index) in 3">
      <div @click="toAnswers">
        <div class="problem">会员卡列表里没有9.9元体验卡?</div>
        <div class="fsz12 flex-align-items store_name">
          <img class="img_logo" src="../../assets/photo/yanzhengma.png">
          <span>魅姿莱</span>
        </div>
      </div>
      <div class="flex-jc-between fsz12">
        <span class="fc-grey">2018-12-28 10:40:30</span>
        <div class="img_box flexbox">
          <img class="img_commit" src="../../assets/photo/commit.png">

          <div class="text-c" @click="ondianzan">
            <div>
              <img v-if="isdianzan" class="img_commit" src="../../assets/photo/dianzan.png">
              <img v-else class="img_commit" src="../../assets/photo/dianzans.png">
            </div>
          </div>
          <img class="img_fenxiang" src="../../assets/photo/fenxiang.png">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isdianzan: false,
      value: ""
    };
  },
  methods: {
    onSearch() {
      console.log(this.value);
    },
    //点赞

    ondianzan() {
      this.isdianzan = !this.isdianzan;
    },
    toAnswers() {
      this.$router.push({ path: "/answers/" });
    }
  }
};
</script>
<style>
#search .van-search .van-cell {
  border-radius: 20px;
}
</style>

<style scoped>
.fsz12 {
  font-size: 12px;
}
.fsz10 {
  font-size: 10px;
}

.merchlist {
  margin-bottom: 10px;
}

.img_logo {
  width: 23px;
  height: 23px;
  border-radius: 50%;
  margin-right: 10px;
}
.img_commit {
  width: 16px;
  height: 16px;
  margin-right: 15px;
}
.img_fenxiang {
  width: 15px;
  height: 16px;
}

.problem {
  font-size: 17px;
  font-weight: 600;
}

.store_name {
  padding: 10px 0;
}
</style>
