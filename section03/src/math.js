// math 모듈

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

// module.exports = {
//     add : add, // add -> key, value 의 이름이 같다면 변수나 함수의 이름만 적어도 됨 
//     sub : sub, // sub
// };

function multiply(a, b) {
    return a * b;
}

export { add, sub };
export default multiply; // default로 export