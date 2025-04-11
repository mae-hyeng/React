// 1. null 병합 연산자
// 존재하는 값을 추려내는 기능
// null, undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2; // 10 출력
let var5 = var1 ?? var3; // 20 출력
let var6 = var2 ?? var3; // 처음에 적힌 var2가 출력됨. var2, var3 순서를 바꾸면 var3의 값이 앞에 있기 때문에 var3가 출력됨

// 2. typeof 연산자
// 값의 타입을 문자열로 변환하는 기능을 하는 연산자

let var7 = 1;
var7 = "hello";
var7 = true;

let t1 = typeof var7; // 순서대로 Number, String, boolean 출력됨

// 3. 삼항 연산자
// 항을 3개 사용하는 연산자
// 조건식을 사용해서 참, 거짓일 때 값을 다르게 반환
let var8 = 10;

// ex) 변수 res에 var8의 값이 짝수라면 "짝", 홀수라면 "홀"로 표시되게
let res = var8 % 2 === 0 ? "짝" : "홀";
console.log(res);
