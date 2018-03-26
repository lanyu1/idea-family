<template>
<div class="itemList">
  		<div class="programBox">
			<div class="programList">
				<div class="top clearfix">
					<ul class="clearfix fl">
						<li class="fl active">正在进行</li>
					</ul>
					<router-link to="/itemDetail" class="more fr"> <span>查看更多</span> </router-link>
				</div>
				<ul class="cardList">
					<li class="programCard" v-for="(item,index) in eventList" :key="index">
						<div class="card-container">
							<router-link :to="{name:'eventDetail',params:{id:item.id}}"><img class="cardBg" v-lazy="'/static/image/'+item.photoname"></router-link>
							<div class="cardContent" @click.left="click(item.id)">
								<div class="cardBox"> <router-link class="title":to="{name:'eventDetail',params:{id:item.id}}" >{{item.title}}</router-link>
								<router-link class="desc"  :to="{name:'eventDetail',params:{id:item.id}}"> {{item.instruction}} </router-link>
									<div class="detail">
										<div> <img class="avatar fl" v-lazy="'/static/image/'+item.user.headPhoto"> <span class="author">{{item.user.nikeName}}</span> </div> <span class="locate">{{item.province}}</span> <span class="tag">{{item.eventType.typecontent}}</span> </div>
									<div class="progressContainer">
										<progress max="100" value="4500.06"></progress>
									</div>
								</div>
							</div>
              <nav>
                <p><span class="num">支持 </span><span class="num">{{item.support}}</span><span class="num">人</span></p>
                <p><span class="num"><Icon type="thumbsup" size="22" ></Icon><a @click="great(item.id,item.founderid)">支持</a> </span></p>
                <p><span class="num"><router-link to="/teamDetail">进入小组</router-link> </span></p>
              </nav>
						</div>
					</li>
				</ul>
			</div>
		</div>
        		<div data-delay="delay" class="initiatorBox" style="">
			<div class="initiator">
				<h3>成为更成功的发起人</h3>
				<p>开始吧已帮助超过1300位项目发起人实现了梦想</p>
				<ul class="clearfix">
					<li class="fl initialstep"> <img src="../../../static/image/20170904initiaor1.png">
						<h4>真实动人的故事</h4>
						<p>开始吧的制作团队会通过照片、视频、文字等形式，精心呈现您的创业故事及项目信息</p>
					</li>
					<li class="fl initialarrow"> <img src="../../../static/image/20170904initiaor4.png"> </li>
					<li class="fl initialstep initialstep2"> <img src="../../../static/image/20170904initiaor2.png">
						<h4>广泛精准的传播</h4>
						<p>通过开始吧官网、APP及旗下的新媒体矩阵</p>
						<p style="margin-top:0px">将您的项目传递到千万热爱生活的用户眼中</p>
					</li>
					<li class="fl initialarrow"> <img src="../../../static/image/20170904initiaor4.png"> </li>
					<li class="fl initialstep"> <img src="../../../static/image/20170904initiaor3.png">
						<h4>专业贴心的服务</h4>
						<p>项目上线前后，开始吧的运营团队及投后团队将提供全程专业服务</p>
					</li>
				</ul>
			</div>
		</div>
		<div data-delay="delay" class="selectedBox" style="">
			<div class="selected">
				<p class="title">他们的开始吧故事</p>
				<ul class="clearfix">
					<li class="first clearfix fl">
						<div class="videobox fl">
							<div class="videocover"> <img src="../../../static/image/20170814selected1@4x.png" class="fl">
								<a href="javascript:;" id="videoPlay"></a>
							</div>
							<video src="http://video.kaishiba.com/o_1bmbgsc1v1ct1povg651cdc1f7914.mp4" controls="controls" width="100%" height="100%" id="video"> 您的浏览器不支持 video 标签。 </video>
						</div>
						<a href="https://www.kaishiba.com/project/detail/id/55940E2322B4124DE050190AFD014834" class="desc fl">
							<p class="word"> <span>我们想要做的，只是让沙漠不再疯狂扩张，努力还原耕地面积，将那里变成绿洲。</span> <img src="../../../static/image/20170920quotel1@4x.png" class="dotl"> <img src="../../../static/image/20170920quoter1@4x.png" class="dotr"></p>
							<p class="author">任志强 I 项目发起人</p>
							<p class="name">项目名称：任小米，荒漠中的无限可能</p>
							<div class="selectArrow"></div>
						</a>
					</li>
					<li class="rest fl mr32">
						<div class="imgbox"> <img src="../../../static/image/20170808selected2@4x.png" class="bgpic fl"> </div>
						<a href="https://www.kaishiba.com/project/detail/id/4A2133AE7CB95544E050190AFD011616" class="desc">
							<p class="word"> <span>像家人一样对待每一位来客，这就是我的鼓浪屿民宿美梦。</span> <img src="../../../static/image/20170920quotel2@4x.png" class="dotl"> <img src="../../../static/image/20170920quoter2@4x.png" class="dotr"></p>
							<p class="author">游颖 I 项目发起人</p>
							<p class="name">项目名称：厦门汝南别墅</p>
							<div class="selectArrow"></div>
						</a>
					</li>
					<li class="rest fl">
						<div class="imgbox"> <img src="../../../static/image/20170808selected3@4x.png" class="bgpic fl"> </div>
						<a href="https://www.kaishiba.com/project/detail/id/482498C396495149E050190AFD015AE4" class="desc">
							<p class="word"> <span>山林深处，应有书有宿；我想通过分享武夷山的情致，认识更多同道中人。</span> <img src="../../../static/image/20170920quotel2@4x.png" class="dotl"> <img src="../../../static/image/20170920quoter2@4x.png" class="dotr"></p>
							<p class="author">邱月微 I 项目发起人</p>
							<p class="name">项目名称：武夷山，不知春斋</p>
							<div class="selectArrow"></div>
						</a>
					</li>
				</ul>
			</div>
		</div>
        </div>
</template>
<script>
/*引入公共方法*/
import { setCookie,getCookie,delCookie } from '../../assets/js/cookie.js'
import axios from "axios";
export default {
  data() {
    return {
        eventId:'',
      eventList: [],
    };
  },
  mounted: function() {
    /*页面挂载获取保存的cookie值，渲染到页面上*/
    let uemail = getCookie('email');
    /*如果cookie存在，则跳转到登录页*/
    if(uemail!=""){
      this.showLogin=true;
    }
    this.eventLists();
  },
  methods: {
    eventLists() {
      axios.get("http://localhost:8080/event/getEventsByTime").then(result => {
        let res = result.data;
        console.log(res);
        this.eventList = res.list;
      });
    },
    click(id){
      /*页面挂载获取保存的cookie值，渲染到页面上*/
      let uemail = getCookie('email');
      /*如果cookie不存在，则跳转到登录页*/
      if(uemail==""){
        this.$Message.error('登陆后才能查看项目详情!');
        this.$router.push({
          path:'/login'
        });
      }else{
        this.$router.push({
          path:'/eventDetail/'+id,
        });
      }
    },
    great(id,founderid){
        var param={
            eventid:id,
            userid:founderid
        }
      let uemail = getCookie('email');
      if(uemail==""){
        this.$Message.warning('登陆后才能支持项目!');
        this.$router.push({
          path:'/login'
        });
      }else{
        axios.get("http://localhost:8080/great/selectGreat",{
            params:param
        }).then(result => {
          this.$Message.success(result.data);
          this.eventLists();
        });
      }
    }
  }
};
</script>
<style scoped>
.programCard nav {
	margin-top:22px;
	font-size:16px;
}
.link-search{
	color:#5cb975;
}
.programCard nav .num {
	  font-size:15px;
		color:#5cb975;
}
  .num a {
    font-size:18px;
    color: #5cb975;
  }
.programCard nav{
  margin-top:-32px;
  margin-left:22px;
  margin-right: 22px;
}
</style>

