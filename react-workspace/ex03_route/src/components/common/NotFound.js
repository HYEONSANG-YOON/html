import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = { useNavigate }
    return (<>
        <h1>페이지 없음!!!</h1>
        <button onClick={ () => navigate("/")}>HOME 이동</button>
        <Link to="/">HOME이동</Link>
    </>)
}
export default NotFound;