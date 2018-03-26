<template>
	<div>
     <Header></Header>
     		<div class="user">
			<div class="user-left">
				<div class="img" style="background-image:url(http://images.kaishiba.com/1460023021000612.jpg)"></div>
				<p class="mt80p">造一座房子，住在水墨画里</p>
				<div class="tc mt30p"> <i class="icon-kaistart-arrows-right"></i> </div>
				<div class="tc mt40"> <a class="color-black" href="javascript:;">马上注册</a> </div>
			</div>
			<div class="user-right">
				<form action="/" method="post" novalidate="">
					<div class="mt60">
						<div class="ksui-form">
							<label> <span class="fs14 lh40 w100 tr mr20"><i class="color-red">* </i>昵称</span>
								<input class="fs14 invalid untouched pristine" placeholder="请输入昵称" type="text" name="nick" v-model="nikeName"> </label>
							<div style="display: none;">
								<p class="fs12 lh20 ml145 color-red">昵称不能为空</p>
							</div>
						</div>
					</div>
					<div class="ksui-form mt10">
						<label> <span class="fs14 lh40 w100 tr mr20"><i class="color-red">* </i>邮箱</span>
							<input class="fs14 invalid untouched pristine" placeholder="请输入邮箱" type="text" name="email" v-model="email"> </label>
					</div>
					<div class="ksui-form mt10 null">
						<label> <span class="fs14 lh40 w100 tr mr20"><i class="color-red">* </i>密码</span>
							<input class="fs14 invalid untouched pristine" placeholder="请输入密码" type="password" autocomplete="off" name="verifycode" v-model="password"> </label>
					</div>
          <div class="ksui-form mt10 null">
						<label> <span class="fs14 lh40 w100 tr mr20"><i class="color-red">* </i>确认密码</span>
							<input class="fs14 invalid untouched pristine" placeholder="请再次输入密码" type="password" autocomplete="off" name="verifycode" v-model="passwordConfirm"> </label>
					</div>
					<div class="user-btnbox">
            <input class="ksui-btn-green" type="button" value="注册" @click="register">
            <router-link class="ksui-btn" to="/login">返回登录</router-link>
						 </div>
				</form>
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
			nikeName:'',
			email:'',
			password:'',
			passwordConfirm:''
		};
  },
	methods:{
    register(){
			var regEmail=/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
			if(this.nikeName==""||this.email==""||this.password==""||this.passwordConfirm==""){
          this.$Message.error("请输入昵称或邮箱或密码");
			}else if(!regEmail.test(this.email)){
          this.$Message.error("请输入正确的邮箱格式");
			}else if(this.password!=this.passwordConfirm){
				this.$Message.error("两次输入的密码不一致");
			}else{
				let user ={'nikeName':this.nikeName,'email':this.email,'password':this.password};
				console.log(user);
				this.$axios.post('http://localhost:8080/user/register',JSON.stringify(user),{
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          }
        }).then(res=>{
					console.log(res.data);
           if(res.data.state=="200"){
						  this.$Message.success('注册成功,需激活邮箱后方可登录!');
                setTimeout(function(){
                this.$router.push('/login')
              }.bind(this),1000)
					 }else{
               this.$Message.warning("该邮箱已经被注册,请重新更换邮箱!");
           }
				});
			}
		},
	},
  components: {
    Header
  }
};
</script>

<style scoped>

</style>


