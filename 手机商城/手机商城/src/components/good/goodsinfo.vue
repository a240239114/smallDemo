<template>
  <div>
    <!-- 动画小球 -->
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>

    <!-- 轮播图区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :parentMsg="id" :fullpage="fullpage"></swiper>
        </div>
      </div>
    </div>

    <!-- 中间区域 -->
    <div class="mui-card">
      <div class="mui-card-header">{{list.tittle}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="top">
            市场价:
            <del>{{list.oldprice}}</del>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销售价:
            <span>${{list.newprice}}</span>
          </p>

          <p class="bottom">
            <span>购买数量:</span>
            <numbox :kucun="kucun" @func="getSelectedCount"></numbox>
          </p>

          <mt-button type="danger">再看看</mt-button>
          <mt-button type="primary" @click="addToCar">加入购物车</mt-button>
        </div>
      </div>
    </div>

    <!-- 库存区域 -->
    <div class="mui-card">
      <div class="mui-card-header">商品储备</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>货品编号 :{{list.num}}</p>
          <p>库存量 : {{list.kucun}}</p>
          <p>上架时间 :{{list.time}}</p>
        </div>
      </div>
    </div>

    <!-- 图文详情 -->
    <router-link :to="'/shouye/goodtuwen/'+id">
      <mt-button type="danger" size="large">图文详情</mt-button>
    </router-link>

    <!-- 评论区域 -->
    <router-link to="/shouye/comment">
      <mt-button type="primary" size="large">查看评论</mt-button>
    </router-link>
  </div>
</template>
  
<script>
//导入轮播图组件
import swiper from "../subcomponent/swiper.vue";
//导入计数器组件
import numbox from "../subcomponent/good_numbox.vue";

export default {
  data() {
    return {
      id: this.$route.params.id,
      list: "",
      fullpage: false,
      kucun: "",
      ballFlag: false,
      SelectedCount:1
    };
  },
  created() {
    this.getAlllist();
  },
  methods: {
    async getAlllist() {
      let res = await this.$http
        .get("http://faguo.free.idcfengye.com/good/" + this.id)
        .then(res => res.json());
      this.list = res.data;
      this.kucun = res.data.kucun;
    },
    addToCar() {
      this.ballFlag = !this.ballFlag;//这个相当于一个控制器,开启小球动画
      let goods = {//商品的具体信息
         id:this.id,
         name:this.list.tittle,
         count:this.SelectedCount,
         price:this.list.newprice,
         selected:true
      }
      //调用Vuex方法
      this.$store.commit("addTocar",goods);
    },
    beforeEnter(el) {
      el.style.transform = "translate(0,0)";
    },
    enter(el, done) {
      el.offsetWidth;

      // 小球动画优化思路：
      // 1. 先分析导致 动画 不准确的 本质原因： 我们把 小球 最终 位移到的 位置，已经局限在了某一分辨率下的 滚动条未滚动的情况下；
      // 2. 只要分辨率和 测试的时候不一样，或者 滚动条有一定的滚动距离之后， 问题就出现了；
      // 3. 因此，我们经过分析，得到结论： 不能把 位置的 横纵坐标 直接写死了，而是应该 根据不同情况，动态计算这个坐标值；
      // 4. 经过分析，得出解题思路： 先得到 徽标的 横纵 坐标，再得到 小球的 横纵坐标，然后 让 y 值 求差， x 值也求 差，得到 的结果，就是横纵坐标要位移的距离
      // 5. 如何 获取 徽标和小球的 位置？？？   domObject.getBoundingClientRect()

      // 获取小球的 在页面视口中的位置
      const ballPosition = this.$refs.ball.getBoundingClientRect();
      // 获取 徽标 在页面视口中的位置
      const badgePosition = document
        .getElementById("badge")
        .getBoundingClientRect();

      const xDist = badgePosition.left - ballPosition.left;
      const yDist = badgePosition.top - ballPosition.top;

      el.style.transform = `translate(${xDist}px, ${yDist}px)`;
      el.style.transition = "all 0.5s cubic-bezier(.4,-0.3,1,.68)";
      done();
    },
    afterEnter(el) {
      this.ballFlag = !this.ballFlag;
    },
    getSelectedCount(SelectedCount){//将子组件选中的值(商品的数量)传递给父组件
       this.SelectedCount = SelectedCount ;
       console.log('子组件传过来的id'+SelectedCount)
    }
  },
  components: {
    swiper,
    numbox
  }
};
</script>

<style lang="less" scoped>
.ball {
  height: 15px;
  width: 15px;
  background-color: red;
  border-radius: 50%;
  position: absolute;
  top: 388px;
  left: 153px;
  z-index: 999;
}

.mint-button {
  margin-top: 5px;
}

.mui-card-header {
  font-weight: bold;
}

.mui-card-content-inner {
  .top {
    color: black;
    span {
      color: red;
    }
  }
  .bottom {
    width: 195px;
    display: flex;
    justify-content: space-between;
    color: black;
  }
}
</style>

