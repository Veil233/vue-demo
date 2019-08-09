<template>
  <div class="body">
    <div class="bg"></div>
    <div class="head">
      <img src="../../images/head.png" alt />
    </div>
    <div class="userName">
      <p>handsomevv</p>
    </div>
    <div class="count">
      <p>余额(元)</p>
      <p>{{ getUserInfo[0].balance }}</p>
      <button type="button" class="mui-btn mui-btn-outlined">存款</button>
      <button type="button" class="mui-btn mui-btn-outlined">取款</button>
    </div>
    <a href="javascript:void(0);" @click="clear">退出</a>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    clear() {
      localStorage.removeItem("user");
      this.$router.push({
        path: "/login"
      });
    }
  },
  computed: {
    getUserInfo(){
      return this.$store.getters.getUserInfo
    }
  },
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