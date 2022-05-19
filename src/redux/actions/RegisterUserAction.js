import http from "../../services/httpService";
import config from "../../services/config.json";


export const registerUser = user=> {
    return async dispatch => {
        const { data } = await registerapi(user);
        await dispatch({ type: "Register", payload: data});
    };
};
export const registerapi = user => {
    return http.post(
        `${config.toplearnapi}/api/register`,
        JSON.stringify(user)
    );
};


