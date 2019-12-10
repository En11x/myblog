<template>
  <div>
    <div class="container-main">
      <ArticleList />
      <RightSideList />
    </div>
    <Page />
  </div>
</template>

<script>
import ArticleList from "../components/ArticleList";
import RightSideList from "../components/RightSideList";

import Page from "../components/Page.vue";

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    ArticleList,
    RightSideList,
    Page
  },
  created() {}
};
</script>

<style lang='less' scoped>
.container-main {
  display: flex;
  animation: fadeInUp 1.5s;
}
</style>
