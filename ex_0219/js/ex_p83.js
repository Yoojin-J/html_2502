let d = document;


// ex1
var site = prompt("네이버, 다음, 네이트, 구글 중 \
즐겨 사용하는 포털 검색 사이트는?", "");
var url;

switch(site) {
    case "구글":
        url = "www.google.com";
        break;

    case "다음":
        url = "www.daum.net";
        break;

    case "네이버":
        url = "www.naver.com";
        break;

    case "네이트": 
        url = "www.nate.com";
        break;

    default:
        alert("보기 중에 없는 사이트 입니다.")
}

if (url) {
    location.href = "http://" + url;
} 