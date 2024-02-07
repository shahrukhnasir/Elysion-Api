import Swal from "sweetalert2";
import { GuestAllCartListRemoved, GuestCartCount, GuestCartCreate, GuestCartList, GuestCartListRemoved, GuestCheckOut, UpdateGuestCart } from "../network/Network";
import { getCartList, setCartList } from "../Redux/CartList/CartList";
import { toast } from "react-toastify";

////👇// Add TO Cart Guest
export const AddToCartGuest = (data, setLoading, router, dispacth) => () => {
  GuestCartCreate(data)
    .then((res) => {

      setLoading(false);
      toast.success("Add to Cart successfully")
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
export const GuestCartLists = (session_id, setLoading, setAddCartList, dispacth) => (dispatch) => {
  setLoading(true);

  GuestCartList(session_id)
    .then((res) => {
      // dispacth(setCartList(res?.data?.response?.data))
      // console.log(res, "addd");
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
  (slug, session_id, setLoading, router) => async () => {
    setLoading(true);
    try {
      const res = await GuestCartListRemoved(slug, session_id);
      console.log(res?.data?.message === "success");
      if (res?.data?.message === "success") {
        setLoading(false);
        await
          toast.success("Removed to Cart successfully")
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
  (session_id, data) => async () => {
    try {
      const res = await GuestAllCartListRemoved(session_id, data);
      await
        toast.success("Clear All Cart List successfully")
    } catch (error) {
      console.error("Error in Password Update:", error?.message);

      await Swal.fire({
        position: "center",
        icon: "error",
        title: error?.message,
        text: "please login First",
        showConfirmButton: false,
        timer: 1000,
      });
      // setLoading(false);
    }
  };

////👇Check Out
export const GuestCheckOutHandler =
  (data, setLoading, router) => async () => {
    setLoading(true);
    try {
      const res = await GuestCheckOut(data);
      console.log(res);
      if (res?.data?.message === "success") {
        setLoading(false);
        await
          toast.success("Order successfully done")
        router.push("thankyou");
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

// 👇Cart item counting
export const getGuestCartCount = (session_id, setGuestCartCount) => async () => {
  GuestCartCount(session_id)
    .then((res) => {
      console.log(res?.data?.response?.data, "GUESTSKJK");
      setGuestCartCount(res?.data?.response?.data);
    })
    .catch((err) => {
      console.log(err);
    });
};


////👇Cart Price Update
export const UpdateGuestCartQty = (session_id, data, setLoading, setAddCart) => async () => {
  setLoading(true);
  try {
    const res = await UpdateGuestCart(session_id, data);
    setAddCart(res?.data?.response?.data)
    console.log(res);
    setLoading(false);
  } catch (error) {
    setLoading(false);
    console.error(error?.response?.data?.errors, "errr");
    toast.error(error?.response?.data?.message);
  }
};