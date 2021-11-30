<template>
<div>
     <h4>未找到图书信息</h4>
      <el-empty :image-size="100" description="点击提交缺书登记"></el-empty>
  <el-button @click="submit" type="primary">提交缺书登记</el-button>
      <router-view></router-view>


</div>
</template>

<script>
export default {
  name: "Bookmissed",
  methods:{
    submit(){
      this.$router.push("/Bookregister");
    }
  }
}
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;

}
.el-col {
  border-radius:8px;
}
.gray {
  background: #EAE3DBF9;
}
.bg-purple {
  background: #fffdf9;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
