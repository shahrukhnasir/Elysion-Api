import React from "react";
import styles from "../OfficePolicy/OfficePolicy.module.css";
import Shadow from "../../../components/Shadow/Shadow";
import TopLayout2 from "../../../components/TopLayout2/TopLayout2";
const OfficePolicy = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <TopLayout2
          Title="Patient Resourses"
          Heading="Office Policy"
          descriptions="Welcome to Elysion Health & Wellness. We are dedicated to providing personalized, high-quality 
          healthcare services to our patients. To ensure a smooth and efficient experience for both our patients 
          and staff, we have established the following office policies. Please take the time to read and understand 
          these policies"
          image="/images/new/office-policy.webp"
        />

        <div className={`${styles.subContainer} container py-5`}>
          <div className="row">
            <div>   
              <h1 className={styles.subHeading}>Office Hours</h1>
              <p className={styles.para}>
                Regular Office Hours: Our regular office hours are  8:00am-5:00pm, from Monday to Friday. We are
                closed on weekends and major holidays.
                After-Hours Care: For urgent medical concerns after regular office hours, please contact  Dr. Tessa
                Gibson directly by text or phone (number will be provided on your first visit.)  If you have an emergency, do not delay, call 911.
              </p>
            </div>
            <h1 className={styles.subHeading}>Appointments</h1>
            <p className={styles.para}>
              Scheduling: Patients may schedule appointments by calling our office during regular office hours or
              using our  online booking system.
              Cancellation: We kindly request 24 hours' notice for appointment cancellations. Failure to do so may result in a fee.
              Late Arrival: Patients arriving more than 15 minutes late for an appointment may need to reschedule.Please call ahead if you will be late and  discuss with us so that we  can accommodate you as able.

            </p>

            <h1 className={styles.subHeading}>Membership and Fees</h1>
            <p className={styles.para}>
              Membership: Our practice operates on a membership-based model. Patients must maintain an active membership to receive services.Fees: Membership fees are due  monthly or  annually and are non-refundable. Please refer to additional details in your contract.
            </p>

            <h1 className={styles.subHeading}>Communication</h1>
            <p className={styles.para}>
              Communication Channels: Patients may communicate with our staff  through phone calls, secure
              messaging platforms, or in-person visits.
              Response Times: We strive to respond to non-urgent communications within 24 hrs. For urgent matters, please call our office directly.

            </p>


            <h1 className={styles.subHeading}>Prescription Refills</h1>
            <p className={styles.para}>
              Refill Requests: Patients should request prescription refills during office hours. Please allow 48 hours for processing.
              Controlled Substances:  Patients who require chronic pain management will be appropriately referred to a pain management clinic.

            </p>
            <h1 className={styles.subHeading}>Privacy and  Confidentiality</h1>
            <p className={styles.para}>
              HIPAA Compliance: We adhere to all HIPAA regulations to protect patient privacy and confidentiality.Medical Records: Patients may request copies of their medical records following our established
              procedures.

            </p>


            <h1 className={styles.subHeading}>Emergencies</h1>
            <p className={styles.para}>
              Medical  Emergencies: In case of a medical emergency, call 911 or go to the nearest emergency room.

            </p>

            <h1 className={styles.subHeading}>Feedback and Concerns</h1>
            <p className={styles.para}>
              Feedback: We value patient feedback. If you have any concerns or suggestions, please let us know.Resolution: We will address patient concerns promptly and professionally.
            </p>

            <h1 className={styles.subHeading}>Medicare and Insurance</h1>
            <p className={styles.para}>
              Insurance: Our practice does not accept insurance. Patients are responsible for all fees.  Labs can be billed through insurance directly by third party  labs that are contracted.
            </p>


            <h1 className={styles.subHeading}>Code of  Conduct</h1>
            <p className={styles.para}>
              Respect: Patients and staff are expected to treat each other with respect and courtesy.
              Safety: We maintain a safe and healthy environment for everyone.
            </p>

            <h1 className={styles.subHeading}>Termination of Membership </h1>
            <p className={styles.para}>
              Termination: Membership may be terminated for non-compliance with our policies or for reasons
              deemed necessary by the practice.
            </p>

            <h1 className={styles.subHeading}>Changes to Policies</h1>
            <p className={styles.para}>
              Policy Updates: These office policies may be updated from time to time. Patients will be notified of any
              changes.
              By choosing to receive care at Elysion Health & Wellness, patients agree to abide by these office policies.
              We are committed to providing exceptional healthcare and look forward to serving your needs.
              If you have any questions or need further clarification, please do not hesitate to contact our office
            </p>
          </div>

        </div>
      </div>
    </>
  );
};

export default OfficePolicy;
