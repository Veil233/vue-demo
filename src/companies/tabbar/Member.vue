<template>
  <div class="body">
    <div class="bg"></div>
    <div class="head">
      <img src="../../images/head.png" alt />
    </div>
    <div class="userName">
      <p>{{$store.getters.getUserInfo.username}}</p>
    </div>
    <div class="count">
      <p>余额(元)</p>
      <p>{{$store.getters.getUserInfo.balance}}</p>
      <button type="button" class="mui-btn mui-btn-outlined" @click="save">存款</button>
      <button type="button" class="mui-btn mui-btn-outlined" @click="draw">取款</button>
    </div>
    <a href="javascript:void(0);" @click="clear">退出</a>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {};
  },
  methods: {
    clear() {
      sessionStorage.clear();
      this.$router.push({
        path: "/login"
      });
    },
    save() {
      var _id = this.$store.state.userInfo._id;
      var balance = Number(this.$store.state.userInfo.balance);
      this.mui.prompt(
        "请输入存款金额",
        "",
        "",
        new Array("确定", "取消"),
        Reason => {
          if (Reason.index == 0) {
            Reason.value = Number(Reason.value);
            if (isNaN(Reason.value) || !Reason.value) {
              return Toast("请输入合法的数字");
            }
            balance += Reason.value;
            this.$http
              .post("http://127.0.0.1:5000/add", {
                id: _id,
                add: balance
              })
              .then(result => {
                if (result.body.status === "1") {
                  Toast("修改成功");
                  this.$store.commit("setUserInfo", result.body.userInfo);
                } else if (result.body.status === "-1") {
                  Toast("修改失败");
                }
              });
          }
        }
      );
    },
    draw() {
      var _id = this.$store.state.userInfo._id;
      var balance = Number(this.$store.state.userInfo.balance);
      this.mui.prompt(
        "请输入存款金额",
        "",
        "",
        new Array("确定", "取消"),
        Reason => {
          if (Reason.index == 0) {
            Reason.value = Number(Reason.value);
            if (isNaN(Reason.value) || !Reason.value) {
              return Toast("请输入合法的数字");
            }
            balance -= Reason.value;
            this.$http
              .post("http://127.0.0.1:5000/add", {
                id: _id,
                add: balance
              })
              .then(result => {
                if (result.body.status === "1") {
                  Toast("修改成功");
                  this.$store.commit("setUserInfo", result.body.userInfo);
                } else if (result.body.status === "-1") {
                  Toast("修改失败");
                }
              });
          }
        }
      );
    }
  },
  computed: {
    getUserInfo() {
      return this.$store.getters.getUserInfo;
    }
  }
};
</script>

<style lang="scss" scoped>
.body {
  .bg {
    width: 100%;
    height: 100%;
    background-image: url("../../images/bg1.jpeg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    -moz-background-size: 100% 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
  }
  .head {
    width: 120px;
    height: 120px;
    margin: 10px auto;
    overflow: hidden;
    display: flex;
    align-items: center;
    border: 2px solid white;
    border-radius: 50%;
    position: relative;
    img {
      height: auto;
      width: 100%;
      max-width: 100%;
      max-height: 100%;
    }
  }
  .userName {
    margin-top: 10px;
    text-align: center;
    p {
      font-size: 16px;
      color: white;
    }
  }
  .count {
    text-align: center;
    p {
      font-size: 20px;
      color: white;
    }
    .mui-btn {
      border-radius: 15px;
      height: 40px;
      width: 80px;
      margin: 10px;
      color: white;
    }
  }
  a {
    position: absolute;
    right: 0;
    top: 40px;
    color: white;
  }
}
</style>