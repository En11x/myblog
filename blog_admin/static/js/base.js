// vue 全局方法
exports.install = function(Vue, option) {
  //弹出对话框
  Vue.prototype.showDialog = function(tip, next) {
    this.$confirm(tip, "提示", {
      confirmButtonText: "确定",
      canceButtonText: "取消",
      type: "warning",
      center: true
    })
      .then(() => {
        next();
      })
      .catch(() => {});
  };
};
