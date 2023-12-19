import styles from "../commanStyle.module.css";
import CommanButton from "../../components/CommanButton/CommanButton";
import Link from "next/link";
import ServiceCardComman from "../../components/ServiceCardComman/ServiceCardComman";
import TopLayout from "../../components/TopLayout/TopLayout";
import service from "../constant/serviceData";

const WeightLossManagement = () => {

  return (
    <>
      <div className="container-fluid p-0">
        <TopLayout
          Heading="Weight Loss Management "
          descriptions="Shedding Pounds, Gaining Health: Effective Strategies for Weight Loss Management"
          image="../images/new/weight loss management - Pic.webp"
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-6 py-3">


              <p className={styles.paragraph}>
              Weight loss management involves making long-term lifestyle changes to achieve and maintain a healthy weight. It includes aspects such as following a balanced diet, engaging in regular exercise, making behavior modifications, adopting a healthy lifestyle, seeking professional support, and maintaining a positive mindset. It's important to personalize the approach and focus on overall health rather than just the numbers on the scale
              </p>
              <p className={styles.paragraph}>
              Shedding Pounds, Gaining Health: Effective Strategies for Weight Loss Management
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
export default WeightLossManagement;
 