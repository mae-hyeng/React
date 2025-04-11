// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;
// Number Type은 기본적인 사칙연산(+, -, *, /, %)을 지원함.
// num1 - num2; num1 * num2; num1 % num2; 등등.

// 1-1 양의 무한대, 음의 무한대, NaN 같은 값도 존재함.
let inf = Infinity;
let mInf = -Infinity;

let nan = NaN;
// console.log(1 * "hello"); 이런 불가능한 연산은 NaN으로 출력됨.

// 2. String Type
let myName = "ㅇㅇㅇ";
let myLoc = "서울";
let me = myName + myLoc;

// 2-1 템플릿 리터럴 문법 -> ``(백틱)을 사용.
let txt = `${myName}은 ${myLoc}에 거주한다.`
// console.log(txt);

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type - 아무것도 없다라는 의미
let empty = null; // empty에는 아무것도 없다라는 것을 의미.

// 5. undefined Type - 변수 선언 후 초기화 값을 할당하지 않았을 경우 자동으로 설정됨.
let none;

