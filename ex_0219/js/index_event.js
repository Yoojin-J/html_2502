// ex1
function changeText(id) {
    id.innerHTML = "Ooops!";
}


// ex2
function displayDate() {
    document.getElementById("demo2").innerHTML = Date();
}


// ex3
document.getElementById("myBtn").onclick = displayDate2;
function displayDate2() {
    document.getElementById("demo3").innerHTML = Date();
}


// ex4
function checkCookies() {
    let text = "";
    
    if (navigator.cookieEnabled == true) {
        text = "Cookes are enabled.";
    } else {
        text = "Cookies are not enabled.";
    }
    document.getElementById("demo4").innerHTML = text;
}


// ex5
function upperCase() {
    const x5 = document.getElementById("fname");
    x5.value = x5.value.toUpperCase();
}


// ex6
function upperCase6() {
    const x6 = document.getElementById("fname6");
    x6.value = x6.value.toUpperCase();
}
function upperCase6_1(obj) {
    obj.value = obj.value.toUpperCase();
}


// ex7
function mOver(obj) {
    obj.innerHTML = "Thank You";
}
function mOut(obj) {
    obj.innerHTML = "Mouse Over Me";
}


// ex8
function mDown(obj) {
    obj.style.backgroundColor = "#1ec5e5";
    obj.innerHTML = "Release Me";
}
function mUp(obj) {
    obj.style.backgroundColor = "#D94A38";
    obj.innerHTML = "Thank You";
}