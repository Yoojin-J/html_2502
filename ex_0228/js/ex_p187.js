function chColor() {
    var arrColor = ["#ff0", "#6c0", "#fcf", "#cf0", "#39f"];
    var arrNum = Math.floor(Math.random * 5);
    var bodyTag = document.getElementById("ex1");
    
    bodyTag.style.backgroundColor = arrColor[arrNum];
}