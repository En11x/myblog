<template>
  <div id="app">
    <div class="container">
      <div class="container-box">
        <HeadNav />
        <router-view />
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
    padding: 60px 120px;
  }
}
</style>
