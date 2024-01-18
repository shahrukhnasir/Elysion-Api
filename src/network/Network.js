import {
  ADD_TO_CART,
  ADD_TO_CART_LIST,
  ALL_WISHLIST_DELETE,
  BLOGS,
  BLOG_CONTENT,
  CATEGORIES,
  CAT_BY_PRODUCT,
  CHECK_OUT,
  CONTACT_US,
  FAQ,
  FIND_LOCATION,
  FORGOT_PASSWORD,
  FREE_CONSULTATION,
  GUEST_CART_ALL_REMOVE,
  GUEST_CART_CREATE,
  GUEST_CART_LIST,
  GUEST_CART_REMOVE,
  GUEST_CHECK_OUT,
  HERO_SECTION,
  LAST_VISIT,
  LOGIN,
  MEDICAL_SERVICES,
  MEET_DOCTOR,
  MEMBER_SHIP,
  MY_PROFILE,
  MY_PROFILE_IMAGE,
  NEWS__LATTER,
  ORDERS,
  OTP_NEW_PASSWORD,
  PAYMENT_TRANSACTIONS_RECORD,
  PRODUCT,
  REMOVED_TO_ALL,
  REMOVED_TO_CART,
  SERVICES,
  SERVICES_ID,
  SERVICE_PROVIDER,
  SERVICE_PROVIDER_ID,
  SIGN_UP,
  SITE_SETTINGS,
  SLOTS,
  SLOTS_APPOINTMENT_CANCEL,
  SLOTS_AVAILABLE,
  SLOTS_CREATE_CHECK_OUT,
  SLOTS_MY_APPOINTMENTS,
  UPDATE_PASSWORD,
  UPDATE_PROFILE,
  USER_SUBSCRIPTION,
  USER_SUBSCRIPTION_BY_ID,
  USER_SUBSCRIPTION_BY_TOKEN,
  USER_SUBSCRIPTION_CREATE,
  WISHLIST,
  WISHLIST_ADD,
  WISHLIST_DELETE_BY_ID,
} from "./EndPoint";
import { deleteMethod, getMethod, postMethod } from "./Config";

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

export const ServiceContentById = (slug ) => {
  return getMethod(`${SERVICES_ID}/${slug}`,);
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
export const getProducts = (slug, search, data) => {
  let endpoint = PRODUCT;

  // if (slug || search) {
  //   endpoint += `${
  //     slug.length > 0 ||
  //     (search &&
  //       `?filter_by=${search ? "categorysearch" : slug.length > 0 ? "category" : ""}${slug.length > 0 ? `&category=${slug}` : ""}${
  //         search && `&value=${search}`
  //       }`)
  //   }`;
  // } else {
  //   endpoint;
  // }

  if (slug && !search) {
    endpoint += `${
      slug && !search && `?filter_by=${"category"}&value=${slug}`
    }`;
  } else if (!slug && search) {
    endpoint += `${
      !slug && search && `?filter_by=${"search"}&value=${search}`
    }`;
  } else if (slug && search) {
    endpoint += `${
      slug &&
      search &&
      `?filter_by=${"categorysearch"}&category=${slug}&value=${search}
        `
    }`;
  } else {
    endpoint;
  }

  return getMethod(endpoint, data);
};

export const Products = (slug, data) => {
  return getMethod(`${PRODUCT}${slug}`, data);
};

// export const CatByProducts = (slug, data) => {
//   return getMethod(`${PRODUCT}?filter_by=category&value=${slug}`, data);
// };

// export const SearchProduct = (slug, search, data) => {
//   return getMethod(
//     `${PRODUCT}?filter_by=categorysearch&category=${slug}&value=${search}`,
//     data
//   );
// };

export const ProductDetails = (slug, data) => {
  return getMethod(`${PRODUCT}/${slug}`, data);
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
export const AddToCart = (token, data) => {
  return postMethod(`${ADD_TO_CART}`, data, token);
};

export const WishList = (token, data) => {
  return postMethod(`${WISHLIST_ADD}`, data, token);
};
export const SlotCreateCheckOut = (token, data) => {
  return postMethod(`${SLOTS_CREATE_CHECK_OUT}`, data, token);
};
export const AddToCartList = (data, token) => {
  return getMethod(`${ADD_TO_CART_LIST}`, data, token);
};
export const RemovedToCart = (slug, token, data) => {
  return deleteMethod(`${REMOVED_TO_CART}${slug}`, token, data);
};
export const RemovedToAll = (data, token) => {
  return deleteMethod(`${REMOVED_TO_ALL}`, data, token);
};

export const CheckOut = (token, data) => {
  return postMethod(`${CHECK_OUT}`, data, token);
};
export const Blogs = (data) => {
  return getMethod(`${BLOGS}`, data);
};

export const BlogContent = (data) => {
  return getMethod(`${BLOG_CONTENT}`, data);
};
export const ServiceProvider = (token, data) => {
  return getMethod(`${SERVICE_PROVIDER}`, token, data);
};

export const ServiceProviderById = (slug, token, data) => {
  return getMethod(`${SERVICE_PROVIDER_ID}${slug}`, token, data);
};

export const SlotById = (slug, token, data) => {
  return getMethod(`${SLOTS}${slug}`, token, data);
};
export const SlotsAvailable = (token, data) => {
  return postMethod(`${SLOTS_AVAILABLE}`, data, token);
};
export const LastVisitFollowUp = (token, data) => {
  return getMethod(`${LAST_VISIT}`, token, data);
};
export const Subscription = (token, data) => {
  return postMethod(`${USER_SUBSCRIPTION_CREATE}`, data, token);
};

export const UserSubscriptionBuy = (slug, token, data) => {
  return getMethod(`${USER_SUBSCRIPTION_BY_ID}${slug}`, token, data);
};
export const UserSubscriptions = (token, data) => {
  return getMethod(`${USER_SUBSCRIPTION_BY_TOKEN}`, token, data);
};

export const SlotsMyAppointments = (token, data) => {
  return getMethod(`${SLOTS_MY_APPOINTMENTS}`, token, data);
};

export const SlotsAppointmentCancel = (slug, token, data) => {
  return getMethod(`${SLOTS_APPOINTMENT_CANCEL}${slug}`, token, data);
};
export const MyOrdersList = (token, data) => {
  return getMethod(`${ORDERS}`, token, data);
};

export const GetWishList = (token, data) => {
  return getMethod(`${WISHLIST}`, token, data);
};

export const MyProfile = (token, data) => {
  return getMethod(`${MY_PROFILE}`, token, data);
};
export const MyProfileImage = (token, data) => {
  return postMethod(`${MY_PROFILE_IMAGE}`, token, data);
};
export const UpdateProfile = (token, data) => {
  return postMethod(`${UPDATE_PROFILE}`, token, data);
};

export const UpdatePassword = (token, data) => {
  return postMethod(`${UPDATE_PASSWORD}`, token, data);
};

export const WishListDeleteById = (slug, token, data) => {
  return deleteMethod(`${WISHLIST_DELETE_BY_ID}${slug}`, token, data);
};
export const WishListDelete = (token, data) => {
  return deleteMethod(`${ALL_WISHLIST_DELETE}`, token, data);
};
export const PaymentTransactionRecords = (token, data) => {
  return deleteMethod(`${PAYMENT_TRANSACTIONS_RECORD}`, token, data);
};

export const Footer = (token, data) => {
  return getMethod(`${SITE_SETTINGS}`, token, data);
};

export const GuestCartCreate = (data) => {
  return postMethod(`${GUEST_CART_CREATE}`, data);
};

export const GuestCartList = (session_id, data) => {
  return getMethod(`${GUEST_CART_LIST}?session_id=${session_id}`, data);
};

export const GuestCartListRemoved = (slug, session_id, data) => {
  return deleteMethod(
    `${GUEST_CART_REMOVE}/${slug}?session_id=${session_id}`,
    data
  );
};

export const GuestAllCartListRemoved = (session_id,data) => {
  return deleteMethod(`${GUEST_CART_ALL_REMOVE}?session_id=${session_id}`,data);
};
export const GuestCheckOut = (data) => {
  return postMethod(`${GUEST_CHECK_OUT}`, data);
};