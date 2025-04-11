// 1. 콜백 함수

function main(value) {
    // console.log(1);
    // console.log(2);
    value();
    // console.log(3);
}

function sub() {
    // console.log('i am sub');
}

// main(sub);

// 여기에서 sub 함수를 직접 정의하지 않고도 사용 가능하다
main(function sub() {
    // console.log('실행')
    // console.log('i an sub');
});
// 이렇게 사용 가능하고 아래처럼 화살표 함수로도 정의 가능
main (() => {
    // console.log('hi');
});

// 2. 콜백 함수의 활용
function repeat (count, callback) {
    for (let idx = 1; idx <= count; idx++) {
        callback(idx);
    }
}

function db (idx) {
    console.log(idx * 3);
}

repeat(5, (idx) => {
    console.log(idx * 2);
});

repeat(5, (idx) => {
    db(idx);
});