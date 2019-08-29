<template>
  <div class="views-home">
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <img src="../../public/logo.png" alt="logo">
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple-light">
              <h2>后台管理系统</h2>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple"></div>
          </el-col>
        </el-row>
      </el-header>

      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>

    </el-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
  $color333:#333;
  
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: $color333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: $color333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
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
</style>