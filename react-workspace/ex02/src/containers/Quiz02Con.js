import { useState } from "react";
import Quiz02Com from "../components/Quiz02Com";

function Quiz02Con(){
    const [msg, setMsg] = useState("")
    const onIn = () => {
        setMsg("들어옴")
    }
    const onOut = () => {
        setMsg("나감")
    }
    return (<>
        <Quiz02Com msg={msg} onIn={onIn} onOut={onOut} />
    </>)
}
export default Quiz02Con;