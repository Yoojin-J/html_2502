let d = document;

// ex1
var i = 1;
let result1 = d.getElementsByClassName("result")[0];

while (i < 10) {
    result1.innerHTML += "5 X " + i + " = " + (i * 5) + "<br>";
    i++;
}



// ex2
var num = 1;
var t = "<table border = 1>";
let result2 = d.getElementsByClassName("result")[1];

for (var i = 1; i <= 5; i++) {

    t += "<tr>";

    for (var j = 1; j <= 5; j++) {
        t += "<td>" + num + "</td>";
        num++;
    }

    t += "</tr>";
}
t += "</table>";

console.log(t);
result2.innerHTML += t;
