// 순회
// 배열, 객체에 저장된 여러개의 값에 순서대로 하나씩 접근하는 것을 말함.
// 1 배열 순회
let arr = [1, 2, 3];
// 1.1 배열의 인덱스를 활용
for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
}

let arr2 = [4, 5, 6, 7, 8];
for (let i = 0; i < arr2.length; i++) {
    // console.log(arr2[i]);
}

// 1.2 for of 반복문
for (let item of arr) {
    // console.log(item);
}

// 2. 객체 순회
let person = {
    name : "홍길동",
    age : 27,
    hobby : "몰루"
};

// 2.1 Object.keys 사용
// 객체에서 key 값들만 뽑아서 새로운 배열로 반환하는 내장 함수
let keys = Object.keys(person);
for (let i = 0; i < keys.length; i++) {
    // console.log(keys[i]);
}

for (let key of keys) {
    const value = person[key];
    //console.log(key, value);
}

// 2.2 Ojbect.values
// 객체에서 value 값들만 뽑아서 새로운 배열로 반환하는 내장 함수
let values = Object.values(person)
for (let value of values) {
    // console.log(value);
}

// 2.3 for in
// for of 와 비슷하다고 생각
for (let key in person) {
    const value = person[key];
    console.log(key, value);
}

// for of 는 배열만 사용 가능
// for in 은 객체만 사용 가능
