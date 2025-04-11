// const moduleData = require("./math");
// console.log(moduleData.add(1, 2));
// console.log(moduleData.sub(1, 2));

// // 구조분해할당으로 아래와 같은 방식으로도 동작 가능
// const { add, sub } = require("./math");
// console.log(add(1, 2));
// console.log(sub(1, 2));

import {add, sub} from "./math.js";
import mul from "./math.js";
import randomColor from "randomcolor";

// console.log(add(1, 2));
// console.log(sub(1, 2));
// console.log(mul(2, 3));
const color = randomColor();
console.log(color);