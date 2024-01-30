import React, { useEffect, useState } from "react";
import styles from "../ProvidingBestMedicalServices/ProvidingBestMedicalServices.module.css";
import Link from "next/link";
import CommanButton from "../../../components/CommanButton/CommanButton";
import Image from "next/image";
import meetDoc from "../../../../public/images/new/doc_.webp";
import { useDispatch } from "react-redux";
import { MeetDoctorSections } from "../../../Service/HomePageService";
import { Skeleton } from "antd";
const ProvidingBestMedicalServices = () => {
  const [mainHeading, setMainHeading] = useState([]);
  const [paraOne, setParaOne] = useState([]);
  const [paraTwo, setParaTwo] = useState([]);
  const [docImage, setDocImage] = useState([]);
  const [subHeading, setSubHeading] = useState([]);
  const [points, setPoints] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      MeetDoctorSections(
        setLoading,
        setMainHeading,
        setParaOne,
        setParaTwo,
        setDocImage,
        setSubHeading,
        setPoints,
        dispatch
      )
    );
  }, []);
  console.log(docImage, "docImage");
  return (
    <>
      <div className="container-fluid" id={styles.mainHeroContainer}>
        <div className="container">
          <div className="pt-5">
            <div className="row " id={styles.rowMiniBox}>
              <div className="col my-3" id={styles.col}>
                <a href="#service">
                  <div className={styles.box}>
                    <span data-aos="fade-up">Our Services</span>
                  </div>
                </a>
              </div>
              <div className="col my-3" id={styles.col}>
                <a href="#findlocation">
                  <div className={styles.box}>
                    <span data-aos="fade-up">Find Location</span>
                  </div>
                </a>
              </div>
              <div className="col my-3" id={styles.col}>
                <a href="#memberShip">
                  <div className={styles.box}>
                    <span data-aos="fade-up">Membership</span>
                  </div>
                </a>
              </div>
              <div className="col my-3 " id={styles.col}>
                <a href="#patient">
                  <div className={styles.box}>
                    <span data-aos="fade-up">Patient Portal</span>
                  </div>
                </a>
              </div>
              <div className="col my-3" id={styles.col}>
                <a href="#faq">
                  <div className={styles.box}>
                    <span data-aos="fade-up">FAQs </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="row" id={styles.row}>
            <div
              className="col-lg-6 my-auto"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <div className={styles.rightSec}>
                <h1 className={styles.mainHeading}>
                Meet Your Doctor

                  {/* {!loading ? (
                    mainHeading
                  ) : (
                    <>
                      <Skeleton />
                    </>
                  )} */}
                </h1>

                <p className={styles.mainDescription}>
                  Dr. Tessa Gibson, the founder of Elysion Health & Wellness and
                  a board-certified internal medicine physician, possesses over
                  twenty years of experience in her field. Her medical degree
                  was obtained from the University of the West Indies in
                  Jamaica, and she completed her residency in internal medicine
                  at the New York Medical College. Throughout her career, Dr.
                  Gibson has earned a reputation for her compassionate and
                  comprehensive approach to patient care. Patients deeply value
                  her unyielding dedication, exceptional clinical skills, and
                  unwavering commitment to providing the highest standard of
                  care. Notably, Dr. Gibson has dedicated several years of her
                  professional journey to training internal medicine residents,
                  helping them develop into outstanding healthcare providers.
                  She is a fervent advocate for health, wellness, and
                  integrative medicine, firmly believing in the significance of
                  patient education and empowerment to foster healthy lifestyles
                  and effectively manage chronic diseases.
                  {/* {!loading ? (
                    paraOne
                  ) : (
                    <>
                      <Skeleton />
                    </>
                  )} */}
                </p>
                <p className={styles.mainDescription}>
                  {/* {!loading ? (
                    paraTwo
                  ) : (
                    <>
                      <Skeleton />
                    </>
                  )} */}
                </p>
                {/* 
                <div className="row mt-3">
                  <div className="col-6 p-0">
                    <div className="">
                      <span>
                        <img
                          src="./images/hospital.png"
                          className={styles.iconPlus}
                          alt=""
                        />
                      </span>
                      <span className={styles.points}>22 years Experience</span>
                    </div>

                    <div className="">
                      <span className={styles.icon}>
                        <img
                          src="./images/star.png"
                          className={styles.icon}
                          alt=""
                        />
                      </span>
                      <span className={styles.points}>Medical Excellence</span>
                    </div>
                  </div>
                  <div className="col-6 p-0">
                    <div className="">
                      <span className={styles.icon}>
                        <img
                          src="./images/heart.png"
                          className={styles.icon}
                          alt=""
                        />
                      </span>
                      <span className={styles.points}>Online & In-Person</span>
                    </div>

                    <div className="">
                      <span>
                       
                        <img
                          src="./images/24hours.png"
                          className={styles.icon}
                          alt=""
                        />
                      </span>
                      <span className={styles.points}>24/7 Support</span>
                    </div>
                  </div>
                </div> */}
                <div className={styles.affiliations}>
                  <h6>
                    Memberships And Affiliations
                    {/* {!loading ? (
                      subHeading
                    ) : (
                      <>
                        <Skeleton />
                      </>
                    )} */}
                  </h6>

                  <ul>
                    <li>American Board of Internal Medicine</li>
                    <li>Institute of Functional Medicine</li>
                    <li>Obesity Medicine Association</li>
                    {/* {!loading ? (
                      <>
                        <li>
                          
                          {points && points.length >= 0
                            ? points.substring(0, 37)
                            : null}
                        </li>
                        <li>
                          {points && points.length >= 0
                            ? points.substring(37, 69)
                            : null}
                        </li>
                        <li>
                          {points && points.length >= 0
                            ? points.substring(69, 100)
                            : null}
                        </li>
                      </>
                    ) : (
                      <>
                        <Skeleton />
                      </>
                    )} */}
                  </ul>
                </div>

                <div className="my-4">
                  <Link href="/about-us" className={styles.learnBtn}>
                    <CommanButton label="Learn more" />
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 "
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <div className={styles.DocSection}>
                {!loading ? (
                  <div className={styles.meetDocImage}>
                    <Image
                      src={meetDoc}
                      width={100}
                      height={50}
                      alt="Picture of the Doctor"
                    />
                  </div>
                ) : (
                  <Skeleton active avatar row={12} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProvidingBestMedicalServices;
