import { useEffect } from "react";

function Effect() {
    // useEffect
    // useEffect는 리액트 컴포넌트가 렌더링 될떄마다 특정 작업을 수행하도록 설정할수있는Hook입니다

    //마운트가 될떄만 실행하고 싶을때
    //useEffect에서 설정한 함수를 컴포넌트가 화면에 맨처음 랜더링 될떄만 실행하고
    // 업데이트 될대는 실행하지 않으려면 함수의 두번째 파라미터로 빈 배열을 넣어주면된다

    //특정값이 업데이트 될때만 싱행하고 싶을때
    // useEffect를 사용할때 특정값이 변경될때만 호출하고 싶을경우도 있다
    //useEffect

    const [name, setName] = useState<String>("");
    const [nickname, setNickname] = useState<String>("");

    useEffect(() => {
        console.log("컴포넌트가 랜더링 될따마다 특정작업수행");
        console.log({ name, nickname });
    });

    useEffect(() => {
        console.log("마운트가 될떄만 수행");
        console.log({ name, nickname });
    }, []);

    useEffect(() => {
        console.log("name이라는 상태값이 변할경우에만 수행마운트가 될떄만 수행");
        console.log("updated name: ", { name });
    }, [name]);

    //*cleanup 복습요망

    const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };
    const onChangeNickname = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNickname(event.target.value);
    };

    return (
        <div>
            <input type="text" value={name} onChange={onChangeName} />
            <input type="text" value={nickname} onChange={onChangeNickname} />
        </div>
    );
}

export default Effect;
function useState<T>(arg0: string): [any, any] {
    throw new Error("Function not implemented.");
}
