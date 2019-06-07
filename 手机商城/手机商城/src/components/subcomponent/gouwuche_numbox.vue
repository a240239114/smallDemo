<template>
  <div>
    <div class="mui-numbox" data-numbox-min="1" height="30px">
      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <input
        id="test"
        class="mui-input-numbox"
        type="number"
        :value="count"
        @change="countChange"
        ref="numbox"
      >
      <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
  </div>
</template>

<script>
//导入mui的JS文件初始化
import mui from "../../lib/mui/js/mui.min.js";

export default {
  mounted() {
    //初始化插件
    mui(".mui-numbox").numbox();
  },
  props: ["count", "id"],
  methods: {
    countChange() {
      //change事件是表单的监听事件,当表单内部的值发生改变时,直接更新VUEX中的COUNT值
      this.$store.commit("upDatedByid", {
        id: this.id,
        count: this.$refs.numbox.value
      });
    }
  }
};
</script>

<style lang="less" scoped>
.mui-numbox {
  height: 30px;
}
</style>