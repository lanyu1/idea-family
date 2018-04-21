<template>
  <div>
      <Tabs class="tabs" @on-click="handleClickTab">
        <TabPane label="最新" icon="ios-flag">
         <ul class="cardList">
					<li class="programCard" v-for="(item,index) in eventListByTime" :key="index">
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
        </TabPane>
        <TabPane label="民宿" icon="social-windows">
        <div>
         <ul class="cardList">
					<li class="programCard" v-for="(item,index) in eventListByType" :key="index">
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
          <Page :total=this.total1 :pageSize="6" :current="1" @on-change="handleClick" show-elevator></Page>
        </div>
        </TabPane>
        <TabPane label="餐饮" icon="social-tux">
                <div>
         <ul class="cardList">
					<li class="programCard" v-for="(item,index) in eventListByType" :key="index">
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
         <Page :total=this.total1 :pageSize="6" :current="1" @on-change="handleClick" show-elevator></Page>
        </div>
        </TabPane>
        <TabPane label="农业" icon="social-tux">
                <div>
         <ul class="cardList">
					<li class="programCard" v-for="(item,index) in eventListByType" :key="index">
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
           <Page :total=this.total1 :pageSize="6" :current="1" @on-change="handleClick" show-elevator></Page>
        </div>
        </TabPane>
        <TabPane label="休闲" icon="social-tux">
          <div>
         <ul class="cardList">
					<li class="programCard" v-for="(item,index) in eventListByType" :key="index">
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
            <Page :total=this.total1 :pageSize="6" :current="1" @on-change="handleClick" show-elevator></Page>
        </div>
        </TabPane>
    </Tabs>
  </div>
</template>
<script>
import axios from "axios";
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
</style>


