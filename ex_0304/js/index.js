// let slideImage = ["./images/food1", "./images/food2", "./images/food3"];
// let id_slideImage = document.getElementById("slideImage");
// let i = 1;
// setInterval(function() {
//     id_slideImage.src = slideImage[i] + ".jpg";
//     if (i < 2) {
//         i++;
//     } else {
//         i = 0;
//     }

//     id_slideImage.style.transform = `translateX(-940px)`;
// }, 3000);

// let slideImage = document.getElementById("slider");
// let images = slideImage.querySelectorAll('img');
// let currentIndex = 0;

// setInterval(() => {
//     currentIndex = (currentIndex + 1) % images.length;

//     let offset = -currentIndex * 100;
//     slideImage.style.transform = `translateX(${offset}%)`;
// }, 3000);

// 슬라이더 무한 루프 
const slide = document.getElementById("slide");     // 보여지는 영역
const slider = document.getElementById("slider");   // 움직이는 영역

let currentIndex = 0;   // 현재 보이는 이미지

function slideEffect() {
    // 마지막 사진인 경우 첫번째 사진으로 돌아가기 
    if(currentIndex == 2) {
        setTimeout(() => {
            slider.style.transition = 'none';
            currentIndex = 0;
            slider.style.transform = `translateX(-${1200 * currentIndex}px)`;
        }, 500);
    }

    // if(currentIndex < 2) {
    //     currentIndex++;
    // } else {
    //     currentIndex = 0;
    // }

    currentIndex++;
    slider.style.transition = "all 0.6s";
    slider.style.transform = `translateX(-${1200 * currentIndex}px)`;

    
}
setInterval(slideEffect, 3000);