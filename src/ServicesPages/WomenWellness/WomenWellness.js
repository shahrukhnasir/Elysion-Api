import styles from "../commanStyle.module.css";
import CommanButton from "../../components/CommanButton/CommanButton";
import Link from "next/link";
import ServiceCardComman from "../../components/ServiceCardComman/ServiceCardComman";
import TopLayout from "../../components/TopLayout/TopLayout";
import FlipServiceCard from "../../components/FlipServiceCard/FlipServiceCard";
import service from "../constant/serviceData";
const WomenWellness = () => {

  return (
    <>
      <div className="container-fluid p-0">
        <TopLayout
          Heading="Women’s Wellness"
          descriptions="Empowering Women's Wellness for a Vibrant Life"
          image="../images/new/women-wellness.webp"
        />
        <div className="container">

          <>
            <div className="row">
              <div className="col-lg-6 py-3">
                <p className={styles.paragraph}>
                  There will be a focus on disease prevention and coordinated care involving specific women’s health concerns to include PCOS, breast cancer prevention and support, fibrocystic breast disease, endometriosis, fertility support all through the lens of optimizing hormone balance through diet, lifestyle management and nutraceuticals. At Elysion Health and Wellness, coordinated care with your obstetrician, gynecologist, fertility expert, oncologist, among others is important to us in order to achieve optimal health outcomes . We will also be offering vaginal rejuvenation with ThermiVA which is a non-invasive treatment option for women who might experience urinary incontinence, reduced sexual satisfaction or loss of elasticity of vaginal tissue
                </p>

                <p className={styles.paragraph}>
                  Empowering Women's Wellness for a Vibrant Life
                </p>

                <div className="pt-2">
                  <Link href="https://elysionhealth.md-hq.com/embedded/schedule.php">
                    <CommanButton label="Book Now" />
                  </Link>
                </div>
              </div>
            </div>
          </>
          <>
            <div className="row">
              <div
                className="col-lg-4"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <FlipServiceCard
                  Img="/images/vaj-Rejuvi.webp"
                  Title="Vaginal Rejuvenation"
                  backDesc="We Will Also Be Offering Vaginal Rejuvenation With ThermiVA Which Is A Non-Invasive Treatment Option For Women Who Might Experience Urinary Incontinence, Reduced Sexual Satisfaction Or Loss Of Elasticity Of Vaginal Tissue"
                />
              </div>

              <div
                className="col-lg-4"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <FlipServiceCard
                  Img="/images/bht.webp"
                  Title="Bioidentical Hormone Treatment"
                  backDesc='Bioidentical Hormone Treatment (BHRT) Is A Medical Approach That Uses Hormones Derived From Plants To Restore Hormone Balance In The Body. It Is Used To Alleviate Symptoms Related To Hormonal Imbalances Or Deficiencies, Such As Those Experienced During Menopause Or Andropause'
                />
              </div>

              <div
                className="col-lg-4"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <FlipServiceCard
                  id={3}
                  Img="/images/GLP-1.webp"
                  Title="GLP-1 weight management"
                  backDesc="GLP-1 Weight Management Involves Utilizing GLP-1 Agonists, Such As Semaglutide, To Aid In Weight Loss Or Management. These Medications Imitate The Effects Of The GLP-1 Hormone, Which Regulates Blood Sugar And Promotes Satiety"
                />
              </div>
            </div>

          </>
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

export default WomenWellness;
