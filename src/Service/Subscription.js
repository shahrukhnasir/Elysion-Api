import Swal from "sweetalert2";
import { Subscription, UserSubscriptionBuy } from "../network/Network";

// User Subscription Create
export const UserSubscriptionCreate =
  (token, data, setLoading, router) => () => {
    setLoading(true);
    Subscription(token, data)
      .then((res) => {
        // console.log(res, "res");
        // console.log(res, ":R?ESULT_CHECKING");
        setLoading(false);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "MemberShip Purchased Successfully Done",
          text: res?.data?.response?.data?.message,
          showConfirmButton: false,
          timer: 1500,
        });
        router.push("/thankyou");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        Swal.fire({
          position: "center",
          icon: "error",
          title: error.response?.data?.message && "Select MemberShip",
          text: error.response?.data?.message || "Select MemberShip",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

// User Subscription
export const UserSubscription =
  (slug, token, setLoading, setSubscriptionDetails) => () => {
    setLoading(true);
    UserSubscriptionBuy(slug, token)
      .then((res) => {
        setSubscriptionDetails(res?.data?.response?.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
