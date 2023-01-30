"use strict";
const draw = document.querySelector(".btn");
const select = document.querySelector(".current-class");
const names = document.querySelector(".name");
// console.log(select.value);

const class1 =
  "白光发;陈楚;陈豪;陈锦飒;陈柯阳;陈祎;陈雨欣;樊珂;顾梓涵;杭铮妮;黄迩雯;姜雁来;黎皓;李欣钰;刘嘉辉;刘雨薇;倪浩钦;倪锴;阮晨薇;邵珂琪;沈佳莹;沈剑雄;沈鑫哲;施银萍;史林操;汪钱依;王晨昊;王俊析;王梦扬;王启钡;王泽楷;夏恩淇;严庄娴;张梦佳;张银霞;章雨妍;赵欣婷;周楚婷;周海雅;周喻;朱译男";
const class3 =
  "周雯燕;许汝楣;陈城宇;龚雯雯;秦辉;沈一珂;陈冠耀;陈彬栩;胡雨昌;章锦涛;赵晨智;杨鹏杰;石浩淳;单煜杰;顾雨雁;王晨栋;任一诺;沈绮;王婧谞;陈何鑫;孙馨悦;须蔚鑫;章波;张垚将;任熙雯;赵敏;孙佳颖;阮少杰;唐利冬;石雨欣;茹紫翼;章依琳;王涔瑶;章疏桐;陈佳妍;王佳钰;严胡铖;王雨露;夏如冰;姚诗佳;张佳楠;赵彬祁";
const class6 =
  "阮俞;韩竽吉;徐晟;杨俊哲;严子易;陈婷韵;徐璐扬;陈余城;车东轩;徐瑜红;李恬瑜;董镇宇;俞之越;王钰;余思媛;严佳楠;丁敏皓;朱昕妍;徐钰婷;贾采妍;贾宇喆;王芷语;张锦城;何亚宸;单雨婷;赵鑫娜;宋楚轩;竺雨婷;董又瑞;赵卓菲;王豪;毛加贝;王泽彬;龚钰蓉;张佳韩;王彭植;谢圩;阮垲;吴叶辉;陈天添;丁奕蓥;王柯涵;沈湘湘;王桢瑜";

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
