<template>
  <div>
    <form>
      <div>
        <label>评论人</label>
        <input type="email" class="form-control" id="exampleInputEmail1" placeholder v-model="name">
      </div>
      <div>
        <label for="exampleInputPassword1">内容</label>
        <input type="email" placeholder v-model="comment">
      </div>
    </form>

    <mt-button type="primary" @click="postComment">提交评论</mt-button>
    <ul>
      <li v-for="item in list" :key="item.id">
        <p class="top">
          <span class="left">用户名:{{item.name}}</span>
          <span class="right">发表时间:2018-12-12 12:25:55</span>
        </p>
        <p class="bottom">{{item.comment}}</p>
      </li>
    </ul>
    <mt-button type="danger" @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      comment: "",
      list: [],
      index: 1
    };
  },
  created() {
    //页面加载获取分页数据
    this.getList();
  },
  methods: {
    //获取分页数据
    getList() {
      this.$http
        .get("http://faguo.free.idcfengye.com/comment/" + this.index)
        .then(res => res.json())
        .then(res => {
          this.list = res.data;
        });
    },

    //获取全部数据
    async getAlllist() {
      let data = await this.$http
        .get("http://faguo.free.idcfengye.com/comment")
        .then(res => res.json());
      this.list = data;
    },

    //上传评论
    postComment() {
      //当姓名和评论一项等于空就跳过,不能上传给数据库
      if (this.name == "" || this.comment == "") return;
      //上传到数据库
      this.$http
        .post(
        "http://faguo.free.idcfengye.com/comment",
          {//对象参数
            name: this.name,
            comment: this.comment
          },
          { emulateJSON: true }
        )
        .then(res => res.json())
        .then(res => {
          console.log(res);
        });

      let obj = {
        name: this.name,
        comment: this.comment
      };

      //push 的返回值是新数组的长度
      this.list.unshift(obj);
      console.log(this.obj);

      this.name = "";
      this.comment = "";
    },

    //加载更多
    getMore() {
      this.index = this.index + 1;
      this.$http
        .get("http://faguo.free.idcfengye.com/comment/" + this.index)
        .then(res => res.json())
        .then(res => {
          //concat不改变原数组
          this.list = this.list.concat(res.data);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}

.mint-button--normal {
  width: 100%;
}

ul {
  li {
    list-style: none;
    .top {
      color: black;
      display: flex;
      justify-content: space-between;
      background-color: gray;
    }
    .bottom {
      color: black;
      text-indent: 2em;
    }
  }
}
</style>


