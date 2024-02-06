import Swal from "sweetalert2";
import {
  GetWishList,
  MyOrdersList,
  MyProfile,
  MyProfileImage,
  PaymentTransactionRecords,
  SlotsAppointmentCancel,
  SlotsMyAppointments,
  UpdatePassword,
  UpdateProfile,
  WishListDelete,
  WishListDeleteById,
} from "../network/Network";
import { toast } from "react-toastify";

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
      console.log(error?.response?.data?.errors , "ghfbyddrd");
      await Swal.fire({
        position: "center",
        icon: "error",
        title: error?.response?.data?.message || error?.response?.data?.errors?.new_password?.[0] ||
        error?.response?.data?.errors?.old_password?.[0] ||
        error?.response?.data?.errors?.confirm_password?.[0],
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

      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
      toast.info("Order List Empty");
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
      toast.info("Wish List Empty");
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

//👇My Payment Transactions
export const PaymentTransaction = (token, setLoading, setTransactions) => () => {
  setLoading(true);

  PaymentTransactionRecords(token)
    .then((res) => {
      setTransactions(res?.data?.response?.data?.data);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
     
    });
};
