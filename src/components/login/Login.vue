<template>
	<div>
     <Header></Header>
     	<div class="user">
			<div class="user-left">
				<div class="img" style="background-image:url(http://images.kaishiba.com/1460023021000612.jpg)"></div>
				<p class="mt80p">造一座房子，住在水墨画里</p>
				<div class="tc mt30p"> <i class="icon-kaistart-arrows-right"></i> </div>
				<div class="tc mt40"> <a class="color-black" href="javascript:;">马上登录</a> </div>
			</div>
			<div class="user-right">
		<div class="ksui-form mt60">
						<label> <span class="fs14 lh40 w100 tr mr20"><i class="color-red">* </i>账号</span>
							<input autocomplete="off" name="phone" class="fs14" placeholder="请输入邮箱" type="text" v-model="email"> </label>
					</div>
					<div class="ksui-form mt30">
						<label> <span class="fs14 lh40 w100 tr mr20"><i class="color-red">* </i>密码</span>
							<input autocomplete="off" name="password" class="fs14" placeholder="请输入密码" type="password" v-model="password"> </label>
					</div>
					<div class="tr mr105">
           <a href="javascript:;" class="color-999 mr20" name="loginwithphone" style="">短信验证码登录</a>
           <a class="color-999" name="forgetpassword1" @click="forget">忘记登录密码</a></div>
					<div class="user-btnbox"> <router-link class="ksui-btn" to="/register">免费注册</router-link>
						<input class="ksui-btn-green" type="button" value="登录" @click="handleSubmit"> </div>
			</div>
		</div>
    </div>
</template>
<script>
import Header from "../../views/login/Header.vue";
import {setCookie,getCookie} from '../../assets/js/cookie.js'
import axios from "axios";
export default {
  data() {
    return {
             showTishi: false,
             tishi: '',
             email: '',
             password: ''


		};
  },
	methods:{
        mounted(){
          if(getCookie('email')){
              this.$router.push("/");
          }
        },
	  handleSubmit () {
           var regEmail=/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
          if (this.email==""||this.password=="") {
             this.$Message.error("请输入账号和密码");
            }else if(!regEmail.test(this.email)){
              this.$Message.error("邮箱格式不正确");
         }else{
            const user ={'email':this.email,'password':this.password};
            console.log(user);
            this.$axios.post('http://localhost:8080/user/login',JSON.stringify(user),{
              headers: {
                'Content-Type': 'application/json;charset=UTF-8'
              }
            }).then(res=>{
                  console.log(res);
              if(res.data.state=="200"){
              this.$Message.success('登录成功!');
              setCookie('email',this.email,1000*60);
              setTimeout(function(){
              this.$router.push('/')
            }.bind(this),1000)
              }else{
                this.$Message.error(res.data.message);
              }
            });
    }

  },
    forget(){
            if(this.email==""){
              this.$Message.error('请输入邮箱!');
            }
              const user ={'email':this.email,'password':this.password};
              this.$axios.post('http://localhost:8080/user/forget',JSON.stringify(user),{
                headers: {
                  'Content-Type': 'application/json;charset=UTF-8'
                }
              }).then(res=>{
               if(res.data.state=="200"){
                 this.$Message.success('密码重置成功!');
                 this.$router.push('/login');
               }else{
                   this.$Message.error("无效邮箱");
               }
             });
    }
	},
  components: {
    Header
  }
};
</script>

<style scoped>
.ivu-form{
    position: relative;
    z-index: 5;
    width: 66%;
    height: 330px;
    margin-top: 100px;
		margin-left: 60px;
		font-size:16px;
    background-color: #fff;
}
.ivu-form-item{
  margin-left:70px;
}
.ivu-btn-primary{
  margin-left:70px;
}
.ivu-btn-ghost{
  margin-left:40px;
}
.register{
  float:right;
}
</style>


