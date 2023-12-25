import {
  CATEGORIES,
  CAT_BY_PRODUCT,
  CONTACT_US,
  FAQ,
  FIND_LOCATION,
  FORGOT_PASSWORD,
  FREE_CONSULTATION,
  HERO_SECTION,
  LOGIN,
  MEDICAL_SERVICES,
  MEET_DOCTOR,
  MEMBER_SHIP,
  NEWS__LATTER,
  OTP_NEW_PASSWORD,
  PRODUCT,
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

export const ServiceContentById = (slug, data) => {
  return getMethod(`${SERVICES_ID}/${slug}`, data);
};
export const FindLocation = (data) => {
  return getMethod(`${FIND_LOCATION}`, data);
};
export const Faqs = (data) => {
  return getMethod(`${FAQ}`, data);
};
export const Categories = (data) => {
  return getMethod(`${CATEGORIES}`, data);
};

export const Products = (data) => {
  return getMethod(`${PRODUCT}`, data);
};

export const CatByProducts = (slug,data ) => {
  return getMethod(`${PRODUCT}?filter_by=category&value=${slug}`, data);
};
export const ProductDetails = (slug,data) => {
  return getMethod(`${PRODUCT}/${slug}`, data);
};

export const SearchProduct = (slug,search,data ) => {
  return getMethod(`${PRODUCT}?filter_by=categorysearch&category=${slug}&value=${search}`, data);
};

export const NewsLatter = (data) => {
  return postMethod(`${NEWS__LATTER}`, data);
};
export const FreeConsult = (data) => {
  return postMethod(`${FREE_CONSULTATION}`, data);
};
export const Membership = (data) => {
  return getMethod(`${MEMBER_SHIP}`, data);
  
};