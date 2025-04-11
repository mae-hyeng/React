import {useEffect} from 'react';

const Even = () => {
    useEffect(() => {
        // 클린업, 정리함수
        // useEffect 가 끝날 때 (마운트 될 때 실행하고 언마운트 될 때 종료)
        return () => {
            console.log("unMount");
        }
    }, [])
    return <div>짝수입니다.</div>
}

export default Even;