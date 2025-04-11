// 1. 변수
let age = 27; // 변수 선언 및 초기화 단계. 초기화 하지 않으면 undefined.

age = 30;

// 2. 상수
const birth = "1999"; // 상수 선언은 const를 사용함. 상수는 선언 및 초기화 이후 변경 불가.

// 3. 변수 명명규칙(네이밍 규칙)
// 3-1. $, _ 제외한 기호는 사용할 수 없음.
let $_name; // #_name 은 선언 불가.

// 3-2. 숫자로 시작할 수 없음.
let name;
let _1name;

// 3-3. 예약어를 사용할 수 없음.
// let if 같은 예시

// 4. 변수 명명 가이드. 의미있는 변수명을 사용하자.
let salesCount = 1;
let refundCount = 1;
let total = salesCount - refundCount;
