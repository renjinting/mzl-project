<template>
  <div>
    <div class="flex-jc-between flex-align-items bgc pd-15" @click="showdate=true">
      <div class="flex-1">
        <div class="mar-b-10 fc-grey">购买时间</div>
        <div class="fc-grey" v-if="datetext==''">请选择购买时间</div>
        <div v-else>{{`${datetext[0]}-${datetext[1]}-${datetext[2]}`}}</div>
      </div>
      <van-icon name="arrow"/>
    </div>
    <div class="bgc pd-15">
      <div class="mar-b-10 fc-grey">购买价格</div>
      <input type="text" placeholder="请输入购买价格" v-model.trim="priceval">
    </div>
    <div class="flex-jc-between flex-align-items bgc pd-15" @click="showcolour=true">
      <div class="flex-1">
        <div class="mar-b-10 fc-grey">外观成色</div>
        <div class="fc-grey" v-if="colourtext==''">请选择外观成色</div>
        <div v-else>{{colourtext}}</div>
      </div>
      <van-icon name="arrow"/>
    </div>
    <van-field
      v-model.trim="colourdes"
      type="textarea"
      placeholder="请输入外观成色描述"
      autosize
      :border="false"
    />
    <div class="flex-jc-between flex-align-items bgc pd-15" @click="showstate=true">
      <div class="flex-1">
        <div class="mar-b-10 fc-grey">功能状况</div>
        <div class="fc-grey" v-if="statetext==''">请选择功能状况</div>
        <div v-else>{{statetext}}</div>
      </div>
      <van-icon name="arrow"/>
    </div>

    <div class="pd-15">
      <div class="btn text-c" @click="next">下一步</div>
    </div>

    <van-popup v-model="showdate" position="bottom" :close-on-click-overlay="false">
      <van-datetime-picker
        v-model="dateval"
        type="date"
        :min-date="startDate"
        :max-date="endDate"
        @cancel="showdate = false"
        @confirm="onConfirmDate"
      />
    </van-popup>
    <van-popup v-model="showcolour" position="bottom" :close-on-click-overlay="false">
      <van-picker
        :columns="colourarr"
        show-toolbar
        @cancel="showcolour = false"
        @confirm="onConfirmColour"
      />
    </van-popup>
    <van-popup v-model="showstate" position="bottom" :close-on-click-overlay="false">
      <van-picker
        :columns="statearr"
        show-toolbar
        @cancel="showstate = false"
        @confirm="onConfirmState"
      />
    </van-popup>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      //购买时间
      dateval: new Date(),
      datetext: "",
      showdate: false,
      startDate: new Date("1899/01/01 00:00"),
      endDate: new Date(),
      //外观成色
      showcolour: false,
      colourtext: "",
      colourarr: ["成色1", "成色2"],
      colourdes: "",
      //功能状况
      showstate: false,
      statetext: "",
      statearr: ["状况1", "状况2"],
      priceval: ""
    };
  },
  created() {
    let gohostingSession = JSON.parse(
      window.sessionStorage.getItem("gohostingSession")
    );
    if (gohostingSession) {
      this.datetext = gohostingSession.datetext;
      this.colourtext = gohostingSession.colourtext;
      this.colourdes = gohostingSession.colourdes;
      this.statetext = gohostingSession.statetext;
      this.priceval = gohostingSession.priceval;
    }
  },
  methods: {
    onConfirmDate(val) {
      console.log(val.getFullYear(), val.getMonth() + 1, val.getDate());
      this.dateval = val;
      this.datetext = [val.getFullYear(), val.getMonth() + 1, val.getDate()];
      this.showdate = false;
    },
    onConfirmColour(value, index) {
      this.colourtext = value;
      this.showcolour = false;
    },
    onConfirmState(value, index) {
      this.statetext = value;
      this.showstate = false;
    },

    next() {
      if (
        this.datetext == "" ||
        this.colourtext == "" ||
        this.colourdes == "" ||
        this.statetext == "" ||
        this.priceval == ""
      ) {
        Toast("请先填写完整");
        return;
      }

      let gohostingSession = JSON.parse(
        window.sessionStorage.getItem("gohostingSession")
      );
      gohostingSession.datetext = this.datetext;
      gohostingSession.colourtext = this.colourtext;
      gohostingSession.colourdes = this.colourdes;
      gohostingSession.statetext = this.statetext;
      gohostingSession.priceval = this.priceval;
      window.sessionStorage.setItem(
        "gohostingSession",
        JSON.stringify(gohostingSession)
      );

      this.$router.push({ path: "/fittingsConfirm" });
    }
  }
};
</script>

<style scoped>
.btn {
  height: 42px;
  line-height: 42px;
  border-radius: 20px;
  color: #fff;
  background-image: linear-gradient(90deg, #2dbbf1 0%, #4ea9f9 100%);
}
</style>
