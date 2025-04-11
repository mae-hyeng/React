// 1. Falsy한 값
// 모두 거짓으로 판단.
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

// 2. Truthy한 값
// 7가지 Flasy한 값들 제외한 나머지 모든 값
// 모두 참으로 판단.
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

// 3. 활용 사례
function printName (person) {
    // if (person === undefined || person === null) {
    if (!person) { // 위의 조건을 이렇게 변형해서 사용 가능
        console.log("person의 값이 없음");
        return;
    }
    console.log(person.name);
}

let person = { name : "홍길동" };
printName(person)