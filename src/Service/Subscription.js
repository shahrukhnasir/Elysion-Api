import Swal from "sweetalert2";
import { Subscription, UserSubscriptionBuy , UserSubscriptions} from "../network/Network";
import { toast } from "react-toastify";

// User Subscription Create
export const UserSubscriptionCreate =
  (token, data, setLoading, router) => () => {
    setLoading(true);
    Subscription(token, data)
      .then((res) => {
        setLoading(false);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "MemberShip Purchased Successfully Done",
          text: res?.data?.response?.data?.message,
          showConfirmButton: false,
          timer: 1500,
        });
        router.push("/my-memberships");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        Swal.fire({
          position: "center",
          icon: "error",
          title: error.response?.data?.message,
          text: error.response?.data?.message ,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

// User Subscription BY ID
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
// User Subscription By Token
export const Subscriptions =
  (token, setLoading, setSubscription,setSatus) => () => {
    setLoading(true);
    UserSubscriptions(token)
      .then((res) => {
        setSubscription(res?.data?.response?.data?.subscription);
        setSatus(res?.data?.response?.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };