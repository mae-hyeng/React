// 1. 단락 평가

// function returnFalse() {
//     console.log("returnFlase() 실행");
//     return undefined;
// }

// function returnTrue() {
//     console.log("returnTrue() 실행");
//     return 10;
// }
// console.log("-------- 예제1 --------");
// console.log(returnFalse() && returnTrue());

// console.log("-------- 예제2 --------");
// console.log(returnTrue() && returnFalse());

// console.log("-------- 예제3 --------");
// console.log(returnTrue() || returnFalse());

function printName (person) {
    const name = person && person.name;
    console.log(name || "person값 없음");
}

printName();
printName({name : "홍길동"});