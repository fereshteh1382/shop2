import http from "../../../services/httpService";

import config from "../../../services/config.json";

import {
    REQ_LOGIN_START,
    REQ_LOGIN_SUCCESS,
    REQ_LOGIN_FAILED,
} from "./ActionTypes";



export const LoginUser = async (dispatch) => {
   // const apiUrl = `https://apitester.ir/api/Products`;
    const apiUrl='${config.localapi}/api/login';
    let result = await fetch(apiUrl)
        .then(response => response.json())
        .then(data => dispatch(ReqLoginSuccess(data)))
        .catch(error => {dispatch(ReqLoginFailed(error))})
    return result
}


export const ReqLoginStart = () => ({
    type:REQ_LOGIN_START,
})

export const ReqLoginSuccess = (data) => ({
    type:REQ_LOGIN_SUCCESS,
    payload:data
})

export const ReqLoginFailed = (errorMessage) => ({
    type:REQ_LOGIN_FAILED,
    payload:errorMessage

})


export const registerUser0 = user => {
    const apiUrl='${config.localapi}/api/register';
/*const apiUrl=
     http.post(
        `${config.localapi}/api/register`,
        JSON.stringify(user)
    );*/
   /* return async dispatch => {
        const { data } = await fetch(apiUrl);
        await dispatch({ type: "GET_COURSE", payload: data.course });
    };*/
};

/*export const registerUser = user => { 
    return http.post(
        `${config.localapi}/api/register`,
        JSON.stringify(user)
    );
};*/
