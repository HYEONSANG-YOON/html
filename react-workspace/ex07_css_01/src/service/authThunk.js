import { createAsyncThunk } from "@reduxjs/toolkit"

let data_set = [
    {username:"aaa",password:"aaa",role:"USER"},
    {username:"bbb",password:"bbb",role:"USER"},
    {username:"ccc",password:"ccc",role:"USER"}
]

// ----------------------------
// 1️⃣ 로그인 Thunk
// ----------------------------

export const loginThunk = createAsyncThunk(
    "loginThunk",
    async (user) => {
        const data = data_set.filter(data => data.username === user.username)[0]
        let result = 1;
        if( data?.password === user.password )
            result= 0;
        return {result,username:user.username}; //성공 0, 실패 1
    }
);

// ----------------------------
// 2️⃣ 회원가입 Thunk
// ----------------------------
export const registerThunk = createAsyncThunk(
    "auth/registerThunk",
    async ({ username, password, role }) => {
        const exists = data_set.some(u => u.username === username );
        if (exists) {
            return { result: 1, message: "이미 존재하는 아이디입니다."};
        }
        data_set.push({ username, password, role: "USER"});
        return { result: 0, username, role };
    }
);