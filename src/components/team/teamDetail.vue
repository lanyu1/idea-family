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
            <ul>
              <li >
                <a href="#">欢迎来到小组空间</a>
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
                    <p class="time">2018.03.10</p>
                    <p class="content1">小组创建成功</p>
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
              <a href="#">欢迎对本项目进行提问</a>
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
  import VueStar from 'vue-star';
  import NavHeader from "../../views/home/NavHeader.vue";
  export default{
      data(){
          return {

          }
      },
    methods:{
      questionSubmit(){

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
