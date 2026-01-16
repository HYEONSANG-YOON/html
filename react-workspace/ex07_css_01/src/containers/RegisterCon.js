import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { registerThunk } from "../service/authThunk";
import RegisterCom from "../components/RegisterCom";
import HeaderCom from "../components/common/HeaderCom";

const RegisterCon = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");

    const loading = useSelector(state => state.auth.loading);
    const error = useSelector(state => state.auth.error);

    const handleRegister = (e) => {
        e.preventDefault();
        dispatch(registerThunk({ username, password, role }))
            .unwrap()
            .then(res => { 
                if (res.result === 0){
                    alert("회원가입 성공! 로그인 페이지로 이동합니다.");
                    navigate("/login");
                } else {
                    alert(res.message || "회원가입 실패");
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <>
            <HeaderCom />
            <RegisterCom
                username={username}
                password={password}
                role={role}
                setRole={setRole}
                setUsername={setUsername}
                setPassword={setPassword}
                handleRegister={handleRegister}
                loading={loading}
                error={error}
            />
        </>
    );
};

export default RegisterCon;