<template>
  <div class='container'>
    <div class='container-box'>
      <div class='header flex-between'>
        <div class='header-avatar'>
          <img src="/static/images/avatarBlog.jpg" alt="" srcset="" width='200px' height="200px">
        </div>
        <div class='header-nav flex-between'>
          <a href="/">首页</a>
          <a href="/">归档</a>
          <a href="/">关于</a>
          <a href="/">留言板</a>
          <a href="/">搜索</a>
        </div>
      </div>

      <ArticlePreBox></ArticlePreBox>
      

      <Page />
      
      

    </div>
  </div>
</template>

<script>
import ArticlePreBox from '../components/ArticlePreBox.vue'
import Page from '../components/Page.vue'
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    ArticlePreBox,
    Page
  }
};
</script>

<style lang='less' scoped>
.container{
  background: #eee;
  .container-box{
    background: #fff;
    padding: 60px 120px;
    .header{
      .header-nav{
        width: 30%;
        margin-right: 20%;
      }
    }
  }
}
</style>
