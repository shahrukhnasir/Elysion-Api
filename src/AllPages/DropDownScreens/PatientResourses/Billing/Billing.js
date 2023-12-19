import React from "react";
import styles from "../Billing/Billing.module.css";
import TopLayout2 from "../../../../components/TopLayout2/TopLayout2";
const Billing = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <TopLayout2
          Title="Patient Resourses"
          Heading="Billing"
          descriptions="Take a look at these resources to quickly grasp the concepts of billing and payment for services provided by Elysion Health and Wellness"
          image="/images/new/Billing-pic.webp"
        />

        <div className={`${styles.subContainer} container pt-5`}>
          <div className="">
            <p className={styles.para}>
              Take a look at these resources to quickly grasp the concepts of billing and payment for services provided by Elysion Health and Wellness
            </p>
            <p className={styles.para}>
            We consider it a privilege and a responsibility to serve you.  However, it is your responsibility to ensure payment is made for all services.  Our memberships are not covered by insurance and are paid either at a monthly or annual basis.  Payment for additional services provided must be made on the same day services are provided.
            </p>

            <div className={styles.imageSec}>
              <img src="/images/new/billing.png" className="img-fluid" alt="img" />
            </div>

            {/* <p className={styles.para}>
              Our office requires payment for services rendered outside of a Health Plan at the time of your visit. Although your insurance may cover the care you receive, we do not process insurance billing. Instead, we will provide you with a form that you can submit to your insurance company to request reimbursement according to your personal plan's allowable costs.
              Please be aware that Dr. Gibson has chosen to opt out of Medicare participation. Consequently, you will not be able to submit claims to Medicare, nor can you obtain coverage from a secondary insurance provider, as Medicare does not provide denials.
              As an office policy, we prioritize your care over insurance company guidelines. While we cannot compromise your care to accommodate insurance regulations, we will make every effort to assist you in seeking reimbursement for services provided within the guidelines established by your insurance company.
            </p> */}
            <h1 className={styles.patient_heading}>Patient responsibilities</h1>
            <ul className={styles.list}>
              <li>Present your current insurance card(s) at each visit. Although your visit cost will not be billed directly to your insurance, if your insurance will be billed for labs, it is important for us to direct labs to the appropriate billing service</li>
              <li>Payment of any patient responsibility is required at the time services are rendered.. </li>
              <li>Notify us promptly if you discover that registration errors have occurred</li>
              <li>Make any additional payments owed prior to the due date on your billing statement. Failure to do so may result in further action being taken on your account. </li>
            </ul>

            <p className={`${styles.para} pb-5`}>
              {/* Curabitur eget ligula sapien. Vivamus a ultrices mi, ac
              sollicitudin erat. Duis tempus fringilla justo a fringilla.
              Vivamus scelerisque nisi sollicitudin, elementum felis a, commodo
              diam. Donec condimentum dui velit, sit amet mollis augue ornare
              ut. Nulla viverra, mauris sit amet cursus rhoncus, eros quam
              bibendum arcu, ut scelerisque augue ex eget mauris. Integer id
              lorem nisl. Donec sed fermentum tortor, a volutpat arcu. Sed
              dictum, arcu ut consectetur euismod, mauris sem tristique risus,
              sit amet luctus libero sem quis orci. Cras varius, diam sit amet
              faucibus semper, metus turpis viverra orci, in maximus dolor leo
              et nisl. Nulla ac ipsum venenatis, eleifend lacus eget, interdum
              risus. Nunc pellentesque urna tortor. Aliquam erat volutpat.
              Praesent consectetur dui sed lectus pellentesque commodo ultricies
              ut turpis. In maximus purus sed feugiat feugiat. Sed fermentum.
              Aenean imperdiet, quam nec fermentum semper, purus justo porta
              augue, in placerat purus leo quis nulla. In eget ante tristique
              risus consequat vulputate. Nullam efficitur ut libero in bibendum.
              Donec metus risus, condimentum vitae scelerisque sed, mattis vel
              risus. Proin eget auctor nunc. Mauris congue dolor quis justo
              pellentesque, vitae laoreet diam tempus. Sed posuere, turpis ac
              interdum accumsan, diam tortor iaculis nisl, nec dictum mauris ex
              ut velit. Sed eu massa ac nunc euismod tincidunt vitae sed ex.
              Integer ut purus quis sapien tincidunt lacinia at non mauris. Sed
              feugiat quis leo ut finibus. */}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Billing;
