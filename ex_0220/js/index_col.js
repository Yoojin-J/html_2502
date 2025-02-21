let d = document;


// ex1
const myCollection1 = d.getElementsByTagName("p");

d.getElementById("demo1").innerHTML = "The innerHTML of the second paragraph is: " + myCollection1[1].innerHTML;



// ex2
const ex2 = d.getElementById("ex2");
const myCollection2 = ex2.getElementsByTagName("p");

d.getElementById("demo2").innerHTML = "This document contains " + myCollection2.length + " paragraph.";
console.log(myCollection2["demo2"].innerHTML);



// ex3
function myFunction() {
    const ex3 = d.getElementById("ex3");
    const myCollection3 = ex3.getElementsByTagName("p");

    for(let i = 0; i < myCollection3.length; i++) {
        myCollection3[i].style.color = "red";
    }
    console.log(myCollection3[2]);
}