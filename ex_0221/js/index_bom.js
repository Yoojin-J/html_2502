const d = document;


// ex1 
d.getElementById("demo1").innerHTML = "The full URL of this page is: " + window.location.href;



// ex2
d.getElementById("demo2").innerHTML = "Page hostname is: " + window.location.hostname;



// ex3
d.getElementById("demo3").innerHTML = "Page path is: " + window.location.pathname;



// ex4
d.getElementById("demo4").innerHTML = "The page protocol is: " + window.location.protocol;



// ex5
d.getElementById("demo5").innerHTML = "The URL port number of the current page is: " + window.location.port;



// ex6
function newDoc() {
    window.location.assign("https://www.w3schools.com");
}



// ex7
function goBack() {
    window.history.back();
}

function goForward() {
    window.history.forward();
}



// ex8
d.getElementById("demo8").innerHTML = "navigator.cookieEnabled is " + navigator.cookieEnabled;



// ex9
d.getElementById("demo9").innerHTML = "navigator.appName is " + navigator.appName;



// ex10
d.getElementById("demo10").innerHTML = "navigator.appCodeName is " + navigator.appCodeName;



// ex11
d.getElementById("demo11").innerHTML = "navigator.product is " +navigator.product;



// ex12
d.getElementById("demo12").innerHTML = navigator.appVersion;



// ex13
d.getElementById("demo13").innerHTML = navigator.appVersion;



// ex14
d.getElementById("demo14").innerHTML = navigator.userAgent;



// ex15
d.getElementById("demo15").innerHTML = "navigator.platform is " + navigator.platform;



// ex16
d.getElementById("demo16").innerHTML = "navigator.language is " + navigator.language;



// ex17
d.getElementById("demo17").innerHTML = "navigator.onLine is " + navigator.onLine;



// ex18
d.getElementById("demo18").innerHTML = "javaEnabled is " + navigator.javaEnabled();



// ex19
function myFunction() {
    alert('Hello');
}



// ex20
// 19랑 같은 함수 사용



// ex21
setInterval(myTimer, 1000);

function myTimer() {
    const date = new Date();
    d.getElementById("demo21").innerHTML = date.toLocaleTimeString();
}



// ex22
let myVar2 = setInterval(myTimer2, 1000);

function myTimer2() {
    const date2 = new Date();
    d.getElementById("demo22").innerHTML = date2.toLocaleTimeString();
}



// ex23
function setCookie(cname, cvalue, exdays) {
    const date3 = new Date();
    date3.setTime(date3.getTime() + (exdays * 24 * 60 * 60 * 1000));

    let expires = "expires=" + date3.toUTCString();
    d.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}