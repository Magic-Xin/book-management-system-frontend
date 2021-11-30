<template>
  <div>
    <el-container>
      <el-main>
        <el-input placeholder="请输入内容" v-model="input1" class="input-with-select">
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="书名" value="1"></el-option>
            <el-option label="序列号" value="2"></el-option>
            <el-option label="作者" value="3"></el-option>
          </el-select>
          <el-button  @click="searchClick" slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-main>
    </el-container>

    <el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
    </div>

</template>

<script>
//import BookFound from "./BookFound";
//import Bookmissed from "./Bookmissed";
export default {
  name: "Searchbook",
  methods: {
    searchClick() {
      this.$router.push("/Bookmissed");
    }
  },
  data() {
    return {
      input1: '',
      select: '',

    }
  },
  components:{
   // BookFound,
   // Bookmissed,
  }
}
</script>

<style>
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}

</style>
