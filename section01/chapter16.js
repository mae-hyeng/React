// 1. 상수 객체
// 상수에 저장해놓은 객체
const animal = {
    type : "고양이",
    name : "나비",
    color : "black"
};

animal.age = 2; // 추가
animal.name = "까망이"; // 수정
delete animal.color; // 삭제

// 상수는 변경 불가하지만 프로퍼티를 조작하는건 가능

// 2. 메서드
// 객체 프로퍼티들 중에 갑싱 함수인 프로퍼티를 말함

const person =  {
    name : "홍길동",
    // 메서드
    sayHI : function () {
        console.log("hi!");
    },
    sayHI2() {
        console.log("hi2");
    }
};

// 함수 호출할 때
person.sayHI();
person["sayHI2"]();