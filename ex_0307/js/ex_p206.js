// 1
function rocketReady(rocketName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = Math.random() > 0.3;
            console.log(`result: ${result}`);

            if(result) {
                resolve(`${rocketName} 발사 완료`);
            } else {
                reject(`${rocketName} 발사 실패`);
            }
        }, 3000);
    });
}

rocketReady('나로호')
.then((response) => {
    console.log(`성공: ${response}`);
})
.catch((response) => {
    console.log(`실패: ${response}`);
})
.finally((respons) => {
    console.log('우주 발사체 테스트 완료');
})


// 2
const API_URL = "https://jsonplaceholder.typicode.com/users";

function getFetchUsers() {
    console.log("Fetching Load Data...");

    fetch(API_URL)
    .then((response) => {
        console.log(response.status);
        if(!response.ok) {
            throw new Error(`응답오류! 상태: ${response.status}`);
        }
        return response.json();
    })
    .then((users) => {
        users.slice(0,3).forEach((user, index) => {
            console.log(`${index + 1} ${user.name} (${user.email})`);
        });
    })
    .catch((error) => {
        console.error("Error fetching users:", error.message);
    })
}

getFetchUsers();
