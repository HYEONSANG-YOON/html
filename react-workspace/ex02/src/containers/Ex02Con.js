import { useState } from "react";
import Ex02Com from "../components/Ex02Com";
function Ex02Con(){
    const [arr, setArr] = useState([1,2])
    const [num, setNum] = useState(0);
    console.log("시작 arr : ", arr)
    const onBtn = () => {
        //setNum(num + 1);
        //arr.push("데이터 추가");
        //const arr2 = [...arr, "추가~"]
        const arr2 = arr.concat("추가 된다");
        //arr2.push("aaaa")
        console.log("onBtn arr : ", arr)
        console.log("onBtn arr2 : ", arr2)
        setArr( arr2 );
    }
    return (<>
        <Ex02Com arr={arr} onBtn={onBtn} />
    </>)
}
export default Ex02Con;