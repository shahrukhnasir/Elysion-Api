import Swal from "sweetalert2";
import {
  LastVisitFollowUp,
  ServiceProvider,
  ServiceProviderById,
  SlotById,
  SlotCreateCheckOut,
  SlotsAvailable,
} from "../network/Network";

// ServiceProvider
export const SelectServiceProvider = (token, setLoading, setService) => () => {
  setLoading(true);
  ServiceProvider(token)
    .then((res) => {
      setService(res?.data?.response?.data);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
    });
};

// ServiceProviderById

export const DoctorDetails = (slug, token, setLoading, setDocDetails) => () => {
  setLoading(true);
  ServiceProviderById(slug, token)
    .then((res) => {
      setDocDetails(res?.data?.response?.data);
      console.log(res?.data?.response?.data, ":RESULT");
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
    });
};

export const Slots = (slug, token, setLoading, setSlots) => () => {
  setLoading(true);
  SlotById(slug, token)
    .then((res) => {
      setSlots(res?.data?.response?.data);
      console.log(res?.data?.response?.data, ":RESULT");
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
    });
};
//Slots available
export const CheckSlotsHandler =
  (token, data, setLoading, router) => async () => {
    console.log(data);
    setLoading(true);
    try {
      const res = await SlotsAvailable(token, data);

      console.log(res);
      setLoading(false);
      // setAvailableSlots({
      //   doc_id: "",
      //   time: "",
      //   date: "",
      // });

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Successfully Done",
        text: res?.data?.response?.data?.message,
        showConfirmButton: false,
        timer: 1500,
      });

      router.push("/confirmservice");
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);

      Swal.fire({
        position: "center",
        icon: "error",
        title:
          error.response?.data?.message && "Select the correct Time & Date",
        text: error.response?.data?.message || "An error occurred",
        showConfirmButton: true,
        customClass: {
          confirmButton: "theme-button-bg",
        },
      });
    }
  };

// Last Visit
export const LastVisit = (token, setLoading, setLastVisit) => () => {
  setLoading(true);
  LastVisitFollowUp(token)
    .then((res) => {
      setLastVisit(res?.data?.response?.data);
      console.log(res, ":RESULT_CHECKING");
      setLoading(false);
      if (res == 404) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully Done",
          text: res?.data?.response?.data?.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
      Swal.fire({
        position: "center",
        icon: "info",
        title:  error.response?.data?.message && "No Last Visit Select New Patient",
        text: error.response?.data?.message || "No Last Visit",
        showConfirmButton: true,
        customClass: {
          confirmButton: "theme-button-bg",
        },
       
      });
    });
};


////👇Check Out
export const SlotCheckOutHandler =
  (token, data, setLoading,route) => async (dispatch) => {
    setLoading(true);
    try {
      const res = await SlotCreateCheckOut(token, data);
      console.log(res,'success');
      if (res?.data?.message === "success") {
      setLoading(false);
      await Swal.fire({
        position: "center",
        icon: "success",
        title: "Appointment successfully Done",
        showConfirmButton: false,
        timer: 1500,
      });
      route.push('/thankyou')
      }
      
    } catch (error) {
      await Swal.fire({
        position: "center",
        icon: "error",
        title: error?.response?.data?.message,
        text: error?.response?.data?.message,
        showConfirmButton: false,
        timer: 1500,
      });
      // setLoading(false);
    }
  };