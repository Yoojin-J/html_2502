$(function() {
    $('header nav > ul, .headerBg').hover(function() {
        $('.submenu, .headerBg').stop().slideDown()
    }, 
    function() {
        $('.submenu, .headerBg').stop().slideUp()
    })
})