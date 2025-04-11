// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

let [one, two, three, four = 4] = arr; // four = 4 와 같이 기본값 지정 가능
// console.log(one, two, three, four);

// 2. 객체의 구조 분해 할당
let persons = {
    name : "홍길동",
    age : 27,
    hobby : "??"
};

// let { name, age, hobby, extra = "hello" } = persons;
// // 각각 객체의 프로퍼티를 키 값을 기준으로 변수에 저장 가능
// console.log(name, age, hobby, extra);

let { name : myAge, age, hobby, extra = "hello" } = persons;
// console.log(name, myAge, hobby, extra);

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({name, age, hobby, extra}) => {
    console.log(name, age, hobby, extra)
}

func(persons);
