/*
api 연결 - backend쪽과 연동 되는 코드
backend(spring-boot) : 저장소(DB)와 연동
frontend : 백엔드에서 데이터를 받아와 화면 구현
*/
let data = [
    {id:"aaa", pwd:"aaa", name:"홍길동", addr:"산골짜기"},
    {id:"bbb", pwd:"bbb", name:"김개똥", addr:"개똥별"},
    {id:"ccc", pwd:"ccc", name:"고길동", addr:"마포구"},
]
const getData = () => {
    return data;
};
const memberDelete = ( id ) => {
    //console.log("delete : ", id ) aaa
    //console.log("delete 전 data : ", data )
    data = data.filter( mem => mem.id !== id )
    //console.log("delete 후 data : ", data )
}
export const getOne = ( id ) => {
    //[{}]
    return data.filter( mem => mem.id === id )[0]
}
//const getData = () => data;
export { getData , memberDelete };