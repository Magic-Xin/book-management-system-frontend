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
            prop="bookname"
            label="书名"
            width="200">
          </el-table-column>
          <el-table-column
            prop="booknumber"
            label="书号"
            width="150">
          </el-table-column>
          <el-table-column
            prop="bookamount"
            label="数量"
            width="100">
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
            <el-tag>书名</el-tag>
            <el-input v-model="input1" class="updateinput"></el-input>
          </div>
          <div> <el-tag>书号</el-tag>
            <el-input v-model="input2" class="updateinput"></el-input>
          </div>
          <div>
            <el-tag>数量</el-tag>
            <el-input v-model="input4" class="updateinput"></el-input>
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
  name: "Updatebook",
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

        bookname: '计算机图形学',
        booknumber: '11111111',
        bookamount: '50',


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
