// 1. if 조건문
let num = 10;

if (num >= 10) {
    console.log("10 이상");
} else if (num >= 5) {
    console.log("5 이상");
} else {
    console.log("조건 거짓");
}

// 2. switch 문
// if 문과 기능 자체는 동일
// 다수의 조건을 처리할 땐 if보다 더 직관적임.

let animal = 'tiger';

switch (animal) {
    case 'cat': console.log('고양이'); break;
    case 'dog': console.log('강아지'); break;
    case 'bear': console.log('곰'); break;
    case 'snake': console.log('뱀'); break;
    case 'tiger': console.log('호랑이'); break;
    default : console.log("해당 동물은 모르겠네요.");
}