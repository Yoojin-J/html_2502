const d = document;

// ex1
let result1 = d.getElementById("ex1");

var phoneNum = "010-2345-1234";
var result_1 = phoneNum.substring(0, phoneNum.length - 4);
console.log(result_1 + "****");
result1.innerHTML += "<p>" + result_1 + "****" + "</p>";

var imgSrc = "images/bnt_out.jpg";
var result_2 = imgSrc.replace("out", "over");
console.log(result_2);
result1.innerHTML += "<p>" + result_2 + "</p>";



// ex2
let result2 = d.getElementById("ex2");

var menu = ["짜장면", "돈가스", "된장국", "김치찌개", "회덮밥"];
var menuNum = Math.floor(Math.random() * 5);
var result_3 = menu[menuNum];

console.log(result_3);
result2.innerHTML += "<p>" + result_3 + "</p>";