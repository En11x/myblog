<template>
  <div>
    <div class="container-main">
      <ArticleList />
      <RightSideList />
    </div>
    <Page />
    <Comment />
    <CommentList />
  </div>
</template>

<script>
import ArticleList from "../components/ArticleList";
import RightSideList from "../components/RightSideList";

import Page from "../components/Page.vue";
import Comment from "../components/Comment.vue";
import CommentList from "../components/CommentList.vue";
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    ArticleList,
    RightSideList,
    Page,
    Comment,
    CommentList
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
