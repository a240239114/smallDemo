(function() {
  //小蛇
  function Snack(width, height, direction) {
    this.width = width || 20;
    this.height = height || 20;
    this.body = [
      { x: 3, y: 1, color: "red" },
      { x: 2, y: 1, color: "orange" },
      { x: 1, y: 1, color: "orange" }
    ];
    this.direction = "" || "right";
    this.element = null;
  }

  //小蛇初始化
  Snack.prototype.init = function(map) {
    this.element = [];
    // //删除小蛇
    // this.remove();
    // console.log(this.body);
     
    //把小蛇画出来，填充到地图上去
    for (var i = 0; i < this.body.length; i++) {
      let div = document.createElement("div");
      map.appendChild(div);
      //脱离文档流
      div.style.position = "absolute";
      //设置小蛇的属性
      div.style.width = this.width + "px";
      div.style.height = this.height + "px";
      div.style.backgroundColor = this.body[i].color;
      div.style.left = this.body[i].x * this.width + "px";
      div.style.top = this.body[i].y * this.width + "px";
      this.element.push(div);
    }


  };

  //删除小蛇
  Snack.prototype.remove = function() {
    let l = this.element.length;
    for (var i = 0; i<l; i++) {
      let ele = this.element[i];
      // console.log(this.element);
      // console.log(ele+'=====>'+ele.parentNode);
      let eleP = ele.parentNode;
      let elePC = ele.parentNode.childNodes;
      
      //先从地图上删除
      ele.parentNode.removeChild(ele);

      //从数组中删除
      this.element.splice(i, 1);
    }
  };

  //小蛇动起来
  Snack.prototype.move = function(food, map) {
    //删除小蛇
    this.remove();

    //小蛇重新初始化
    this.init(map);

    let i = this.body.length - 1; //2
    for (i; i > 0; i--) {
      //循环两次
      this.body[i].x = this.body[i - 1].x;
      this.body[i].y = this.body[i - 1].y;
    }
    switch (this.direction) {
      case "right":
        this.body[0].x += 1;
        break;
      case "left":
        this.body[0].x -= 1;
        break;
      case "bottom":
        this.body[0].y += 1;
        break;
      case "top":
        this.body[0].y -= 1;
        break;
    }
    // console.dir(this.body);

    //吃食物
    let headX = this.body[0].x * this.width;
    let headY = this.body[0].y * this.height;
    // console.log(headX + "=====>" + headY);
    // console.log(food.x + "=====>" + food.y);
    if (headX == food.x && headY == food.y) {
      //获取小蛇身体尾部的DIV
      var last = this.body[this.body.length - 1];
      //把最后的蛇尾复制到小蛇中
      this.body.push({
        x: last.x,
        y: last.y,
        color: last.color
      });

      //吃完就初始化食物
      food.init(map);
    }
  };
  window.Snack = Snack;
})();
