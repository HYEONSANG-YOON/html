const Ref04Com = ( {inputId, inputPwd, input, onChange, onSubmit}) => {
    return(<>
        <form onSubmit={onSubmit}>
            <input ref={inputId} type="text" value={input.username} 
                            name="username" onChange={onChange} /><br></br>
            <input ref={inputPwd} type="password" value={input.password} 
                            name="password" onChange={onChange} /><br></br>
            <button>로그인</button>
        </form>
    </>)
}
export default Ref04Com;