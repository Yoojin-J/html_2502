// ex1 
let result1 = document.getElementsByClassName("result")[0];

for(let i = 3; i < 6; i++) {
    for(let j = 1; j < 10; j++) {
        console.log(i, j);
        result1.innerHTML += i + " X " + j + " = " + (i * j) + "<br>";
    }
    result1.innerHTML += "<br>";
}



// ex2
let result2 = document.getElementsByClassName("result")[1];

for(let i = 3; i < 6; i++) {
    for(let j = 1; j < 10; j++) {
        if(i == 4 && j > 3) break;
        else if (i == 5 && j == 3) continue;
        else result2.innerHTML += i + " X " + j + " = " + (i * j) + "<br>";
    }
    result2.innerHTML += "<br>";
}