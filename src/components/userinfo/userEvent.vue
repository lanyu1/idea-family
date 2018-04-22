<template>
  <div>
    <NavHeader></NavHeader>
    <div class="topContent">
      我发起的项目
    </div>
    <div class="listContent">
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
              <p><span class="num"><a @click="teamInfo(item.founderid,item.id)">进入小组</a> </span></p>
            </nav>
          </div>
        </li>
      </ul>
      <Page :total=this.total :pageSize="6" :current="1" @on-change="handleClick" show-elevator></Page>
    </div>

  </div>
</template>
<script>
  /*引入公共方法*/
  import { setCookie,getCookie,delCookie } from '../../assets/js/cookie.js'
  import NavHeader from "../../views/home/NavHeader.vue";
  import axios from 'axios'
  export default{
    data(){
      return {
          id:null,
          founderid:null,
          total:null,
          email:'',
          eventList:[]
      }
    },
    methods:{
      getUserByEmail() {
        var param = {
          email:this.email
        };
        axios.get("http://localhost:9090/user/getUserByEmail",{
          params:param
        }).then(result => {
          let res = result.data;
          this.id =res.id;
          this.founderid=res.id;
          this.eventListsByFounderId(this.founderid);
        });
      },
      handleClick(val) {
        this.current = val;
        this.eventListsByFounderId(this.founderid);
      },
      eventListsByFounderId(val) {
        var param = {
          founderid:val,
          page: this.current,
          pageSize: this.pageSize
        };
        axios
          .get("http://localhost:9090/event/getEventsByFounderId", {
            params: param
          })
          .then(result => {
            let res = result.data;
            this.eventList = res.list;
            this.total = res.total;
            console.log(this.eventList);

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
            this.eventListsByFounderId(founderid);
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
    components:{
      NavHeader
    }
  }

</script>
<style scoped>
  .topContent{
    margin-left:200px;
    text-align: center;
    margin-right:200px;
    height:40px;
    font-size:24px;
  }
  .listContent{
    margin-left: 100px;
    margin-right: 100px;
  }
  .tabs {
    margin-left: 150px;
    margin-right: 150px;
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
