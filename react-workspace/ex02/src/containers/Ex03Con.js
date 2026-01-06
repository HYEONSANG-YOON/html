import { useState } from "react";
import Ex03Com from "../components/Ex03Com";
function Ex03Con(){
    const [obj, setObj] = useState( {} )
    if(Object.keys(obj).length === 0){ // []
        setObj({name:"홍길동", addr : "산골짜기"} )
    }
    console.log("시작~")
    const onChangeName = () => {
        //obj["name"] = "김개똥";
        //const obj2 = {name:"김개똥", addr: obj['addr'] }
        //console.log(obj)
        //setObj( obj2 );
        setObj( {name:"김개똥", addr: obj['addr'] } );
    }
    const onChangeAddr = () => {
        //[...arr] => [arr[0] , arr[1] , arr[2]]
        //...obj => { name:홍길동, addr:산골짜기 }
        setObj({...obj , addr:"별동"})
    }
    return (<>
        <Ex03Com  obj={obj} onChangeName={onChangeName} 
                            onChangeAddr={onChangeAddr} />
    </>)
}
export default Ex03Con;