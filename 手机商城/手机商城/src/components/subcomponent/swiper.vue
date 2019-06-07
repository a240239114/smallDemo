<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in list" :key="item.url">
        <img :src="item.url" :class="[{'fullpage':fullpage}]">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ""
    };
  },
  created() {
    this.getAlllist();
  },
  props: ['parentMsg','fullpage'],
  methods: {
    async getAlllist() {
      let res = await this.$http
        .get("http://faguo.free.idcfengye.com/good/" + this.parentMsg)
        .then(res => res.json());
      this.list = res.data.lunbo;
    }
  }
};
</script>

<style lang="less" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
      background-color: white;
    img {
      height: 100%;
      display: block;
      margin:0 auto;
    }
    .fullpage{
      width: 100%;
    }
  }
}
</style>

