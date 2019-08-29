<template>
  <div class="formBox">
    <!-- 
      :model="formData" 绑定元素数据
      :rules="rules"    设置验证规则规则（在rules中）
      ref="ruleForm"    把验证信息传入ruleForm中，在提交方法中传入ruleForm，
     -->
    <el-form
      status-icon
      ref="ruleForm"
      :rules="rules"
      :model="formData"
      label-width="100px"
      class="demo-ruleForm formWrap"
    >
      <h2>用户登陆</h2>
      <el-form-item label="用户名" prop="username">
        <el-input type="text" autocomplete="off" v-model="formData.username"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input type="password" autocomplete="off" v-model="formData.password"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" class="btns" @click="submitForm('ruleForm')">登陆</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        key: "00d91e8e0cca2b76f515926a36db68f5",
        username: "",
        password: ""
      },
      rules: {
        //验证用户名，在组件中使用prop="username"调用
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [
           { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max:12,
            message: "长度在6个以上，12个以下字符",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    submits() {
      //(好像现在不用这么做了) 未通过验证规则、直接return避免发送请求
      // this.$refs.ruleForm.validate(data=>{
      //   console.log(data)
      // })
      //请求
      this.$http
        .get("https://www.apiopen.top/login", {
          params: {
            key: this.formData.key,
            phone: this.formData.username,
            passwd: this.formData.password
          }
        })
        .then(back_data => {
          console.log(back_data);
          if (back_data.data.code === 200) {
            this.suc_prop();
            this.$router.push("/");
          } else {
            this.srr_prop(back_data.data.msg);
            return false;
          }
        })
        .catch(err_data => {
          console.log(err_data);
        });
    },
    suc_prop() {
      this.$message({
        showClose: true,
        message: "恭喜登陆成功！",
        type: "success" 
      });
    },
    srr_prop(err){
       this.$message.error(err);
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.submits();
        } else {
          console.log("请按提示填写！");
          return false;
        }
      });
    }
  }
};
</script>

<style>
.formBox {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #293848;
}

.formBox .formWrap {
  background: #fff;
  width: 500px;
  height: 320px;
  position: relative;
  border-radius: 10px;
  top: 50%;
  margin: -180px auto 0;
  padding: 40px 40px 0;
}
.formBox .formWrap h2 {
  margin-bottom: 20px;
}
.formBox .btns {
  margin: 0 auto;
  display: block;
  width: 100%;
}
</style>