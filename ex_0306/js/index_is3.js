const slide3 = $(".slide3 > img");
const slide4 = $(".slide4 > img");
const slide5 = $(".slide5 > img");
const slide6 = $(".slide6 > img");
const slide7 = $(".slide7 > img");

var sno3 = 0;
var sno4 = 0;
var sno5 = 0;
var sno6 = 0;
var sno7 = 0;

var eno = slide3.length - 1;

var timer3 = setInterval("autoslide3()", 3000);
var timer4 = setInterval("autoslide4()", 3000);
var timer5 = setInterval("autoslide5()", 3000);
var timer6 = setInterval("autoslide6()", 3000);
var timer7 = setInterval("autoslide7()", 3000);

function autoslide3() {
    $(slide3[sno3]).stop().animate({
        top: "300px"
    }, 1000, function() {
        $(this).css({
            top: "-300px"
        });
    });

    sno3++;
    if(sno3 > eno) sno3 = 0;
    
    $(slide3[sno3]).stop().animate({
        top: "0"
    }, 1000);
}

function autoslide4() {
    $(slide4[sno4]).stop().animate({
        top: "-300px"
    }, 1000, function() {
        $(this).css({
            top: "300px"
        });
    });

    sno4++;
    if(sno4 > eno) sno4 = 0;

    $(slide4[sno4]).stop().animate({
        top: "0"
    }, 1000);
}

function autoslide5() {
    $(slide5[sno5]).stop().animate({
        opacity: 0
    }, 1000);

    sno5++;
    if(sno5 > eno) sno5 = 0;

    $(slide5[sno5]).stop().animate({
        opacity: 1
    }, 1000);
}
$(".slide5").hover(
    function() {
        clearInterval(timer5);
    },
    function() {
        timer5 = setInterval("autoslide5()", 3000);
    }
);


function autoslide6() {
    $(slide6[sno6]).stop().animate({
        left: "100%",
        opacity: 0
    }, 1000, function() {
        $(this).css({
            left: "-100%"
        });
    });

    sno6++;
    if(sno6 > eno) sno6 = 0;

    $(slide6[sno6]).stop().animate({
        left: "0",
        opacity: 1
    }, 1000);
}

function autoslide7() {
    $(slide7[sno7]).stop().animate({
        left: "100%",
        opacity: 0
    }, 1000, function() {
        $(this).css({
            left: "0"
        });
    });

    sno7++;
    if(sno7 > eno) sno7 = 0;

    $(slide7[sno7]).stop().animate({
        left: "0",
        opacity: 1
    }, 1000);
}