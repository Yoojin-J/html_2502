let d = document;


// ex1
const para = d.createElement("p");
const node = d.createTextNode("This is new.");
para.appendChild(node);

const element = d.getElementById("div1");
element.appendChild(para);



// ex2 
const para2 = d.createElement("p");
const node2 = d.createTextNode("This is new.");
para2.appendChild(node2);

const element2 = d.getElementById("div2");
const child2 = d.getElementById("p2_1");
// insertBefore(집어넣을놈, 누구앞에);
element2.insertBefore(para2, child2);



// ex3
function myFunction() {
    d.getElementById("p3_1").remove();
}



// ex4
const parent4 = d.getElementById("div4");
const child4 = d.getElementById("p4_1");
parent4.removeChild(child4);



// ex5
const parent5 = d.getElementById("div5");
const child5 = d.getElementById("p5_1");
const para5 = d.createElement("p");
const node5 = d.createTextNode("This is new.");
para5.appendChild(node5);
parent5.replaceChild(para5, child5);