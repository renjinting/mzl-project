<template>
    <div class="bgc full">
        <div class="pd-15">
            <input type="text" maxlength="11" placeholder="请输入新手机号" v-model.trim="phoneval">
        </div>
        <div class="pd-15 mar-b-10 flex-jc-between">
            <input type="text" placeholder="请输入验证码" v-model.trim="codeval">
            <button class="send bgc-blue" @click="sendcode">发送</button>
        </div>

        <div class="flex-jc-center">
        <div class="btn text-c" @click="submit">确定修改</div>
      </div>
    </div>
</template>

<script>
import { Toast } from "vant";
export default {
    data(){
        return{
            phoneval: '',
            codeval: ''
        }
    },
    methods:{
        sendcode(){
            let postData = this.$qs.stringify({
                    users_phone:this.phoneval
                })
            this.axios.post(this.API + "api/Lease/Forget_PassWord",postData)
            .then(res => {
                console.log(res.data, "sendcode");
                let resdata = res.data;
                if (resdata.code == 200) {

                } else {
                Toast(resdata.message);
                }
            });
        },
        submit(){
            let postData = this.$qs.stringify({
                users_phone: this.phoneval,
                yzm: this.codeval,
                users_id: JSON.parse(window.localStorage.getItem("userinfo")).users_id
            })
            this.axios.post(this.API + "api/Lease/update_phone",postData)
            .then(res => {
                console.log(res.data, "submit");
                let resdata = res.data;
                if (resdata.code == 200) {
                    this.$router.replace({ path: "/accountSecurity" })
                } else {
                Toast(resdata.message);
                }
            });
        }
    }
}
</script>

<style scoped>
.btn {
  width: 298px;
  height: 40px;
  line-height: 40px;
  background: linear-gradient(90deg, #60c0fd, #4ea9f9);
  border-radius: 20px;
  color: #fff;
}
.send {
    color: #fff;
    border-radius: 15px;
    line-height: 22px;
}
</style>
