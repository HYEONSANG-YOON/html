import { useNavigate, useParams } from "react-router-dom";
import { memberDelete } from "../../service/member/member";
import { useEffect } from "react";

function MDeleteCon(){
    const params = useParams();
    //console.log( "del con params : ", params )
    memberDelete( params.username );
    
    const navigate = useNavigate();
    useEffect( ()=> {
        navigate("/member/list")
    })
    return null
}
export default MDeleteCon;