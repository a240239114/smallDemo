//1.获取数组的累和
function Sum(arr) {
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number") {
      sum += arr[i];
    }
  }
  return sum;
}

//2.数组去重
function QuChong(arr) {
  //创建新的数组
  let arr1 = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr1.indexOf(arr[i]) == -1) {
      //不存在就存进去
      arr1.push(arr[i]);
    }
  }
  return arr1;
}

//3.找出数组或者字符串中出线次数最多的值,并输出其次数
function FindMaxAndCount(arr) {
  if (arr instanceof Array) {
    let json = {}; //出现的数字作为键,次数坐位置
    for (var i = 0; i < arr.length; i++) {
      //先判断JSON中存在arr[i]
      if (!json[arr[i]]) {
        json[arr[i]] = 1;
      } else {
        json[arr[i]]++;
      }
    } //end for

    let Key;
    let index = 0;
    for (var key in json) {
      if (json[key] > index) {
        index = json[key];
        Key = key;
      }
    }
    console.log("出现次数最多的是" + Key + "出现了" + index + "次");
  } else if (typeof arr === "string") {
    let json = {};
    for (var i = 0; i <= arr.length; i++) {
      if (!json[arr.charAt(i)]) {
        json[arr.charAt(i)] = 1;
      } else {
        json[arr.charAt(i)]++;
      }
    } //end for
    console.log(json);
    let max;
    let index = 0;
    for (var key in json) {
      if (json[key] > index) {
        index = json[key];
        max = key;
      }
    }
    console.log("出现次数最多的是" + max + "出现了" + index + "次");
  } else {
    alert("您输入的不是数组或者字符串");
  }
}

//4.计算一个整数的阶乘
function factorial(num) {
  if (num < 0) {
    return -1;
  } else if (num < 1) {
    return num;
  } else {
    let sum;
    if (num > 1) {
      sum = num * (num - 1);
      num--;
    }
    return sum;
  }
}

//5.冒泡排序,从小到大
function Sort(arr) {
  for (var i = 0; i <= arr.length - 1; i++) {
    for (var j = 0; j <= arr.length - 1 - i; j++) {
      if (arr[j - 1] > arr[j]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }
  return arr;
}

//6.不借助第三遍历实现变量值得互换
function Swap(a, b) {
  a = a + b;
  b = a - b;
  a = a - b;
  return [a, b];
}

//7.求正整数组最大差值arr[5, 4, 6, 7, 20, 9, 8, 10,1]

function getMaxPro(arr) {
  let minCount = arr[0]; //zz数字之前的较小值
  let maxCount = arr[0];
  //循环遍历数组
  arr.forEach(item => {
    let currentCount = item;
    // 找出数组中最小的数
    minCount = Math.min(minCount, currentCount);
    //找出数组中最大的数
    maxCount = Math.max(maxCount, currentCount);
  });

  return maxCount - minCount;
}

//8.随机生成指定长度的字符串 str='sdkjhasdgjgsadhjhg';
function randomStr(l, str) {
  //l代表长度，str代表字符串
  let lstr = str.length;
  let str1 = "";
  //随机生成前部索引值
  let topIndex = Math.floor(Math.random() * (lstr - l));
  //循环遍历
  for (var i = topIndex; i < topIndex + l; i++) {
    str1 += str.charAt(i);
  }
  return str1;
}

//9.获取任意一个元素的任意一个属性的当前的值---当前属性的位置值
function getStyle(element, attr) {
  return window.getComputedStyle
    ? window.getComputedStyle(element, null)[attr]
    : element.currentStyle[attr] || 0;
}

//10.缓动动画,移动到
function animateD(element, json, fn) {
  clearInterval(element.timeId);
  //开启定时器
  element.timeId = setInterval(function() {
    var flag = true;
    // console.log("定时器开启了");

    //循环遍历json
    for (var attr in json) {
      if (attr == "opacity") {
        //获取当前的透明度
        var current = getStyle(element, attr) * 100;
        //目标透明度
        var target = json[attr] * 100;
        var step = (target - current)/10;
        // step = step > 0 ? Math.ceil(step) : Math.floor(step);
        current += step;
        //设置element的属性值
        element.style[attr] = current / 100;
      } else if (attr == "zindex") {
        element.style[attr] = json[attr];
      } else {
        //普通的属性值
        var current = parseInt(getStyle(element, attr));
        console.log(current);
        console.log(json);
        //目标
        var target = json[attr];
        var step = (target - current)/10;
        // console.log(step);
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        current += step;
        element.style[attr] = current + "px";
        // console.log('current=====>'+current+'step=====>'+step);
      }
      if (target != current) {
        flag = false; //失败
      } else {
        flag = true;
      }

      //测试代码
      // console.log(
      //   "目标:" +
      //     target +
      //     ",当前:" +
      //     current +
      //     ",每次的移动步数:" +
      //     step +
      //     "flag=" +
      //     flag
      // );
    }

    if (flag) {
      //清理定时器
      clearInterval(element.timeId);
      //所有的属性到达目标才能使用这个函数,前提是用户传入了这个函数
      if (fn) {
        fn();
      }
    }
  }, 20);

  // console.log(flag);
}



//11.缓动动画，移动了
function animateL(element, spaceX) {
  let static = parseInt(getStyle(element, "left"));
  // console.log(static);
  element.timeId = setInterval(function() {
    var flag = true;
    var current = -parseInt(getStyle(element, "left"));
    var target = static + parseInt(spaceX);
    var step = Math.ceil((Math.abs(target) - Math.abs(current)) / 10);
    current = current + step;
    element.style.left = -current + "px";
    if (current != target) {
      flag = false;
    } else {
      flag = true;
    }

    if (flag) {
      clearInterval(element.itemId);
    }
    // console.log("当前的" + -current + "=====>目标值" + target+'spanceX====>'+spaceX+static);
  }, 50);
}

//12.封装my$函数
function my$(id) {
  return document.getElementById(id);
}





//13.匀速动画，移动到
function animateYunsuD(element, json, fn) {
  clearInterval(element.timeId);
  //开启定时器
  element.timeId = setInterval(function() {
    var flag = true;
    // console.log("定时器开启了");

    //循环遍历json
    for (var attr in json) {
      if (attr == "opacity") {
        //获取当前的透明度
        var current = getStyle(element, attr) * 100;
        //目标透明度
        var target = json[attr] * 100;
        var step = 20;
        // step = step > 0 ? Math.ceil(step) : Math.floor(step);
        current += step;
        //设置element的属性值
        element.style[attr] = current / 100;
      } else if (attr == "zindex") {
        element.style[attr] = json[attr];
      } else {
        //普通的属性值
        var current = parseInt(getStyle(element, attr));
        //目标
        var target = json[attr];
        var step = 20;
        // step = step > 0 ? Math.ceil(step) : Math.floor(step);
        current += step;
        element.style[attr] = current + "px";
      }
      if (target != current) {
        flag = false; //失败
      } else {
        flag = true;
      }

      //测试代码
      // console.log(
      //   "目标:" +
      //     target +
      //     ",当前:" +
      //     current +
      //     ",每次的移动步数:" +
      //     step +
      //     "flag=" +
      //     flag
      // );
    }

    if (flag) {
      //清理定时器
      clearInterval(element.timeId);
      //所有的属性到达目标才能使用这个函数,前提是用户传入了这个函数
      if (fn) {
        fn();
      }
    }
  }, 20);

  // console.log(flag);
}

//14.匀速动画，移动了
function animateYunsuL(element, spaceX) {
  let staic = parseInt(getStyle(element, "left"));
  element.timeId = setInterval(function() {
    var flag = true;
    var current = -parseInt(getStyle(element, "left"));
    var target = staic + parseInt(spaceX);
    current = current + 20;
    element.style.left = -current + "px";
    if (current != target) {
      flag = false;
    } else {
      flag = true;
    }

    if (flag) {
      clearInterval(element.itemId);
    }
    console.log(
      "当前的" + -current + "=====>目标值" + target + "staic" + "=====>" + staic
    );
  }, 1000);

}
  