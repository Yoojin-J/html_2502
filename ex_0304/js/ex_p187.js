// 1
function chColor() {
    var arrColor = ["#ff0", "#6c0", "#fcf", "#cf0", "#39f"];
    var arrNum = Math.floor(Math.random() * 5);
    var bodyTag = document.getElementsByClassName("result")[0];

    bodyTag.style.backgroundColor = arrColor[arrNum];
    console.log(arrNum);
}


// 2
let result2 = document.getElementsByClassName("result")[1];

function TestScore(name, kor, eng) {
    this.userName = name;
    this.korNum = kor;
    this.engNum = eng;
}
TestScore.prototype.getTextInfo = function() {
    var str = "";
    str += "이름: " + this.userName + "<br>";
    str += "국어: " + this.korNum + "<br>";
    str += "영어: " + this.engNum + "<br>";
    return str;
}
TestScore.prototype.getAvg = function() {
    return (this.korNum + this.engNum) / 2;
}

var kimgun = new TestScore("김군", 80, 90);
var ohgun = new TestScore("오군", 100, 80);

result2.innerHTML += kimgun.getTextInfo();
result2.innerHTML += "평균 점수: " + kimgun.getAvg() + "<br><br>";

result2.innerHTML +=ohgun.getTextInfo();
result2.innerHTML += "평균 점수: " + ohgun.getAvg() + "<br><br>";