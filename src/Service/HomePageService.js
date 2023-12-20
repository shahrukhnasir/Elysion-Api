import {
  AllServiceContent,
  FindLocation,
  HeroSectionContent,
  MedicalServiceContent,
  MeetDoctorContent,
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