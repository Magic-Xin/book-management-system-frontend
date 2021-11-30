<template>
  <div>
    <div>
      <el-form :inline="true" :model="formInline"  >
        <el-form-item >
          <el-input   v-model="formInline.user" placeholder="学生姓名" style="width: 100px" />
        </el-form-item>


        <el-form-item >
          <el-input s v-model="formInline.usernumber" placeholder="学号" style="width: 150px"/>
        </el-form-item>
        <el-form-item >
          <el-input  v-model="formInline.useremail" placeholder="邮箱" style="width: 200px"/>
        </el-form-item>
        <el-form-item >
          <el-input v-model="formInline.userphone" placeholder="电话" style="width: 200px"/>
        </el-form-item>
        <el-button type="primary" @click="onSubmit">添加</el-button>
      </el-form>
    </div>
<div>
    <el-container>
      <el-main>
        <el-table :data="tableData"
                  style="width: 85%"
                  height="300">
          <el-table-column>
          </el-table-column>
          <el-table-column
            fixed
            prop="username"
            label="姓名"
            width="100">
          </el-table-column>
          <el-table-column
            prop="usernumber"
            label="学号"
            width="200">
          </el-table-column>
          <el-table-column
            prop="email"
            label="邮箱"
            width="200">
          </el-table-column>


          <el-table-column
            prop="phone"
            label="电话"
            width="200">
          </el-table-column>

        </el-table>

      </el-main>
    </el-container>
</div>
  </div>
</template>

<script>
export default {
  name: "Entryuser",
  data(){
    return{
      tableData: [{

        username: 'someone',
        usernumber: '18108040221',
        email: '1111111@163.com',
        phone: '1111111111',

      },
      ],
      formInline: {
        user: '',
        usernumber: '',
        useremail:'',
        userphone:''
      }
    }

  }
}
</script>

<style scoped>
.addform{
  padding-left: 0px;
}

</style>
