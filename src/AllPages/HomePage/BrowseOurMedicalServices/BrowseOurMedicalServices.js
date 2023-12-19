import React from "react";
import styles from "../BrowseOurMedicalServices/BrowseOurMedicalServices.module.css";
import CommanButton from "../../../components/CommanButton/CommanButton";
import CommanCard from "../../../components/CommanCard/CommanCard";
import Link from "next/link";
const BrowseOurMedicalServices = () => {
  const service = [
    {
      id: 1,
      Title: "Internal and Integrative Medicine",
      Desc: "Whole-Person Wellness: Uniting Internal and Integrative Medicine for Optimal Health",
      url: "/Internal-Integrative-medicine"
    },

    {
      id: 2,
      Title: "Functional Medicine",
      Desc: "Revolutionize Your Health: Unleashing the Power of Food for Optimal Health. Embracing the Transformative Approach of Functional Medicine",
      url: "/functional-medicine"
    },
    {
      id: 3,
      Title: "Women’s Wellness",
      Desc: "Empowering Women's Wellness for a Vibrant Life",
      url: "/women-wellness"
    },

    {
      id: 4,
      Title: "Hormone balance and Bioidentical Treatment",
      Desc: "Unlocking Hormonal Harmony: Discovering the Benefits of Bioidentical Hormone Treatment",
      url: '/hormone-bioidentical-treatment'
    },

    {
      id: 5,
      Title: "Menopause and Perimenopausal Treatment",
      Desc: "Navigating Menopause with Grace: Effective Treatment Options for Perimenopause and Menopause",
      url:"/menopause-treatment"
    },

    {
      id: 6,
      Title: "Addiction Medicine",
      Desc: "Breaking Free: Empowering Recovery through Addiction Medicine",
      url:"/addiction-medicine"
    },

    {
      id: 7,
      Title: "Weight Loss Management",
      Desc: "Shedding Pounds, Gaining Health: Effective Strategies for Weight Loss Management",
      url:"/weight-loss-management"
    },

    {
      id: 8,
      Title: "GLP-1 Weight Management",
      Desc: "Optimizing Weight Management: Harnessing the Power of GLP-1 Agonists",
      url:"/weight-management"
    },

    {
      id: 9,
      Title: "IV Hydration & Vitamin Therapy",
      Desc: "Enhance, Restore, and Rejuvenate: Discovering the Transformative Power of Botox, Jeuveau, Dysport, and Fillers",
      url:"/iv-hydration-therapy"
    },
    // {
    //   id:10,
    //   Title:"Botox, Dysport, Jeuveau & Fillers",
    //   Desc:"Enhance, Restore, and Rejuvenate: Discovering the Transformative Power of Botox, Jeuveau, Dysport, and Fillers"
    // }
  ];
  return (
    <>
      <div className="container-fluid py-lg-5" id="service">
        <div className="container py-5">
          <h1 className={styles.mainHeading} data-aos="fade-up"
            data-aos-duration="2000">
            Browse our medical services & specialties.
          </h1>

          <div className="row ">
            <div className="col-lg-6">
              <p className={`${styles.mainTitle}`} data-aos="fade-down"
                data-aos-duration="2000">
                Drawing upon a strong foundation in Internal and Integrative medicine, we provide an extensive array of medical services to cater to the distinct needs of every individual. Our dedication lies in delivering comprehensive care that encompasses all facets of your well-being. At Elysion, we are committed to ensuring that you receive unwavering support and compassionate care throughout your entire healthcare journey..
              </p>
            </div>

            <div className="col-lg-6">
              <div className={`${styles.viewBtn}`} data-aos="fade-up"
                data-aos-duration="2000"  >
                <Link href="/service">
                  <CommanButton label="View All Services" />
                </Link>
              </div>
            </div>
          </div>

          <div className="row">
            {service.map((item) => {
              return (
                <div className="col-lg-4" data-aos="fade-up"
                  data-aos-duration="2000">
                  <CommanCard
                    key={item.id}
                    classNameProp={`${item?.id % 2 == 0 ? "cardBodyEven" : "cardBodyOdd"
                      }`}
                    // classNameProp="cardBodyEven"
                    Title={item?.Title}
                    Descriptions={item?.Desc}
                    id={item?.id}
                    hrf={item?.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default BrowseOurMedicalServices;