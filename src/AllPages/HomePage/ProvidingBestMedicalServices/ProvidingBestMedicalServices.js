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
  // const [mainHeading, setMainHeading] = useState([]);
  // const [paraOne, setParaOne] = useState([]);
  // const [paraTwo, setParaTwo] = useState([]);
  // const [docImage, setDocImage] = useState([]);
  // const [subHead, setSubHeading] = useState('');
  // const [points, setPoints] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      MeetDoctorSections(
        setLoading,
        setData,
        // setMainHeading,
        // setParaOne,
        // setParaTwo,
        // setDocImage,
        // setSubHeading,
        // setPoints,
        dispatch
      )
    );
  }, []);
  console.log(data, "data");
  const memberAff = data?.filter(
    (sub) => sub?.type === "Memberships And Affiliations"
  );

  const meetDoctor = data?.filter((sub) => sub?.type === "Meet Your Doctor");
  const meetDocImage = data?.filter((sub) => sub?.type === "meetdocimage");
  const docImg = meetDocImage?.[0]?.image_url;
  const content1 = data?.filter((sub) => sub?.type === "paraone");
  const content2 = data?.filter((sub) => sub?.type === "paratwo");

  console.log(data, "memberAff");
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
                  {!loading ? (
                    <>
                      {meetDoctor && meetDoctor?.length > 0
                        ? meetDoctor?.[0]?.value
                        : ""}
                    </>
                  ) : (
                    <>
                      <Skeleton />
                    </>
                  )}
                  {/* {!loading ? (
                    mainHeading
                  ) : (
                    <>
                      <Skeleton />
                    </>
                  )} */}
                </h1>

                <p className={styles.mainDescription}>
                  {content1?.length > 0 ? (
                    <>
                      {!loading ? (
                        content1?.[0]?.value
                      ) : (
                        <>
                          <Skeleton />
                        </>
                      )}
                    </>
                  ) : (
                    "Content not found"
                  )}
                </p>
                <p className={styles.mainDescription}>
                  {content2?.length > 0 ? (
                    <>
                      {!loading ? (
                        content2?.[0]?.value
                      ) : (
                        <>
                          <Skeleton />
                        </>
                      )}
                    </>
                  ) : (
                    "Content not found"
                  )}
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
                    {/* {subHeading?.length > 0
                      ? subHeading?.[0]?.type
                      : "Data not found"} */}
                    {/* Memberships And Affiliations */}
                    {!loading ? (
                      <>
                        {memberAff && memberAff?.length > 0
                          ? memberAff?.[0]?.type
                          : "Data not found"}
                      </>
                    ) : (
                      <>
                        <Skeleton />
                      </>
                    )}
                  </h6>

                  <ul>
                    {memberAff?.length > 0 ? (
                      <>
                        {!loading ? (
                          <>
                            <li>
                              {memberAff && memberAff.length >= 0
                                ? memberAff?.[0]?.value.substring(0, 37)
                                : null}
                            </li>
                            <li>
                              {memberAff && memberAff.length >= 0
                                ? memberAff?.[0]?.value.substring(37, 69)
                                : null}
                            </li>
                            <li>
                              {memberAff && memberAff.length >= 0
                                ? memberAff?.[0]?.value.substring(69, 100)
                                : null}
                            </li>
                          </>
                        ) : (
                          <>
                            <Skeleton />
                          </>
                        )}
                      </>
                    ) : (
                      "data not found"
                    )}
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
                {/* {!loading ? (
                  <div className={styles.meetDocImage}>
                    <Image
                      src={meetDocImage?.[0]?.image_url}
                      width={100}
                      height={50}
                      alt="Picture of the Doctor"
                    />
                  </div>
                ) : (
                  <Skeleton active avatar row={12} />
                )} */}

                {!loading && (
                  <>
                    {meetDocImage?.length > 0 ? (
                      <>
                        <div className={styles.meetDocImage}>
                          <Image
                            src={docImg}
                            width={100}
                            height={50}
                            alt="Picture of the Doctor"
                          />
                        </div>
                      </>
                    ) : (
                      "image not found"
                    )}
                  </>
                )}

                {loading && (
                  <>
                    <Skeleton />
                  </>
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
