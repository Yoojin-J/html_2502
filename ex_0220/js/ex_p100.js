let d = document;



// ex1
let result1 = d.getElementsByClassName("result")[0];

var tv1 = new Object();
tv1.color = "white";
tv1.price = 300000;
tv1.info = function() {
    result1.innerHTML += "tv 색상: " + this.color + "<br>";
    result1.innerHTML += "tv 가격: " + this.price + "<br>";
}

var car1 = {
    color: "black",
    price: 5000000,
    info: function() {
        result1.innerHTML += "car 색상: " + this.color + "<br>";
        result1.innerHTML += "car 가격: " + this.price + "<br>";
    }
}

result1.innerHTML += "<h2>tv 객체 메서드 호출</h2>";
tv1.info();
result1.innerHTML += "<h2>car 객체 메서드 호출</h2>";
car1.info();



// ex2
let result2 = d.getElementById("ex2");

var today2 = new Date();
var nowMonth2 = today2.getMonth(),
nowDate2 = today2.getDate(),
nowDay2 = today2.getDay();

result2.innerHTML += "<h2>오늘 날짜 정보</h2>";
// 월은 0부터 시작함 
result2.innerHTML += "현재 월: " + nowMonth2 + "<br>";
result2.innerHTML += "현재 월: " + (nowMonth2 + 1) + "<br>";
result2.innerHTML += "현재 일: " + nowDate2 + "<br>";
result2.innerHTML += "현재 요일: " + nowDay2 + "<br>";

// new Date("2002/5/31"); 이렇게 적을 때는 원래 달
// new Date(2002, 4, 31); 이렇게 적을 때는 원래 달 -1 해야됨 
var worldcup2 = new Date(2002, 4, 31);
var theMonth2 = worldcup2.getMonth(),
theDate2 = worldcup2.getDate(),
theDay2 = worldcup2.getDay();

result2.innerHTML += "<h2>월드컵 날짜 정보</h2>";
result2.innerHTML += "2002 월드컵 몇 월: " + theMonth2 + "<br>";
result2.innerHTML += "2002 월드컵 며칠: " + theDate2 + "<br>";
result2.innerHTML += "2002 월드컵 무슨 요일: " + theDay2 + "<br>";



// ex3
var today3 = new Date();
var nowYear3 = today3.getFullYear();

var theDate3 = new Date(nowYear3, 11, 31);
var diffDate3 = theDate3.getTime() - today2.getTime();

var result3 = Math.ceil(diffDate3 / (60 * 1000 * 60 * 24));
d.getElementsByClassName("result")[1].innerHTML += "연말 D-day: " + result3 + "일 남았습니다.";



// ex4
let result4 = d.getElementsByClassName("result")[2];

var num4 = 2.1234;

var maxNum = Math.max(10, 5, 8, 30);    // 최댓값
var minNum = Math.min(10, 5, 8, 30);    // 최솟값
var roundNum = Math.round(num4);         // 소수점 첫째 자리 반올림
var floorNum = Math.floor(num4);         // 소수점 첫째 자리 내림
var ceilNum = Math.ceil(num4);           // 소수점 첫재 자리 올림
var rndNum = Math.random();             // 0과 1 사이의 난수 반환
var piNum = Math.PI;                    // 원주율 상수 반환

result4.innerHTML += maxNum + "<br>";
result4.innerHTML += minNum + "<br>";
result4.innerHTML += roundNum + "<br>";
result4.innerHTML += floorNum + "<br>";
result4.innerHTML += ceilNum + "<br>";
result4.innerHTML += rndNum + "<br>";
result4.innerHTML += piNum + "<br>";



// ex5
let result5 = d.getElementsByClassName("result")[3];

//var game = prompt("가위, 바위, 보 중 선택하세요", "가위");
var game = "가위";
var gameNum;

switch(game) {
    case "가위":
        gameNum = 1;
        break;
    
    case "바위":
        gameNum = 2;
        break;
    
    case "보":
        gameNum = 3;
        break;

    default: 
        alert("잘못 작성했습니다.");
        location.reload();
}

// 1에서 3사이에서 난수가 발생
var com = Math.ceil(Math.random() * 3);

// html에 넣는 거라서 경로를 ../이 아니라 ./으로 해야되네 
result5.innerHTML += "<img src=\"./images/math_img_" + com + ".jpg\">";

if (gameNum == com) {
    result5.innerHTML += "<img src=\"./images/game_1.jpg\">";
} else {
    result5.innerHTML += "<img src=\"./images/game_2.jpg\">";
}



// ex6
let result6 = d.getElementsByClassName("result")[4];

var arr = [30, "따르릉", true];

result6.innerHTML += "<h3>배열값 가져오기-1</h3>";
result6.innerHTML += arr[0] + "<br>";
result6.innerHTML += arr[1] + "<br>";
result6.innerHTML += arr[2] + "<br>";

result6.innerHTML += "<br><h3>배열값 가져오기-2</h3>";
for(var i = 0; i < arr.length; i++) {
    result6.innerHTML += arr[i] + "<br>";
}

result6.innerHTML += "<br><h3>배열값 가져오기-3</h3>";
for(i in arr) {
    result6.innerHTML += arr[i] + "<br>";
}