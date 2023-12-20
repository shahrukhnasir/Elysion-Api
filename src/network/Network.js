import {
  CONTACT_US,
  FIND_LOCATION,
  FORGOT_PASSWORD,
  HERO_SECTION,
  LOGIN,
  MEDICAL_SERVICES,
  MEET_DOCTOR,
  OTP_NEW_PASSWORD,
  SERVICES,
  SERVICES_ID,
  SIGN_UP,
} from "./EndPoint";
import { getMethod, postMethod } from "./Config";

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

export const HeroSectionContent = (data) => {
  return getMethod(`${HERO_SECTION}`, data);
};
export const MeetDoctorContent = (data) => {
  return getMethod(`${MEET_DOCTOR}`, data);
};

export const MedicalServiceContent = (data) => {
  return getMethod(`${MEDICAL_SERVICES}`, data);
};
export const AllServiceContent = (data) => {
  return getMethod(`${SERVICES}`, data);
};

export const ServiceContentById = (slug,data) => {
  return getMethod(`${SERVICES_ID}/${slug}`, data);
};
export const FindLocation = (data) => {
  return getMethod(`${FIND_LOCATION}`, data);
};
