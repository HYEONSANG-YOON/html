import { useState } from "react";
import Quiz01Com from "../components/Quiz01Com";
function Quiz01Con(){
    const [num, setNum] = useState( 0 );
    const plusNum = () => {
        setNum( num + 1 )
    } 
    const subNum = () => {
        setNum( num - 1 )
    } 
    return (<>
        <Quiz01Com number={num} plusNum={plusNum} subNum={subNum} />
    </>)
}
export default Quiz01Con;