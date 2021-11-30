<template>
<div>
  <el-container>

    <el-header style="text-align: right; font-size: 12px">

      <span> <h1>LibraryManagementSystem</h1></span>
    </el-header>
    <el-container>
      <el-aside style="padding-top: 30px" width="200px">
        <el-menu style="padding-top: 0px" @select="menuClick" :default-openeds="['1', '2','3']">
          <el-submenu  index="1">
            <template slot="title"><i class="el-icon-edit-outline"></i>采编部</template>
            <el-menu-item-group>

              <el-menu-item index="/Entrybook">图书录入</el-menu-item>
              <el-menu-item index="Updatebook">图书管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title"><i class="el-icon-set-up"></i>办公室</template>
            <el-menu-item-group>
              <el-menu-item index="/Entryuser">用户添加</el-menu-item>
              <el-menu-item index="/Updateuser">用户管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-main>
        <div style="width:100%; height: 510px;background: #faf4ee">
          <el-row>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><div class="grid-content gray"></div></el-col>
            <el-col :span="6"><div class="grid-content gray"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          </el-row>
          <el-breadcrumb separator-class="el-icon-arrow-right" v-if="this.$router.currentRoute.path!='/Manager'">
            <el-breadcrumb-item :to="{ path: '/Manager' }"><h5>管理员首页</h5></el-breadcrumb-item>

          </el-breadcrumb>
          <router-view />
        </div>
      </el-main>
    </el-container>
  </el-container>
  <Footer></Footer>
</div>
</template>

<script>
import Footer from "../Footer";
export default {
  name: "Manager",
  components:{
    Footer,
  },
  methods:{
    menuClick(index){
      this.$router.push(index);
    }
  }
}
</script>

<style scoped>
.el-header {
  background-color: #bb9059;
  color: #333;
  line-height: 60px;
}
</style>
