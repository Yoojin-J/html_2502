const d = document;


// ex1
d.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
    d.getElementById("demo1").innerHTML = Date();
}


// ex2
d.getElementById("myBtn2").addEventListener("click", function() {
    alert("Hello World!");
});


// ex3
d.getElementById("myBtn3").addEventListener("click", myFunction);

function myFunction() {
    alert("Hello World");
}


// ex4
var x4 = d.getElementById("myBtn4");
x4.addEventListener("click", myFunction);
x4.addEventListener("click", someOtherFunction);

function someOtherFunction() {
    alert("This function was also executed!");
}


// ex5
var x5 = d.getElementById("myBtn5");
x5.addEventListener("mouseover", myFunction5);
x5.addEventListener("click", mySecondFunction);
x5.addEventListener("mouseout", myThirdFunction);

function myFunction5() {
    d.getElementById("demo5").innerHTML += "Moused over! <br>";
}
function mySecondFunction() {
    d.getElementById("demo5").innerHTML += "Clicked! <br>";
}
function myThirdFunction() {
    d.getElementById("demo5").innerHTML += "Moused out! <br>";
}


// ex6
window.addEventListener("resize", function() {
    d.getElementById("demo6").innerHTML = Math.random();
})


// ex7
let p1 = 5;
let p2 = 7;
d.getElementById("myBtn7").addEventListener("click", function() {
    myFunction7(p1, p2);
});
//d.getElementById("myBtn7").addEventListener("click", myFunction7(p1, p2));

function myFunction7(a, b) {
    d.getElementById("demo7").innerHTML = a * b;
}


// ex8
d.getElementById("myP1").addEventListener("click", function() {
    alert("You clicked the white element!");
}, false);

d.getElementById("myDiv1").addEventListener("click", function() {
    alert("You clicked the orange element!");
}, false);

d.getElementById("myP2").addEventListener("click", function() {
    alert("You clicked the white element!");
}, true);

d.getElementById("myDiv2").addEventListener("click", function() {
    alert("You clicked the orange element!");
}, true);


// ex9
d.getElementById("myDIV").addEventListener("mousemove", myFunction9);

function myFunction9() {
    d.getElementById("demo9").innerHTML = Math.random();
}

function removeHandler() {
    d.getElementById("myDIV").removeEventListener("mousemove", myFunction9);
}