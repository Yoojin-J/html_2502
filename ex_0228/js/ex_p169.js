// ex1
// let num = 100;

// function menu() {
//     num += 100;
//     alert(num);
// }
// menu();

// function menu() {
//     alert(num);
// }



// ex2
// (function() {
//     let num = 100;

//     function menu() {
//         num += 100;
//         alert(num);
//     }
//     menu();
// }());

// (function() {
//     let num = 100;

//     function menu() {
//         alert(num);
//     }
// }())



// ex3
let result1 = document.getElementsByClassName("result")[0];

function CheckWeight(name, height, weight) {
    this.userName = name;
    this.userHeight = height;
    this.userWeight = weight;
    this.minweight;
    this.maxWeight;

    this.getInfo = function() {
        var str = "";
        str += "이름: " + this.userName + ", ";
        str += "키: " + this.userHeight + ", ";
        str += "몸무게: " + this.userWeight + "<br>";

        return str;
    }

    this.getResult = function() {
        this.minWeight = (this.userHeight - 100) * 0.9 - 5;
        this.maxWeight = (this.userHegiht - 100) * 0.9 + 5;

        if(this.userWeight >= this.minWeight && this.userWeight <= this.maxWeight) {
            return "정상 몸무게 입니다.";
        } else if(this.userWeight < this.maxWeight) {
            return "정상 몸무게보다 미달입니다.";
        } else {
            return "정상 몸무게보다 초과입니다.";
        }
    }
}

let jang = new CheckWeight("장보리", 168, 62);
let park = new CheckWeight("박달재", 180, 88);
console.log(jang);
console.log(park);

result1.innerHTML += jang.getInfo();
result1.innerHTML += jang.getResult();



// ex4
let result2 = document.getElementsByClassName("result")[1];

function CheckWeight2(name, height, weight) {
    this.userName2 = name;
    this.userHeight2 = height;
    this.userWeight2 = weight;
    this.minWeight2;
    this.maxWeight2;
}
CheckWeight2.prototype.getInfo2 = function() {
    var str = "";
    str += "이름 " + this.userName2 + ", ";
    str += "키: " + this.userHeight2 + ", ";
    str += "몸무게: " + this.userWeight2 + "<br>";
    return str;
}
CheckWeight2.prototype.getResult2 = function() {
    this.minWeight2 = (this.userHeight2 - 100) * 0.9 - 5;
    this.maxWeight2 = (this.userHeight2 - 100) * 0.9 + 5;
    
    if(this.userWeight2 >= this.minWeight2 && this.userWeight2 <= this.maxWeight2) {
        return "정상 몸무게 입니다.";
    } else if (this.userWeight2 < this.minweight2) {
        return "정상 몸무게보다 미달입니다.";
    } else {
        return "정상 몸무게보다 초과입니다.";
    }
}

var jang2 = new CheckWeight2("장보리", 168, 62);
var park2 = new CheckWeight2("박달재", 180, 88);
console.log(jang2);
console.log(park2);

result2.innerHTML += jang2.getInfo2();
result2.innerHTML += jang2.getResult2() + "<br>";
result2.innerHTML += (jang2.getResult2 === park2.getResult2);



// ex5
function sumFnc_1(num1, num2) {
    return num1 + num2;
}
console.log(sumFnc_1(1, 2));

const sumFnc_2 = (num1, num2) => num1 + num2;
console.log(sumFnc_2(10, 20));

const sumFnc_3 = (num1, num2) => {
    const result = `num1 + num2 = ${num1 + num2}`;
    return result;
}
console.log(sumFnc_3(100, 200));

const infoFnc_1 = function(info1, info2) {
    return {"name": info1, "age": info2};
}
console.log(infoFnc_1("홍길동", 22));

const infoFnc_2 = (info1, info2) => ({"name": info1, "age": info2});
console.log(infoFnc_2("최군", 32));



// ex6
const obj_1 = {
    name: "홍길동",
    infoFnc: function() {
        console.log(this);
        const innerFnc = () => {
            console.log("메서드 내의 화살표 함수: ", this);
        }
        innerFnc();
    }
}
obj_1.infoFnc();

const obj_2 = {
    name: "홍대리",
    infoFnc: () => {
        console.log(this);
        const innerFnc = () => {
            console.log("화살표 함수 메서드에 함수: ", this);
        }
        innerFnc();
    }
}
obj_2.infoFnc();

const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");

btn1.addEventListener("click", function() {
    console.log(this);
})
btn2.addEventListener("click", () => {
    console.log(this);
})