<template>
  <div id="app">
    <div class="container">
      <div class="container-box">
        <HeadNav />
        <transition appear enter-active-class="animated fadeIn" leave-active-class="animated faster fadeOutUp" mode="out-in">
          <router-view />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import HeadNav from "./components/HeadNav";
export default {
  name: "App",
  components: {
    HeadNav
  }
};
</script>

<style lang='less' scoped>
.container {
  .container-box {
    background: #fff;
    padding: 60px 0;
    width: 70%;
    margin: 0 auto;
    max-width: 1140px;
  }
}
</style>
