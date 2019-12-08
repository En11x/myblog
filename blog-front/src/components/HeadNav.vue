<template>
  <div class="header flex-between" >
    <div class="header-avatar">
      <img src="/static/images/avatarBlog.jpg" alt srcset width="200px" height="200px" />
    </div>
    <div class="header-nav flex-between">
      <router-link to="/">首页</router-link>
      <router-link to="archive">归档</router-link>
      <router-link to="about">关于</router-link>
      <router-link to="liuyan">留言板</router-link>
      <span style="cursor:pointer;" @click="showSearchBox = !showSearchBox">搜索</span>
      <div class="search-box" :class="{'isShow':showSearchBox}">
        <input type="text" placeholder="输入关键字搜索" name="seachText" id />
        <img src="static/images/search.png" width="20px" height="20px" alt srcset />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeadNav",
  data() {
    return {
        showSearchBox: false
    };
  }
};
</script>

<style lang='less' scoped>
.header {
  .header-nav {
    // position: relative;
    
    min-width: 40%;
    // margin-right: 20%;
  }
  .search-box {
    // position: absolute;
    display: flex;
    align-items: center;
    width: 0px;
    overflow: hidden;
    transition: all 1s;
    top: 0;
    right: -190px;
    &.isShow {
      width: 180px;
      input {
        &::-ms-input-placeholder {
          text-align: center;
        }
        &::-webkit-input-placeholder {
          text-align: center;
          opacity: 1;
        }
      }
      img {
        animation: fadeIn 0.5s 1s;
        animation-fill-mode: forwards;
      }
    }
    img {
      opacity: 0;
    }
    input {
      border: none;
      background: none;
      outline: none;
      border-bottom: 1px solid #000;
      line-height: 1.8em;
      text-align: center;
      &::-ms-input-placeholder {
        text-align: center;
      }
      &::-webkit-input-placeholder {
        text-align: center;
        opacity: 0;
        transition: all 0.5s;
        transition-delay: 1s;
      }
    }
  }
}
</style>