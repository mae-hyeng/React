// 1. Promise
// 비동기 작업을 효율적으로 처ꈰ할 수 있도록 도와주는 자바스크립트 내장 객체
// Promise는 비동기 작업을 감싸는 객체

function add10(num) {
    const promise = new Promise((resolve, reject) => {
        // 비동기 작업을 진행할 코드 작성
        // Promise 객체를 생성하면서 인수로 전달되는 콜백 함수를 executor(익스큐터)함수라고 함
        setTimeout(() => {
    
            if (typeof num === 'number') {
                resolve(num + 10);
            } else {
                reject("num이 숫자가 아닙니다");
            }
    
            // console.log("안녕");
            // resolve("성공");
            // reject("실패?");
        }, 2000);
    });

    return promise;
}

add10(0)
    .then((result) => {
        console.log(result);
        return add10(result);
    })
    .then((result) => {
        console.log(result);
        return add10(undefined);
    })
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    })

// then 메서드
// execute 함수에서 resolve를 호출하게 되면 그 후에 then 메서드에 전달된 콜백함수 실행됨. resolve의 매개변수(결과값)을 받아올 수도 있음
// 위의 예시에서 num의 타입이 number냐 아니냐에 따라 then, catch 메서드를 타게 됨
// promise
//     .then((value) => {
//         console.log(value);
//     })
//     .catch(promise.catch((err) => {
//         console.log(err);
//     }))
// 위와같이 then 과 catch를 연달아서 사용하는 문법을 프로미스 체이닝 이라고 부름


// setTimeout(() => {
//     console.log(promise);
// }, 3000);