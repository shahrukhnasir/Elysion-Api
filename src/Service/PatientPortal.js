import Swal from "sweetalert2";
import {
  MyOrdersList,
  SlotsAppointmentCancel,
  SlotsMyAppointments,
} from "../network/Network";

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
