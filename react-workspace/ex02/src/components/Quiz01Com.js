function Quiz01Com( {number,plusNum,subNum} ){
    return (<>
        {number}
        <hr></hr>
        <button onClick={plusNum}>+</button>
        <button onClick={subNum}>-</button>
    </>)
}
export default Quiz01Com;