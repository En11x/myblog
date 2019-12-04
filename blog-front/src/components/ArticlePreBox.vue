<template>
  <div class="container">
    <div class="article-title">文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题</div>
    <div class="article-desc">
      <span>2019-12-03</span>
      <span>标题</span>
      <span>4条评论</span>
      <span>35次阅读</span>
    </div>
    <div class="article-content">
      <p>  文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容文章主题内容</p>
    </div>
    <div class="more">
        <span>Read More <em>>></em></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticlePreBox",
  data() {
    return {};
  }
};
</script>

<style lang='less' scoped>
.container {
    height: auto;
    margin-bottom: 1.5em;
  .article-title {
    font-size: 16px;
    letter-spacing: 1px;
    font-weight: bold;
  }
  .article-desc {
    font-size: 12px;
    margin: 0.8em 0;
    span {
      margin-right: 0.8em;
    }
  }
  .article-content{
      line-height: 1.5;
  }
  .more{
      margin-top: 1em;
      text-align: right;
      span{
          line-height: 1.5;
          margin-right: 20%;
          cursor: pointer;
          em{
              position: relative;
              right: 0px;
          }
          &:hover em{
              animation: rightMove 1s infinite;
          }
      }
  }
}
@keyframes rightMove{
    0%{
        right: 0px;
    }
    100%{
        right: -6px;
    }
}
</style>