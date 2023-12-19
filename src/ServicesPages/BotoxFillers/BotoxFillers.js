import styles from "../commanStyle.module.css";
import CommanButton from "../../components/CommanButton/CommanButton";
import Link from "next/link";
import ServiceCardComman from "../../components/ServiceCardComman/ServiceCardComman";
import TopLayout from "../../components/TopLayout/TopLayout";
import FlipServiceCard from "../../components/FlipServiceCard/FlipServiceCard";
import service from "../constant/serviceData";
const BotoxFillers = () => {

  return (
    <>
      <div className="container-fluid p-0">
        <TopLayout
          Heading="Botox, Dysport, Jeuveau & Fillers"
          descriptions="Enhance, Restore, and Rejuvenate: Discovering the Transformative Power of Botox, Jeuveau, Dysport, and Fillers"
          image="/images/botox/botox.webp"
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-6 py-3">
              <p className={styles.paragraph}>
                Botox, Jeuveau, Dysport, and fillers are cosmetic treatments used to improve the appearance of the face. Botox and Dysport are neurotoxins that temporarily relax facial muscles, reducing wrinkles caused by muscle movements. They are commonly used for forehead lines, crow's feet, and frown lines. Fillers, on the other hand, are substances injected into the skin to restore volume, smooth wrinkles, and enhance facial contours. They are often made of hyaluronic acid and address concerns like nasolabial folds and lip enhancement
              </p>

              <p className={styles.paragraph}>
                Enhance, Restore, and Rejuvenate: Discovering the Transformative Power of Botox, Jeuveau, Dysport, and Fillers
              </p>

              <div className="pt-2">
                <Link href="https://elysionhealth.md-hq.com/embedded/schedule.php">
                  <CommanButton label="Book Now" />
                </Link>
              </div>
            </div>
          </div>



          <>
            <div className="row">
              <div
                className="col-lg-4"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <FlipServiceCard
                  Img="/images/botox/botox.webp"
                  Title="Botox"
                  backDesc="Wrinkles such as worry lines, laugh lines, neck lines, crow's feet, and neck bands are caused by the contraction of facial muscles during expressions. BOTOX Cosmetic is an effective treatment that targets the root cause by temporarily weakening the muscles. By reducing muscle contractions, BOTOX Cosmetic helps to smooth the skin, tighten it, and eliminate wrinkles. This results in a rejuvenated and more youthful appearance"
                />
              </div>

              <div
                className="col-lg-4"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <FlipServiceCard
                  id={10}
                  Img="/images/botox/Dysport.jpeg"
                  Title="Dysport"
                  backDesc="oUnlock the Power of Dysport: Achieve Youthful and Smooth Skin Dysport is an exceptional cosmetic treatment renowned for its ability to target and diminish wrinkles, offering a viable alternative to popular options like BOTOX. Whether you wish to proactively address the early signs of wrinkles or revitalize and enhance your skin, our experienced team is equipped with the expertise to help you achieve your desired results"
                />
              </div>

              <div
                className="col-lg-4"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <FlipServiceCard
                  id={10}
                  Img="/images/botox/Jeuveau.jpeg"
                  Title="Jeuveau"
                  backDesc="Jeuveau is a purified form of botulinum toxin that temporarily reduces muscle activity by blocking nerve signals to the muscles, resulting in the reduction of frown lines and dynamic wrinkles.  Jeuveau offers a fast and natural results for both men and women"
                />
              </div>

              <div
                className="col-lg-4"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <FlipServiceCard
                  id={10}
                  Img="/images/botox/fillers.jpeg"
                  Title="Fillers"
                  backDesc="Experience the Transformation: Dermal Fillers and Neuromodulators Unveiled. Dermal fillers are specifically designed to address areas of decreased volume, wrinkles, or creases. By injecting fillers into the skin, they effectively add volume and lift to the targeted area, resulting in a smoother and more youthful appearance"
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

export default BotoxFillers;
