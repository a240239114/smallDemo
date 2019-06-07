<template>
  <div>
    <div class="mui-numbox" data-numbox-min="1">
      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <input id="test" class="mui-input-numbox" type="number" value="1" @change="countChange" ref="numbox">
      <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
  </div>
</template>

<script>
//导入mui的JS文件初始化
import mui from '../../lib/mui/js/mui.min.js'

export default {
    mounted() {
       //初始化插件
       mui(".mui-numbox").numbox();
    },
    props:["kucun"],
    watch:{//设置子组件的最大值,由于这个kucun是通过掉接口获得的,所以是个异步操作故而需要监听它值得变化,一改变就设置最大值
       kucun:function(newVal,oldVal){
          mui(".mui-numbox")
               .numbox()
               .setOption("max",newVal)
       }
    },
    methods: {
       countChange(){//change事件是表单的监听事件,当表单内部的值发生改变时,立即触发
        //  console.log(this.$refs.numbox.value)
         this.$emit('func',this.$refs.numbox.value)
       }
    }
};
</script>

<style lang="less" scoped>
</style>

