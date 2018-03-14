<template>
<header class="header clearfix">
		<div class="left">
			<a href="https://www.kaishiba.com/" class="logowrap" title="开始吧">
      <img src="data:image/png;base64,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"
				class="logo"></a>
        <a href="javascript:;" class="ml48">
        <i class="split"></i></a>
        <router-link to="/" title="开始吧首页" class="link-index link-nav">首页</router-link>
        <router-link to="/itemDetail" title="更多项目" class="ml33 link-nav">更多项目</router-link>
        <a href="https://www.kaishiba.com/special/sys/about" class="ml48 link-nav">关于我们</a>
        </div>
		<div class="right">
			<router-link to="/itemDetail" title="搜索项目" class=""><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABGdBTUEAALGPC/xhBQAAA/lJREFUWAntl8tL1FEUx53xlailEWQSI1jYplY6imk5FUgUPTaVtKiFi6A/oEWrIoJWQYtqEbiMkhZm9trUQKL4grJVaAuxUUTLIsXxNdPnTHN/XMf5/e5vJiyCuXDnnN8953zv9577nKysTMlkIJOB/zsDnnToNzQ0lIfD4VPEHqPuopZTo9QJj8czQn3u9Xo7+/r6pmj7o5ISQb/fXxaNRq/RYysyx9DzMvb71BtDQ0MzBl9bs2uC1dXVx8nMQ4htToIWoU2w1uER841snunv73+TJM7Y5DV64EDmLiM6NXIynR10fp7OfcXFxfl8S62g7QL1BXqsELM1Eom8ZoAXVVsqct2IE4Mlc7R1UtVghrOzs1vJyGCir/7NoPZDro26J96+DPHmwcHBoO5n0h0JxtfcJ5U5OnhZVFR0NhgMzpmAxR4IBErm5uY6iG+K+88UFBRUdXd3z7qJFx+VlaT+AF9T5HAYToWcADKQ78ScRh2Rb8q2hYWFq79Vd7+2GZSjZHFxcQyCslujOTk5fo6NIXewa71qamoC4LyVVmYhDOkdQn6tV/Iv2wxyzp2Mk5PIp+mSk+D4uovtYjA3zc/Py7p2VWwJEm2BMOp2V2gOTuz2x8oMSQtbtdlJJ4JyQ8QKu/ad0tOVCRgWtgnPiaBcX1IiPp9v8rea/i9ZC2nRCltrSq46EZTDOFamp6dtN5PyMcmVlRUdw8I2xTkRVFnzcjSUmYBM9tzcXCtrZHPC5K/stgTZGKPKidEfVHq6MgHjs1scW4IAPFcgkD2n9HQlWdMxLGwTni1BADshtiIA6Ce49vwmMDt7bW3tYWyHxA5mmMeF9Ziwi1HttgR5w01C7EHc0YPexu1SrALdyvr6+q2rq6sKRwjecXuLSB+2BMXI9XYd8UN0CO7ldnmSCsnGxsbSpaWlD4RXCgbkvhYWFt4S3W1xJChPdm6AFoBX44DN3M+9PMHqTB0wrQfY/QP47VS+DDJC/Db17UbqZ5OtP5f9JYx36SBbc+qCeDtZfldaWjoJGQ93rBwlTTxQW5DNmq+uhvLy8gK9vb3WKaEbE3VXBCWIPXKUjh+hbkkEcfpmULMMRPopUX58fqE9wDo3HjeOU6wARQ4MDLzKz8+vQr1HB7HdrduT6Iv43SZmNzY5R60/TpDbiS3IUjHeya4zqBOoq6vbTjblOXacWkln5Ui5vuRv5yi1C/sz/d8cZPZhlyeXtQbxM2YyLYI62VR0O5Ksycaenp6xZFiupzhZcKptZPQjm+oIcWumm5190w7rrxIUEhxdw4kkmWp1jK3jqR8b64wb1RAKhaYqKiq6WLY+yL1nI10ZHx//uVH9ZXAzGchk4F9m4BcuV31unAeqlQAAAABJRU5ErkJggg=="
				class="icon-search"></router-link> <a class="link-search" @click="createEvent">发起项目</a>
		<div style="min-width:60px">
			<div id="userLogin" style="">
				<div class="user-logined-wrap" id="userLogin" href="javascript:;" >
					<div class="index-header-wrap" v-show="showLogin==false"><label id="userLogout"> <router-link to="/login">登录</router-link>
          <span class="color666">/</span> <router-link to="/register">注册</router-link> </label>  </div>
          <div class="index-header-wrap" v-show="showLogin==true"><label id="userLogout">
          <Dropdown trigger="click" style="margin-left: 20px">
        <a href="javascript:void(0)">
            <img _v-4eab2b0c="" src="../../../static/image/header2.jpg"> {{user.nikeName}}
        </a>
        <DropdownMenu slot="list">
            <DropdownItem><a href="#">个人信息</a></DropdownItem>
            <DropdownItem><a href="#">我的项目</a></DropdownItem>
            <DropdownItem><a href="#">修改密码</a></DropdownItem>
            <DropdownItem><a href="#" @click="quit">退出</a></DropdownItem>
        </DropdownMenu>
        </Dropdown>
        </label>
        </div>
				</div>
				</div>

	</div>
</div>
</header>
</template>
<script>
/*引入公共方法*/
import { setCookie,getCookie,delCookie } from '../../assets/js/cookie.js'
import axios from 'axios'
export default {
 data(){
   return {
       email:'',
       showLogin:false,
       user:''
   }
 },
 mounted(){

     /*页面挂载获取保存的cookie值，渲染到页面上*/
      let uemail = getCookie('email');
      this.email = uemail;
      /*如果cookie存在，则跳转到登录页*/
       if(uemail!=""){
        this.showLogin=true;
        this.getUserByEmail();
       }
 },
 methods:{
   createEvent(){
     /*页面挂载获取保存的cookie值，渲染到页面上*/
     let uemail = getCookie('email');
     /*如果cookie不存在，则跳转到登录页*/
     if(uemail==""){
       this.$Message.success('请先登录后再创建!');
       this.$router.push({
         path:'/login'
       });
     }else{
       this.$router.push({
         path:'/createEvent'
       });
     }
   },
   getUserByEmail() {
     var param = {
       email:this.email
     };
     axios.get("http://localhost:8080/user/getUserByEmail",{
         params:param
     }).then(result => {
       let res = result.data;
       this.user = res;
     });
   },
      quit(){
        /*删除cookie*/
        this.showLogin=false;
        delCookie('email')
     }
 }
};
</script>

<style scoped>
.ml48 {
  margin-left: 48px;
}

.ml33 {
  margin-left: 33px;
}

.ml40 {
  margin-left: 40px;
}

.headerwrap {
  width: 100%;
  z-index: 111;
  background: white;
  top: -80px;
  /*特效动画使用*/
}

.falseheader {
  width: 100%;
  height: 80px;
  display: none;
}

.falseheader.show {
  display: block;
}

.headerwrap.fix {
  position: fixed;
  transition: all 0.2s ease-in 0s;
  top: 0px;
}

.headerwrap.normal {
  top: 0px;
  transition: all 0.2s ease-in 0s;
}

.header {
  /*height: 60px;*/
  width: 1150px;
  margin: 0 auto;
  /*line-height: 60px;*/
}

.header .right,
.header .left {
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header a {
  display: inline-block;
  line-height: 60px;
  height: 60px;
  text-align: center;
  font-size: 14px;
  color: #666;
  cursor: pointer;
}

.color666 {
  color: #666;
}

.header .link-nav {
  border-bottom: 4px solid #fff;
}

.header .link-index {
  margin-left: 23px;
  width: 60px;
  color: #333;
  border-bottom: 4px solid #5cb975;
}

.header .link-nav:hover {
  border-bottom: 4px solid #5cb975;
}

.logo {
  width: 60px;
  height: 60px;
  vertical-align: middle;
}

.header .right {
  float: right;
}

[class^="icon-"]:after {
  content: "\0096";
}

.icon-search {
  display: inline-block;
  width: 20px;
  height: 20px;
  vertical-align: middle;
}

.icon-user {
  display: inline-block;
  width: 20px;
  height: 20px;
  vertical-align: middle;
}

.split {
  display: block;
  height: 26px;
  border: 1px solid #999999;
  border-right: none;
  margin-top: 17px;
  cursor: default;
}

.header .link-search {
  line-height: 26px;
  cursor: pointer;
  user-select: none;
  color: #5cb975;
  margin-left: 50px;
  margin-right: 50px;
  width: 80px;
  height: 26px;
  background: #5cb975;
  border-radius: 2px;
  font-size: 14px;
  color: #ffffff;
}
</style>


