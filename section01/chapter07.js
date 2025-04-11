// 연산자
// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2; // +, -, *, /, % 등

// 3. 복합 대입 연산자 (복합 = 산술 + 대입)
let num2 = 10;
num2 += 20;

// 4. 증감 연산자
let num3 = 10;
num3++; // 후위 연산 (다음 라인이 실행될 때 실행)
num3--;
++num3 // 전위 연산 (이 라인이이 실행될 때 바로 실행됨)

// 5. 논리 연산자
let or = ture || false;
let and = true && false;
let not = !true;

// 6. 비교 연산자
let comp1 = 1 === 2; // 동등연산자
let comp2 = 1 !== 2; // 비동등연산자자
// == 으로 사용하게 되면 값의 자료형은 비교하지 못함.
// 1 == '1' 을 실행하면 true로 나오고, 1 === '1'을 실행하면 false가 나옴

let comp3 = 2 > 1;
let comp4 = 2 < 1;

let comp5 = 2 >= 2;
let comp6 = 2 <= 2;


