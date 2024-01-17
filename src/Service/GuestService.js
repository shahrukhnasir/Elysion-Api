import Swal from "sweetalert2";
import { GuestAllCartListRemoved, GuestCartCreate, GuestCartList, GuestCartListRemoved } from "../network/Network";

////👇// Add TO Cart Guest
export const AddToCartGuest = (data, setLoading, router) => () => {
    GuestCartCreate(data)
      .then((res) => {
     console.log(res,"res");
          setLoading(false);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Add to Cart successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          router.push('/my-cart');
      })
      .catch((res) => {
        console.log(res);
        Swal.fire({
          position: "center",
          icon: "error",
          title: res?.response?.data?.message || res?.response?.data?.errors,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };


  
// 👇 Add TO Cart List
export const GuestCartLists = (session_id,setAddCartList, setLoading) => (dispatch) => {
    setLoading(true);
  
    GuestCartList(session_id)
      .then((res) => {
        console.log(res, "addd");
        dispatch(setAddCartList(res?.data?.response?.data));
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };
  

////👇Removed To Cart  item
export const GuestRemovedToCartItem =
(slug,session_id, setLoading, router) => async () => {
  setLoading(true);
  try {
    const res = await GuestCartListRemoved(slug,session_id);
    console.log(res?.data?.message === "success");
    if (res?.data?.message === "success") {
      setLoading(false);
      await Swal.fire({
        position: "center",
        icon: "success",
        title: "Removed to Cart successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      // router.reload();

      // dispatch(AddToCartHandler(token))
    }
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

////👇Removed To All
export const GuestCartListAllClear =
(session_id,data) => async () => {
  try {
    const res = await GuestAllCartListRemoved(session_id,data);

      await Swal.fire({
        position: "center",
        icon: "success",
        title: "Clear All Cart List successfully",
        showConfirmButton: false,
        timer: 1500,
      });
  } catch (error) {
    console.error("Error in Password Update:", error?.message);

    await Swal.fire({
      position: "center",
      icon: "error",
      title: error?.message,
      text: "please login",
      showConfirmButton: false,
      timer: 1000,
    });
    // setLoading(false);
  }
};

////👇Check Out
export const CheckOutHandler =
(token, data, setLoading, route) => async (dispatch) => {
  setLoading(true);
  try {
    const res = await CheckOut(token, data);
    console.log(res);
    if (res?.data?.message === "success") {
      setLoading(false);
      await Swal.fire({
        position: "center",
        icon: "success",
        title: "Order successfully completed",
        showConfirmButton: false,
        timer: 1500,
      });
      route.push("myorders");
    }
  } catch (error) {
    // setLoading(false);
    console.error(error?.response?.data?.errors, "errr");

    await Swal.fire({
      position: "center",
      icon: "error",
      title:
        error?.response?.data?.errors?.billing_address ||
        error?.response?.data?.errors?.billing_email ||
        error?.response?.data?.errors?.billing_first_name ||
        error?.response?.data?.errors?.billing_last_name ||
        error?.response?.data?.errors?.billing_phone ||
        error?.response?.data?.errors?.shipper_address ||
        error?.response?.data?.errors?.shipper_email ||
        error?.response?.data?.errors?.shipper_first_name ||
        error?.response?.data?.errors?.shipper_phone ||
        error?.response?.data?.errors?.shipper_last_name,
      text: error?.response?.data?.message,
      showConfirmButton: true,
      customClass: {
        confirmButton: "theme-button-bg",
      },
    });
    // setLoading(false);
  }
};