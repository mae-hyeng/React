import { useState } from "react";
import useInput from "../hooks/useInput";
// 3가지 hook 관련된 팁
// 1. hook은 반드시 함수 컴포넌트이거나, 커스텀 훅 내부에서만 호출 가능
// 2. react Hook은 조건부로 호출될 수 없다.(조건문, 반복문으로 호출 불가)
// 3. 나만의 훅(Custom Hook)을 직접 만들 수 있다.

// const state = useState(); // 1번 팁 => 여기 선언하면 오류 발생

// 보통 이런 hook은 새로운 폴더를 만들어서 관리함. 현재는 hooks/useInput.jsx 에 작성하고 import함
// function useInput() {
//     const [input, setInput] = useState("");

//     const onChange = (e) => {
//         setInput(e.target.value);
//     }

//     return [input, onChange];
// }

const HookExam = () => {
    const state = useState(); // 1번 팁 => 여기 컴포넌트 내부에 선언해야됨.

    // if (true) {
    //     const state_2 = useState(); // 2번 팁 => 이렇게 선언 불가
    // }


    // 3번 팁 => 아래와 같은 코드로 선언하게 되면 코드가 길어져서 가독성 저하.
    // function으로 만들고 가져오면 됨. useInput 함수로 선언하고 35번 라인처럼 사용
    // function 으로 생성하면 1번팁에 의해서 오류 발생하는데 함수이름에 use를 붙여주게 되면 된다.
    // const [input, setInput] = useState("");

    // const onChange = (e) => {
    //     setInput(e.target.value);
    // }

    const [input, onChange] = useInput();
    const [input2, onChange2] = useInput(); // 이렇게 반복사용도 가능함

    return (
        <div>
            <div>HookExam</div>
            <div>
                <input value={input} onChange={onChange} />
            </div>
        </div>
    );
};

export default HookExam;