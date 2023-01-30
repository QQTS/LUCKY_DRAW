"use strict";
const draw = document.querySelector(".btn");
const select = document.querySelector(".current-class");
const names = document.querySelector(".name");
// console.log(select.value);

const class1 =
  "小米;小包;小份;小金;小飞;小打击;小奥;小特";
const class3 =
  "小周;小许;小城;小雯;小秦;小珂;小冠;小彬";
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

// Looping through all the names that was provided by the nameList of currentClass
const startTimer = function (currentClass) {
  var d = currentClass.length - 1;  //End
  var s = 0;  //Start
  var time = 1000; 
  var outTime = 0; 
  var interTime = 3; // Interval
  timer = setInterval(function () {
    outTime += interTime;
    if (outTime < time) {
      names.innerHTML = currentClass[parseInt((d / time) * outTime)];
    } else {
      names.innerHTML = currentClass[d];
      // Reset the timer, make it loop all over again
      outTime = 0;
    }
  }, interTime);
};

draw.addEventListener("click", () => {
  if (draw.textContent === "🎲 STOP") {
    draw.textContent = "🎲 START";
    clearInterval(timer);
    // Remove the drawed person from the list
    allClasses[select.value].remove(names.textContent);
  } else {
    draw.textContent = "🎲 STOP";
    startTimer(allClasses[select.value]);
  }
});
