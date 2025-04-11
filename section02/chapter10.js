// 1. Date 객체 생성하는 방법
let date1 = new Date(); // new 라는 키워드와 새로운 객체를 생성하는 내장 함수를 생성자라고 부름

let date2 = new Date('2025/01/07/17:30:25');
let date2_1 = new Date(2025, 1, 7, 17, 30, 50);
// console.log(date2_1);

// 2. 타임 스탬프
// 특정 시간이 '1970.01.01 00시 00분 00초'로 부터 몇 ms가 지났는지를 의미하는 숫자값
// 여기서 '1970.01.01 00시 00분 00초'를 협정세계시(UTC)라고 부름
let ts1 = date1.getTime();
// console.log(ts1);

let date4 = new Date(ts1);
// console.log(date1);
// console.log(date4);

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1; // javaScript의 월은 0부터 시작하기 때문에 +1
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();
// console.log(year, month, date, hour, minute, seconds);

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(2);
date1.setDate(31);
date1.setHours(12);
date1.setMinutes(34);
date1.setSeconds(56);
// console.log(date1);

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString());
console.log(date1.toLocaleString());