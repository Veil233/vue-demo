<template>
  <div class="loginc">
    <span>
      <p class="header">登录</p>
    </span>
    <div class="mui-content">
      <form id="login-form" class="mui-input-group">
        <div class="mui-input-row">
          <label>账号</label>
          <input
            id="account"
            type="text"
            class="mui-input-clear mui-input"
            placeholder="请输入账号"
            v-model="user"
          />
        </div>
        <div class="mui-input-row">
          <label>密码</label>
          <input
            id="password"
            type="password"
            class="mui-input-password"
            placeholder="请输入密码"
            v-model="pwd"
          />
        </div>
      </form>
      <div class="mui-content-padded">
        <button
          id="login"
          type="button"
          class="mui-btn mui-btn-block mui-btn-primary"
          @click="login"
        >登录</button>
        <div class="link-area">
          <router-link to="/login/register" id="reg">注册账号</router-link>
        </div>
      </div>
      <div class="mui-content-padded oauth-area"></div>
    </div>
  </div>
</template>


<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      user: null,
      pwd: null
    };
  },
  methods: {
    login() {
      sessionStorage.setItem("username", this.user);
      // this.$router.push({
      //   path: "/member"
      // });
      this.$http
        .post("http://127.0.0.1:5000/login", { user: this.user, pwd: this.pwd })
        .then(result => {
          if (result.body.status === "1") {
            this.$store.commit("setUserInfo", result.body.userInfo);
            this.$router.push({
              path: "/member"
            });
          } else if (result.body.status === "-1") {
            Toast("用户名或密码错误！");
          }
        });
    }
  }
};
</script>

<style lang="css" scoped>
.header {
  margin: 20px auto;
  text-align: center;
  font-size: 30px;
}
.mui-content {
  background-color: white;
}
.area {
  margin: 20px auto 0px auto;
}

.mui-input-group {
  margin-top: 10px;
}

.mui-input-group:first-child {
  margin-top: 20px;
}

.mui-input-group label {
  width: 22%;
}

.mui-input-row label ~ input,
.mui-input-row label ~ select,
.mui-input-row label ~ textarea {
  width: 78%;
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

.link-area {
  display: block;
  margin-top: 25px;
  text-align: center;
}

.spliter {
  color: #bbb;
  padding: 0px 8px;
}

.oauth-area {
  position: absolute;
  bottom: 20px;
  left: 0px;
  text-align: center;
  width: 100%;
  padding: 0px;
  margin: 0px;
}

.oauth-area .oauth-btn {
  display: inline-block;
  width: 50px;
  height: 50px;
  background-size: 30px 30px;
  background-position: center center;
  background-repeat: no-repeat;
  margin: 0px 20px;
  /*-webkit-filter: grayscale(100%); */
  border: solid 1px #ddd;
  border-radius: 25px;
}

.oauth-area .oauth-btn:active {
  border: solid 1px #aaa;
}

.oauth-area .oauth-btn.disabled {
  background-color: #ddd;
}
</style>
