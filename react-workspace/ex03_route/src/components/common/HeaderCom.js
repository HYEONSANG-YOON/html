import { Link, Outlet, } from "react-router-dom";

//function HeaderCom(){} 이렇게 만드나 아래처럼 만드나 상관없음
const HeaderCom = () => {
    return (
        <div>
            <header>
                <Link to="/">HOME</Link> &nbsp;
                <Link to="/member/list">MEMBER</Link>
                <hr></hr>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}
export default HeaderCom;