const d = document;



// ex1
let result1 = d.getElementsByClassName("result")[0];

var count = 0;

myFnc();

function myFnc() {
    count++;
    result1.innerHTML += "hello " + count + "<br>";
}

myFnc();

var theFnc = function() {
    count++;
    result1.innerHTML += "bye " + count + "<br>";
}

theFnc();



// ex2
let result2 = d.getElementById("ex2");

var color = ["white", "yellow", "aqua", "purple"];

var i = 0;
function changeColor() {
    i++;
    
    if(i >= color.length) {
        i = 0;
    }

    result2.style.backgroundColor = color[i];
}



// ex3
let result3 = d.getElementsByClassName("result")[1];

function myfnc(name, area) {
    result3.innerHTML += "안녕하세요. " + name + " 입니다. <br>";
    result3.innerHTML += "사는 곳은 " + area + "입니다. <br><br>";
}

myfnc("홍당무", "서울");
myfnc("깍두기", "부산");




// ex4
let result4 = d.getElementsByClassName("result")[2];

var rightId = "korea";
var rightPw = "1234";

function login(id, pw) {
    if (id == rightId) {
        if (pw == rightPw) {
            result4.innerHTML += id + " 님 방문을 환영합니다.";
        } else {
            alert("잘못됫 비밀번호입니다.");
        }
    }  else {
        alert("존재하지 않는 아이디입니다.")
    }
}

// var userId = prompt("아이디를 입력하세요.", "");
// var userPw = prompt("패스워드를 입력하세요.", "");
var userId = "korea";
var userPw = "1234";

login(userId, userPw);




// ex5
let result5 = d.getElementsByClassName("result")[3];

function testAvg(arrData) {
    var sum = 0;

    // for(var i = 0; i < arrData.length; i++) {
    //     sum += Number(prompt(arrData[i] + " 점수는?", "0"));
    // }

    sum = 180;
    var avg = sum / arrData.length;
    return avg;
}

var arrSubject = ["국어", "수학"];
var r5 = testAvg(arrSubject);

result5.innerHTML += "평균 점수는 " + r5 + "점 입니다.";




// ex6
let num = 1;

function gallery(direct) {
    if(direct) {
        if(num == 8) return;
        num++;
    } else {
        if(num == 1) return;
        num--;
    }

    var imgTag = d.getElementById("photo");
    imgTag.setAttribute("src", "./images/pic_" + num + ".jpg");
}



// ex7
let result7 = d.getElementById("ex7");

let num7 = 0;
function testFnc() {
    num7++;
    result7.innerHTML += "<p>" + num7 + "</p>";

    if(num7 == 10) return;

    testFnc();
}

testFnc();