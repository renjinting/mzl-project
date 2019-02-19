<template>
  <div>
    <div class="bgc">
      <div class="title flex-align-items">新项目</div>
      <div class="pic">
        <ul id="category-head">
          <li v-for="(item,index) in 4">
            <div class="img_service">
              <img src="../../assets/photo/banner.png">
            </div>
            <div class="text-line ser_title">新服务项目名称新服务项目名称</div>
            <div class="n_price fc-fen">¥259.00/次</div>
          </li>
        </ul>
      </div>

      <div class="title flex-align-items">新产品</div>
      <div class="product" v-for="(item,index) in 4" @click="toDetail">
        <div class="img_pro">
          <img src="../../assets/photo/banner.png">
        </div>
        <div class="pro_title newline">
          欧莱雅清润葡萄籽精华 欧莱雅清润葡萄籽精华
          膜力水 130ml
        </div>

        <div class="pro_price">
          <span class="n_price fc-fen">¥259.00</span>
          <del class="o_price fc-grey">¥289.00</del>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    //产品详情
    toDetail(id) {
      this.$router.push({ path: "/ProductDetail/" + id });
    }
  }
};
</script>

<style scoped>
.pic {
  margin-left: 10px;
}
#category-head {
  width: 100%;
  white-space: nowrap;
  overflow-x: scroll;
  float: left;
  overflow-y: hidden;
}
#category-head li {
  display: inline-block;
}

.img_service {
  width: 170px;
  height: 100px;
  margin-right: 10px;
}
.img_service img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
.ser_title {
  width: 173px;
  height: 30px;
  line-height: 30px;
}
.title {
  font-size: 17px;
  font-weight: 600;
  padding: 10px;
  height: 30px;
  line-height: 30px;
}
.product {
  display: inline-block;
  width: 143px;
  height: 259px;
  border-radius: 10px;
  box-shadow: 0px 3px 7px 0px rgba(238, 238, 238, 1);
  margin: 0 0 10px 10px;
}

.img_pro {
  width: 143px;
  height: 160px;
}
.img_pro img {
  width: 100%;
  height: 100%;
}

.pro_title {
  width: 122px;
  height: 35px;
  margin: 10px 0 10px 10px;
}

.pro_price {
  width: 122px;
  height: 20px;
  line-height: 20px;
  margin-left: 10px;
}

.n_price {
  font-size: 15px;
}
.o_price {
  font-size: 12px;
  margin-left: 10px;
}
</style>
