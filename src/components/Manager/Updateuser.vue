<template>
<div>
<el-container>
  <el-main>
  <el-table :data="tableData"
            style="width: 80%"
            height="300">
    <el-table-column
      type="selection"
      width="55">
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
      width="150">
    </el-table-column>
    <el-table-column
      prop="email"
      label="邮箱"
      width="200">
    </el-table-column>


    <el-table-column
      prop="phone"
      label="电话"
      width="150">
    </el-table-column>

    <el-table-column
      fixed="right"
      label="操作"
      width="150">
      <template >
        <el-button @click="updateuser()" type="text" size="small">编辑</el-button>
        <el-button @click="deleteuser()" type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
    <el-dialog
      title="编辑信息"
      :visible.sync="dialogVisible"
      width="50%">
      <div>
        <el-tag>姓名</el-tag>
        <el-input v-model="input1" class="updateinput"></el-input>
      </div>
     <div> <el-tag>学号</el-tag>
      <el-input v-model="input2" class="updateinput"></el-input>
     </div>
      <div>
        <el-tag>邮箱</el-tag>
        <el-input v-model="input4" class="updateinput"></el-input>
      </div>
      <div>
      <el-tag>电话</el-tag>
      <el-input v-model="input3" class="updateinput"></el-input>
      </div>

      <span slot="footer" class="dialog-footer">
    <el-button  size="small" @click="dialogVisible = false">取 消</el-button>
    <el-button size="small" type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
    </el-dialog>

  </el-main>
</el-container>
</div>
</template>

<script>
export default {
  name: "EntryUser",
  methods: {
    updateuser(/*index,data*/){
      this.dialogVisible = true;
    },
    deleteuser(/*index,data*/){

    }

  },
  data(){
    return{
      tableData: [{

        username: 'someone',
        usernumber: '18108040221',
        email: '1111111@163.com',
        phone: '1111111111',

      },
        ],
      dialogVisible:false
    }

  }
}
</script>

<style scoped>

.updateinput{
  width:200px;
  margin-left: 8px;
}
</style>
