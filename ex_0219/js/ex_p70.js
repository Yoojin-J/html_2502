let num = 10;
let user = "홍길동";

let result5_1 = document.getElementById("result5_1");
//let result5_2 = document.getElementsByClassName("result5_2");

if (num > 5) {
    let num = 50;
    num = num + 10;
}
//document.write(`${num} <br>`);
result5_1.innerHTML = `${num} <br>`;

if (user != "") {
    user = "김길동"
}
//document.write(`${user} <br>`);
//result5_2[0].innerHTML = `${user} <br>`;
document.getElementsByClassName("result5_2")[0].innerHTML = `${user} <br>`;