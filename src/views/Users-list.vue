<template>
  <div class="uiser-list">
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="user-conten">
      <!-- 搜索 -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item>
          <el-input v-model="formInline.user" placeholder="搜索关键词"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click.stop="searchGet">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="success" plain>添加用户</el-button>
        </el-form-item>
      </el-form>
      <!-- 表格 -->
      <el-table
        v-loading="loading"
        ref="singleTable"
        :data="tableData"
        highlight-current-row
        style="width: 100%"
      >
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column property="time" label="日期" width="120"></el-table-column>
        <el-table-column property="name" label="姓名" width="120"></el-table-column>
        <el-table-column property="phone" label="电话"></el-table-column>
        <el-table-column property label="是否开启">
          <el-switch v-model="bool1" active-color="#3AA0F8" inactive-color="#ff4949"></el-switch>
        </el-table-column>
        <el-table-column property label="操作">
          <el-button type="primary" icon="el-icon-edit" size="small"></el-button>
          <el-button type="danger" icon="el-icon-delete" size="small"></el-button>
          <el-button type="success" icon="el-icon-check" size="small"></el-button>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="30"
      ></el-pagination>
      <!-- 分页 end -->
      <br />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formInline: {
        user: "",
        region: ""
      },
      tableData: [],
      bool1: true,
      currentRow: null,
      loading: true
    };
  },
  methods: {
    //封装初次渲染、搜索请求函数
    getUserList(query = "") {
      if (query) {
        var oUrl = `/posts?id=${query}`;
      } else {
        var oUrl = "/posts";
      }
      this.$http({
        url: oUrl,
        method: "get"
      })
      .then(backdata => {
          let bcData = backdata.data.posts;
          let _this = this;
          console.log(bcData);
          bcData.forEach(function(val) {
            let time = val.time.slice(0, 10);
            let name = val.name;
            let phone = val.phone;
            _this.tableData.push({ time, name, phone });
          });
          _this.loading = false;
        })
        .catch(err => {
          console.log(err);
        });
    },
    //搜索I
    searchGet() {
      this.tableData = this.getUserList(this.formInline.user);
    }
  },
  mounted() {
    //钩子函数，挂载编译以后
    // 数据初始化
    this.getUserList(this.formInline.user);
  },
  updated() {
    //钩子函数，这里仅作mock测试
    this.$http.get('/data-list')
    .then(success=>{
      console.log(success)
    })
    .catch(err=>{
      console.log(err)
    })
  },
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