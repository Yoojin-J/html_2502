let d = document;


// ex1
let demo1 = d.getElementById("demo1");

if (new Date().getHours() < 18) {
    demo1.innerHTML = "Good day!";
}


// ex2
const hour = new Date().getHours();
let greeting;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

d.getElementById("demo2").innerHTML = greeting;


// ex3
const time = new Date().getHours();
let greeting3;

if (time < 10) {
    greeting3 = "Good morning";
} else if (time < 20) {
    greeting3 = "Good day";
} else {
    greeting3 = "Good evening";
}

d.getElementById("demo3").innerHTML = greeting3;