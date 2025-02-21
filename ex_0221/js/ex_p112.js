const d = document;


// ex1
var arr_1 = ["사당", "교대", "방배", "강남"];
var arr_2 = ["신사", "압구정", "옥수"];

let result1 = d.getElementsByClassName("result")[0];
let result1_c;

result1.innerHTML += arr_1.join("-") + "<br>";
result1_c = arr_1.join("-");
console.log(result1_c);

result1.innerHTML += arr_1.concat(arr_2) + "<br>";
result1_c = arr_1.concat(arr_2);
console.log(result1_c);

// 인덱스 1번부터 2번까지 
// 0번부터 시작하고, 두번째에 적는건 포함 안되는 계열
result1.innerHTML += arr_1.slice(1, 3) + "<br>";
result1_c = arr_1.slice(1, 3);
console.log(result1_c);

// 얘는 배열 자체에 영향을 끼치네 
result1.innerHTML += arr_1.sort() + "<br>";
console.log(arr_1);

// 얘도 배열 자체에 영향을 끼침
// 누구한테 부여 안하고 그냥 배열 자체를 건드림 
result1.innerHTML += arr_2.reverse() + "<br>";
console.log(arr_2);



// ex2
var greenArr = ["교대", "방배", "강남"];
var yellowArr = ["미금", "정자", "수서"];

let result2 = d.getElementsByClassName("result")[1];

// var a = b.splice(n,n,n,n); 으로 하면 a에 빠지게 되는 값들이 들어가짐
greenArr.splice(2, 1, "서초", "역삼");
result2.innerHTML += greenArr + "<br>";
console.log(greenArr);

// 얘는 자주 봐서 알지?
// pop()은 끝에 있는거 빼기, 그 와중에 할당을 한다면 그 빠진값이 들어감
// shift()는 가장 앞에 있는거 빼기, 그 와중에 할당을 한다면 그 빠진값이 들어감
var data1 = yellowArr.pop();
var data2 = yellowArr.shift();

// push()는 가장 끝에 새로운 값 넣기 
yellowArr.push(data2);
result2.innerHTML += yellowArr + "<br>";
console.log(yellowArr);

// unshift() 맨 앞에 새로운 값 넣기 
yellowArr.unshift(data1);
result2.innerHTML += yellowArr + "<br>";
console.log(yellowArr);



// ex3
let result3 = d.getElementsByClassName("result")[2];

let t = "Hello Thank you good luck to you";

// 인덱스16에 저장된 문자를 불러옴, 저장할때 공백도 같이 저장함
// g
result3.innerHTML += t.charAt(16) + "<br>";

// 문자열 가장 왼쪽에서부터 카운트
// 왼쪽에서 제일 먼저 발견한 you의 인덱스 값 반환
// you의 y가 인덱스 12임 
// 12
result3.innerHTML += t.indexOf("you") + "<br>";

// 문자열 인덱스 16부터 카운트
// 인덱스 16에서부터 가장 먼저 발견한 you의 인덱스 값을 반환
// you의 y가 인덱스 29임 
// 29
result3.innerHTML += t.indexOf("you", 16) + "<br>";

// 문자열 오른쪽부터 왼쪽 방향으로
// 가장 먼저 발견한 you의 인덱스 값을 반환
// 오른쪽에서 왼쪽이어도 단어의 첫 알파벳으로 반환하는군 
// 29
result3.innerHTML += t.lastIndexOf("you") + "<br>";

// 문자열 오른쪽부터 왼쪽 방향으로
// 문자열 인덱스 25부터 왼족 방향으로 가장 먼저 발견한 you 의 인덱스 값을 반환
// 12
result3.innerHTML += t.lastIndexOf("you", 25) + "<br>";

// ==============================

// 문자열 왼쪽부터
// 왼쪽부터 가장 먼저 발견한 luck과 일치되는 문자를 찾아 반환
// 문자 반환이야
// luck
result3.innerHTML += t.match("luck") + "<br>";

// 문자열 왼쪽부터
// 왼쪽부터 가장 먼저 발견한 you의 인덱스 값을 반환
// 인덱스 값 반환
// 12 
result3.innerHTML += t.search("you") + "<br>";

// ==============================

// 문자열 인덱스 21부터 네 글자를 가져옴
// luck
result3.innerHTML += t.substr(21, 4) + "<br>";
// 문자열 인덱스 6부터 12 이전까지의 문자를 가져옴 
// 이번에도 끝값은 포함 안함
// Thank
result3.innerHTML += t.substring(6, 12) + "<br>";

// =============================

// 문자열 왼쪽부터
// 가장 먼저 발견한 you를 me로 치환
result3.innerHTML += t.replace("you", "me") + "<br>";

// =============================

// 모두 소문자로
result3.innerHTML += t.toLowerCase() + "<br>";
// 모두 대문자로
result3.innerHTML += t.toUpperCase() + "<br>";
// 문자의 총 개수 반환, 공백포함 
result3.innerHTML += t.length + "<br>";

// ============================

// 공백 문자를 기준으로 문자를 분리
// 분리한 문자열은 배열에 저장되어 s에 할당
var s = t.split(" ");

// s의 인덱스 0에 저장된 문자열을 출력
// Hello
result3.innerHTML += s[0] + "<br>";
// s의 인덱스 4에 저장된 문자열을 출력
// luck
result3.innerHTML += s[4] + "<br>";

// ===========================

var str = "A";
// 아스키 코드 값을 반환
var t2 = str.charCodeAt(0);

// 65
result3.innerHTML += t2 + "<br>";
// 아스키 코드값 65에 해당하는 문자를 반환
// A
result3.innerHTML += String.fromCharCode(65) + "<br>";



// ex4
let result4 = d.getElementsByClassName("result")[3];

//var userName = prompt("당신의 영문 이름은?", "");
var userName = "a";
var upperName = userName.toUpperCase();

result4.innerHTML += upperName + "<br>";

//var userNum = prompt("당신의 연락처는?", "");
var userNum = "01000000000";
// 0에서부터 뒤에서 -4를 하다보니까 01000000000를 하든 010 0000 0000를 하든 상관이 없구나 그냥 뒤에서 4개를 빼는거라
var result = userNum.substring(0, userNum.length - 4) + "****";
result4.innerHTML += result + "<br>";



// ex5
let result5 = d.getElementsByClassName("result")[4];

//var userEmail = prompt("당신의 이메일 주소는?", "");
var userEmail = "a@a.com";
var  arrUrl = [".co.kr", ".com", ".net", ".or.kr", ".go.kr"];

var check1 = false;
var check2 = false;

if (userEmail.indexOf("@") > 0) {
    check1 = true;
}

for (var i = 0 ; i < arrUrl.length; i++) {
    if (userEmail.indexOf(arrUrl[i]) > 0) {
        check2 = true;
    }
}

if (check1 && check2) {
    result5.innerHTML += userEmail;
} else {
    alert("이메일 형식이 잘못되었습니다.")
}



// ex6
let result6 = d.getElementsByClassName("result")[5];

const contry = ["영어", "중국어"];
const subjects = ["쓰기", "말하기"];
const myMap = new Map();

for (let i = 0; i < contry.length; i++) {
    myMap.set(contry[i], []);
    
    for(let j = 0; j < subjects.length; j++) {
        myMap.get(contry[i]).push(prompt(`${contry[i]}에 ${subjects[j]} 점수는?`));
    }
}

console.log(myMap.get("영어"));
console.log(myMap.get("중국어"));
//result6.innerHTML += myMap.get("영어");
//result6.innerHTML += myMap.get("중국어");