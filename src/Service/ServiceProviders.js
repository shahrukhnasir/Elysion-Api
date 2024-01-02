import { ServiceProvider, ServiceProviderById, SlotById } from "../network/Network";

// 👇Blog's//
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