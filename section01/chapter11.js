// 함수

// function greeting() {
//     console.log('hi');
// }

function getArea (w, h) {
    let area = w * h;
    return area;
}

let area1 = getArea(10, 20);
console.log("area1 : " + area1);

// 함수명을 호출하고 난 이후에 호출할 함수를 작성해도 상관없다.
// 이는 호이스팅이라고 부르며 끌어올리다 라는 의미를 갖고 있다.
// 함수가 무조건 위에 있을 필요가 없다라는 의미.