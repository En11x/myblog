<template>
    <div class="container">
      <div class="about-box">
        <h3>关于我</h3>
        <div class="about-list">
          <p>
            <span>昵称:</span>
            P
            <i class="material-icons text-info">face</i>
          </p>
          <p>
            <span>职位:</span>
            前端攻城狮
            <i class="material-icons text-warning">work</i>
          </p>
          <p>
            <span>坐标:</span>
            中国 • 武汉
            <i class="material-icons text-success">place</i>
          </p>
          <p>
            <span>爱好:</span>
            basketball、money
            <i class="material-icons text-danger">loyalty</i>
          </p>
          <p>
            <span>Email:</span>
            497421855@qq.com
            <i class="material-icons text-primary">mail</i>
          </p>
        </div>
      </div>
      <div class="contact"></div>
    </div>
</template>

<script>
export default {
  name: "AboutMe",
  data() {
    return {};
  },
  components: {}
};
</script>

<style lang='less' scoped>
.container {
  width: 50%;
  margin: 0 auto;
  .about-box {
    h3 {
      color: #8e92a5;
      font-size: 16px;
      font-weight: normal;
      margin: 30px 0;
      line-height: 1.4em;
      &::before {
        content: "";
        width: 12px;
        height: 12px;
        display: inline-block;
        background-color: #dce8ec;
        border: 3px solid #afcfff;
        margin-right: 25px;
        border-radius: 50%;
        box-sizing: border-box;
      }
    }
  }
  .about-list {
    padding-left: 30px;
    margin-left: 5px;
    border-left: 1px solid #ececec;
    p {
      cursor: pointer;
      font-size: 0.9em;
      color: #4b5363;
      padding-bottom: 20px;
      margin-bottom: 20px;
      border-bottom: 1px solid #f3fafd;
      span {
        margin-right: 20px;
        color: #d0c8be;
      }
      i {
        font-size: 12px;
        float: right;
      }
      &:hover {
        color: #a0abe2;
      }
    }
  }
  .contact {
    width: 30%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    a:hover {
      opacity: 0.5;
    }
  }
}
</style>
