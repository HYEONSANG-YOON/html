import { useRef, useState } from "react";
import Ref04Com from "../components/Ref04Com";
const initInput = {username:"", password:""}
const Ref04Con = () => {
    const [input, setInput] = useState( initInput );
    
    const inputId = useRef();
    const inputPwd = useRef();
    const onChange = (e) =>{
        setInput( {...input, [e.target.name]:e.target.value})
    }
    const onSubmit = (e) => {
        e.preventDefault(); //페이지 이동 방지
    }
    return(<>
        <Ref04Com inputId={inputId} inputPwd={inputPwd} input={input} onChange={onChange} onSubmit={onSubmit} />
    </>)
}
export default Ref04Con;