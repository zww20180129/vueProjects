<template>
  <div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
      <el-form-item prop="phone">
        <el-input placeholder="请输入手机号" v-model="ruleForm.phone"
          ><i slot="prefix" class="el-icon-phone"></i
        ></el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-row :gutter="18">
          <el-col :span="16">
            <el-input placeholder="请输入验证码" v-model="ruleForm.code">
              <i slot="prefix" class="el-icon-tickets"></i>
            </el-input>
          </el-col>
          <el-col :span="6"
            ><el-button @click="sendCode" :disabled="disabled">
              {{ btnText }}</el-button
            ></el-col
          >
        </el-row>
      </el-form-item>
      <el-form-item>
        <el-button @click="phoneLogin" type="primary" style="width: 100%"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  props: {
    ruleForm: {
      type: Object,
      required: true,
    },
    countDown: {
      type: Number,
      default: 60,
    },
  },
  data() {
    let checkPhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('手机号不能为空'))
      } else {
        let reg = /^1[3|4|5|6|7|8][0-9]\d{8}$/
        if (reg.test(value)) {
          callback()
        } else {
          return callback(new Error('请输入正确的手机号码'))
        }
      }
    }
    return {
      rules: {
        phone: [{ validator: checkPhone, trigger: 'blur' }],
        code: [{ required: true, message: '验证码不能为空', trigger: 'blur' }],
      },
      disabled: false,
      btnText: '发送验证码',
      time: 0,
    }
  },

  methods: {
    /*手机号必须输入正确 如果输入不正确 就提示 */
    sendCode() {
      this.$refs.ruleForm.validateField('phone', (errorMessage) => {
        if (errorMessage) {
          this.$message.error(errorMessage)
        } else {
          /*时间开始倒数  */
          /*按钮进入不可用状态  */
          /*如果倒计时结束 按钮恢复可用状态 按钮文字变成重新发送 */
          /*倒计时的过程中 按钮文字为 多少s后重新发送 */
          let timer = setInterval(() => {
            this.time--
            this.btnText = `${this.time}s后重新发送`
            this.disabled = true
            if (this.time === 0) {
              this.disabled = false
              this.btnText = '重新发送'
              this.time = this.countDown
              clearInterval(timer)
            }
          }, 1000)
          this.$emit('send')
        }
      })
    },
    phoneLogin() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$emit('submit')
        } else {
          this.$emit('errHandle')
        }
      })
    },
  },
  mounted() {
    this.time = this.countDown
  },
}
</script>
<style   scoped>
</style>