<template>
    <div class="archive">
      <div class="archive-box">
        <h3>2019-10</h3>
        <div class="archive-list">
          <p>
            <span>10-03:</span>
            文章标题
            <i>
              <span class="fa fa-eye"> 311</span>
              <span class="fa fa-heart"> 122</span>
            </i>
          </p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "Archive",
  data() {
    return {};
  }
};
</script>

<style lang='less' scoped>
.archive {
  width: 100%;
  height: 100%;
  .archive-box {
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
  .archive-list {
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
        span {
          margin-right: 20px;
          color: #d0c8be;
        }
      }
      &:hover {
        color: #a0abe2;
      }
    }
  }
}
</style>