<template>
<div class="createEvent">
<NavHeader></NavHeader>
<div class="init-page"> <div class="top"> <img src="../../../static/image/init-top-bg.png"/> </div>
</div>
<div class="form">
 <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <FormItem label="项目类型" prop="type">
            <RadioGroup v-model="formValidate.type">
                <Radio label="1">民宿</Radio>
                <Radio label="2">餐饮</Radio>
                <Radio label="3">农业</Radio>
                <Radio label="4">休闲</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="创建日期" prop="createtime">
            <DatePicker type="date" placeholder="请选择日期" v-model="formValidate.createtime"></DatePicker>
        </FormItem>
        <FormItem label="头像上传" prop="photoname" >
        <div class="demo-upload-list" v-for="item in uploadList">
        <template v-if="item.status === 'finished'">
            <img :src="item.url">
            <div class="demo-upload-list-cover">
                <Icon type="ios-eye-outline" @click.native="handleView(item.name)"></Icon>
                <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
            </div>
        </template>
        <template v-else>
            <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
        </template>
    </div>
    <Upload
        ref="upload"
        :show-upload-list="false"
        :on-success="handleSuccess"
        :format="['jpg','jpeg','png']"
        :max-size="2048"
        :on-format-error="handleFormatError"
        :on-exceeded-size="handleMaxSize"
        :before-upload="handleBeforeUpload"
        multiple
        type="drag"
        action="http://localhost:9090/upload/img"
        style="display: inline-block;width:58px;">
        <div style="width: 58px;height:58px;line-height: 58px;">
            <Icon type="camera" size="20"></Icon>
        </div>
    </Upload>
    <Modal title="View Image" v-model="visible">
        <img :src="'http://localhost:8089/' + imgName " v-if="visible" style="width: 100%">
    </Modal>
        </FormItem>
        <FormItem label="项目名称" prop="title">
            <Input v-model="formValidate.title" placeholder="请输入项目名称"></Input>
        </FormItem>
        <FormItem label="区域选择" prop="city">
          <Cascader :data="data" v-model="formValidate.data"></Cascader>
        </FormItem>
        <FormItem label="项目描述" prop="instruction">
            <Input v-model="formValidate.instruction" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请对你的项目进行简单的描述..."></Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
            <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">取消</Button>
        </FormItem>
    </Form>
    </div>
</div>
</template>
<script>
import { setCookie,getCookie,delCookie } from '../../assets/js/cookie.js'
import NavHeader from "../../views/home/NavHeader.vue";
import axios from "axios";
export default {
   data () {
            return {
                formValidate: {
                    founderid:null,
                    eventId:'',
                    title: '',
                    type:'',
                    province:'',
                    city: '',
                    data:[],
                    photoname:'',
                    createtime: '',
                    instruction: '',
                     support:0
                },
                email:'',
                user:'',
                imgName: '',
                visible: false,
                uploadList: [],
                value: [],
                data: [{
                    value: '北京',
                    label: '北京',
                    children: [
                        {
                            value: '北京',
                            label: '北京'
                        }
                    ]
                },
                {
                    value: '上海',
                    label: '上海',
                    children: [
                        {
                            value: '上海',
                            label: '上海'
                        }
                    ]
                },
                 {
                    value: '江苏',
                    label: '江苏',
                    children: [
                        {
                            value: '南京',
                            label: '南京',
                        },
                        {
                            value: '苏州',
                            label: '苏州',
                        }
                    ]
                },
                {
                    value: '浙江',
                    label: '浙江',
                    children: [
                        {
                            value: '杭州',
                            label: '杭州',
                        },
                        {
                            value: '温州',
                            label: '温州',
                        }
                    ]
                },
                 {
                    value: '福建',
                    label: '福建',
                    children: [
                        {
                            value: '厦门',
                            label: '厦门',
                        },
                        {
                            value: '福州',
                            label: '福州',
                        }
                    ]
                }
                ],
                ruleValidate: {
                    title: [
                        { required: true, message: '项目名称不能为空', trigger: 'blur' }
                    ],
                    type: [
                        { required: true, message: '项目类型不能为空', trigger: 'blur ' }
                    ],
                    createname: [
                        { required: true, type: 'date', message: '请输入项目日期', trigger: 'blur' }
                    ],
                    instruction: [
                        { required: true, message: '请输入项目介绍', trigger: 'blur' },
                        { type: 'string', min: 10, message: '至少10个字符', trigger: 'blur' }
                    ]
                }
            }
        },
    methods:{
        createEvent(event){
           axios.post('http://localhost:9090/event/addEvent',JSON.stringify(event),{
           headers: {
                        'Content-Type': 'application/json;charset=UTF-8'
                    }
           }).then((res)=>{
             this.selectEvent(event.title);
        })
        },
      createTeam(team){
        axios.post('http://localhost:9090/team/addTeam',JSON.stringify(team),{
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          }
        }).then((res)=>{

        })
      },
      selectEvent(val){
          var param={
              title:val
          }
          this.$axios.get('http://localhost:9090/event/selectByTitle',{
              params:param
          }).then(res=>{
              this.eventId=res.data.id;
            let team = {
              'founderid':res.data.founderid,
              'eventid':this.eventId,
              'teamname':res.data.title,
              'teammatenumber':1,
              'maxteammatenumber':10,
              'notice':"这是一个公告",
              'createtime':res.data.createtime,
              'photoname':res.data.photoname,
              'description':res.data.instruction
            }
            this.createTeam(team);
          });
      },
             handleView (name) {
                this.imgName = name;
                this.visible = true;
            },
            handleRemove (file) {
                const fileList = this.$refs.upload.fileList;
                this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
            },
            handleSuccess (res, file) {
                console.log(res);
                file.url = 'http://localhost:8089/'+res;
                this.formValidate.photoname = res;
            },
            handleFormatError (file) {
                this.$Notice.warning({
                    title: 'The file format is incorrect',
                    desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
                });
            },
            handleMaxSize (file) {
                this.$Notice.warning({
                    title: 'Exceeding file size limit',
                    desc: 'File  ' + file.name + ' is too large, no more than 2M.'
                });
            },
            handleBeforeUpload () {
                const check = this.uploadList.length < 5;
                if (!check) {
                    this.$Notice.warning({
                        title: 'Up to five pictures can be uploaded.'
                    });
                }
                return check;
            },
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        console.log(this.$refs[name].model);
                        this.formValidate.city=this.$refs[name].model.data[0];
                        this.formValidate.province=this.$refs[name].model.data[1];
                        this.formValidate.founderid=this.user.id;
                        this.formValidate.title = this.$refs[name].model.title;
                        console.log(this.formValidate);
                        this.createEvent(this.formValidate);
                        this.$Message.success('创建成功!');
                        this.formValidate='';
                     this.$router.push({
                            path:"/itemDetail"
                        });
                    } else {
                        this.$Message.error('创建失败!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            },
      getUserByEmail() {
        var param = {
          email:this.email
        };
        axios.get("http://localhost:9090/user/getUserByEmail",{
          params:param
        }).then(result => {
          let res = result.data;
          this.user = res;
        });
      },
    },
    mounted () {
            this.uploadList = this.$refs.upload.fileList;

      /*页面挂载获取保存的cookie值，渲染到页面上*/
      let uemail = getCookie('email');
      this.email = uemail;
      /*如果cookie存在，则跳转到登录页*/
      if(uemail!=""){
        this.getUserByEmail();
      }
        },
    components:{
        NavHeader
    }
}
</script>
<style scoped>
.createEvent{
    width:100%;
    height:300px;
}
img{
    width:1349px;
    height:281px;
}
.form{
    margin-left:300px;
    width:700px;
    margin-right:300px;
}
.ivu-radio-group-item{
    margin-right:50px;
}
.ivu-btn-primary{
    margin-left:50px;
}
 .demo-upload-list{
        display: inline-block;
        width: 60px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        border: 1px solid transparent;
        border-radius: 4px;
        overflow: hidden;
        background: #fff;
        position: relative;
        box-shadow: 0 1px 1px rgba(0,0,0,.2);
        margin-right: 4px;
    }
    .demo-upload-list img{
        width: 100%;
        height: 100%;
    }
    .demo-upload-list-cover{
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,.6);
    }
    .demo-upload-list:hover .demo-upload-list-cover{
        display: block;
    }
    .demo-upload-list-cover i{
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        margin: 0 2px;
    }
</style>
