import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../service/authThunk";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderCom from "../components/common/HeaderCom";
import LoginCom from "../components/LoginCom";

const LoginCon = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    
    const handleLogin = (e) => {
        e.preventDefault();
        //console.log(`username: ${username}`);
        //console.log(`password: ${password}`);
        dispatch(loginThunk({ username,password }));
    };

    useEffect(() => {
    if (isLoggedIn) {
        navigate("/");
    }
}, [isLoggedIn, navigate]);

    return (<>
        <HeaderCom />
        <LoginCom 
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
            handleLogin={handleLogin}
        />
    </>);
};
export default LoginCon;