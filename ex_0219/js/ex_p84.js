let d = document;



// ex1
var i = 1;
let ex1 = d.getElementsByClassName("ex1")[0];
let result1 = "";

// 얘는 section 안에 <p>태그를 추가하는 형식이라서 <br>을 따로 안 넣어도 됨
// <p>는 블록 레벨 형식이라서 
while (i <= 10) {
    ex1.innerHTML += "<p>안녕하세요 " + i + "</p>";
    
    result1 += "<p>안녕하세요 " + i + "</p>";
    i++;
}
//console.log(result1);
//console.log(ex1.innerHTML);
//ex1.innerHTML += result1;


// ex2
var i = 1;
let result2 = d.getElementsByClassName("result")[0];

while (i <= 30) {
    if (i % 2 == 0 && i % 6 == 0) {
        result2.innerHTML += i + "<br>";
    }
    i++;
}


// ex3
var i = 20;
let result3 = d.getElementsByClassName("result")[1];

while (i >= 10) {
    if (i % 2 == 0) {
        result3.innerHTML += "<p class='blue'>" + i + "</p>";
    } else {
        result3.innerHTML += "<p class='red'>" + i + "</p>";
    }
    i--;
} 


// ex4
var i = 10;
let result4 = d.getElementsByClassName("result")[2];

do {
    result4.innerHTML += "hello!!";
} while (i < 3);


// ex5 
let result5 = d.getElementsByClassName("result")[3];

// 얌마는 <p> 태그 안에 반복이라는 문자를 넣는 것이니까 줄 띄울거면 <br> 넣어야됨
for(let i = 1; i <= 10; i++) {
    result5.innerHTML += "반복" + i + "<br>";
}


// ex6
let result6 = d.getElementsByClassName("result")[4];

for(let i = 1; i <= 100; i++) {
    if (i % 5 == 0 && i % 7 != 0) {
        result6.innerHTML += "<p class='red'>" + i + "</p>";
    } else if (i % 7 == 0 && i % 5 != 0) {
        result6.innerHTML += "<p class='green'>" + i + "</p>";
    } else if (i % 7 == 0 && i % 5 == 0) {
        result6.innerHTML += "<p class='aqua'>" + i + "</p>";
    }
}


// ex7
let result7 = d.getElementsByClassName("result")[5];

for(var i = 1; i <= 10; i++) {
    if (i == 6) break;
    result7.innerHTML += i + "<br>";
}
result7.innerHTML += "=== The End ===";


// ex8
let result8 = d.getElementsByClassName("result")[6];

for(var i = 1; i <= 10; i++) {
    if (i % 2 == 0) continue;
    result8.innerHTML += i + "<br>";
}
result8.innerHTML += "=== The End ===";


// ex9
let result9 = d.getElementsByClassName("result")[7];

for(var i = 1; i <= 3; i++) {
    for(var j = 1; j <= 2; j++) {
        result9.innerHTML += i + "행 " + j + "열<br>"; 
    }
    result9.innerHTML += "<br>";
}