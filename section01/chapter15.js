// 1. 객체
// 원시 타입이 아닌 객체 타입의 자료형
// 여러가지 값을 동시에 저장할 수 있는 자료형을 의미

// 2. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 리터럴 방식으로 생성함)

// 3. 객체 프로퍼티 (객체 속성)
// key : value 형태로 사용.
// key에 space 존재시 ""로 감싸주면 됨.
// value에는 객체, 함수, boolean 형태 모두 사용 가능
let person = {
    name : '홍길동',
    age : 27,
    hobby : '순간이동',
    job : "FE Developer",
    extra: {},
    fuc : function () {},
    10 : 20,
    "like cat" : true,
};

// 4. 객체 프로퍼티 다루는 방법
// 4.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name;
// console.log(name); // 점 표기법으로 출력
let age = person["age"];
// console.log(age); // 문자열로 작성해야됨(쌍따옴표("")로 감싸줘야됨)

let property = "hobby";
let hobby = person[property];
// console.log(hobby); // 이런식으로도 작성 가능

// 4.2 새로운 프로퍼티를 추가하는 방법
person.job = "fe developer";
person["favor"] = "떡볶이";

// console.log(person); 추가한 내역 확인 가능

// 4.3 프로퍼티 수정하는 방법
person.job = 'edu';
person["favor"] = '초콜릿';

// console.log(person); // 수정한 내역 확인 가능.

// 4.4 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favor"];

// console.log(person); // 삭제한 내역 확인 가능

// 4.5 프로퍼티 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person;
let result2 = "cat" in person;
console.log("name 존재 유무 : ", result1, "cat 존재 유무 : ",result2);

