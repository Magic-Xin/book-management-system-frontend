<template>
  <div >
    <div class="grid-content head"><h1>LibraryManagementSystem</h1></div>
    <div style="width:100%; height: 400px;background: #faf4ee">
    <el-row>
      <el-col :span="24"><div class="grid-content origin"></div></el-col>
    </el-row>
    <el-form  :rules ="rules" ref="loginform" :model="loginform" class="loginContainer">
      <h3>系统登录</h3>
      <el-form-item prop="username">
        <el-input type="text" v-model="loginform.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="loginform.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-button type="primary" style="width:100%" @click="submitlogin">登录</el-button>
    </el-form>
  </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data(){
    return{
      loginform:{
        username:'sa',
        passward:'0',

      },
      loading:false,
      rules:{
        username:[{required:true,message:'请输入用户名',trigger:'blur'}],
        password:[{requied:true,message:'请输入密码',trigger:'blur'}],
      }

    }
  },
  methods:{
    submitlogin(){
      this.$refs.loginform.validate((valid) => {
        if (valid) {
          //this.loading=true;
          this.$router.replace('Student');
        } else {
          this.$message.error('请按正确需求输入');
          return false;
        }
      });
    }
  }

}
</script>

<style scoped>
.loginContainer{
  border-radius:15px;

  backgroud-clip: padding-box;
  margin: 100px auto;
  width: 350px;
  padding: 15px 35px 15px 35px;
  background: #fff;
  border: 1px solid #bb9059;
  box-shadow: 0 0 25px #cac6c6;
}
.grid-content {
  border-radius: 4px;
  min-height: 20px;
}
.origin{
  background: #faf4ee;
}
.el-row {
  margin-bottom: 10px;

}
.el-col {
  border-radius: 8px;
}
.head {
  background: #d09742;
}
</style>
