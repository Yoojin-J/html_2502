const d = document;


// ex1
let result1 = d.getElementsByClassName("result")[0];

const contry = ["영어", "중국어"];
const subjects = ["쓰기", "말하기"];
const myMap  = new Map();

for (let i = 0; i < contry.length; i++) {
    myMap.set(contry[i], []);
    for (let j = 0; j < subjects.length; j++) {
        //myMap.get(contry[i]).push(prompt(`${contry[i]} ${subjects[j]} 점수는?`));
        myMap.get(contry[i]).push(50);
    }
}

console.log(myMap.get("영어"));
console.log(myMap.get("중국어"));

result1.innerHTML = myMap.get("영어") + "<br>" + myMap.get("중국어"); 



// ex2
let result2 = d.getElementsByClassName("result")[1];

const users = {
    "userA":[50, 60, 100],
    "userB":[80, 90, 70],
    "userC":[75, 80, 90]
}
const {userA, userB} = users;
const arr = [...userA, ...userB];
let sum = 0;

for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

result2.innerHTML = `userA와 userB의 점수 합계는 ${sum}점.`;



// ex3
let result3 = d.getElementsByClassName("result")[2];

const arr1 = [10, 20, 30];
const arr2 = arr1.map((item) => (item / 10));
console.log("map() 메서드", arr1);
console.log("map() 메서드", arr2);

const arr3 = ["홍길동", "김갑중", "박상무"];
const arr4 = arr3.map((item, idx) => {
    let obj = {};
    obj["no"] = idx + 1;
    obj["userName"] = item;
    return obj;
});
console.log("map() 메서드", ...arr4);

result3.innerHTML += arr2 + "<br>" + arr4;



// ex4
let result4 = d.getElementsByClassName("result")[3];

const subjects4 = ["쓰기", "듣기", "말하기"];
const arr4_1 = [10, 70, 20];
// const arr4_1 = subjects4.map((item) => {
//     return 80;
//     //return prompt(`영어 ${item}의 점수는?`, "0");
// });

let r4 = arr4_1.some((item) => (item < 60));

r4 = r4 ? "불합격" : "합격";
result4.innerHTML += r4;



// ex5
let result5 = d.getElementsByClassName("result")[4];

const arr5_1 = [40, 80, 10];
// const arr5_1 = subjects4.map((item) => {
//     return prompt(`${item}의 점수는?`, "0");
// });
let r5 = arr5_1.every((item) => (item >= 60));

r5 = r5 ? "합격" : "불합격";
result5.innerHTML += r5;



// ex6
let result6 = d.getElementsByClassName("result")[5];

const fruit_1 = ["딸기", "바나나", "파인애플"];
const fruit_2 = ["바나나", "딸기", "오렌지", "키위"];
let fruit_3 = [];

fruit_3 = [...fruit_1];
fruit_2.map((item) => {
    if(!fruit_3.includes(item)) {
        fruit_3.push(item);
    }
})

result6.innerHTML += fruit_3;



// ex7
let result7 = d.getElementsByClassName("result")[6];

const arr7_1 = [];

for(let item of subjects4) {
    //arr7_1.push(prompt(`${item}의 점수는?`, "0"));
    arr7_1.push(70);
}

let r7 = arr7_1.every((item) => (item >= 60));
r7 = r7 ? "합격" : "불합격";
result7.innerHTML += r7;