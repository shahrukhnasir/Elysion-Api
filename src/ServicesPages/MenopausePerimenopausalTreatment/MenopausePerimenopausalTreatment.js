import styles from "../commanStyle.module.css";
import CommanButton from "../../components/CommanButton/CommanButton";
import Link from "next/link";
import ServiceCardComman from "../../components/ServiceCardComman/ServiceCardComman";
import TopLayout from "../../components/TopLayout/TopLayout";
import service from "../constant/serviceData";

const MenopausePerimenopausalTreatment = () => {

  return (
    <>
      <div className="container-fluid p-0">
        <TopLayout
          Heading="Menopause And Perimenopausal Treatment"
          descriptions="Navigating Menopause with Grace: Effective Treatment Options for Perimenopause and Menopause"
          image="../images/menopause-Treatment.webp"
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-6 py-3">


              <p className={styles.paragraph}>
                Perimenopause is the transitional phase before menopause characterized by hormonal changes and symptoms like irregular periods, hot flashes, mood swings, and sleep disturbances. Treatment options for managing perimenopausal symptoms include hormone therapy, non-hormonal medications, lifestyle modifications, vaginal lubricants, and complementary therapies. The choice of treatment depends on individual circumstances and should be discussed with a healthcare provider specializing in women's health
              </p>
              <p className={styles.paragraph}>
                Navigating Menopause with Grace: Effective Treatment Options for Perimenopause and Menopause
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
export default MenopausePerimenopausalTreatment;
