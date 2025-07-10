import { useState } from "react";

function App() {
    //useState => Hooks
    //useState는 가장 기본적인 Hook이며 함수 컴포넌트에서도 가변적인 상태를 지닐수 있게 해준다
    // 이 함수가 호출되면 배열을 반환하나 ->첫번쨰 요소는 상태 값 두번째 요소는 상태를 설정하는 함수
    //=>useState 함수의 파라미터에는 상태의 기본값을 넣어 준다
    const [value, setValue] = useState(0);
    const [name, setName] = useState<string>("스나이퍼팩토리");
    const [nickname, setNickname] = useState<string>("상담잘하셧어요");

    const increment = () => setValue(value + 1);
    const decrement = () => setValue(value - 1);

    const onChangeName = (event) => {
        setName(event.target.value);
    };
    const onChangeNickname = (event) => {
        setNickname(event.target.value);
    };

    return (
        <div>
            <p>
                현재 카운터 값음 <b>{value}</b>
            </p>
            <button onClick={increment}>1증가</button>
            <button onClick={decrement}>1감소</button>

            <div>
                <input type="text" value={name} onChange={onChangeName} />
                <input type="text" value={nickname} onChange={onChangeNickname} />
            </div>
            <div>
                <b>이름: {name} </b>
                <b>닉네임: {nickname}</b>
            </div>
        </div>
    );
}

export default App;
