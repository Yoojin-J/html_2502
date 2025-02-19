// ex1
document.getElementById("myBtn1").addEventListener("click", displayDate);

function displayDate() {
    document.getElementById("demo1").innerHTML = Date();
}


// ex2
document.getElementById("myBtn2").addEventListener("click",
    function() {
        alert("Hello World!");
    }
);


// ex3
document.getElementById("myBtn3").addEventListener("click", myFunction);

function myFunction() {
    alert("Hello world!");
}


// ex4
var x4 = document.getElementById("myBtn4");
x4.addEventListener("click", myFunction4);
x4.addEventListener("click", someOtherFunction);

function myFunction4() {
    alert("Hello World");
}

function someOtherFunction() {
    alert("This function was also executed!");
}