import styles from "../commanStyle.module.css";
import CommanButton from "../../components/CommanButton/CommanButton";
import Link from "next/link";
import ServiceCardComman from "../../components/ServiceCardComman/ServiceCardComman";
import TopLayout from "../../components/TopLayout/TopLayout";
import service from "../constant/serviceData";
const HormoneBioidenticalTreatment = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <TopLayout
          Heading="Hormone Balance And Bioidentical Treatment"
          descriptions="Unlocking Hormonal Harmony: Discovering the Benefits of Bioidentical Hormone Treatment"
          image="../images/bht.webp"
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-6 py-3">


              <p className={styles.paragraph}>
                Bioidentical hormone treatment (BHRT) is a medical approach that uses hormones derived from plants to restore hormone balance in the body. It is used to alleviate symptoms related to hormonal imbalances or deficiencies, such as those experienced during menopause or andropause. BHRT involves customizing hormone treatment based on an individual's symptoms and hormone levels, using methods like creams, gels, patches, injections, pellets or tablets. While BHRT is considered a more natural option, its safety and effectiveness are still being researched. Regular monitoring and discussion with a healthcare professional are recommended.Hormone balance is not only a treatment option for women but also for men. Appropriate evaluation and replacement of testosterone in men experience deficiencies is also a part of what we do
              </p>
              <p className={styles.paragraph}>
                Unlocking Hormonal Harmony: Discovering the Benefits of Bioidentical Hormone Treatment
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
export default HormoneBioidenticalTreatment;
