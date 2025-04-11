// 1. 함수 표현식
function funcA() {
    // console.log('funcA');
}

let varA = funcA;
varA();

let varB = function funcB() {
    // console.log('funcB');
}
varB();

// 2. 화살표 함수
let varC = () => {
    return 1;
}
console.log(varC());

// let varC = () => 1; // 이런형태로 사용 가능
let varD = (value) => value + 1;
console.log(varD(10));

let varE = (value) => {
    console.log(value);
    return value + 1;
}
console.log("varE : " + varE(10));