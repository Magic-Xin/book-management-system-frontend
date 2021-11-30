<template>
<div>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="书名">
      <el-input v-model="form.bookname"></el-input>
    </el-form-item>
    <el-form-item label="作者">
      <el-input v-model="form.author"></el-input>
    </el-form-item>
    <el-form-item label="ISBN">
      <el-input v-model="form.isbn"></el-input>
    </el-form-item>
    <el-form-item label="提交人">
      <el-col :span="11">
        <el-input v-model="form.stdname" placeholder="姓名"></el-input>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-input v-model="form.stdnumber" placeholder="学号"></el-input>
      </el-col>
    </el-form-item>

    <el-form-item label="邮箱">
      <el-input  v-model="form.email"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即提交</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
export default {
  name: "Bookregister",
  data() {
    return {
      form: {
        bookname: '',
        suthor: '',
        isbn: '',
        stdname: '',
        stdnumber: '',
        email: '',
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  }


}
</script>

<style scoped>

</style>
