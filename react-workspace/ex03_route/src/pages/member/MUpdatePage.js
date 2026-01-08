import { useState } from "react";
import { useParams } from "react-router-dom";
import MUpdateCom from "../../components/member/MUpdateCom";
function MUpdatePage(){
    const params = useParams()
    console.log( params )
    console.log( params.username )

    const {username} = params
    console.log("username : ", username)
    //username과 일치하는 데이터를 받아와 state 설정
    const [user, setUser] = useState({id:2,name:"김개동"})
    return (<>
        <MUpdateCom user={user} />
    </>)
}
export default MUpdatePage;