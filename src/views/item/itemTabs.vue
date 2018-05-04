<template>
  <div>
      <Tabs class="tabs" @on-click="handleClickTab">
        <TabPane label="最新" icon="ios-flag">
         <ul class="cardList">
					<li class="programCard" v-for="(item,index) in eventListByTime" :key="index">
            <div class="card-container">
              <router-link :to="{name:'eventDetail',params:{id:item.id}}"><img class="cardBg" v-lazy="'/static/image/'+item.photoname"></router-link>
              <div class="cardContent" @click.left="click(item.id)">
                <div class="cardBox"> <router-link class="title" :to="{name:'eventDetail',params:{id:item.id}}" >{{item.title}}</router-link>
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
                <p><span class="num"><a @click="teamInfo(item.founderid,item.id)">进入小组</a> </span></p>
              </nav>
            </div>
					</li>
        </ul>
          <Page :total=this.total :pageSize="6" :current="1" @on-change="handleClick" show-elevator></Page>
        </TabPane>
        <TabPane label="民宿" icon="social-windows">
        <div>
         <ul class="cardList">
					<li class="programCard" v-for="(item,index) in eventListByType" :key="index">
            <div class="card-container">
              <router-link :to="{name:'eventDetail',params:{id:item.id}}"><img class="cardBg" v-lazy="'/static/image/'+item.photoname"></router-link>
              <div class="cardContent" @click.left="click(item.id)">
                <div class="cardBox"> <router-link class="title" :to="{name:'eventDetail',params:{id:item.id}}" >{{item.title}}</router-link>
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
                <p><span class="num"><a @click="teamInfo(item.founderid,item.id)">进入小组</a> </span></p>
              </nav>
            </div>
					</li>
				</ul>
          <Page :total=this.total1 :pageSize="6" :current="1" @on-change="handleClick" show-elevator></Page>
        </div>
        </TabPane>
        <TabPane label="餐饮" icon="social-tux">
                <div>
         <ul class="cardList">
					<li class="programCard" v-for="(item,index) in eventListByType" :key="index">
            <div class="card-container">
              <router-link :to="{name:'eventDetail',params:{id:item.id}}"><img class="cardBg" v-lazy="'/static/image/'+item.photoname"></router-link>
              <div class="cardContent" @click.left="click(item.id)">
                <div class="cardBox"> <router-link class="title" :to="{name:'eventDetail',params:{id:item.id}}" >{{item.title}}</router-link>
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
                <p><span class="num"><a @click="teamInfo(item.founderid,item.id)">进入小组</a> </span></p>
              </nav>
            </div>
					</li>
				</ul>
         <Page :total=this.total1 :pageSize="6" :current="1" @on-change="handleClick" show-elevator></Page>
        </div>
        </TabPane>
        <TabPane label="农业" icon="social-tux">
                <div>
         <ul class="cardList">
					<li class="programCard" v-for="(item,index) in eventListByType" :key="index">
            <div class="card-container">
              <router-link :to="{name:'eventDetail',params:{id:item.id}}"><img class="cardBg" v-lazy="'/static/image/'+item.photoname"></router-link>
              <div class="cardContent" @click.left="click(item.id)">
                <div class="cardBox"> <router-link class="title" :to="{name:'eventDetail',params:{id:item.id}}" >{{item.title}}</router-link>
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
                <p><span class="num"><a @click="teamInfo(item.founderid,item.id)">进入小组</a> </span></p>
              </nav>
            </div>
           </li>
				</ul>
           <Page :total=this.total1 :pageSize="6" :current="1" @on-change="handleClick" show-elevator></Page>
        </div>
        </TabPane>
        <TabPane label="休闲" icon="social-tux">
          <div>
         <ul class="cardList">
					<li class="programCard" v-for="(item,index) in eventListByType" :key="index">
            <div class="card-container">
              <router-link :to="{name:'eventDetail',params:{id:item.id}}"><img class="cardBg" v-lazy="'/static/image/'+item.photoname"></router-link>
              <div class="cardContent" @click.left="click(item.id)">
                <div class="cardBox"> <router-link class="title" :to="{name:'eventDetail',params:{id:item.id}}" >{{item.title}}</router-link>
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
                <p><span class="num"><a @click="teamInfo(item.founderid,item.id)">进入小组</a> </span></p>
              </nav>
            </div>
					</li>
				</ul>
            <Page :total=this.total1 :pageSize="6" :current="1" @on-change="handleClick" show-elevator></Page>
        </div>
        </TabPane>
    </Tabs>
  </div>
</template>
<script>
import axios from "axios";
/*引入公共方法*/
import { setCookie,getCookie,delCookie } from '../../assets/js/cookie.js'
export default {
  data() {
    return {
      eventListByTime: [],
      eventListByType:[],
      current: 1,
      pageSize: 6,
      total:null,
      total1:null,
      type:''
    };
  },
  mounted: function() {
    this.eventListsByTime();
  },
  methods: {
    handleClick(val) {
      this.current = val;
      this.eventListsByTime();
			this.eventListsByType();
    },
    handleClickTab(val) {
      this.type=val;
      this.eventListsByType();

    },
    eventListsByTime() {
      var param = {
        page: this.current,
        pageSize: this.pageSize
      };
      axios
        .get("http://localhost:9090/event/getEventsByTime", {
          params: param
        })
        .then(result => {
          let res = result.data;
          this.total=res.total;
          this.eventListByTime = res.list;
        });
    },
    eventListsByType() {
      var param = {
        type:this.type,
        page: this.current,
        pageSize: this.pageSize
      };
      axios
        .get("http://localhost:9090/event/getEventType", {
          params: param
        })
        .then(result => {
          let res = result.data;
          this.total1=res.total;
          this.eventListByType = res.list;
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
        axios.get("http://localhost:9090/great/selectGreat",{
          params:param
        }).then(result => {
          this.$Message.success(result.data);
          this.eventListsByTime();
          this.eventListsByType();
        });
      }
    },
    teamInfo(founderid,id){
      var param={
        founderid:founderid,
        eventid:id
      }
      let uemail = getCookie('email');
      if(uemail==""){
        this.$Message.success('登陆后进入小组页面!');
        this.$router.push({
          path:'/login'
        });
      }else{
        this.$router.push({
          path:'/teamDetail/'+id
        });
      }
    }
  }
};
</script>
<style scoped>
.tabs {
  margin-left: 50px;
  margin-right: 50px;
}
.programCard {
  float: left;
  margin-left: 35px;
}
.ivu-tabs-ink-bar {
  background-color: #5cb975;
}
.ivu-page {
  float: right;
	margin-right:120px;
}
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


