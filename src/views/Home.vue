<template>
  <div class="views-home">
    <el-container>
      <el-header>
        <el-row type="flex" justify="space-between">
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <a href="/">
                <img src="../../public/logo.png" alt="logo" class="logo" />
              </a>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple-light">
              <h2>后台管理系统</h2>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple">
              <el-button type="warning" plain size="small">退出</el-button>
            </div>
          </el-col>
        </el-row>
      </el-header>

      <el-container>
        <!-- 侧边栏 -->
        <el-aside width="200px">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-setting"></i>
                <span>用户管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item @click="goUsers" index="1-1">用户列表</el-menu-item>
                <el-menu-item index="1-2">管理权限</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-service"></i>
                <span>客户管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1">客户列表</el-menu-item>
                <el-menu-item index="2-2">客户分类</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-user"></i>
                <span>个人信息</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="3-1">个人资料</el-menu-item>
                <el-menu-item index="3-2">登陆记录</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <!-- 主体内容 -->
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    goUsers(){
      this.$router.push('/users-list')
    }
  },
};
</script>

<style lang="scss">
$color333: #333;

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: $color333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: $color333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: $color333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.logo {
  margin-top: 15px;
  width: 130px;
}
</style>