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
            <Modal
        v-model="modal1"
        title="更新公告"
        @on-ok="ok(noticeValue)"
        @on-cancel="cancel">
         <Input v-model="noticeValue" placeholder="请输入公告" style="width: 400px"/>
    </Modal>
            <ul>
               <li >
                  <a href="#">{{this.notice}}</a>
              </li>
            </ul>
          </Card>
        </div>
        <div class="topRight">
          <Card style="width:345px;height: 260px;">
          <p slot="title">
            <Icon type="help-circled" size="20"></Icon>
            问题墙
          </p>
          <a href="#" slot="extra" @click="questionSubmit">
            <Icon type="edit" size="20"></Icon>
            我也要提问
          </a>
          <Modal
        v-model="modal2"
        title="提出问题"
        @on-ok="ok1(noticeValue)"
        @on-cancel="cancel1">
         <Input v-model="noticeValue" placeholder="请输入问题内容" style="width: 400px"/>
    </Modal>
          <!-- <ul class="list-group">
            <li  class="list-group-item" v-for="item in questions" :key="item.index">
                <span>{{item.content}}</span><span>{{item.createTime}}</span><span>{{item.userName}}</span>
            </li>
          </ul> -->
          <div class='comments' v-for="(item,index) in questions" :key="index">
                <div id='info' :class='item.imgName'>
                    <p class='commentName'>#{{index + 1}} <span>{{item.userName}}</span></p>
                    <p class='text'>{{item.content}}</p>
                    <div class='options'>
                       <span class='commentDate'>{{getFormatDate(item.createTime)}}</span>
                        <a href='#comment' data-scroll>
                            <span @click='reply()'>
                                <i class='iconfont icon-huifu'></i>回复
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </Card>
        </div>
      </div>
      <div class="footer">
            <Card style="width:690px;height: 780px;">
            <p slot="title">
              <Icon type="calendar" size="20"></Icon>
              日程安排
            </p>
              <a href="#" slot="extra" @click="scheduleSubmit">
                <Icon type="edit" size="20"></Icon>
                新建日程
              </a>
              <Modal
                v-model="modal3"
                title="新建日程"
                @on-ok="ok2(scheduleValue)"
                @on-cancel="cancel2">
                <Input v-model="scheduleValue" placeholder="请输入日程内容" style="width: 400px"/>
                <br/>
                <DatePicker type="date" placement="bottom-end" placeholder="开始时间" style="width: 200px" v-model="startTime"></DatePicker>
                <DatePicker type="date" placement="bottom-end" placeholder="结束时间" style="width: 200px" v-model="endTime"></DatePicker>
              </Modal>
            <full-calendar :events="fcEvents" lang="zh"></full-calendar>
          </Card>
      </div>
    </div>
    <div class="right">
      <Card style="width:400px;height: 800px;">
        <p slot="title">
          <Icon type="grid" size="20"></Icon>
          小组信息
        </p>
        <a href="#" slot="extra" @click="addTeam">
          <Icon type="plus-circled"></Icon>
          加入小组
        </a>
        <a href="#" slot="extra" @click="deleteTeam">
          <Icon type="close-round"></Icon>
          解散小组
        </a>
        <div class="teaminfo">
          <p class="pbiaoqian">小组头像</p>
          <img v-lazy="'/static/image/'+this.photoName" style="width:300px;height:200px"/>
          <div class="description">
          <p class="pbiaoqian">小组描述</p>
          <div class="des">{{this.description}}</div>
          </div>
          <p class="pbiaoqian">小组成员</p>
         <ul class="list-group">
          <li class="list-group-item" v-for="item in teammates" :key="item.index">
            <img v-lazy="'/static/image/'+item.head_photo" style="width:40px;height:40px" />{{item.nike_name}}
            <Tag checkable color="blue">{{item.duty}}</Tag>
            </li>
           <li v-show="teammates==null">
               暂无组员
           </li>
      </ul>
      </div>
      </Card>

    </div>
    </div>

  </div>
</template>
<script>
/*引入公共方法*/
import { setCookie, getCookie, delCookie } from "../../assets/js/cookie.js";
import VueStar from "vue-star";
import NavHeader from "../../views/home/NavHeader.vue";
import axios from "axios";
export default {
  zh : {
    weekNames : ['周一','周二','周三','周四','周五','周六','周日'],
    monthNames : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','11月','12月'],
    titleFormat : 'yyyy年MM月'
  },
  data() {
    return {
      teamLeader:'',
      modal1:false,
      modal2:false,
      modal3:false,
      startTime:'',
      endTime:'',
      total:'',
      current:1,
      noticeValue:'',
      scheduleValue:'',
      id: "",
      teamID:'',
      founderId: "",
      email: "",
      notice:'',
      photoName:'',
      description:'',
      teamLists: [],
      schedules: [],
      questions: [],
      teammates: [],
      fcEvents: []
    };
  },
  mounted() {
    /*页面挂载获取保存的cookie值，渲染到页面上*/
    let uemail = getCookie("email");
    this.email = uemail;
    /*如果cookie存在，则跳转到登录页*/
    if (uemail != "") {
      this.getUserByEmail();
      this.getFounderId();
    }
  },
  methods: {
      addTeam(){
          if(this.teamLeader.teammateid==this.founderId){
            this.$Message.warning("您已经加入了该小组");
          }else{
        axios.post('http://localhost:9090/teammate/addTeammate',{
          teamid:this.teamID,
          teammateid:this.founderId,
          authority:0,
          duty:'组员'
        }).then((res)=>{
          this.teamList(this.teamID);
          this.$Message.success("欢迎您进入该小组");
        });
          }
      },
    deleteTeam(){
      axios.delete('http://localhost:9090/teammate/deleteTeammate',{
          teamid:this.teamID
      }).then((res)=>{
        this.$Message.success("小组解散成功");
      });
    },
    selectTeamLeader(id){
        var param={
          teamid:id
        };
      axios.get('http://localhost:9090/teammate/selectTeamLeader',{
        params:param
      }).then((res)=>{
            console.log(res.data);
          this.teamLeader = res.data;
      });
    },
    handleClick(val) {
      this.current = val;
      this.questionsList(this.teamID);
    },
    reply(){},
    getFounderId() {
      var param = {
        id: this.$route.params.id
      };
      axios
        .get("http://localhost:9090/event/getEvent", {
          params: param
        })
        .then(result => {
          let res = result.data;
          this.founderId = res.founderid;
          this.teamList(this.founderId);
        });
    },
    getUserByEmail() {
      var param = {
        email: this.email
      };
      axios
        .get("http://localhost:9090/user/getUserByEmail", {
          params: param
        })
        .then(result => {
          let res = result.data;
        });
    },
   questionsList(id){
       var param = {
        teamid: id,
         page: this.current,
         pageSize: this.pageSize
      };
      this.$axios
        .get("http://localhost:9090/team/selectQuestionList", {
          params: param
        })
        .then(result => {
          let res = result.data;
          this.total = res.total;
          this.questions = res.list;
        });
   },
     teammateList(id){
       var param = {
        teamid: id
      };
      this.$axios
        .get("http://localhost:9090/team/selectTeammateList", {
          params: param
        })
        .then(result => {
          let res = result.data;
          this.teammates = res;
        });
   },
    teamList(id) {
      var param = {
        eventid: this.$route.params.id
      };
      this.$axios
        .get("http://localhost:9090/team/selectScheduleList", {
          params: param
        })
        .then(result => {
          let res = result.data;
          this.teamLists = res;
          this.teamID = res[0].id;
          this.notice = res[0].notice;
          this.photoName =res[0].photoName;
          this.description = res[0].description;
          this.fcEvents = res;
          this.questionsList(res[0].id);
          this.teammateList(res[0].id);
          this.selectTeamLeader(res[0].id);
        });
    },

    questionSubmit() {
      this.modal2=true;
    },
    updateNotice() {
      this.modal1=true;
    },
    scheduleSubmit(){
         this.modal3=true;
    },
     ok (val) {
        axios.put('http://localhost:9090/team/updateTeam',{
          id:this.teamID,
          notice:val
        }).then((res)=>{
          this.teamList();
           this.$Message.success("更新成功");
        });
            },
            cancel () {
                this.$Message.info('您已取消');
            },
    ok1(val) {
        axios.post('http://localhost:9090/question/addQuestion',{
          teamid:this.teamID,
          questionerid:this.founderId,
          content:val,
          createtime:new Date()
        }).then((res)=>{
          this.questionsList(this.teamID);
           this.$Message.success("提问成功");
        });
            },
            cancel1() {
                this.$Message.info('您已取消');
            },
    ok2(val) {
      axios.post('http://localhost:9090/schedule/addSchedule',{
        teamid:this.teamID,
        content:val,
        createtime:this.startTime,
        worktime:this.endTime
      }).then((res)=>{
        this.teamList(this.teamID);
        this.$Message.success("新建日程成功");
      });
    },
    cancel2() {
      this.$Message.info('您已取消');
    },
    handleClick() {},
     getFormatDate(timeStr, dateSeparator, timeSeparator) {
      dateSeparator = dateSeparator ? dateSeparator : "-";
      timeSeparator = timeSeparator ? timeSeparator : ":";
      var date = new Date(timeStr),
        year = date.getFullYear(), // 获取完整的年份(4位,1970)
        month = date.getMonth(), // 获取月份(0-11,0代表1月,用的时候记得加上1)
        day = date.getDate(), // 获取日(1-31)
        hour = date.getHours(), // 获取小时数(0-23)
        minute = date.getMinutes(), // 获取分钟数(0-59)
        seconds = date.getSeconds(), // 获取秒数(0-59)
        Y = year + dateSeparator,
        M = (month + 1 > 9 ? month + 1 : "0" + (month + 1)) + dateSeparator,
        D = (day > 9 ? day : "0" + day) + " ",
        h = (hour > 9 ? hour : "0" + hour) + timeSeparator,
        m = (minute > 9 ? minute : "0" + minute) + timeSeparator,
        s = seconds > 9 ? seconds : "0" + seconds,
        formatDate = Y + M + D + h + m + s;
      return formatDate;
    }
  },
  components: {
    NavHeader,
    VueStar
  }
};
</script>
<style scoped>
.body {
  width: 904px;
  height: 600px;
  margin-left: 200px;
  margin-right: 200px;
  margin-top: 20px;
}
.left {
  width: 700px;
  height: 598px;
  float: left;
}
.right {
  width: 200px;
  height: 600px;
  float: right;
}
.top {
  width: 700px;
  height: 260px;
}
.topLeft {
  width: 350px;
  height: 260px;
  float: left;
}
.topRight {
  width: 350px;
  height: 260px;
  float: right;
}
.footer {
  width: 700px;
  height: 340px;
  margin-top: 5px;
}

a {
  font-size: 14px;
  color: black;
}
.comments{
  width:310px;
  height: 60px;
  border:2px solid rgb(219, 205, 205);
  margin:5px;
}
.info{
  margin-top:5px;
}
.options{
  float: right;
}
.comments .commentName{
  color:#3c763d;
}
.comments .text{
  font-size: 14px;
  margin-left: 5px;
}
.teaminfo{
  margin-top: 30px;
}
.description{
  margin-top:20px;
  margin-bottom: 20px;
  font-size: 14px;
}
.pbiaoqian{
   margin-top:10px;
   margin-bottom:10px;
   font-size: 16px;
}
</style>
