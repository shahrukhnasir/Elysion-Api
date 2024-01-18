import React, { useEffect, useState } from "react";
import TopLayout from "../../../components/TopLayout/TopLayout";
import styles from "../ConfirmService/ConfirmService.module.css";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import CommanButton from "../../../components/CommanButton/CommanButton";
// import { getAllAServices } from "../../../Redux/AllService/allServices";
import { Skeleton } from "antd";
import { Subscriptions } from "../../../Service/Subscription";
import { getServicesById } from "../../../Redux/AllService/serviceById";
const ConfirmService = () => {
  const dispacth = useDispatch();
  const [sub, setSubscription] = useState([]);
  const [loading, setLoading] = useState(false);
  const service = useSelector(
    (state) => state?.ServiceSlice?.featuredProducts
  );
  const token = useSelector((state) => state?.authSlice?.authToken);

  const slug = useSelector((state) => state?.selectService?.selectService);
console.log(service,"serviceservice");
  useEffect(() => {
    dispacth(getServicesById(slug));
  }, []);

  useEffect(() => {
    dispacth(Subscriptions(token, setLoading, setSubscription));
  }, [token]);


  const calculatePrice = () => {
    if (service && sub) {
      const total = (service?.price || 0) - (sub?.discount || 0);
      return (total * 20) / 100;
    } else {
      const total = service?.price || 0;
      return (total * 20) / 100;
    }
  };
  return (
    <>
      <TopLayout
        Heading="Confirm Service"
        image="./images/signup.png"
        descriptions="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut felis eros, blandit sed mattis sit amet, porta sit amet orci. Maecenas sed tempor tellus. Donec tincidunt convallis accumsan. Curabitur congue luctus odio, et elementum ante accumsan eget. Phasellus mollis, mi sollicitudin tincidunt eleifend."
      />

      <div className="container-fluid py-lg-5">
        <div className="row d-flex justify-content-center">
          <div className={styles.mainSection}>
            {/* Card */}
            <div className="container py-lg-5 ">
              <div className="row">
                <div className="col-lg-12">
                  <div className={styles.card}>
                    <h1 className={styles.cardTopHeading}>
                      Kindly confirm your Service Appointment
                    </h1>
                    <div className="row">
                      <div className="col-lg-6">
                        <article className={styles.cardTitle}>
                          Appointment Fee
                        </article>
                      </div>

                      <div className="col-lg-6 p-0">
                        {!loading ? (
                          <article className={styles.cardDetail}>
                            ${service?.price}
                          </article>
                        ) : (
                          <Skeleton />
                        )}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-6">
                        <article className={styles.cardTitle}>
                          Members Discount
                        </article>
                      </div>

                      <div className="col-lg-6 p-0">
                        <article className={styles.cardDetail}>{sub?.discount}%</article>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <article className={styles.cardTitle}>
                          Service Type
                        </article>
                      </div>

                      <div className="col-lg-6 p-0">
                        <article className={styles.cardDetail}>
                          {service?.name}
                        </article>
                      </div>
                    </div>

                    <hr />

                    <div className="row">
                      <div className="col-lg-6">
                        <h1 className={styles.cardTextBlue}>Total</h1>
                      </div>

                      <div className="col-lg-6">
                        <h1 className={styles.cardLastPrice}>${calculatePrice()}</h1>
                      </div>
                    </div>
                  </div>

                  <div className="row py-3">
                    <div className="col-lg-6 py-2">
                      <Link href="/followup">
                        <CommanButton
                          className={styles.confirmBtn}
                          label="Back"
                        />
                      </Link>
                    </div>

                    <div className="col-lg-6 py-2">
                      <Link href="/check-out">
                        <CommanButton
                          className={styles.confirmBtn}
                          label="Yes, I Confirm"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.alert}>
                <span className={styles.alertImage}>
                  <img src="./images/!.png" alt="img" />
                </span>
                <span className={styles.alertText}>
                  You are advised to pay on visit to place at the time of the
                  appointment.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmService;
