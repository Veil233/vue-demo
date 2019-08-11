<template>
  <div>
    <div class="mui-content">
      <form class="mui-input-group">
        <div class="mui-input-row">
          <label>账号</label>
          <input
            id="account"
            type="text"
            class="mui-input-clear mui-input"
            placeholder="请输入账号"
            v-model="username"
          />
        </div>
        <div class="mui-input-row">
          <label>密码</label>
          <input
            id="password"
            type="password"
            class="mui-input-clear mui-input"
            placeholder="请输入密码"
            v-model="password"
          />
        </div>
        <div class="mui-input-row">
          <label>确认密码</label>
          <input
            id="password_confirm"
            type="password"
            class="mui-input-clear mui-input"
            placeholder="请确认密码"
            v-model="re_password"
          />
        </div>
        <div class="mui-input-row">
          <label>昵称</label>
          <input
            id="account"
            type="text"
            class="mui-input-clear mui-input"
            placeholder="请输入昵称"
            v-model="nickname"
          />
        </div>
      </form>
      <div class="mui-content-padded">
        <button id="reg" class="mui-btn mui-btn-block mui-btn-primary" @click="register">注册</button>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      username: "",
      password: "",
      re_password: "",
      nickname: ""
    };
  },
  methods: {
    register() {
      if (this.password != this.re_password) {
        Toast("两次填写的密码不一致");
      } else if (
        this.username == "" ||
        this.password == "" ||
        this.re_password == "" ||
        this.nickname == ""
      ) {
        Toast("请填写所有选项");
      } else {
        this.$http
          .post("http://47.102.105.87:5001/register", {
            username: this.username,
            password: this.password,
            nickname: this.nickname
          })
          .then(result => {
            if (result.body.status === "1") {
              console.log("注册成功");
              this.$store.commit("setUserInfo", result.body.userInfo);
              sessionStorage.setItem("username", this.username);
              this.$router.push({
                path: "/member"
              });
            }
          });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.mui-content {
  background-color: white;
}
.area {
  margin: 20px auto 0px auto;
}
.mui-input-group:first-child {
  margin-top: 20px;
}
.mui-input-group label {
  width: 32%;
}
.mui-input-row label ~ input,
.mui-input-row label ~ select,
.mui-input-row label ~ textarea {
  width: 68%;
}
.mui-checkbox input[type="checkbox"],
.mui-radio input[type="radio"] {
  top: 6px;
}
.mui-content-padded {
  margin-top: 25px;
}
.mui-btn {
  padding: 10px;
}
</style>