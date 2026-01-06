import { useState } from "react";
import Ex01Com from "../components/Ex01Com";
function Ex01Con(){
    const [ num , setting ] = useState(100)
    //let num = 100;
    const setNum = () => {
        //num += 1;
        setting( num + 1)
        console.log( num )
    }
    return (<>
        <Ex01Com num={num} setNum={setNum} />
    </>)
}
export default Ex01Con;