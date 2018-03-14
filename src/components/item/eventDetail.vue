<template>
<div>
<NavHeader></NavHeader>
  <div class="content">
    <div class="left-content">
     <div class="title">
       <div class="c43">
         <div class="c40">{{event.title}}</div>
         <div class="c42">
           <a href="http://www.demohour.com/search?q=%E7%B2%BE%E5%87%86%E6%89%B6%E8%B4%AB&amp;t=projects&amp;c=tags_collection">加入小组</a>
           <a href="http://www.demohour.com/search?q=%E5%87%BA%E7%89%88&amp;t=projects&amp;c=tags_collection">{{eventType.typecontent}}</a>
         </div>
         <div class="c44">
           {{event.instruction}}
         </div>
       </div>
     </div>
      <hr/>
      <div class="content-tab">
        <Tabs>
          <TabPane label="项目" icon="navicon-round">
            <img v-lazy="'/static/image/'+event.photoname"/>
          </TabPane>
          <TabPane label="公告" icon="chatbubble">
            <div id="content" class="c16">
              <dl class="c17 c178">
                <div class="divlist">
                  <div class="c179">
                    <dt><a href="http://www.demohour.com/projects/369441/posts/256286">我们的项目「《跋涉者的足迹》探索人生的旅途上，我们将一路同行……</a></dt>
                    <dd class="c62">
                      <span>2017年09月22日 18:51</span>
                      <p><a class="c64" href="http://www.demohour.com/projects/369441/posts/256286">4 评论</a></p>
                    </dd>
                  </div>

                </div>

              </dl>
            </div>
          </TabPane>
          <TabPane label="评价" icon="chatbubble-working">
            <div>
            <Input v-model="comment" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请先登录后再发表..."></Input>
            <Button type="success" size="large" @click="submit()">发表</Button>
            </div>
            <div class="commemtlist ">
              <dl v-for="(item,index) in commentList" :key="index">
                <dt>
                  <img src="../../../static/image/header2.jpg">
                  <span class="username ">{{item.user.nikeName}}</span>
                </dt>
                <dd class="commentwords "><i class="icon-style icon-file-alt ">{{item.content}}</i></dd>
                <dd class="btbar ">
                  <span class="like red "><i class="icon-style icon-thumbs-up "></i>点赞(<strong @click="like(index) ">点赞</strong>)</span>
                  <span class="notlike red "><i class="icon-style icon-thumbs-down "></i>回复(<strong @click="notlike(index) ">回复</strong>)</span>
                  <span class="data red "><i class="icon-style icon-calendar "></i>时间<strong>{{item.commenttime}}</strong></span>
                </dd>
              </dl>
            </div>
            <Page :total=this.total :pageSize="4" :current="1" @on-change="handleClick" show-elevator></Page>
          </TabPane>
          <TabPane label="支持" icon="thumbsup">标签四的内容</TabPane>
        </Tabs>
      </div>
    </div>
    <div class="right-content">
      <div class="support">
      <div class="c5">
        <strong>{{event.support}}<b>人支持</b></strong>
        <div class="c1">
          <p style="width:70%"></p>
        </div>
        <div class="c2">
          <strong>70%</strong>
          <span>正在进行</span>
        </div>
        <div class="c3">
          目标<b>¥</b>60人支持<span>项目没有目标人数成功，项目将会取消</span>
        </div>
      </div>
      <div class="c4">
        <span class="c6">正在进行</span>
        <p>{{event.createtime}}</p>
      </div>
    </div>
      <d1 class="project-initiator">
        <dd class="c8">
          <a href="http://www.demohour.com/1633633" target="_blank" class="v3"><img v-lazy="'/static/image/'+infoUser.headPhoto"><i></i></a>
        </dd>
        <dt><a href="http://www.demohour.com/1633633">{{infoUser.nikeName}}</a>
        </dt>
        <dd class="c9">
          <a title="私信给 91悦读会" href="http://www.demohour.com/messages?recipient_id=1633633" class="action-popup-login action-popup-verify action-popup-message message">发私信</a>
          <span class="action-follow followed_1633633 hide" data-action-target="1633633" style="display: none;"><a class="c83" href="http://www.demohour.com/users/1633633/follow" data-remote="true"><span>已关注</span></a>
							</span>
          <span class="action-follow followed_each_1633633 hide" data-action-target="1633633" style="display: none;"><a class="c84" href="http://www.demohour.com/users/1633633/follow" data-remote="true"><span>相互关注</span></a>
							</span>
          <span class="action-follow follow_1633633" data-action-target="1633633"><a href="http://www.demohour.com/users/1633633/follow" class="action-popup-login" data-remote="true"><span>+ 加关注</span></a>
							</span>
        </dd>
      </d1>
    </div>
  </div>
</div>
</template>
<script>
import { setCookie,getCookie,delCookie } from '../../assets/js/cookie.js'
import NavHeader from "../../views/home/NavHeader.vue";
import axios from 'axios'
export default {
data(){
    return{
       email:'',
       event:'',
	     id:'',
       infoUser:'',
       loginUser:'',
       eventType:'',
       comment:'',
       commentList:[],
       nowDate:'',
       current: 1,
       pageSize: 3,
       total:null,
    }
},
  mounted: function() {
    this.eventById();
    this.commentLists();
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
  handleClick(val){
    this.current=val;
    this.commentLists();
  },
  getUserByEmail() {
    var param = {
      email:this.email,
    };
    axios.get("http://localhost:8080/user/getUserByEmail",{
      params:param
    }).then(result => {
      let res = result.data;
      console.log(res);
      this.loginUser = res;
    });
  },
  submit(){
      console.log(111);
      this.nowDate = new Date();
    axios.post('http://localhost:8080/comment/addComment',{
      eventid:this.$route.params.id,
      commentid:this.loginUser.id,
      content:this.comment,
      commenttime:this.nowDate
    },{
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    }).then((res)=>{
        this.comment='',
        this.commentLists();
    })
  },
	eventById(){
		var param={
          id:this.$route.params.id
		}
	this.$axios.get('http://localhost:8080/event/getEvent',{
		params:param
	}).then(res=>{
         console.log(res.data);
         this.event=res.data;
         this.infoUser = res.data.user;
         this.eventType = res.data.eventType;

	});
	},
  commentLists(){
	    var param={
        page: this.current,
        pageSize: this.pageSize
        };
    this.$axios.get("http://localhost:8080/comment/getComments",{
        params:param
    }).then(result => {
      let res = result.data;
      console.log(res);
      this.total=res.total;
      this.commentList = res.list;
    });
  },
},
components:{
  NavHeader
}
}
</script>
<style scoped>
  .c43 {
    width: 630px;
    overflow: hidden;
    margin: 0px auto;
    padding-top: 40px
  }

  .c40 {
    text-align: center;
    font-size: 25px;
    color: #000;
    margin-bottom: 30px
  }

  .c41 {
    text-align: center
  }

  .c41 {
    font-size: 21px;
    color: #666;
    display: inline-block
  }

  .c41 span {
    font-size: 14px
  }

  .c41 ul {
    display: inline-block;
    float: left
  }

  .c41 ul li {
    margin-right: 9px;
    float: left
  }
  .c42 {
    margin-top: 19px;
    overflow: hidden;
  }

  .c42 a {
    display: block;
    padding: 0px 12px;
    height: 25px;
    line-height: 25px;
    border: solid 1px #EBEBEB;
    font-size: 14px;
    font-weight: bold;
    color: #2D8CFD;
    float: right;
    margin-right: 8px;
    border-radius: 5px
  }

  .c44 {
    font-size: 14px;
    color: #9B9B9B;
    line-height: 20px;
    margin: 10px 0 27px 0
  }
  .support {
    background: #fff;
    border-radius: 5px;
    margin-bottom: 65px;
    overflow: hidden
  }

  .support .c5 {
    padding: 15px
  }

  .support .c5>strong {
    font-size: 26px;
    color: #2b2b2b;
    display: block;
    margin-bottom: 2px
  }

  .support .c5>span {
    color: #2b2b2b;
    font-size: 14px
  }

  .support .c1 {
    height: 8px;
    background: #d9d9de;
    border-radius: 10px;
    overflow: hidden;
    margin: 18px 0 5px 0
  }

  .support .c1 p {
    height: 8px;
    background: #2d8cfd
  }

  .support .c2 {
    margin-bottom: 10px;
    overflow: hidden
  }

  .support .c2 strong {
    font-size: 14px;
    color: #6a6a6a;
    float: left
  }

  .support .c2 span {
    font-size: 13px;
    color: #6a6a6a;
    float: right
  }

  .support .c3 {
    height: 35px;
    background: url(http://assets.demohour.com/assets/196-a469ef753b8dbccfdb2a38a4a14e7fbeb8d91da7cbbf156e89543c4b7319aaa1.png) no-repeat left center;
    padding-left: 30px;
    color: #6a6a6a;
    font-size: 14px;
    padding-top: 5px;
    line-height: 15px
  }

  .support .c3 span {
    display: block;
    font-size: 11px;
    color: #bbb;
    margin-top: 2px
  }

  .support .c4 {
    height: 33px;
    background: #d2d2d2;
    font-size: 13px;
    color: #fff;
    line-height: 33px
  }

  .support .c4>span {
    background: url(http://assets.demohour.com/assets/159-5102a77f0c426a0fd7c11f90fc7dd6763121e72896d3ed05280ca7cac20e827d.png) repeat;
    display: block;
    float: left;
    text-align: center;
    width: 75px
  }

  .support .c4>span.c6 {
    background: #999
  }

  .support .c4 p {
    text-align: center
  }
  .project-initiator {
    width: 214px;
    height: 153px;
    padding: 20px 20px 17px 20px;
    overflow: hidden;
    margin-bottom: 15px;
    border-radius: 5px
  }

  .project-initiator dt,
  .project-initiator dd {
    width: 150px;
    float: right
  }

  .project-initiator dd.c8 {
    width: 50px;
    height: 50px;
    float: left
  }

  .project-initiator dd.c8>a {
    width: 50px;
    height: 50px;
    display: block
  }

  .project-initiator dd.c8 img {
    width: 50px;
    height: 50px;
    display: block;
    border-radius: 50%
  }

  .project-initiator dt {
    line-height: 17px;
    max-height: 34px;
    overflow: hidden;
    font-size: 13px;
    color: #A9A9A9;
    margin: 5px 0
  }

  .project-initiator dt>a {
    font-size: 13px;
    color: #417505
  }

  .project-initiator dd.c9 {
    line-height: 20px;
    font-size: 13px;
    color: #999
  }

  .project-initiator dd.c9>a {
    width: 65px;
    height: 18px;
    line-height: 18px;
    color: #fff;
    background: #d7d528 url(http://assets.demohour.com/assets/197-9a2ee8e90af7894ad57edb506fdd8d3950305f281cba08c93229741457ad00be.jpg) no-repeat 6px center;
    padding-left: 26px;
    float: left;
    margin-right: 7px;
    border-radius: 5px;
    font-size: 12px
  }

  .project-initiator dd.c9 span a {
    width: 65px;
    height: 18px;
    line-height: 18px;
    overflow: hidden;
    display: block;
    float: left;
    color: #fff;
    font-size: 12px;
    border-radius: 5px;
    text-align: center;
    background: #d7d528
  }

  .project-initiator dd.c9 span a.c83 {
    background: #eee url(http://assets.demohour.com/assets/178-cddd27efd1de6532f43aa0adbad241b36304e4832970502e86a5983548478dcf.png) no-repeat 5px center;
    width: 50px;
    padding-left: 15px;
    color: #666
  }

  .project-initiator dd.c9 span a.c84 {
    background: #eee url(http://assets.demohour.com/assets/179-e628c98c1c6bbd6344f72be8c44507d9990303e93de2d5bf896ef8134d5102eb.png) no-repeat 5px center;
    width: 55px;
    padding-left: 18px;
    color: #666
  }
  .content{
    margin-left: 200px;
    margin-right: 200px;
    height: 1000px;
    width:1000px;
  }
  .left-content{
    width:700px;
    height: 800px;
    float: left;
    background-color: inherit;
  }
  .right-content{
    margin-left:6px;
    width:288px;
    height: 800px;
    float: left;
  }
  .content-tab{
    height:400px;
  }
  .c179 a {
    color: #4a4a4a;
    font-size:18px;
    margin-left: 15px;
    margin-right:15px;
  }
  .c62 span {
    float: left;
    font-size:14px;
    margin-left: 15px;
    margin-right:15px;
  }
  .c64{
    float: right;
    margin-right:15px;
  }
  /*评论框*/
 .commemtlist {
    padding: 10px;
  }

 .commemtlist dl {
    padding: 20px 0;
    border-bottom: 1px solid #D2D2D2;
  }

 .commemtlist dl dt {
    float: left;
    text-align: center;
    margin-right: 15px;
  }

 .commemtlist dl dt img {
    height: 50px;
    width: 50px;
    border-radius: 25px;
  }

 .commemtlist dl dd {
    padding-bottom: 10px;
  }

 .commemtlist .btbar span {
    margin-right: 15px;
    font-size: 10px;
  }

 .commemtlist .btbar .red strong {
    color: red;
    margin: 0 3px;
    font-weight: normal;
    cursor: pointer;
  }

 .commemtlist .username {
    display: block;
    font-size: 12px;
    text-align: center;
  }

 .commemtlist .wordsbox textarea {
    height: 100px;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 10px;
    resize: none;
  }

 .commemtlist .wordsbox span {
    font-size: 13px;
    margin-right: 15px;
    text-decoration: underline;
    color: blue;
    cursor: pointer;
  }

 .commemtlist .wordsbox input {
    float: right;
    width: 80px;
    height: 28px;
    text-align: center;
    color: #fff;
    background: red;
    border: none;
    border-radius: 3px;
  }
</style>
