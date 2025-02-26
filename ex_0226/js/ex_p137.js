// ex1
// width = 300, height = 400은 팝업창의 크기
// left = 300, top = 50은 팝업창의 위치(좌상단 기준)
//window.open("../winpopup.html", "pop1", "width = 300, height = 400, left = 300, top = 50");


// ex2
var addNum = 0;
var subNum = 1000;

// var auto_1 = setInterval(function() {
//     addNum++;
//     console.log("addNum: " + addNum);
// }, 2000);

// var auto_2 = setInterval(function() {
//     subNum--;
//     console.log("subNum: " + subNum);
// }, 2000);


// ex3
var addNum3 = 0;
var auto3 = setTimeout(function() {
    addNum3++;
    console.log(addNum3);
}, 2000);