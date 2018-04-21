<template>
  <div>
<NavHeader></NavHeader>
  <div class="body">
    <div class="left">
      <div class="top">
        <div class="topLeft">
          <Card style="width:345px;height: 260px;">
            <p slot="title">
              <Icon type="ios-film-outline" size="20"></Icon>
              公告
            </p>
            <a href="#" slot="extra" @click="updateNotice">
              <Icon type="edit" size="20"></Icon>
              更新公告
            </a>
            <ul>
              <li >
                <a href="#">{{this.teamLists.notice}}</a>
                <span>
                </span>
              </li>
            </ul>
          </Card>
        </div>
        <div class="topRight">
          <Card style="width:345px;height: 260px;">
            <p slot="title">
              <Icon type="calendar" size="20"></Icon>
              日程安排
            </p>
            <ul>
              <li >
                <Timeline>
                  <TimelineItem color="green">
                    <Icon type="trophy" slot="dot"></Icon>
                    <p class="time">{{this.schedules.createtime}}</p>
                    <p class="content1">{{this.schedules.content}}</p>
                  </TimelineItem>
                  <TimelineItem>
                    <p class="time">1976年</p>
                    <p class="content1">Apple I 问世</p>
                  </TimelineItem>
                </Timeline>
              </li>
            </ul>
          </Card>
        </div>
      </div>
      <div class="footer">
        <Card style="width:698px;height: 340px;">
          <p slot="title">
            <Icon type="help-circled" size="20"></Icon>
            问题墙
          </p>
          <a href="#" slot="extra" @click="questionSubmit">
            <Icon type="edit" size="20"></Icon>
            我也要提问
          </a>
          <ul>
            <li >
              <a href="#">{{this.questions.content}}</a>
              <span>
                </span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
    <div class="right">
      <Card style="width:200px;height: 600px;">
        <p slot="title">
          <Icon type="grid" size="20"></Icon>
          小组信息
        </p>
        <ul>
          <li>
            小组信息
          </li>
        </ul>
      </Card>

    </div>
    </div>

  </div>
</template>
<script>
  /*引入公共方法*/
  import { setCookie,getCookie,delCookie } from '../../assets/js/cookie.js'
  import VueStar from 'vue-star';
  import NavHeader from "../../views/home/NavHeader.vue";
  import axios from 'axios';
  export default{
      data(){
          return {
              id:'',
            founderId:'',
              email:'',
            teamLists:'',
            schedules:[],
            questions:[],
            teammates:[]
          }
      },
    mounted(){

      /*页面挂载获取保存的cookie值，渲染到页面上*/
      let uemail = getCookie('email');
      this.email = uemail;
      /*如果cookie存在，则跳转到登录页*/
      if(uemail!=""){
        this.getUserByEmail();
        this.getFounderId();
      }
    },
    methods:{
      getFounderId(){
        var param = {
          id: this.$route.params.id,
        };
        axios.get("http://localhost:8080/event/getEvent", {
          params: param
        }).then(result => {
          let res = result.data;
          this.founderId = res.founderid;
          this.teamList(this.founderId);
        });
      },
      getUserByEmail() {
        var param = {
          email: this.email,
        };
        axios.get("http://localhost:9090/user/getUserByEmail", {
          params: param
        }).then(result => {
          let res = result.data;
          console.log(res);
        });
      },

          teamList(id){
              var param={
                  founderid:id,
                  eventid:this.$route.params.id
              };
            this.$axios.get("http://localhost:9090/team/selectTeamList",{
              params:param
            }).then(result => {
              this.teamLists = result.data[0];
              this.questions = result.data[0].questions[0];
              this.schedules= result.data[0].schedules[0];
              this.teammates = result.data[0].teammates[0];
              console.log(result.data);
              console.log(this.teamLists);
              console.log(this.schedules);
              console.log(this.questions);
              console.log(this.teammates);
            });
          },
          questionSubmit(){

          },
          updateNotice(){
                alert(1111);
          },
          handleClick(){

          }
    },
    components:{
      NavHeader,
      VueStar
    }
  }
</script>
<style scoped>
.body {
  width: 904px;
  height: 600px;
  margin-left:200px;
  margin-right:200px;
  margin-top:20px;
}
  .left{
    width:700px;
    height:598px;
    float: left;
  }
  .right{
    width:200px;
    height:600px;
    float: right;
  }
  .top{
    width:700px;
    height:260px;
  }
  .topLeft{
    width:350px;
    height:260px;
    float: left;
  }
  .topRight{
   width:350px;
   height:260px;
   float: right;
}
  .footer {
   width:700px;
   height:340px;
   margin-top:5px;
}

  a{
    font-size:14px;
    color: black;
  }
</style>
