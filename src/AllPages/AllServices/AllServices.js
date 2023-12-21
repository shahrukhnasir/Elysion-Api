import React, { useEffect, useState } from "react";
import styles from "../AllServices/AllService.module.css";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import TopLayout from "../../components/TopLayout/TopLayout";
import {
  AllServices,
  MedicalServiceSections,
} from "../../Service/HomePageService";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { Skeleton } from "antd";
import CommanCard from "../../components/CommanCard/CommanCard";
const AllService = () => {
  const service = [
    {
      id: 1,
      Title: "Internal and Integrative Medicine",
      Desc: "Whole-Person Wellness: Uniting Internal and Integrative Medicine for Optimal Health",
      url: "/Internal-Integrative-medicine",
    },

    {
      id: 2,
      Title: "Functional Medicine",
      Desc: "Revolutionize Your Health: Unleashing the Power of Food for Optimal Health. Embracing the Transformative Approach of Functional Medicine",
      url: "/functional-medicine",
    },
    {
      id: 3,
      Title: "Women’s Wellness",
      Desc: "Empowering Women's Wellness for a Vibrant Life",
      url: "/women-wellness",
    },

    {
      id: 4,
      Title: "Hormone balance and Bioidentical Treatment",
      Desc: "Unlocking Hormonal Harmony: Discovering the Benefits of Bioidentical Hormone Treatment",
      url: "/hormone-bioidentical-treatment",
    },

    {
      id: 5,
      Title: "Menopause and Perimenopausal Treatment",
      Desc: "Navigating Menopause with Grace: Effective Treatment Options for Perimenopause and Menopause",
      url: "/menopause-treatment",
    },

    {
      id: 6,
      Title: "Addiction Medicine",
      Desc: "Breaking Free: Empowering Recovery through Addiction Medicine",
      url: "/addiction-medicine",
    },

    {
      id: 7,
      Title: "Weight Loss Management",
      Desc: "Shedding Pounds, Gaining Health: Effective Strategies for Weight Loss Management",
      url: "/weight-loss-management",
    },

    {
      id: 8,
      Title: "GLP-1 Weight Management",
      Desc: "Optimizing Weight Management: Harnessing the Power of GLP-1 Agonists",
      url: "/weight-management",
    },

    {
      id: 9,
      Title: "IV Hydration & Vitamin Therapy",
      Desc: "Enhance, Restore, and Rejuvenate: Discovering the Transformative Power of Botox, Jeuveau, Dysport, and Fillers",
      url: "/iv-hydration-therapy",
    },
    // {
    //   id:10,
    //   Title:"Botox, Dysport, Jeuveau & Fillers",
    //   Desc:"Enhance, Restore, and Rejuvenate: Discovering the Transformative Power of Botox, Jeuveau, Dysport, and Fillers"
    // }
  ];
  const [mainHeading, setMainHeading] = useState([]);
  const [para, setPara] = useState([]);
  const [servicesData, setServicesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const serviceDetails = (slug) => {
    router.push(`services/view/${slug}`);
  };
  useEffect(() => {
    dispatch(
      MedicalServiceSections(setLoading, setMainHeading, setPara, dispatch)
    );
    dispatch(AllServices(setLoading, setServicesData, dispatch));
  }, []);
  return (
    <>
      <section className={styles.serviceTopHeader}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className={styles.innerSection}>
                <h1 className={styles.mainHeading}>
                  {!loading ? (
                    mainHeading
                  ) : (
                    <>
                      <Skeleton />
                    </>
                  )}
                </h1>

                <p className={styles.Descriptions}>
                  {!loading ? (
                    para
                  ) : (
                    <>
                      <Skeleton />
                    </>
                  )}
                </p>
              </div>
            </div>

            <div className="col-lg-6"></div>
          </div>
        </div>
      </section>
      <div className="container py-lg-5">
        <div className="row">
          {!loading ? (
            <>
              {servicesData.map((item) => {
                return (
                  <div
                    className="col-lg-4"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <CommanCard
                      key={item.id}
                      classNameProp={`${
                        item?.id % 2 == 0 ? "cardBodyEven" : "cardBodyOdd"
                      }`}
                      Title={item?.name}
                      Descriptions={item?.sub_heading}
                      id={item?.id}
                      onClick={() => serviceDetails(item.id)}
                    />
                  </div>
                );
              })}
            </>
          ) : (
            <Skeleton active paragraph={{ rows: 12 }} />
          )}
        </div>
      </div>

      {/* Blue Section */}
      <div className={`${styles.sCareService} container-fluid p-0`}>
        <div className={`${styles.innerContainer} container py-5`}>
          <div className="text-center">
            <h2 className={styles.heading}>Speciality Care Services</h2>
          </div>

          <div className="row">
            <div className="col-lg-3">
              <ul className={styles.list_Content}>
                <li>Allergy Care</li>
                <li>Audiology</li>
                <li>Bariatrics</li>
                <li>Cardiology</li>
                <li>Cardiothoracic Surgery</li>
                <li>Chiropractic Care</li>
              </ul>
            </div>
            <div className="col-lg-3">
              <ul className={styles.list_Content}>
                <li>Dermatology</li>
                <li>Ear Nose & Throat</li>
                <li>Endocrinology Diabetes & Metabolism</li>
                <li>Eye Care</li>
                <li>Family Medicine</li>
                <li>Gastroenterology & Hepatology</li>
              </ul>
            </div>
            <div className="col-lg-3">
              <ul className={styles.list_Content}>
                <li>General Surgery</li>
                <li>Hand Therapy</li>
                <li>Immediate Care</li>
                <li>Infectious Disease </li>
                <li>Internal Medicine</li>
                <li>Nephrology</li>
                <li>Neurology</li>
              </ul>
            </div>
            <div className="col-lg-3">
              <ul className={styles.list_Content}>
                <li>Neurosurgery Brain & Spine</li>
                <li>Orthopedics</li>
                <li>Palliative Care</li>
                <li>Pediatric Cardiology </li>
                <li> Pediatric Care</li>
                <li>Physical Therapy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Lite Section */}
      <div className={`${styles.mediaclService} container-fluid p-0 my-5`}>
        <div className={`${styles.innerSection} container py-5`}>
          <div className="text-center">
            <h2 className={styles.heading}>Medical Services</h2>
          </div>

          <div className="row">
            <div className="col-lg-3">
              <ul className={styles.list_Section}>
                <li> Clinical Labs</li>
                <li>Dialysis</li>
              </ul>
            </div>
            <div className="col-lg-3">
              <ul className={styles.list_Section}>
                <li>Endoscopy & GI </li>
                <li>LabImaging</li>
              </ul>
            </div>
            <div className="col-lg-3">
              <ul className={styles.list_Section}>
                <li>Infusions</li>
                <li>Sleep Disorders</li>
              </ul>
            </div>
            <div className="col-lg-3">
              <ul className={styles.list_Section}>
                <li>Vascular Lab</li>
                <li>Vein Surgery Center</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllService;
