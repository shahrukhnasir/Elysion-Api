import React from "react";
import styles from "../Disclaimer/Disclaimer.module.css";
import Shadow from "../../components/Shadow/Shadow";
const Disclaimer = () => {
    return (
        <>
            <div className="container-fluid p-0">
                <div className={`${styles.subContainer} container`}>
                    <h1 className={styles.mainHeading}>
                        Disclaimer
                    </h1>
                    <div className="pb-5">
                        <div className={styles.setShaowRight}>
                            <Shadow />
                        </div>
                        <p className={styles.para}>
                            The contents of this website, such as text, graphics, images, and other material
                            contained on this website (“Content”) are for informational purposes only. The
                            Content is not intended to be a substitute for professional medical advice,
                            diagnosis, or treatment. Always seek the advice of your physician or other
                            qualified health provider with any questions you may have regarding a medical
                            condition. Never disregard professional medical advice or delay in seeking it
                            because of something you have read on this website. Health-related information
                            changes frequently and, therefore, the Content on this website may be outdated,
                            incomplete or incorrect. We do not assume any liability for the information
                            contained or referenced within this website and make no warranties, nor express or
                            implied representations whatsoever regarding the accuracy, completeness,
                            timeliness, or usefulness of any information contained or referenced in this
                            website.
                        </p>

                        <p className={styles.para}>
                            Results vary from patient to patient. No prescriptions or treatments will be given
                            unless a clinical need exists based on an examination by the physician. Any review
                            or other material that could be regarded as a testimonial or endorsement does not
                            constitute a guarantee, warranty, or prediction regarding the outcome of any
                            consultation. The testimonials on this website represent the anecdotal experience of
                            individual consumers
                        </p>
                        <p className={styles.para}>Use of this website is subject to our Terms & Conditions and Privacy Policy.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Disclaimer;
