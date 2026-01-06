function Ex03Com( { obj , onChangeName , onChangeAddr } ){
    return (<>
        name : {obj.name}<br></br>
        addr : {obj.addr}<br></br>
        <button onClick={onChangeName}>이름변경</button>
        <button onClick={onChangeAddr}>주소변경</button>
    </>)
}
export default Ex03Com;