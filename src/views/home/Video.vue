<template>
  	<div class="topbg"> <img class="bg" src="../../../static/image/index_video_bg.png">
		<video id="bgvideo" class="masthead-video" autoplay="" loop="" muted="">
			<source src="http://video.kaishiba.com/indexbackground.mp4?201712" type="video/mp4"> </video>
		<div class="btn-start-project-wrap specialhide"> <a  class="btn-start-project" @click="createEvent">发起项目<span><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAeCAYAAAA2Lt7lAAAABGdBTUEAALGPC/xhBQAAAPhJREFUSA3tlSEKAkEUhncXi1hcDYLRoMFiEYPdYvMEm7yB0eQRjN7BTR5BkxfQYBQEkwiCyo7fkwmLsKZ5aNgHH2/Zge8fZmdmPS+vv10BY0wbyioTRFyBBI7Q0QqZIZe6wEArZIz8CXeItEKGyK8gNdUK6SI/vSOMWdALzoOQNmBvQ1b0kkZIFfHGhmzpNY2QIuLYhhzoLY2QAPHchpzpzayQIGvg23vf9xPG1yA9hDq4K2Y8ATnpNxg5MyP7XJq+S7l83CVIuf24CPW2J3I5YDuQcnvAEOpdEcj1LjnkIcgV/YDI2U5JixDLv6CXfpc/5yvwmxV4AUtyJlLhI7PFAAAAAElFTkSuQmCC"></span></a>				</div>
	</div>
</template>
<script>
  import { setCookie,getCookie,delCookie } from '../../assets/js/cookie.js'
export default {
    data(){
        return{

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
    }
  },
  mounted(){

  },

}
</script>
<style scoped>
.topbg {
  position: relative;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  min-height: 550px;
  background: #f6f6f6;
}

.topbg .bg {
  width: 400px;
  height: 200px;
  position: absolute;
  top: 50%;
  margin-top: -100px;
  left: 50%;
  margin-left: -200px;
}

.topbg video {
  position: relative;
  width: 100%;
  top: 0;
  vertical-align: middle;
  background: #f6f6f6;
}
.slogen {
  display: none;
  position: relative;
  width: 1080px;
  height: 200px;
  margin: 0 auto;
  margin-top: 180px;
}

.slogen img {
  width: 100%;
  height: 100%;
}

.slogen h1 {
  color: transparent;
  text-align: center;
  font-size: 40px;
  letter-spacing: 7px;
  position: absolute;
  top: -400px;
}

.btn-start-project-wrap {
  position: absolute;
  left: 0;
  top: 70%;
  width: 100%;
  text-align: center;
}

.btn-start-project {
  display: block;
  border: 1px solid #ffffff;
  font-size: 16px;
  font-family: "PingFangSC-Light";
  color: #ffffff;
  letter-spacing: 0;
  width: 200px;
  height: 48px;
  line-height: 48px;
  margin: 0 auto;
  text-align: center;
  transition: all 0.3s cubic-bezier(0, 0, 0.2, 1) 0s;
  cursor: pointer;
  user-select: none;
  opacity: 0.8;
}

.btn-start-project:hover {
  width: 220px;
  transition: all 0.3s cubic-bezier(0, 0, 0.2, 1) 0s;
}

.btn-start-project span {
  position: absolute;
  margin-left: 14px;
  opacity: 0;
}

.btn-start-project span img {
  margin-top: 15px;
  width: 16px;
  display: block;
}

.btn-start-project:hover span {
  margin-left: 10px;
  opacity: 1;
  transition: all 0.3s cubic-bezier(0, 0, 0.2, 1) 0s;
}
</style>


