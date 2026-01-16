import { useRef, useState } from "react";
import Ref03Com from "../components/Ref03Com"
const Ref03Con = () => {
    const number = useRef(0);
    const [num, setNum] = useState(0);
    const onState = () => { setNum(num+100); }
    const onRef = () => { number.current = number.current + 1; }
    return(<>
        <Ref03Com number={number} onRef={onRef} onState={onState} />
    </>)
}
export default Ref03Con;