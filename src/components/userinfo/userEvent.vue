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
            <div class="cardContent">
              <div class="cardBox"> <router-link class="title":to="{name:'eventDetail',params:{id:item.id}}" >{{item.title}}</router-link>
                <router-link class="desc"  :to="{name:'eventDetail',params:{id:item.id}}"> {{item.instruction}} </router-link>
                <div class="detail">
                  <div> <img class="avatar fl" v-lazy="'/static/image/'+item.user.headPhoto"> <span class="author">{{item.user.nikeName}}</span> </div> <span class="locate">{{item.province}}</span> <span class="tag">{{item.eventType.typecontent}}</span> </div>
                <div class="progressContainer">
                  <progress max="100" value="4500.06"></progress>
                </div>
                <nav>
                  <p><span class="num">支持 </span><span class="num">{{item.support}}</span><span class="num">人</span></p>
                  <p><span class="num">创建日期 </span><span class="num">{{item.createtime}}</span><span class="num"></span></p>
                </nav>
              </div>
            </div>
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
        axios.get("http://localhost:8080/user/getUserByEmail",{
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
          .get("http://localhost:8080/event/getEventsByFounderId", {
            params: param
          })
          .then(result => {
            let res = result.data;
            this.eventList = res.list;
            this.total = res.total;
            console.log(this.eventList);

          });
      },
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

</style>
