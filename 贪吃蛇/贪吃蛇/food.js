(function() {
  let elements = [];

  // console.dir(element);


  //食物
  function Food(x, y, width, height, color) {
    this.x = x || 0;
    this.y = y || 0;
    this.width = width || 20;
    this.height = height || 20;
    this.color = color || "green";
  }

  //食物的初始化
  Food.prototype.init = function(map) {
    remove();
    //   创建食物
    let div = document.createElement("div");
    //   console.dir(map);
    //把食物添加到map中去
    map.appendChild(div);
    //脱离文档流
    div.style.position = "absolute";
    //设置div的属性
    div.style.width = this.width + "px";
    div.style.height = this.height + "px";
    div.style.backgroundColor = this.color;
    elements.push(div);
    this.x =
      parseInt(Math.random() * (map.offsetWidth / this.width)) * this.width;
    this.y =
      parseInt(Math.random() * (map.offsetWidth / this.width)) * this.width;
    div.style.left = this.x + "px";
    div.style.top = this.y + "px";
    //   console.log(this.x + "=======>" + this.y);

    // console.dir(element);
  };

  //删除食物
  function remove() {
    for (var i = 0; i < elements.length; i++) {
      var ele = elements[i];
      //找到这个子元素的父级元素然后在删除
      ele.parentNode.removeChild(ele);
      //再次把elements中的这个子元素也要删除
      elements.splice(i, 1);
    }
  }



  window.Food = Food;
})();
