(function() {
  //游戏
  let that = null;
  function Game(map) {
    this.food = new Food(); //无须传参
    this.snack = new Snack(); //无须传参
    this.map = map;
    that = this;
  }

  Game.prototype.init = function() {
    //食物的初始化
    this.food.init(this.map);

    //小蛇的初始化
    this.snack.init(this.map);

    //小蛇动起来
    this.runSnack(this.food, this.map);

    this.bindKey();
  };

  //小蛇跑起来呀
  Game.prototype.runSnack = function(food, map) {
    let timeId = setInterval(
      function() {
        
        //删除小蛇
        this.snack.remove();

        //小蛇移动函数
        this.snack.move(food, map);

        // console.log(this.snack.body);
        //小蛇初始化
        // this.snack.init(map);
        //限制小蛇活动的范围
        let x = this.snack.body[0].x;
        let y = this.snack.body[0].y;
        if (x < 0 || x > 39) {
          alert("撞墙了");
          //停止定时器
          clearInterval(timeId);
        }
        if (y < 0 || y > 39) {
          alert("撞墙了");
          //停止定时器
          clearInterval(timeId);
        }
      }.bind(that),
      1000
    );
  };

  Game.prototype.bindKey = function() {
    document.addEventListener(
      "keydown",
      function(e) {
        //this指向放生改变，变成了window
        switch (e.keyCode) {
          case 37:
            this.snack.direction = "left";
            console.log("向左");
            break;
          case 38:
            this.snack.direction = "top";
            console.log("向上");
            break;
          case 39:
            this.snack.direction = "right";
            console.log("向右");
            break;
          case 40:
            this.snack.direction = "bottom";
            console.log("向下");
            break;
        }
      }.bind(that),
      false
    );
  };

  window.Game = Game;
})();
