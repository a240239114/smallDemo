<template>
  <div class="container">
    <!-- 顶部 组件的形式-->
    <mt-header fixed title="商城项目">
      <span slot="left">
        <mt-button icon="back" @click="goBack" v-show="flag">返回</mt-button>
      </span>
    </mt-header>

    <!-- 中间路由区域 -->
    <transition>
      <router-view></router-view>
    </transition>

    <!-- 底部 结构的形式需要导入样式-->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-gjx" to="/shouye">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>

      <router-link class="mui-tab-gjx" to="/huiyuan">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>

      <router-link class="mui-tab-gjx" to="/gouwuche">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">{{$store.getters.getGoodsCountAndPrice.count}}</span>
        </span>
        <span class="mui-tab-label" id="badge">购物车</span>
      </router-link>

      <router-link class="mui-tab-gjx" to="/shousuo">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: false
    };
  },
  methods: {
    goBack() {
      //返回历史记录,$router是路由导航对象,+1是前进,-是后退
      this.$router.go(-1);
    }
  },
  mounted() {
    console.log(this.$router + "=====>" + this.$route);
  },
  watch: {
    //$route是路由参数对象
    "$route.path": function(newVal, oldVal) {
      if (newVal === "/shouye") {
        this.flag = false;
      } else {
        this.flag = true;
      }
    }
  }
};
</script>



<style lang="scss" scoped>
.container {
  padding-top: 40px;
  padding-bottom: 50px;
  overflow: hidden;
}

.v-enter {
  opacity: 0;
  transform: translateX(100%);
}

.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

.v-enter-active,
.v-leave-active {
  //动画的属性设置
  transition: all 0.5s ease;
}

//该类名
.mui-bar-tab .mui-tab-gjx.mui-active {
  color: #007aff;
}
.mui-bar-tab .mui-tab-gjx {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}
.mui-bar-tab .mui-tab-gjx[data-v-7ba5bd90] {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}
.mui-bar-tab .mui-tab-gjx.mui-active[data-v-7ba5bd90] {
  color: #007aff;
}
.mui-bar-tab .mui-tab-gjx[data-v-7ba5bd90] {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}
.mui-bar-tab .mui-tab-gjx[data-v-7ba5bd90] {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}
</style>
