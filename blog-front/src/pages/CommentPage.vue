<template>
    <div class="container">
      <CommentList />
      <Comment />
    </div>
</template>

<script>
import Comment from "../components/Comment";
import CommentList from "../components/CommentList";
export default {
  name: "CommentPage",
  data() {
    return {};
  },
  components: {
    Comment,
    CommentList
  }
};
</script>

<style>
</style>