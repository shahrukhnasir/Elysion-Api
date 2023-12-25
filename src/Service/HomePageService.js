import Swal from "sweetalert2";
import {
  AllServiceContent,
  Faqs,
  FindLocation,
  HeroSectionContent,
  MedicalServiceContent,
  MeetDoctorContent,
  NewsLatter,
  ServiceContentById,
} from "../network/Network";

export const HeroSections =
  (setLoading, setMainHeading, setInternal, setBetterHealth, setTessaGibson) =>
  (dispatch) => {
    setLoading(true);
    HeroSectionContent()
      .then((res) => {
        setMainHeading(res?.data?.response?.data?.[0]?.type);
        setInternal(res?.data?.response?.data?.[0]?.value);
        setBetterHealth(res?.data?.response?.data?.[1]?.type);
        setTessaGibson(res?.data?.response?.data?.[1]?.value);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

///👇MeetDoctor Service

export const MeetDoctorSections =
  (
    setLoading,
    setMainHeading,
    setParaOne,
    setParaTwo,
    setDocImage,
    setSubHeading,
    setPoints
  ) =>
  (dispatch) => {
    setLoading(true);
    MeetDoctorContent()
      .then((res) => {
        setMainHeading(res?.data?.response?.data?.[4]?.value);
        setParaOne(res?.data?.response?.data?.[2]?.value);
        setParaTwo(res?.data?.response?.data?.[3]?.value);
        setDocImage(res?.data?.response?.data?.[1]?.image_url);
        setSubHeading(res?.data?.response?.data?.[0]?.type);
        setPoints(res?.data?.response?.data?.[0]?.value);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

//👇Browse Our Medical Services & Specialties.
export const MedicalServiceSections =
  (setLoading, setMainHeading, setPara) => (dispatch) => {
    setLoading(true);
    MedicalServiceContent()
      .then((res) => {
        setMainHeading(res?.data?.response?.data?.[0]?.type);
        setPara(res?.data?.response?.data?.[0]?.value);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

////👇ALL Services Cards
export const AllServices = (setLoading, setServicesData) => (dispatch) => {
  setLoading(true);
  AllServiceContent()
    .then((res) => {
      setServicesData(res?.data?.response?.data);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
    });
};

////👇ALL Services By id
export const ServicesById =
  (setServicesData, slug, setServiceDetails, setLoading) => (dispatch) => {
    setLoading(true);
    if (slug !== undefined) {
      try {
        ServiceContentById(slug)
          .then((res) => {
            setServicesData(slug);
            setServiceDetails(res?.data?.response?.data);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          });
      } catch (err) {
        console.log(err);
      }
    }
  };

////👇// Find Location 
export const FindLocationContent = (setLoading, setFindLocation,setLocationDetails) => (dispatch) => {
  setLoading(true);
  FindLocation()
    .then((res) => {
      setFindLocation(res?.data?.response?.data?.[0]?.name);
      setLocationDetails(res?.data?.response?.data?.[0]?.value);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
    });
};

// 👇FAQ's//
export const FaqContent = (setLoading, setFaq) => (dispatch) => {
  setLoading(true);
  Faqs()
    .then((res) => {
      setFaq(res?.data?.response?.data);
      // setFaqAns(res?.data?.response?.data?.[0]?.name);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
    });
};

// 👇Footer NewsLatter//////////
export const FooterNewsLatterEmail = (data, setLoading, setChatFields,router) => () => {
  
  try {
    NewsLatter(data)
    .then((res) => {
        console.log(res,"Success");
        setLoading(false);
        setChatFields({
          email: "",

        });
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Email Send Successfully",
          showConfirmButton: false,
          timer: 1500,
          customClass: {
            confirmButton: "theme-button-bg",
          },
          
        });
        router.push("/thank-you");
      })
      .catch((error) => {
        console.error("Error in SignUp:", error);
        setLoading(false);
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Email  Failed",
          text: "Please check your fields",
          showConfirmButton: true,
          customClass: {
            confirmButton: "theme-button-bg",
          },
        
        });
      });
  } catch (error) {
    console.error("Unexpected error in Email send:", error);
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Unexpected Error",
      text: "An unexpected error occurred. Please try again later.",
      showConfirmButton: true,
      customClass: {
        confirmButton: "theme-button-bg",
      },
    });
  }
};