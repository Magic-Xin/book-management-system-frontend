<template>
<div>


  <el-container>
    <el-main>
      <el-table :data="tableData"
                style="width: 100%"
                height="300">
      <el-table-column
        fixed
        prop="booknumber"
        label="序列号"
        width="200">
      </el-table-column>
        <el-table-column
          prop="bookname"
          label="书名"
          width="200">
        </el-table-column>
      <el-table-column
        prop="authorname"
        label="作者"
        width="150">
      </el-table-column>


      <el-table-column
        prop="publishing"
        label="出版社"
        width="250">
      </el-table-column>

      <el-table-column
        fixed="right"
        label="操作"
        width="150">
        <template >
          <el-button @click="details" type="text" size="small">查看详情</el-button>
          <el-button @click="borrow" type="text" size="small">借阅</el-button>
        </template>
      </el-table-column>
    </el-table></el-main>

  </el-container>
</div>
</template>

<script>
export default {
  name: "BookFound",
  methods:{
    details(){
      this.$router.push('/Bookdetails');
    },
    borrow(){
      this.$router.push('/Borrowbook');
    },
  },
  data() {
    return {
      tableData: [{

        bookname: '数据结构',
        booknumber: '001',
        authorname: 'somebody',
        publishing: 'somewhere',

      },
        {

          bookname: '数据结构',
          booknumber: '001',
          authorname: 'somebody',
          publishing: 'somewhere',

        },
        {

          bookname: '数据结构',
          booknumber: '001',
          authorname: 'somebody',
          publishing: 'somewhere',

        },
        {

          bookname: '数据结构',
          booknumber: '001',
          authorname: 'somebody',
          publishing: 'somewhere',

        },
        {

          bookname: '数据结构',
          booknumber: '001',
          authorname: 'somebody',
          publishing: 'somewhere',

        },
      ]
    }
  },
}
</script>

<style scoped>

</style>
