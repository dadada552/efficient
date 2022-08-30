// 结构
<template>
  <!-- 忘记密码对话框 -->
  <el-dialog title="忘记密码" :visible.sync="dialogEditPWd" @closed="$emit('close')">
    <!-- 忘记密码表单 -->
    <el-form :model="editForm" status-icon :rules="rules" ref="editForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="name">
        <el-input v-model.number="editForm.name"></el-input>
      </el-form-item>
      <el-form-item label="新密码" prop="pass">
        <el-input type="password" v-model.trim="editForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model.trim="editForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <div class="right-btn" style="float: right">
          <el-button type="primary" @click="submitForm('editForm')">确认</el-button>
          <el-button @click="resetForm('editForm')">取消</el-button>
        </div>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

// 行为
<script>
export default {
  props: ['visible'],
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.editForm.checkPass !== '') {
          this.$refs.editForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.editForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      editForm: {
        name: '',
        pass: '',
        checkPass: ''
      },
      // 忘记密码对话框状态
      dialogEditPWd: this.visible,
      rules: {
        name: [{ required: true, message: '请输入用户姓名或者手机号!', trigger: 'blur' }],
        pass: [{ validator: validatePass, trigger: 'blur' }],
        checkPass: [{ validator: validatePass2, trigger: 'blur' }]
      }
    }
  },
  watch: {
    visible(newVal) {
      this.dialogEditPWd = newVal
    }
  },
  created() {},
  mounted() {},
  methods: {
    // 重置
    resetForm(formName) {
      this.$refs[formName].resetFields()
      this.dialogEditPWd = false
    },
    // 提交
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$refs[formName].resetFields()
        }
      })
    }
  }
}
</script>

// 样式
<style scoped lang="scss">
::v-deep .el-dialog {
  width: 30%;
}
::v-deep .el-form-item {
  margin: 35px 0;
}
</style>
