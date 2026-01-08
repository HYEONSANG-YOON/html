import { useState } from "react";
import QuizRadioCom from "../components/QuizRadioCom";
const initalRadio = [
    {key : 4, value : "10대", name : "age", isChecked : true},
    {key : 5, value : "20대", name : "age", isChecked : false},
    {key : 6, value : "30대", name : "age", isChecked : false},
]
const QuizRadioCon = () => {
    const [age, setAge ] = useState( initalRadio )
    const onChange = ( key ) => {
        //console.log("key : ", key)
        //const updateHobby = age.map(data => ({...data, isChecked: key === data.key}) )
        const updateHobby = age.map(data => {
            console.log("data : ", data);
            console.log("key : ", key);
            console.log("key === data.key : ", key === data.key);
            console.log("--------------------")
            return {...data, isChecked: key === data.key};
        });
        setAge( updateHobby );
    }
    return (<><QuizRadioCom age={age} onChange={onChange}/></>)
}
export default QuizRadioCon;