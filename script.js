"use strict";
const draw = document.querySelector(".btn");
const select = document.querySelector(".current-class");
const names = document.querySelector(".name");
// console.log(select.value);

const class1 =
  "小米;小包;小份;小金;小飞;小打击;小奥;小特";
const class3 =
  "小周;小许;小城;小雯雯;小秦;小珂;小冠;小彬;";
const class6 =
  "小阮;韩;徐;杨;严易;陈韵;徐扬;陈城;车轩;徐红;李瑜;董宇;俞越";

let listedClass1 = class1.toString().split(";");
let listedClass3 = class3.toString().split(";");
let listedClass6 = class6.toString().split(";");

const allClasses = [listedClass1, listedClass3, listedClass6];

Array.prototype.remove = function (value) {
  var index = this.indexOf(value);
  console.log(this[index]);
  if (index > -1) this.splice(index, 1);
};

var timer;

const startTimer = function (currentClass) {
  var d = currentClass.length - 1; //跳动到最后的数字
  var s = 0; //起始起始值 一般是 0 或其他
  var time = 1000; //所用时间 1000毫秒（ 在1秒内 数值增加到d）;
  var outTime = 0; //所消耗的时间
  var interTime = 3;
  timer = setInterval(function () {
    outTime += interTime;
    if (outTime < time) {
      names.innerHTML = currentClass[parseInt((d / time) * outTime)];
    } else {
      names.innerHTML = currentClass[d];
      outTime = 0;
    }
  }, interTime);
};

draw.addEventListener("click", () => {
  if (draw.textContent === "🎲 STOP") {
    draw.textContent = "🎲 START";
    clearInterval(timer);
    allClasses[select.value].remove(names.textContent);
  } else {
    draw.textContent = "🎲 STOP";
    startTimer(allClasses[select.value]);
  }
});
