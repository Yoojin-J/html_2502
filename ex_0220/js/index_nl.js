let d = document;


// ex1
const ex1 = d.getElementById("ex1");
const myNodelist = ex1.querySelectorAll("p");

d.getElementById("demo1").innerHTML = "The innerHTML of the second paragrapgh is: " + myNodelist[1].innerHTML;



// ex2
const ex2 = d.getElementById("ex2");
const myNodelist2 = ex2.querySelectorAll("p");

d.getElementById("demo2").innerHTML = "This document contains " + myNodelist2.length + " paragraphs.";
console.log(myNodelist2["demo2"]);



// ex3
function myFunction3() {
    const ex3 = d.getElementById("ex3");
    const myNodelist3 = ex3.querySelectorAll("p");

    for (let i = 0; i < myNodelist.length; i++) {
        myNodelist3[i].style.color = "red";
    }
    console.log(myNodelist2[2]);
}