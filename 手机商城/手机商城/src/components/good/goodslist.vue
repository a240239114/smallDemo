<template>
  <div class="containner">
    <div class="main">
      <div class="inside" v-for="item in list" :key="item.oldprice">
        <router-link :to="'/shouye/goodinfo/'+item._id">
          <img :src="item.imgfirst">
          <div class="bottom">
            <p class="top">{{item.tittle}}</p>
            <p class="middle">
              <span class="left">预售价:
                <del>{{item.oldprice}}</del>
              </span>
              <span class="right">热销中:{{item.newprice}}</span>
            </p>
            <p class="bot">
              <span>库存:{{item.kucun}}</span>
            </p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //商品列表
      list: []
    };
  },
  created() {
    this.getAlllist();
  },
  methods: {
    //获取所有的商品数据
    async getAlllist() {
      let res = await this.$http
        .get("http://faguo.free.idcfengye.com/good")
        .then(res => res.json());
      this.list = res.data;
    }
  }
};
</script>

<style lang="less" scoped>
.containner {
  padding: 5px 10px 0;
  background-color: antiquewhite;
  .main {
    display: flex;
    flex-wrap: wrap;
    //两边展开
    justify-content: space-between;
    .inside {
      width: 49%;
      position: relative;
      img {
        width: 100%;
        height: 250px;
        border-radius: 5px;
        box-shadow: 5px 5px 5px gray;
      }
      .bottom {
        position: absolute;
        margin: 0px 3px;
        bottom: 0;
        width: 100%;
        background-color: rgba(33, 31, 41, 0.4);
        .top {
          color: red;
        }
        .middle {
          display: flex;
          justify-content: space-around;
          color: white;
          .right {
            color: yellow;
          }
        }
        .bot {
          color: blue;
        }
      }
    }
  }
}
</style>


