<template>
<div>
  <el-container>
    <el-main>
      <el-table :data="tablesData"
                style="width: 100%"
                height="300">
        <el-table-column
          fixed
          prop="booknumber"
          label="序列号"
          width="120">
        </el-table-column>
        <el-table-column
          prop="bookname"
          label="书名"
          width="120">
        </el-table-column>
        <el-table-column
          prop="authorname"
          label="作者"
          width="120">
        </el-table-column>
        <el-table-column
          prop="publishing"
          label="出版社"
          width="150">
        </el-table-column>
        <el-table-column
          prop="location"
          label="位置"
          width="120">
        </el-table-column>
        <el-table-column
          prop="number"
          label="剩余量"
          width="100">
        </el-table-column>


        <el-table-column
          fixed="right"
          label="操作"
          width="100">
          <template >

            <el-button @click="borrow" type="text" size="small">借阅</el-button>
          </template>
        </el-table-column>
      </el-table></el-main>

  </el-container>
</div>
</template>

<script>
export default {
  name: "Bookdetails",
  data() {
    return {
      tablesData: [{

        bookname: '数据结构',
        booknumber: '001',
        authorname: 'somebody',
        publishing: 'somewhere',
        number:'50',
        location:'四层A407'

      },]
    }
  }
}
</script>

<style scoped>

</style>
