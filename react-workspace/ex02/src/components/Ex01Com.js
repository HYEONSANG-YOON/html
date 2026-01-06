function Ex01Com( { num , setNum } ){ //props
    //console.log( props )
    console.log("component 실행")
    return (<>
        { num === 100 ? "num은 100과 같다" : "100과 다르다" }
        <br></br>
        num : {num}<br></br>
        <button onClick={setNum}>클릭</button>
    </>)
}
export default Ex01Com;