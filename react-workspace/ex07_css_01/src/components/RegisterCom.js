import styled from "styled-components";
import StyledButton from "./common/StyleButton";
import StyleForm from "./common/StyleForm";
import StyledInput from "./common/StyleInput";

const AuthBlock = styled.div`
    position: absolute; left:0; right:0; top:0; bottom:0;
    background-color: rgba(0,0,0,0.1);
`;
const RegisterBox = styled.div`
    position: absolute; width: 360px; top:150px; left:calc(50% - 180px);
    background: white; padding-top:20px; box-shadow: 0 0 8px rgba(0,0,0,0.3);
    border-radius:5px;
    .logo-area { text-align:center; font-weight:bold; font-size:20px; }
`;
const RegisterCom = ({ username, password, setUsername, setPassword, handleRegister, setRole, role }) => {
    return (
        <AuthBlock>
            <RegisterBox>
                <div className="logo-area">회원가입</div>
                <StyleForm onSubmit={handleRegister}>
                    <StyledInput
                        placeholder="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <StyledInput
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <StyledInput
                        placeholder="role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                    />
                    <StyledButton type="submit" width="100%" background={["178,235,244",0.5]}>가입</StyledButton>
                </StyleForm>
            </RegisterBox>
        </AuthBlock>
    );
};
export default RegisterCom;