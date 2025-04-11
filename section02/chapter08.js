// 5가지의 요소 순회 및 탐색 메서드
// 1. forEach
// 배열의 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [10, 2, 3, 7, 9, 20];
arr1.forEach(function (item, idx, arr) {
    // console.log(item, idx, arr);
});

let doubledArr = [];
arr1.forEach(function (item) {
    doubledArr.push(item * 2);
});

// console.log(doubledArr);

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [3, 4, 5];
let isInclude = arr2.includes(1);

// console.log(isInclude); // 있으면 ture, 없으면 false

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2);
// console.log(index); // 2의 인덱스를 찾아서 반환

let arr3_1 = [2, 2, 2];
let index_1 = arr3_1.indexOf(2);
// 여러개 존재하면 배열의 맨 앞에서부터 탐색하여 가장 먼저 탐색한 인덱스를 반환
// 없으면 -1 반환
// console.log(index_1);

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr4 = [1, 2, 3];
// const findedIndex = arr4.findIndex((item) => {
//     if (item % 2 !== 0) return true;
// });
const findedIndex = arr4.findIndex((item) => item % 2 !== 0); // 이런식으로 간결하게 만들 수 있음
// console.log(findedIndex);

// !!! 주의사항 indexOf는 얕은비교로 비교하기 때문에 아래와 같은 예제에서 찾을 수 없음.
let objectArr = [
    { name : "홍길동" },
    { name : "이순신" },
]

// console.log(objectArr.indexOf({name : "홍길동"}));
// console.log(objectArr.findIndex((item) => item.name === '이순신'));
// findIndex는 콜백함수를 이용해서 복잡한 객체값도 조건식만 잘 작성한다면 찾을 수 있다.
// 단순한 원시타입은 indexOf, 복잡한 객체타입은 findIndex를 사용하면 좋다.

// 5. find
// 모든 요소를 순회하면서 콜백 함수를 만족하는 요소를 찾는데, 요소를 그대로 반환
let arr5 = [
    { name : "홍길동" },
    { name : "이순신" },
];

const finded = arr5.find((item) => item.name === "홍길동");
console.log(finded);
// 인덱스를 반환하는게 아니라 요소 자체를 반환함.