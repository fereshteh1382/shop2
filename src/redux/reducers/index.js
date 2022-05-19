import React from "react";
import {combineReducers} from "redux";
import LoginUserReducer from "./AuthReducer";
import RegisterUserReducer from "./RegisterUserReducer";


export default combineReducers({
    LoginState : LoginUserReducer,
    Register : RegisterUserReducer
})