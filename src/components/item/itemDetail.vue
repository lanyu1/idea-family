<template>
  <div>
        <NavHeader></NavHeader>
        <div class="mb60">
		    <div class="search-container" _v-528bc6ac="" style="width: 100%; height: 300px;"> <img _v-528bc6ac="" src="../../../static/image/search.jpg">
				<div class="search-list" _v-528bc6ac="">
					<div class="search-part" _v-528bc6ac="">
						<input class="search-input" type="search" placeholder="搜索项目……" _v-528bc6ac="" autofocus="autofocus" v-model="searchContent">
						<input class="search-btn" type="submit" value="搜  索" _v-528bc6ac="" @click="search(searchContent)"> </div>
					<div class="hot-word" _v-528bc6ac=""><span _v-528bc6ac="">热词搜索：</span>
                <a  _v-528bc6ac="" @click="searchCity" data-name="北京">标题</a>
                <a  _v-528bc6ac="" @click="searchCity" data-name="上海">类型</a>
                <a  _v-528bc6ac="" @click="searchCity" data-name="杭州">城市</a>
          </div>
				</div>
			</div>
		</div>
        <item-tabs v-if="this.searchContent1==null"></item-tabs>
         <div class="searchList" v-else>
         <div class="result-title" _v-c1755fd6=""><span _v-c1755fd6="">搜索结果</span>包含关键词 <b _v-c1755fd6="">{{searchContent1}}</b> 的结果共 <b _v-c1755fd6="">{{total}}</b> 个</div>
         <ul class="cardList">
					<li class="programCard" v-for="(item,index) in eventListBySearch" :key="index">
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
                <p><span class="num"><a @click="teamInfo(item.founderid,item.id)">进入小组</a> </span></p>
              </nav>
            </div>
					</li>
				</ul>
					<Page :total=this.total :pageSize="6" :current="1" @on-change="handleClick" v-show="this.total>6"></Page>
        </div>

  </div>

</template>
<script>
import NavHeader from "../../views/home/NavHeader.vue";
import itemTabs from "../../views/item/itemTabs.vue";
import { setCookie,getCookie,delCookie } from '../../assets/js/cookie.js'
import axios from "axios";
export default {
  data() {
    return {
      typeContent:null,
      searchContent:null,
      searchContent1:null,
      eventListBySearch:[],
      current: 1,
      pageSize: 6,
      total:null,
      scity:'',
      eventId:'',
    };
  },
  methods:{
    search(val){
     this.searchContent1 = val;
     this.eventListsBySearch();
    },
    searchCity(event){
     this.searchContent1=event.target.dataset.name;
     this.eventListsBySearch();
    },
    handleClick(val){
     this.current=val;
     this.eventListsBySearch();
    },
    eventListsBySearch() {
      var param = {
        searchContent:this.searchContent1,
        page: this.current,
        pageSize: this.pageSize
      };
      axios
        .get("http://localhost:9090/event/getSearchEventsByLike", {
          params: param
        })
        .then(result => {
          let res = result.data;
          console.log(res);
          this.total=res.total;
          this.eventListBySearch = res.list;
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
          this.eventListsBySearch();
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
  },
  components: {
    NavHeader,
    itemTabs
  }
};
</script>
<style scoped>
.searchList{
  margin-left:100px;
  margin-right:50px;
}
.result-title{
  margin-left:35px;
}
.card-container{
  float:left;
}
.programCard {
  float: left;
  margin-left: 35px;
}
.ivu-page {
  float: right;
  margin-right:70px;
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


