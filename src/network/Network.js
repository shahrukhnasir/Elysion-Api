import { CONTACT_US, FORGOT_PASSWORD, LOGIN, OTP_NEW_PASSWORD, SIGN_UP} from "./EndPoint";
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
export const ForgotPassword = (data) => {
    return postMethod(`${FORGOT_PASSWORD}`, data);
};
export const OtpChangePassword = (data) => {
    return postMethod(`${OTP_NEW_PASSWORD}`, data);
};