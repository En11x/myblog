<template>
  <div class="right-select">
    <transition-group
      tag="div"
      appear
      appear-active-class="animated fadeInUp"
      leave-active-class="animated fadeInUp"
      v-on:enter="enter"
    >
      <div class="article-tag" v-for="(item,index) in test" :key="item" :data-index="index">
        <h4>标签</h4>
        <ul class="tag-list">
          <li>
            <a href="#">生活</a>
          </li>
          <li>
            <a href="#">生活</a>
          </li>
          <li>
            <a href="#">生活</a>
          </li>
          <li>
            <a href="#">生活</a>
          </li>
          <li>
            <a href="#">生活123213asdas</a>
          </li>
        </ul>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "RightSideList",
  data() {
    return {
      test: [1, 2, 3, 4]
    };
  },
  methods: {
    enter(el, done) {
      let delayNum = el.dataset.index * 300 + "ms";
      el.style.animationDelay = delayNum;
    }
  }
};
</script>

<style lang='less' scoped>
.right-select {
  height: 100%;
  margin-left: 2%;
  .article-tag {
    h4 {
      margin: 1em 0;
    }
  }
  .tag-list {
    width: 100%;
    height: 100%;
    overflow: hidden;
    li {
      float: left;
      display: inline-block;
      margin: 0 5px 5px 0;
      line-height: 1.6;
      color: #666;
    }
  }
}
</style>