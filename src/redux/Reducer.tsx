import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "PROFILE",
    initialState: {
        email:"",
        password:"",
    },
    reducers: {
        setUserName: (state, action) => {
            return { ...state, email: action.payload };
        },
        setUserPassword: (state, action) => {
            return { ...state, password: action.payload };
        }
    }
})

export  const details = (state:any) => state.PROFILE;

export const { setUserName,setUserPassword } = counterSlice.actions;