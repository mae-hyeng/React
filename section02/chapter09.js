// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
    { name : "이순신", hobby : "테니스" },
    { name : "사람", hobby : "테니스" },
    { name : "홍길동", hobby : "독서" },
];

const tennisPeople = arr1.filter((item) => item.hobby === '테니스');
// console.log(tennisPeople);

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
// forEach와 비슷하게 동작하긴 함.
let arr2 = [1, 2, 3];
const mapResult = arr2.map((item, idx, arr) =>{
    return item * 2; //  반환값 작성 가능.
});
// console.log(mapResult);
// 새로운 배열을 생성 가능하다는 것을 확인 가능

let names = arr1.map((item) => item.name);
// console.log(names);

// 3. sort
// 배열을 사전순으로 정렬하는 메서드
let arr3 = ["b", "a" , "c"];
arr3.sort();
// console.log(arr3);

// 오름차순 정렬
let arr3_1 = [10, 3, 5];
arr3_1.sort((a, b) => {
    if(a > b) {
        // b 가 a 앞으로
        return 1; // b, a 배치
    } else if (b > a) {
        // a 가 b 앞으로
        return -1; // a, b 배치
    } else {
        // 두 값의 자리를 바꾸지 않음
        return 0; // a, b 자리를 그대로 유지
    }
});
// console.log(arr3_1);

// 내림차순 정렬
let arr3_2 = [10, 3, 5, 20, 15];
arr3_2.sort((a, b) => {
    if (a > b) {
        return -1;
    } else if (a < b) {
        return 1;
    } else {
        return 0;
    }
});
// console.log(arr3_2);

// 4. toSorted // 최신에 나온 메서드
// sorted와는 달리원본 배열은 내비두고 정렬된 새로운 배열을 반환하는 메서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

// console.log(arr5);
// console.log(sorted);

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr6 = ["hi", "im", "windter"];
const joined = arr6.join(' '); // 구분자를 변경하고 싶다면 join 메서드의 인수로 바꾸고 싶은 구분자를 넣어주면 됨
console.log(joined);