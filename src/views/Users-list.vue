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
          <el-button type="success" @click="dialogFormVisible = true" plain>添加用户</el-button>
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
          <template v-slot="tabInfor">
            <el-switch
              v-model="tabInfor.row.bol"
              @change="kaiguang(tabInfor)"
              active-color="#3AA0F8"
              inactive-color="#ff4949"
            ></el-switch>
          </template>
        </el-table-column>
        <el-table-column property label="操作">
          <template v-slot="scope">
            <el-button type="primary" icon="el-icon-edit" size="small" @click="editShow(scope)"></el-button>
            <el-button type="danger" icon="el-icon-delete" size="small" @click="deleteUser(scope)"></el-button>
            <el-button type="success" icon="el-icon-check" size="small"></el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination
        :page-sizes="[10, 20, 50, 100]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="30"
      ></el-pagination>
      <!-- 分页 end -->
      <br />
    </div>
    <!-- 弹窗 -->
    <el-dialog
      title="添加用户"
      align="left"
      :visible.sync="dialogFormVisible"
      :modal-append-to-body="false"
    >
      <el-form :model="form">
        <el-form-item label="姓名：" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话：" :label-width="formLabelWidth">
          <el-input v-model="form.phone" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addUser">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 确认删除用户弹窗 -->
    <el-dialog
      title="温馨提示："
      :visible.sync="dialogVisible"
      width="30%"
      :modal-append-to-body="false"
      align="left"
    >
      <span>确认删除吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 修改用户弹窗 -->
    <el-dialog
      title="修改用户"
      align="left"
      :visible.sync="ediFormVisible"
      :modal-append-to-body="false"
    >
      <el-form :model="ediForm">
        <el-form-item label="姓名：" :label-width="formLabelWidth">
          <el-input v-model="ediForm.name" autocomplete="off" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="电话：" :label-width="formLabelWidth">
          <el-input v-model="ediForm.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱：" :label-width="formLabelWidth">
          <el-input v-model="ediForm.email" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="ediFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="ediUser">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 弹窗end -->
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
      currentRow: null,
      loading: true,
      // 添加用户
      dialogFormVisible: false,
      form: {
        name: "",
        phone: "",
        email:"",
        time: "2019-08-22"
      },
      formLabelWidth: "120px",
      // 修改用户弹
      ediFormVisible:false,
      ediForm:{
        name: "",
        phone: "",
        time: "2019-09-22"
      },
      //确认删除弹窗
      dialogVisible: false
    };
  },
  methods: {
    //修改用户弹窗、表单赋值
    editShow(scope){
        console.log(scope)
        this.ediForm = scope.row;
        this.ediFormVisible = true;
    },
    // 修改用户信息
    ediUser(){

    },
    //开关change事件，这里只是假设有接口状态，目前没有接口可用，所以无法测试
    kaiguang(tabInfor) {
      console.log(tabInfor);
      //  修改状态的接口，tabInfor中包含了change事件带来的所有数据，包括索引$index、状态改变后的参数row
      // this.$http({
      //   url: `/user-puop/${tabInfor.rou.id}/${tabInfor.rou.bol}`,
      //   method: "PUT"
      // })
      //   .then(backdata => {
      //     let { data, meta } = backdata;
      //     if (data.status == 200) {
      //       this.$message({
      //         showClose: true,
      //         message: "修改状态成功！",
      //         type: "success"
      //       });
      //     } else {
      //       // 实现数据接口请求失败，状态不改
      //       // 修改状态值：获取修改后的页面的值取反，然后重新赋值
      //       this.tableData[tabInfor.$index].bol = !tabInfor.row.bol;

      //       this.$message.error("修改不成功！");
      //     }
      //   })
      //   .catch(err => {
      //     this.$message.error(err);
      //   });
    },
    //添加用户
    addUser() {
      console.log(this.form);
      this.$http.post("/add-user", this.form).then(backdata => {
        if (backdata.status == 200) this.tableData = backdata.data;
        this.dialogFormVisible = false;
        this.$message({
          type: "success",
          message: "添加成功!"
        });
      });
    },
    //封装初次渲染、搜索请求函数
    getUserList(query = "") {
      let oUrl = "";
      if (query) {
        oUrl = `/user-list?id=${query}`;
      } else {
        oUrl = "/user-list";
      }
      this.$http({
        url: oUrl,
        method: "get"
      })
        .then(backdata => {
          //解构赋值
          // 这里应该需要判断后台返回的状态值==200，再进行渲染
          this.tableData = backdata.data.list;
          // console.log('取回来的值：'+JSON.stringify(this.tableData));

          // 不采用结构赋值，则使用forEach遍历赋值
          // let bcData = backdata.data.list;
          // let _this = this;
          // bcData.forEach(function(val) {
          //   let time = val.time.slice(0, 10);
          //   let name = val.name;
          //   let phone = val.phone;
          //   _this.tableData.push({ time, name, phone });
          // });

          this.loading = false;
        })
        .catch(err => {
          console.log(err);
        });
    },
    //搜索I
    searchGet() {
      this.$message.error("对不起，因为没有真实接口地址，无法实现搜索功能");
      // mock.js无法实现搜索功能
      // this.tableData = this.getUserList(this.formInline.user);
    },
    //删除用户
    deleteUser(req) {
      let { $index } = req;
      console.log($index);
      // 提示是否确认删除
      this.$confirm("此操作将永久删除该文件, 是否继续?", "温馨提示：", {
        confirmButtonText: "马上删除",
        cancelButtonText: "不我后悔了",
        type: "warning"
      })
        .then(() => {
          // 确定删除后回调函数

          // 发送删除axios删除请求，这里mock.js无法实现，只是假设代码
          // this.$http({
          //   url: "/delete-user",
          //   method: "delete",
          //   params: {
          //     ID: $index
          //   }
          // }).then(backData => {
          //   //思路：根据返回的值，重新渲染tableData数据,
          //   // 这里mock.js有bug，无法模拟，这里只是假设
          //   console.log(backData);
          //   let { code } = backData.data;
          //   if (code == 200) {
          //     // 思路1：直接本地删除tableData中数组的数据
          //     this.tableData.splice($index, 1);
          //     //思路2：重新渲染用户列表，执行getUserList()
          //     // this.getUserList();
          //     this.$message({
          //       message: "删除成功！",
          //       type: "success"
          //     });
          //   } else {
          //     console.log("删除失败");
          //   }
          // });
          //axios end

          this.tableData.splice($index, 1);
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  },
  mounted() {
    //钩子函数，挂载编译以后
    // 数据初始化
    this.getUserList(this.formInline.user);
  },
  updated() {
    //钩子函数，这里仅作cs-mock测试
    // this.$http.get('/data-list')
    // .then(success=>{
    //   console.log(success)
    // })
    // .catch(err=>{
    //   console.log(err)
    // })
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

.el-dialog {
  z-index: 2001;
}
</style>