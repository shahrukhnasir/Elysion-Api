import Swal from "sweetalert2";
import {
  GetWishList,
  MyOrdersList,
  MyProfile,
  MyProfileImage,
  SlotsAppointmentCancel,
  SlotsMyAppointments,
  UpdatePassword,
  UpdateProfile,
  WishListDelete,
  WishListDeleteById,
} from "../network/Network";

// My Profile
export const Profile = (token, setLoading, setMyProfile) => () => {
  setLoading(true);
  MyProfile(token)
    .then((res) => {
      setMyProfile(res?.data?.response?.data?.user);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
    });
};
// My Profile Photo Upload
export const MyProfileImageUpload = (token, data, setLoading) => async () => {
  setLoading(true);
  try {
    const res = await MyProfileImage(token, data);
    console.log(res);
    setLoading(false);
    if (res) {
      await Swal.fire({
        position: "center",
        icon: "success",
        title: "Profile Photo Uploaded",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  } catch (error) {
    console.log(error, "error");
    await Swal.fire({
      position: "center",
      icon: "error",
      title: error?.response?.data?.message,
      text: error?.response?.data?.message,
      showConfirmButton: false,
      timer: 1500,
    });
  }
};

//  Update My Profile
export const MyUpdateProfile =
  (token, data, setLoading, router) => async () => {
    setLoading(true);
    try {
      const res = await UpdateProfile(token, data);
      console.log(res, "update_profile");
      setLoading(false);
      if (res) {
        await Swal.fire({
          position: "center",
          icon: "success",
          title: "Profile Uploaded",
          showConfirmButton: false,
          timer: 1500,
        });
        router.push("/profile");
      }
    } catch (error) {
      console.log(error, "error");
      await Swal.fire({
        position: "center",
        icon: "error",
        title: error?.response?.data?.message,
        text: error?.response?.data?.message,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

//  Update Password
export const UpdateMyPassword =
  (token, data, setLoading, router) => async () => {
    setLoading(true);
    try {
      const res = await UpdatePassword(token, data);
      console.log(res, "update_profile");
      setLoading(false);
      if (res) {
        await Swal.fire({
          position: "center",
          icon: "success",
          title: "Password Updated",
          showConfirmButton: false,
          timer: 1500,
        });
        router.push("/profile");
      }
    } catch (error) {
      console.log(error, "error");
      await Swal.fire({
        position: "center",
        icon: "error",
        title: error?.response?.data?.message,
        text: error?.response?.data?.message,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
// / My Appointments By Token
export const MyAppointment = (token, setLoading, setMyApp) => () => {
  setLoading(true);
  SlotsMyAppointments(token)
    .then((res) => {
      setMyApp(res?.data?.response?.data);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
    });
};

//👇/ My Appointments Cancelation by id
export const AppointmentCancel = (slug, token, setLoading) => () => {
  setLoading(true);
  SlotsAppointmentCancel(slug, token)
    .then((res) => {
      console.log(res, "resaaaa");
      setLoading(false);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Cancelled Successfully Done",
        text: res?.data?.response?.data?.message,
        showConfirmButton: false,
        timer: 1500,
      });
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
      Swal.fire({
        position: "center",
        icon: "info",
        title: "Already Cancelled",
        text: error.response?.data?.message || "",
        showConfirmButton: false,
        timer: 1500,
      });
    });
};

//👇My Orders List
export const OrderList = (token, setLoading, setOrderList) => () => {
  setLoading(true);

  MyOrdersList(token)
    .then((res) => {
      setOrderList(res?.data?.response?.data?.data);
      console.log(res, "resaaaa");
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
      Swal.fire({
        position: "center",
        icon: "info",
        title: "Order List Empty",
        text: error.response?.data?.message || "",
        showConfirmButton: false,
        timer: 1500,
      });
    });
};

//👇My Wish List
export const MyWishList = (token, setLoading, setWishList) => () => {
  setLoading(true);

  GetWishList(token)
    .then((res) => {
      setWishList(res?.data?.response?.data);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
      Swal.fire({
        position: "center",
        icon: "info",
        title: "Wish List Empty",
        text: error.response?.data?.message || "",
        showConfirmButton: false,
        timer: 1500,
      });
    });
};

////👇Removed To WishList item
export const RemovedWishListHandler = (slug, token, setLoading) => async () => {
  setLoading(true);
  try {
    const res = await WishListDeleteById(slug, token);

    setLoading(false);
    await Swal.fire({
      position: "center",
      icon: "success",
      title: "Wishlist Products Removed",
      showConfirmButton: false,
      timer: 1500,
    });
  } catch (error) {
    // setLoading(false);
    console.error("Error in Password Update:", error);

    await Swal.fire({
      position: "center",
      icon: "error",
      title: "Cart Not Removed ",
      text: "Cart Not Removed ",
      showConfirmButton: false,
      timer: 1500,
    });
    setLoading(false);
  }
};

////👇All Removed To WishList
export const AllRemovedWishListHandler = (token, setLoading) => async () => {
  setLoading(true);
  try {
    const res = await WishListDelete(token);
    setLoading(false);
    await Swal.fire({
      position: "center",
      icon: "success",
      title: "Removed WishList Product",
      showConfirmButton: false,
      timer: 1500,
    });
  } catch (error) {
    console.error("Error in Password Update:", error);

    await Swal.fire({
      position: "center",
      icon: "error",
      title: "Cart Not Removed ",
      text: "Cart Not Removed ",
      showConfirmButton: false,
      timer: 1500,
    });
    setLoading(false);
  }
};
