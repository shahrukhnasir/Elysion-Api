import { CONTACT_US, LOGIN, SIGN_UP } from "./EndPoint";
import { postMethod } from "./Config";


export const ContactApi = (data) => {
    return postMethod(`${CONTACT_US}`, data);
};
export const SignUp = (data) => {
    return postMethod(`${SIGN_UP}`, data);
};
export const Login = (data) => {
    return postMethod(`${LOGIN}`, data);
};