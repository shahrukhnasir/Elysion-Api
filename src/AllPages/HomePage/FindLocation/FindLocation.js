import React, { useEffect, useState } from "react";
import styles from "../FindLocation/FIndLocation.module.css";
import { FindLocationContent } from "../../../Service/HomePageService";
import { useDispatch } from "react-redux";
import { Skeleton } from "antd";
const FindLocation = () => {
  const [findLocation, setFindLocation] = useState([]);
  const [locationDetails, setLocationDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      FindLocationContent(
        setLoading,
        setFindLocation,
        setLocationDetails,
        dispatch
      )
    );
  }, []);

  return (
    <>
      <div
        className={`${styles.locationContainer} container`}
        id="findlocation"
      >
        <div className={styles.EmbedMap}>
          <iframe
            className={styles.Map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.4669184428494!2d-84.65869113501329!3d33.954836506933404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f53e9b41e195d5%3A0xa21a8327a8fb27d8!2s3698%20Largent%20Way%2C%20Marietta%2C%20GA%2030064%2C%20USA!5e0!3m2!1sen!2s!4v1696409396862!5m2!1sen!2s"
            width="100%"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className={styles.upperSection}>
          <div
            className={styles.innerSection}
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            {!loading ? (
              <h1 className={styles.heading}>{findLocation}</h1>
            ) : (
              <>
                <Skeleton />
              </>
            )}

            {!loading ? (
              <p className={styles.desc}>{locationDetails}</p>
            ) : (
              <>
                <Skeleton />
              </>
            )}
            <a target="_blank" href="https://maps.app.goo.gl/RT2qm8XN9HEcUigu7">
              <button className={styles.btn}>
                <span>
                  <img
                    src="./images/loc.png"
                    className={styles.locImg}
                    alt="location"
                  />
                </span>
                Find us on Google Maps
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindLocation;
