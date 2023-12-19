import styles from "../commanStyle.module.css";
import CommanButton from "../../components/CommanButton/CommanButton";
import Link from "next/link";
import ServiceCardComman from "../../components/ServiceCardComman/ServiceCardComman";
import TopLayout from "../../components/TopLayout/TopLayout";
import service from "../constant/serviceData";

const WeightManagement = () => {

  return (
    <>
      <div className="container-fluid p-0">
        <TopLayout
          Heading="GLP-1 Weight Management"
          descriptions="Optimizing Weight Management: Harnessing the Power of GLP-1 Agonists"
          image="../images/GLP-1-Weight-Management.webp"
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-6 py-3">


              <p className={styles.paragraph}>
              For patients seeking weight loss for cardiometabolic health, particularly those without insurance coverage or who prefer self-payment, a specialized service is available. This service offers semaglutide, administered weekly via subcutaneous injections, to induce up to 15% weight loss. The treatment includes dose adjustments based on individual needs and goals, along with monthly visits to a healthcare provider. A compounding pharmacy provides the monthly supply of semaglutide, and close supervision is provided throughout the process
              </p>
              <p className={styles.paragraph}>
              Optimizing Weight Management: Harnessing the Power of GLP-1 Agonists
              </p>

              <div className="pt-2">
                <Link href="https://elysionhealth.md-hq.com/embedded/schedule.php">
                  <CommanButton label="Book Now" />
                </Link>
              </div>
            </div>
          </div>

          <hr />
        </div>

        {/* People also Search for */}
        <div className="container py-5">
          <h1 className={styles.details}>People also Search for</h1>
          <div className="row">
            {service.map((item) => {
              return (
                <div className="col-lg-4">
                  <ServiceCardComman
                    link={item?.link}
                    Title={item?.Title}
                    Descriptions={item?.Desc}
                    className={styles.serviceCardCol}
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
export default WeightManagement;
  