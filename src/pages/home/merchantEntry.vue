<template>
  <div>
    <div class="bgc">
      <div class="bgc pd-15">
        <div class="sear" @click="gosearch">
          <van-icon name="search" size="14px" color="#979797"/>
          <span class="fc-grey fz12">搜索商家名</span>
        </div>
      </div>
    </div>
    <div id="mernav">
      <van-tabs @click="ontab">
        <van-tab :title="item" v-for="(item,index) in narrlist">
          <div class="nav bgc fc-grey border-b">
            <div :class="{ 'fc-blue selected': typenum==0 }" @click="selectAddress">深圳</div>
            <div :class="{ 'fc-blue selected': typenum==1 }" @click="typenum=1">距离最近</div>
            <div :class="{ 'fc-blue selected': typenum==2 }" @click="typenum=2">评价最高</div>
            <div :class="{ 'fc-blue selected': typenum==3 }" @click="typenum=3">最新入驻</div>
          </div>

          <van-actionsheet
            v-model="show"
            :actions="actions"
            cancel-text="取消"
            @select="onSelect"
            @cancel="onCancel"
          />
          <div v-show="typenum==0||typenum==1||typenum==2||typenum==3">
            <div class="bgc merch-box">
              <div class="flexbox merchlist" v-for="(item,index) in 3" @click="merchantDetail">
                <img class="img_slt" src="../../assets/photo/banner.png">
                <div class="flex-column-space-between right">
                  <div class="flex-jc-between fsz12">
                    <span class>皇美高端定妆中心</span>
                    <span>1.2km</span>
                  </div>
                  <div class="fsz12 flex-align-items">
                    <van-rate
                      v-model="value"
                      :size="10"
                      :count="5"
                      color="#FFB10E"
                      void-color="#ceefe8"
                    />
                    <span>9分</span>
                  </div>
                  <div class="pro_title newline fsz12">
                    <img class="img_location" src="../../assets/photo/location.png">
                    深圳市龙华新区人民北路788号(龙华友谊
                    书城隔壁深圳市龙华新区人民北路788号(龙华友谊
                    书城隔壁
                  </div>
                </div>
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      narrlist: ["婚礼跟妆", "睫毛种植", "纹眉", "美甲", "瘦身"],
      typenum: 0,
      show: false,
      value: 5,
      actions: [
        {
          name: "测试1"
        },
        {
          name: "测试2"
        }
      ]
    };
  },
  methods: {
    ontab(index, title) {
      console.log(index, title);
    },
    gosearch() {
      this.$router.push({ path: "/search/" });
    },
    merchantDetail() {
      this.$router.push({ path: "/merchantDetail/" });
    },
    selectAddress() {
      this.typenum = 0;
      this.show = true;
    },

    onSelect(item) {
      this.show = false;
    },

    onCancel(item) {
      this.show = false;
    }
  }
};
</script>
<style>
#mernav .van-tabs__line {
  background-color: #fff;
  background-image: linear-gradient(90deg, #fe4171 100%, #ff5491 100%);
}
#mernav .van-tab {
  color: black;
}
#mernav .van-tab--active {
  color: #fe4171;
}
</style>

<style scoped>
.fz12 {
  font-size: 12px;
}
.sear {
  height: 30px;
  line-height: 30px;
  border-radius: 20px;
  background: #f6f5f5;
}

.sear .van-icon {
  padding-left: 100px;
}

.nav {
  padding: 5px 10px;
}
.nav > div {
  width: 68px;
  height: 25px;
  line-height: 25px;
  display: inline-block;
  text-align: center;
  box-sizing: border-box;
  font-size: 12px;
  margin-right: 3px;
}
.nav .selected {
  color: #fe4171;
}

.fsz12 {
  font-size: 12px;
}
.fsz10 {
  font-size: 10px;
}
.merch-box {
  /* padding-top: 10px; */
}
.merchlist {
  border-bottom: 10px solid #f0f0f0;
}
.merchlist:last-child {
  border: none;
}
.img_slt {
  width: 80px;
  height: 80px;
  padding: 15px;
  border-radius: 20px;
}
.right {
  padding: 20px 0 15px 0;
}
.pro_title {
  width: 190px;
}
.img_location {
  width: 11px;
  height: 14px;
}
</style>
