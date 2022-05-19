import React from "react";

export const RegisterUserReducer = (state = {}, action) => {
    switch (action.type) {
        case "Register":
            return {items: action.payload,message: "" };
        default:
            return state;
    }
};


export default RegisterUserReducer;