function Quiz02Com( props ){
    console.log( props )
    const {msg:mm, onIn, onOut } = props
    let message = "";
    if(mm === "")
        message = <b>아무값 없음</b>;
    else
        message = mm;
    return (<>
        삼항연산자 : { (mm === "")? <b>없음</b> : mm }<br></br>
       msg : {mm}<br></br>
       message : {message}
       <br></br>
       <button onClick={props.onIn}>IN</button>
       <button onClick={onOut}>OUT</button>
    </>)
}
export default Quiz02Com;