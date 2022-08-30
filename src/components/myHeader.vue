// 结构
<template>
  <div class="header">
    <editPwd :visible="visible" @close="visible = false"></editPwd>
    <!-- 控制侧边栏隐藏显示 -->
    <div class="changeAside">
      <i :class="{ 'el-icon-s-fold': !isCollapse, 'el-icon-s-unfold': isCollapse }" @click="toggleAside"></i>
    </div>
    <!-- 头部用户信息 -->
    <div class="user-msg">
      <el-badge :value="10" class="item">
        <p style="transform: rotate(-15deg)" class="el-icon-s-flag"></p>
      </el-badge>
      <el-badge :value="10" class="item" type="warning">
        <p class="el-icon-message-solid"></p>
      </el-badge>
      <el-badge :value="10" class="item" type="info">
        <p class="el-icon-message"></p>
      </el-badge>
      <p :class="{ 'el-icon-full-screen': !is_full, 'el-icon-rank': is_full }" @click="full"></p>
      <el-dropdown @command="handleCommand">
        <div class="user-right">
          <p class="el-icon-s-custom headImg" style="margin-right: 10px"></p>
          <p style="font-size: 14px; color: #6c6c6c">超级管理员</p>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="edit">修改密码</el-dropdown-item>
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

// 行为
<script>
import editPwd from '../components/editPwd.vue'
export default {
  props: ['isCollapse'],
  components: {
    editPwd
  },
  data() {
    return {
      is_full: false,
      visible: false
    }
  },
  created() {},
  mounted() {},
  methods: {
    handleCommand(command) {
      if (command == 'edit') {
        // 修改密码
        this.visible = true
      }
    },
    // 侧边栏显示隐藏
    toggleAside() {
      this.$emit('toggle')
    },
    full() {
      if (this.is_full) {
        //退出全屏
        if (document.exitFullScreen) document.exitFullscreen() //兼容火狐
        if (document.mozCancelFullScreen) document.mozCancelFullScreen() //兼容谷歌等
        if (document.webkitExitFullscreen) document.webkitExitFullscreen() //兼容IE
        if (document.msExitFullscreen) document.msExitFullscreen()
      } else {
        //进入全屏
        if (document.documentElement.RequestFullScreen) document.documentElement.RequestFullScreen() //兼容火狐
        if (document.documentElement.mozRequestFullScreen) document.documentElement.mozRequestFullScreen() //兼容谷歌等可以webkitRequestFullScreen也可以webkitRequestFullscreen
        if (document.documentElement.webkitRequestFullScreen) document.documentElement.webkitRequestFullScreen() //兼容IE,只能写msRequestFullscreen
        if (document.documentElement.msRequestFullscreen) document.documentElement.msRequestFullscreen()
      }
      this.is_full = !this.is_full
    }
  }
}
</script>

// 样式
<style scoped lang="scss">
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .changeAside {
    color: #9a9a9a;
    line-height: 70px;
    font-size: 36px;
  }
  .user-msg {
    width: 330px;
    color: #cecece;
    padding: 0 10px;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .headImg {
      border: 1px solid #cecece;
      border-radius: 50%;
      padding: 5px;
      font-size: 16px;
    }
    .user-right {
      display: flex;
      align-items: center;
    }
  }
}
</style>
