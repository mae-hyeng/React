// 형 변환 (Type Casting) - 어떤 값의 타입을 다른 타입으로 변경하는 것을 의미.
// 형 변환에는 묵시적 형 변환과 명시적 형 변환이 있다.
// 묵시적 형 변환(암묵적 형 변환) - 개발자가 직접 설정하지 않아도 알아서 자바스크립트 엔진이 현 변환 하는 것을 의미.
// 명시적 형 변환 - 개발자가 직접 함수 등을 이용해 형 변환을 일으킴.

// 1. 묵시적 형 변환
let num = 10
let str = "20";

const result = num + str;
// console.log(result); 의 결과는 1020 이 출력됨

// 2. 명시적 형 변환
// 2.1문자열 -> 숫자자
let str1 = "10";
let strToNum1 = Number(str1);
// console.log(10 + strToNume1); 의 결과는 20;

let str2 = "10개";
let strToNum2 = Number(str2);

// console.log(strToNum2); 의 결과는 NaN.
// 이를 해결하려면 parseInt 사용
strToNum2 = parseInt(str2);
// console.log(strToNum2); 의 결과는 10

// 2.2 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(20);

// console.log(numToStr1 + "입니다"); 의 결과는 20입니다 출력