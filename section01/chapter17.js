// 1. 배열
// 여러개의 값을 순차적으로 담을 수 있는 자료형
let arrA = new Array(); // 배열 생성자
let arrB = []; // 배열 리터럴(대부분 이 방식 사용)

let accC = [
    1,
    2,
    3,
    // 어떤타입의 값, 길이 상관없이 추가 가능
    true,
    "hello",
    null,
    undefined,
    () => {},
    {},
    [],
];

// 2. 배열 요소 접근
// 배열의 인덱스 번호로 접근
let item1 = arrC[0];
let itme2 = arrC[1];

arrC[0] = "hello"; // 이런 형식으로 수정 가능