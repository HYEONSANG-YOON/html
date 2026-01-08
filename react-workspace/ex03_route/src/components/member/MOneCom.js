import { useSearchParams } from "react-router-dom";

function MOneCom( {user} ){
    //const arr = [10,20,30]
    //const [a,b] = arr;
    //console.log(a , b)
    /*
    const member = [
        {id:1, name:"홍길동"},
        {id:2, name:"김개똥"},
        {id:3, name:"고길동"},
    ]
    const [p] = useSearchParams();
    console.log("params : ",p.get("id") )
    let result = member.filter( mem => mem.id == p.get("id") )
    result = result[0]
    console.log( result )
    */
    return (<>
        아이디 : {user.id}<br></br>
        이름 : {user['name']}<br></br>
    </>)
}
export default MOneCom;