<template>
  <div>
    <el-container>

      <el-header style="text-align: right; font-size: 12px">

        <span> <h1>LibraryManagementSystem</h1></span>
      </el-header>
      <el-container>

        <el-aside width="200px"  >
          <el-menu style="padding-top: 50px" @select="menuClick" :default-openeds="['1', '2']">
            <el-submenu style="padding-top: 30px"  index="1">
              <template slot="title"><i class="el-icon-reading"></i>查找图书</template>
              <el-menu-item-group>
                <el-menu-item index="/Searchbook">查找图书</el-menu-item>

              </el-menu-item-group>
            </el-submenu>

            <el-submenu style="padding-top: 30px" index="2" >
              <template slot="title"><i class="el-icon-search"></i>借出/归还</template>
              <el-menu-item-group>
                <el-menu-item index="/Borrowbook">借出图书</el-menu-item>
                <el-menu-item index="/Returnbook">归还图书</el-menu-item>


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
          <el-breadcrumb separator-class="el-icon-arrow-right" v-if="this.$router.currentRoute.path!='/Student'">
            <el-breadcrumb-item :to="{ path: '/Student' }"><h5>学生首页</h5></el-breadcrumb-item>

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

import Footer from "@/components/Footer";
export default {
  name: "Student",
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
