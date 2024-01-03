import Swal from "sweetalert2";
import {
  ServiceProvider,
  ServiceProviderById,
  SlotById,
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
  (token, data, setLoading) => async () => {
    try {
      const res = await SlotsAvailable(token, data);

      console.log(res);
      setLoading(false);
      // setAvailableSlots({
      //   doc_id: "",
      //   time: "",
      //   date: "",
      // });
      if(res){
        Swal.fire({
          position: "center",
          icon: "success",
          title: res?.data?.response?.data?.message,
          showConfirmButton: false,
          timer: 1500,
        });
        
      }
    } catch (error) {
      console.error("Error :", error);
      setLoading(false);

      Swal.fire({
        position: "center",
        icon: "error",
        title: error.response?.data?.message || "An error occurred",
        text: error.response?.data?.message  || "An error occurred",
        showConfirmButton: false,
          timer: 1500,
      });
    }
  };
