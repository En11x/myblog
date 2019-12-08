<template>
  <div class="article-main">
    <transition-group
      enter-active-class="animated fadeInUp"
      leave-active-class="animated fadeOutLeft"
      tag="div"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
    >
      <ArticlePreBox v-show="isShow" v-for="(item,index) in test" :key="item" :data-index="index"></ArticlePreBox>
    </transition-group>
  </div>
</template>

<script>
import ArticlePreBox from "./ArticlePreBox";
export default {
  name: "ArticleList",
  data() {
    return {
      test: [1, 2, 3, 4],
      isShow: false
    };
  },
  components: {
    ArticlePreBox
  },
  mounted() {
    this.isShow = true;
  },
  methods: {
    beforeEnter(el) {
      
    },
    enter(el, done) {
      let delayNum = el.dataset.index * 300 + "ms";
      el.style.animationDelay = delayNum;
      console.log("输出值效果,", el, done);
    }
  }
};
</script>

<style lang='less' scoped>
</style>