import styles from "../commanStyle.module.css";
import CommanButton from "../../components/CommanButton/CommanButton";
import Link from "next/link";
import ServiceCardComman from "../../components/ServiceCardComman/ServiceCardComman";
import TopLayout from "../../components/TopLayout/TopLayout";
import service from "../constant/serviceData";
const FunctionalMedicine = () => {

    return (
        <>
            <div className="container-fluid p-0">
                <TopLayout
                    Heading="Functional Medicine"
                    descriptions="Revolutionize Your Health: Unleashing the Power of Food for Optimal Health. Embracing the Transformative Approach of Functional Medicine"
                    image="../images/new/functional med.webp"
                />
                <div className="container">

                    <>
                        <div className="row">
                            <div className="col-lg-6 py-3">
                                <p className={styles.paragraph}>
                                    Functional medicine is a wellness care approach that centers on identifying the underlying causes of disease and providing holistic treatment. It prioritizes personalized care, considering factors like genetics, lifestyle, and environment. By viewing the body as an interconnected system, functional medicine aims to uncover imbalances and design tailored treatment plans. These plans may involve lifestyle adjustments, dietary changes, supplements, and medications. Prevention and collaboration with other healthcare professionals are also key aspects. Functional medicine works alongside conventional medicine rather than replacing it
                                </p>

                                <p className={styles.paragraph}>
                                    Revolutionize Your Health: Unleashing the Power of Food for Optimal Health. Embracing the Transformative Approach of Functional Medicine
                                </p>


                                <div className="pt-2">
                                    <Link href="https://elysionhealth.md-hq.com/embedded/schedule.php">
                                        <CommanButton label="Book Now" />
                                    </Link>
                                </div>
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

export default FunctionalMedicine;
