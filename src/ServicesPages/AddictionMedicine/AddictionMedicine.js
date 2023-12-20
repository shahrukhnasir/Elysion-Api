import styles from "../commanStyle.module.css";
import CommanButton from "../../components/CommanButton/CommanButton";
import Link from "next/link";
import ServiceCardComman from "../../components/ServiceCardComman/ServiceCardComman";
import TopLayout from "../../components/TopLayout/TopLayout";
import service from "../constant/serviceData";
import { useRouter } from "next/router";

const AddictionMedicine = () => {
  const { query } = useRouter();
  console.log(query);
  return (
    <>
      <div className="container-fluid p-0">
        <TopLayout
          Heading="Addiction Medicine"
          descriptions="Breaking Free: Empowering Recovery through Addiction Medicine"
          image="../images/addiction-Medicine.webp"
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-6 py-3">


              <p className={styles.paragraph}>
              Addiction is a chronic relapsing disorder that affects over 16% of the US population. The treatment of these disorders is not easy to access. Treatment options for alcohol use disorder and opiate use disorder are complex but oftentimes require a physician who is able to understand and assist in providing and titrating medications needed to control compulsive drug seeking and useld be discussed with a healthcare provider specializing in women's health
              </p>
              <p className={styles.paragraph}>
              Breaking Free: Empowering Recovery through Addiction Medicine
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
export default AddictionMedicine;
