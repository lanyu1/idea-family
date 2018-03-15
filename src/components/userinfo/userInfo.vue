<template>
  <div>
  <NavHeader></NavHeader>
    <div class="topContent">
      个人设置
    </div>
      <Tabs type="card" :animated="false">
        <TabPane label="个人资料">
          <Form :model="formItem" :label-width="80">
            <FormItem label="显示昵称">
              <Input v-model="formItem.nikename" placeholder="Enter something..."></Input>
            </FormItem>
            <FormItem label="爱好">
              <Input v-model="formItem.specialty" placeholder="Enter something..."></Input>
            </FormItem>
            <FormItem label="个人描述">
              <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
            </FormItem>
            <FormItem>
              <Button type="primary" @click="submitInfo">保存最新的设置</Button>
            </FormItem>
          </Form>
        </TabPane>
        <TabPane label="账号密码">
          <Form :model="formItem1" :label-width="80">
            <FormItem label="登录邮箱">
              <Input v-model="formItem1.email"  placeholder="Enter something..."></Input>
            </FormItem>
            <FormItem label="新密码">
              <Input v-model="formItem1.pwd" type="password" placeholder="至少需要6个字符"></Input>
            </FormItem>
            <FormItem label="确认密码">
              <Input v-model="formItem1.newpwd" type="password" placeholder="与上面保持吻合哦"></Input>
            </FormItem>
            <FormItem>
              <Button type="primary" @click="updatePwd">保存最新的设置</Button>
            </FormItem>
          </Form>
        </TabPane>
        <TabPane label="头像上传">
        </TabPane>
      </Tabs>

  </div>
</template>
<script>
  /*引入公共方法*/
  import { setCookie,getCookie,delCookie } from '../../assets/js/cookie.js'
  import NavHeader from "../../views/home/NavHeader.vue";
  import axios from 'axios'
  export default{
      data(){
          return{
            formItem: {
              id:null,
              nikename: '',
              specialty: '',
              textarea: '',

            },
            formItem1:{
                email:'',
                pwd:'',
                newpwd:''
            },
            email:'',
            user:''
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
          console.log(res);
          this.user = res;
          this.formItem.id =res.id;
          this.formItem.nikename = res.nikeName;
          this.formItem.specialty = res.specialty;
          this.formItem.textarea =res.description;
          this.formItem1.email = res.email;

        });
      },
      submitInfo(){
        axios.put('http://localhost:8080/user/updateUser',{
            id:this.formItem.id,
            nikeName:this.formItem.nikename,
            specialty:this.formItem.specialty,
            description:this.formItem.textarea
        },{
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          }
        }).then((res)=>{
          this.$Message.success('更新成功!');
        })
      },
      updatePwd(){
          if(this.formItem1.pwd!=this.formItem1.newpwd){
            this.$Message.error('两次输入的密码不一致请重新输入！');
          }else{
            axios.put('http://localhost:8080/user/updateUser',{
              id:this.formItem.id,
              password:this.formItem1.pwd
            },{
              headers: {
                'Content-Type': 'application/json;charset=UTF-8'
              }
            }).then((res)=>{
              this.$Message.success('修改成功!');
              this.$router.push({
                path:"/login"
              });
            })
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
<style>
  .topContent{
    margin-left:200px;
    text-align: center;
    margin-right:200px;
    height:40px;
    font-size:24px;
  }
  .ivu-tabs{
    margin-left: 200px;
    margin-right:200px;
  }
</style>
