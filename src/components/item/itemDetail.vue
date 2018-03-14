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
                <a  _v-528bc6ac="" @click="searchCity" data-name="北京">北京</a>
                <a  _v-528bc6ac="" @click="searchCity" data-name="上海">上海</a>
                <a  _v-528bc6ac="" @click="searchCity" data-name="杭州">杭州</a>
                <a  _v-528bc6ac="" @click="searchCity" data-name="南京">南京</a>
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
							<a target="_blank" href="https://www.kaishiba.com/project/detail/id/609202847F67E378E050190AFD017FDB"><img class="cardBg" v-lazy="'/static/image/'+item.photoname"></a>
							<div class="cardContent">
								<div class="cardBox"> <a class="title" target="_blank" href="https://www.kaishiba.com/project/detail/id/609202847F67E378E050190AFD017FDB">{{item.title}}</a>
								<a class="desc" target="_blank" href="https://www.kaishiba.com/project/detail/id/609202847F67E378E050190AFD017FDB">{{item.instruction}}</a>
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
					<Page :total=this.total :pageSize="6" :current="1" @on-change="handleClick"></Page>
        </div>

  </div>

</template>
<script>
import NavHeader from "../../views/home/NavHeader.vue";
import itemTabs from "../../views/item/itemTabs.vue";
import axios from "axios";
export default {
  data() {
    return {
      searchContent:null,
      searchContent1:null,
      eventListBySearch:[],
      current: 1,
      pageSize: 6,
      total:null,
      scity:''
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
        .get("http://localhost:8080/event/getSearchEvents", {
          params: param
        })
        .then(result => {
          let res = result.data;
          console.log(res);
          this.total=res.total;
          this.eventListBySearch = res.list;
        });
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
</style>


