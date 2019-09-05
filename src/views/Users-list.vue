<template>
  <div class="uiser-list">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="user-conten">
      <!-- 搜索 -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item>
          <el-input v-model="formInline.user" placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="success" plain>添加用户</el-button>
        </el-form-item>
      </el-form>
      <!-- 表格 -->
      <el-table
      v-loading="loading"
       ref="singleTable" :data="tableData" highlight-current-row style="width: 100%">
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column property="date" label="日期" width="120"></el-table-column>
        <el-table-column property="name" label="姓名" width="120"></el-table-column>
        <el-table-column property="address" label="地址"></el-table-column>
      </el-table>
      <br />
      <br />
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    // this.$http.get("https://www.apiopen.top/journalismApi").then(backdata => {
    //   console.log(backdata);
    // });
    this.$http({
      url: "https://www.apiopen.top/journalismApi",
      method: "get",
    }).then(backdata => {
        let bcData = backdata.data.data.dy;
        let _this = this;
        bcData.forEach(function(val,index,arr){
            let date = val.ptime.slice(0,10);
            let name = val.source;
            let address = val.title;
            _this.tableData.push({date,name,address})
        })
        _this.loading = false;
    });
  },
  data() {
    return {
      formInline: {
        user: "",
        region: ""
      },
      tableData: [],
      currentRow: null,
      loading:true
    };
  }
};
</script>

<style lang="scss">
.uiser-list {
  .user-conten {
    padding-top: 30px;
  }
  .el-form--inline {
    text-align: left;
  }
}
</style>