<template>
<div>

    <div class="grid-content head"><h1>LibraryManagementSystem</h1></div>

  <div style="width:100%; height: 400px;background: #faf4ee">
    <el-row>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content gray"></div></el-col>
      <el-col :span="6"><div class="grid-content gray"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    </el-row>

    <el-row>
      <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="8"><div class="grid-content gray"><h4>请选择你的身份</h4></div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
    </el-row>


    <el-row>
      <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="2"><div class="grid-content gray"></div></el-col>
      <el-col :span="2"><div class="grid-content gray"></div></el-col>
      <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
    </el-row>


    <el-button  style="width:25%;margin-bottom:50px;height:150px" @click="Clickstd"> 学生端<i class="el-icon-user-solid el-icon--bottom"></i></el-button>
    <el-button style="width:25%;margin-bottom:50px;height:150px" @click="Clickmng">管理端<i class="el-icon-s-custom el-icon--bottom"></i></el-button>




  </div>
<Hfooter></Hfooter>



</div>
</template>

<script>
import "./Hfooter"
import Hfooter from "@/components/Hfooter";
export default {
  name: "Home",
  data(){},
  methods:{
    Clickstd ()
    {
     this.$router.push('/Login')
    },
    Clickmng ()
    {
      this.$router.push('/Login2')
    }
    },




  components:{
    Hfooter

  }
}
</script>

<style scoped>
.el-row {
  margin-bottom: 10px;

}
.el-col {
  border-radius:8px;
}
.head {
  background: #d09742;
}
.bg-purple {
  background: #fffdf9;
}
.bg-purple-light {
  background: #FFFDF9FF;
}
.grid-content {
  border-radius: 4px;
  min-height: 60px;
}
.row-bg {
  padding: 10px 0;
  background-color:#f9fafc;
}
.gray {
  background: #EAE3DBF9;
}
.origin{
  background: #faf4ee;
}


</style>
