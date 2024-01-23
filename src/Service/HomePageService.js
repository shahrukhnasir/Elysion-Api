import Swal from "sweetalert2";
import {
  AboutUs,
  AllServiceContent,
  BlogContent,
  ContactInfo,
  Disclaimer,
  Faqs,
  FindLocation,
  Footer,
  HeroSectionContent,
  MedicalServiceContent,
  MeetDoctorContent,
  NewsLatter,
  OfficePolicy,
  PatientBilling,
  PatientEducation,
  PatientInsurance,
  PatientResource,
  PtientForm,
  ServiceContentById,
  TermService,
  TermServiceContent,
  privacyPolicy,
  privacyPolicyContent,
} from "../network/Network";
import PatientResources from "../AllPages/HomePage/PatientResources/PatientResources";

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
  (slug, setServiceDetails, setLoading) => (dispatch) => {
    setLoading(true);
    ServiceContentById(slug)
      .then((res) => {
        console.log("res this", res?.data?.response?.data);
        setServiceDetails(res?.data?.response?.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setServiceDetails();
      });
  };

////👇// Find Location
export const FindLocationContent =
  (setLoading, setFindLocation, setLocationDetails) => (dispatch) => {
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
export const FooterNewsLatterEmail =
  (data, setLoading, setChatFields, router) => () => {
    try {
      NewsLatter(data)
        .then((res) => {
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

// 👇Blog Content//
export const BlogsContent =
  (setLoading, setBlogHeading, setBlogDes, setBlogImage) => (dispatch) => {
    setLoading(true);
    BlogContent()
      .then((res) => {
        setBlogHeading(res?.data?.response?.data?.[0]?.type);
        setBlogDes(res?.data?.response?.data?.[0]?.value);
        setBlogImage(res?.data?.response?.data?.[1]?.image_url);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

// 👇Footer Api//
export const FooterContent = (token, setFooter, setLoading) => async () => {
  setLoading(true);
  try {
    const res = await Footer(token);
    setLoading(false);
    setFooter(res?.data?.response?.data);
  } catch (err) {
    console.log(err);
    setLoading(false);
  }
};

////👇// Find Location
export const ContactContent =
  (setLoading, setContactHeading, setAddress, setContact) => () => {
    setLoading(true);
    ContactInfo()
      .then((res) => {
        setContactHeading(res?.data?.response?.data?.[0]);
        setAddress(res?.data?.response?.data?.[1]);
        setContact(res?.data?.response?.data?.[2]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

// 👇Patient Form//
export const PatientFormContent = (setLoading, setData) => () => {
  setLoading(true);
  PtientForm()
    .then((res) => {
      setData(res?.data?.response?.data?.[0]);
      // setFaqAns(res?.data?.response?.data?.[0]?.name);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
    });
};
// 👇Patient Resource//
export const PatientResourceContent = (setLoading, setData) => () => {
  setLoading(true);
  PatientResource()
    .then((res) => {
      setData(res?.data?.response?.data?.[0]);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
    });
};

// 👇Patient Education//
export const PatientEducationContent =
  (setLoading, setPatientEducation) => () => {
    setLoading(true);
    PatientEducation()
      .then((res) => {
        setPatientEducation(res?.data?.response?.data);
        // setFaqAns(res?.data?.response?.data?.[0]?.name);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

// 👇Patient Insurance//
export const InsuranceContent = (setLoading, setData) => () => {
  setLoading(true);
  PatientInsurance()
    .then((res) => {
      setData(res?.data?.response?.data?.[0]);
      // setFaqAns(res?.data?.response?.data?.[0]?.name);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
    });
};

// 👇Patient BIling//
export const BillingContent = (setLoading, setData) => () => {
  setLoading(true);
  PatientBilling()
    .then((res) => {
      setData(res?.data?.response?.data);
      // setFaqAns(res?.data?.response?.data?.[0]?.name);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
    });
};

// 👇Office Policy
export const OfficePolicyContent = (setLoading, setData) => () => {
  setLoading(true);
  OfficePolicy()
    .then((res) => {
      setData(res?.data?.response?.data);
      // setFaqAns(res?.data?.response?.data?.[0]?.name);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
    });
};

// 👇Disclaimer//
export const DisclaimerContent = (setLoading, setData) => () => {
  setLoading(true);
  Disclaimer()
    .then((res) => {
      setData(res?.data?.response?.data?.[0]);
      // setFaqAns(res?.data?.response?.data?.[0]?.name);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
    });
};

// 👇Privacy Policy Content//
export const PrivacyPolicyContent = (setLoading, setData) => () => {
  setLoading(true);
  privacyPolicyContent()
    .then((res) => {
      setData(res?.data?.response?.data);
      // setFaqAns(res?.data?.response?.data?.[0]?.name);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
    });
};

// 👇Privacy Policy//
export const PrivacyPolicyCont = (setLoading, setData) => () => {
  setLoading(true);
  privacyPolicyContent()
    .then((res) => {
      setData(res?.data?.response?.data);
      // setFaqAns(res?.data?.response?.data?.[0]?.name);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
    });
};

// 👇Privacy Policy//
export const PrivacyPolcy = (setLoading, setPrivacy) => () => {
  setLoading(true);
  privacyPolicy()
    .then((res) => {
      setPrivacy(res?.data?.response?.data);
      // setFaqAns(res?.data?.response?.data?.[0]?.name);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
    });
};

// 👇Term//
export const TermCondition = (setLoading, setData) => () => {
  setLoading(true);
  TermService()
    .then((res) => {
      setData(res?.data?.response?.data);
      // setFaqAns(res?.data?.response?.data?.[0]?.name);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
    });
};

// 👇Term Content//
export const TermConditionContent = (setLoading, setTermContent) => () => {
  setLoading(true);
  TermServiceContent()
    .then((res) => {
      setTermContent(res?.data?.response?.data);
      // setFaqAns(res?.data?.response?.data?.[0]?.name);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
    });
};

// AboutUs

// 👇About Us//
export const AboutUsContent = (setLoading, setData) => () => {
  setLoading(true);
  AboutUs()
    .then((res) => {
      setData(res?.data?.response?.data);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
    });
};
