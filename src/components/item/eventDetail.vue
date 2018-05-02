<template>
<div>
<NavHeader></NavHeader>
  <div class="content">
    <div class="left-content">
     <div class="title">
       <div class="c43">
         <div class="c40">{{event.title}}</div>
         <div class="c42">
           <a href="#">加入小组</a>
           <a href="#">{{eventType.typecontent}}</a>
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
           <div id='comment'>
        <div class='newComment'>
            <textarea spellcheck='false' placeholder='说点什么吧...' v-model='content' id='reply' ref='textBox'></textarea>
            <div class="inputBox">
                <!-- <button @click='summit' :disabled='summitFlag'>
                    <span>{{summitFlag ? '提交中...' : '发布评论'}}</span>
                </button> -->
                <Button type="success" @click='summit' :disabled='summitFlag'>
                   <span>{{summitFlag ? '提交中...' : '发布评论'}}</span>
                </Button>
            </div>
        </div>
        <div class='allComments'>
            <div class='summary'>
                <p>评论数 {{commentList.length}}</p>
                <p>
                   <!-- <span @click="getAllComments({id: $route.params.id})">最早 </span>|
                   <span @click="getAllComments({id: $route.params.id, sort: 'date'})">最新 </span>|
                   <span @click="getAllComments({id: $route.params.id, sort: 'like'})"> 最热</span> -->
                </p>
            </div>
            <div class='comments' v-for="(comment,index) in commentList" :key="index">
                <div id='info' :class='comment.imgName'>
                    <p class='commentName'>#{{index + 1}} <span>{{comment.user.nikeName}}</span></p>
                    <p class='text'>{{comment.content}}</p>
                    <div class='options'>
                        <p class='commentDate'>{{comment.commenttime}}</p>
                        <a href='#comment' data-scroll>
                            <span @click='reply(comment.user.nikeName)'>
                                <i class='iconfont icon-huifu'></i>回复
                            </span>
                        </a>
                        <!-- <p @click='addLike(comment._id, index)'>
                            <i class='iconfont icon-like' :class='{activeLike: likeArr.indexOf(index) !== -1}'>
                            </i> {{comment.like}}
                        </p> -->
                    </div>
                </div>
            </div>
            <p v-show='commentList.length === 0' class='nocomment'>哎，没人理我 :()</p>
        </div>
    </div>
            <Page :total=this.total :pageSize="4" :current="1" @on-change="handleClick" show-elevator></Page>
          </TabPane>
          <TabPane label="支持" icon="thumbsup">
            <div id='comment'>
        <div class='newComment'>
            <textarea spellcheck='false' placeholder='说点什么吧...' v-model='content' id='reply' ref='textBox'></textarea>
            <div class="inputBox">
                <!-- <button @click='summit' :disabled='summitFlag'>
                    <span>{{summitFlag ? '提交中...' : '发布评论'}}</span>
                </button> -->
                <Button type="success" @click='summit' :disabled='summitFlag'>
                   <span>{{summitFlag ? '提交中...' : '发布评论'}}</span>
                </Button>
            </div>
        </div>
        <div class='allComments'>
            <div class='summary'>
                <p>评论数 {{commentList.length}}</p>
            </div>
            <div class='comments' v-for="(comment,index) in commentList" :key="index">
                <div id='info' :class='comment.imgName'>
                    <p class='commentName'>#{{index + 1}} <span>{{comment.user.nikeName}}</span></p>
                    <p class='text'>{{comment.content}}</p>
                    <div class='options'>
                        <p class='commentDate'>{{comment.commenttime}}</p>
                        <a href='#comment' data-scroll>
                            <span @click='reply(comment.user.nikeName)'>
                                <i class='iconfont icon-huifu'></i>回复
                            </span>
                        </a>
                        <!-- <p @click='addLike(comment._id, index)'>
                            <i class='iconfont icon-like' :class='{activeLike: likeArr.indexOf(index) !== -1}'>
                            </i> {{comment.like}}
                        </p> -->
                    </div>
                </div>
            </div>
            <p v-show='commentList.length === 0' class='nocomment'>哎，没人理我 :()</p>
        </div>
    </div>
          </TabPane>
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
          <a href="#" target="_blank" class="v3"><img v-lazy="'/static/image/'+infoUser.headPhoto"><i></i></a>
        </dd>
        <dt><a href="#">{{infoUser.nikeName}}</a>
        </dt>
        <dd class="c9">
          <a title="私信给 91悦读会" href="#" class="action-popup-login action-popup-verify action-popup-message message">发私信</a>
          <span class="action-follow followed_1633633 hide" data-action-target="1633633" style="display: none;"><a class="c83" href="#" data-remote="true"><span>已关注</span></a>
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
        summitFlag: false,
        name: '',
        address: '',
        content: '',
        imgName: '',
       










      replyContent:'',
       showReply:false,
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
    /*如果cookie不存在，则跳转到登录页*/
    if(uemail!=""){
      this.showLogin=true;
      this.getUserByEmail();
    }
  },
methods:{
  summit(){
      if(!this.content){
        this.$Message.warning("您还没有输入要评论的信息");
      }else{
        if(this.email==""){
          this.$Message.error("先登录才能发表评论");
          this.$router.push({
          path:'/login'
        });
      }else{
      this.nowDate = new Date();
    axios.post('http://localhost:9090/comment/addComment',{
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
        this.$Message.success("评论成功");
        this.commentLists();
    })
      }
      }
  },
  reply(name){
    alert(name);
    this.showReply=true;
    this.content = '@' + name + ': ';
    // this.$refs.textBox.focus();
  },
  handleClick(val){
    this.current=val;
    this.commentLists();
  },
  getUserByEmail() {
    var param = {
      email:this.email,
    };
    axios.get("http://localhost:9090/user/getUserByEmail",{
      params:param
    }).then(result => {
      let res = result.data;
      console.log(res);
      this.loginUser = res;
    });
  },
  submit(){
      if(this.email==""){
          this.$Message.error("先登录才能发表评论");
          this.$router.push({
          path:'/login'
        });
      }else{
      this.nowDate = new Date();
    axios.post('http://localhost:9090/comment/addComment',{
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
        this.$Message.success("评论成功");
        this.commentLists();
    })
    }
  },
	eventById(){
		var param={
          id:this.$route.params.id
		}
	this.$axios.get('http://localhost:9090/event/getEvent',{
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
        eventid:this.$route.params.id,
        page: this.current,
        pageSize: this.pageSize
        };
    this.$axios.get("http://localhost:9090/comment/getComments",{
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
<style lang='scss' rel='stylesheet/scss' scoped>
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

#comment {
    margin: 0.875rem auto 0.625rem;
    text-align: left;
    .newComment {
        position: relative;
        width: 100%;
        textarea {
            color: #000;
            font-size: 1.125rem;
            padding: 0.5rem;
            border-radius: 0.625rem;
            width: calc(100% - 18.5rem);
            margin-left: 1.625rem;
            height: 6.5rem;
            resize: none;
            background: transparent;
            outline: none;
            font-family: Georgia, 'Times New Roman', 'Microsoft YaHei', '微软雅黑',  STXihei, '华文细黑',  serif;
        }
        .inputBox {
           margin-left: 1.625rem;
        }
    }
    .allComments {
         width: 100%;
         margin: 0.875rem auto 0.625rem;
        .summary {
            display: flex;
            justify-content: space-between;
            background: rgba(245, 245, 245, 0.5);
            padding: 0.625rem;
            border-radius:  0.3125rem;
            span {
                cursor: pointer;
                &:hover {
                    color: #3c763d;
                 }
            }
        }
        .comments {
            position: relative;
            padding: 0.3125rem;
            margin-top: 0.625rem;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            #info {
                width: 70%;
                border: 0.125rem solid #cccccc;
                border-radius: 0.3125rem;
                padding: 0.625rem;
                color: #000;
                .commentName {
                    font-size: 1.125rem;
                    margin-bottom: 0.3125rem;
                    span {
                        color: #3c763d;
                    }
                }
                .text {
                    overflow: hidden;
                    margin-top: 0.625rem;
                    margin-left: 0.625rem;
                    margin-bottom: 0.625rem;
                }
                .options {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: flex-end;
                    text-align: right;
                    a {
                        color: #000;
                        margin-right: 0.625rem;
                        i.icon-huifu {
                            margin-right: 0.3125rem;
                        }
                        &:hover {
                            color: #3c763d;
                         }
                    }
                    p {
                        display: inline-block;
                        margin-right: 0.3125rem;
                        cursor: pointer;
                        &:hover {
                             color: #3c763d;
                         }
                    }
                }
                img {
                    width: 3.75rem;
                    height: 3.75rem;
                    position: absolute;
                    top: 50%;
                    margin-top: -1.875rem;
                    border: 0.125rem solid #cccccc;
                    border-radius: 0.3125rem;
                }
            }
        }
        .nocomment {
            margin: 1.25rem auto;
            text-align: center;
        }
    }
}
.activeLike {
    color: #ffc520;
}
.reviewer {
    margin-left: 6.25rem;
    img {
        left: 0.625rem;
    }
    &:after {
         position: absolute;
         left: 5.55rem;
         top: 50%;
         margin-top: -0.4375rem;
         content: '';
         width: 0;
         height: 0;
         border: 0.625rem solid transparent;
         border-right-color: #000000;
         z-index: 3;
     }
    &:before {
         position: absolute;
         left: 5.4rem;
         top: 50%;
         margin-top: -0.4375rem;
         content: '';
         width: 0;
         height: 0;
         border: 0.625rem solid transparent;
         border-right-color: #cccccc;
         z-index: 2;
     }
}
.me {
    position: relative;
    margin-left: calc(40% - 7.625rem);
    img {
        right: -5.9375rem;
    }
    &:after {
         position: absolute;
         right: -1.15rem;
         top: 50%;
         margin-top: -0.5rem;
         content: '';
         width: 0;
         height: 0;
         border: 0.625rem solid transparent;
         border-left-color: #000000;
         z-index: 3;
     }
    &:before {
         position: absolute;
         right: -1.3rem;
         top: 50%;
         margin-top: -0.5rem;
         content: '';
         width: 0;
         height: 0;
         border: 0.625rem solid transparent;
         border-left-color: #cccccc;
         z-index: 2;
     }
}

@media screen and (max-width: 980px) {
    .newComment {
        img {
            display: none !important;
        }
        textarea {
            width: calc(100% - 0.875rem) !important;
            margin-left: 0 !important;
        }
        .inputBox {
            margin-left: 0 !important;
            input {
                width: 40% !important;
            }
        }
    }
}
</style>