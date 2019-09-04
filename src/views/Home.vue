<template>
  <div class="views-home">
    <el-container>
      <!-- 头部 -->
      <el-header>
        <el-row type="flex" justify="space-between">
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <router-link :to="{path:'/'}">
                <img src="../../public/logo.png" alt="logo" class="logo" />
              </router-link>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple-light">
              <h2 class="imainTitl">后台管理系统</h2>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple">
              <el-button type="warning" @click.stop="tuichu" plain size="small">退出</el-button>
            </div>
          </el-col>
        </el-row>
      </el-header>

      <el-container>
        <!-- 侧边栏 -->
        <el-aside width="200px">
          <el-menu :router="true" default-active="2" class="el-menu-vertical-demo">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-setting"></i>
                <span>用户管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="users-list">用户列表</el-menu-item>
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
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    //key应从数据库中请求验证，这里无数据库故简单验证有无key值即通过验证
    let key = localStorage.getItem("key");
    if (!key) {
      this.open4();
      this.$router.push("login");
    }
  },
  methods: {
    tuichu() {
      window.localStorage.clear('key');
      // this.$router.push({
      //   name:'login',
      //   params:{ userId: '123' },
      // });
      this.$router.push({
        path:'login',
        query:{
          userpwd:'5218187'
        }
      })
    },
    open4() {
      this.$message({
        showClose: true,
        message: "您还未登录，请登录！",
        type: "error"
      });
    }
  }
};
</script>

<style lang="scss">
$color333: #333;

body {
  margin: 0;
}

.el-header {
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
}

.el-header,
.el-footer {
  color: $color333;
  background-color: #b3c0d1;
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
  background-color: #fff;
  color: $color333;
  text-align: center;
  line-height: 160px;
}

.views-home .el-container {
  margin-bottom: 40px;
  .imainTitl {
    margin: 0;
    padding: 0;
  }
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

.el-container {
  ::-webkit-scrollbar {
    width: 10px;
    background-color: #e1e5ea;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #c3cad4;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #aab1bc;
  }
  ::-webkit-scrollbar-thumb:active {
    border: 0;
    border-radius: 0;
    background-color: #737ed7;
  }
  ::-webkit-scrollbar-thumb:window-inactive {
    background-color: #4c97da;
  }

  .el-aside {
    position: fixed;
    left: 0;
    top: 60px;
    bottom: 0;
  }

  // 内容
  .el-main {
    position: fixed;
    left: 210px;
    top: 60px;
    right: 0;
    bottom: 0;
    line-height: 1.7;
  }
}
</style>