import React, { useEffect, useState } from "react";
import styles from "../HeroSection/HeroSection.module.css";
import Link from "next/link";
import CommanButton from "../../../components/CommanButton/CommanButton";
import { HeroSections } from "../../../Service/HomePageService";
import { useDispatch, useSelector } from "react-redux";
import { Skeleton } from "antd";
import Swal from "sweetalert2";
const HeroSection = () => {
  const [mainHeading, setMainHeading] = useState([]);
  const [internal, setInternal] = useState([]);
  const [betterHealth, setBetterHealth] = useState([]);
  const [tessaGibson, setTessaGibson] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector((state) => state?.authSlice?.authToken);
  const loginHanlder = (e) =>{
    e.preventDefault();

    Swal.fire({
      position: "center",
      icon: "info",
      title: "Login please?",
      showConfirmButton: true,
      timer: 1500,
      customClass: {
        confirmButton: "theme-button-bg",
      },
    });
  }
  useEffect(() => {
    dispatch(
      HeroSections(
        setLoading,
        setMainHeading,
        setInternal,
        setBetterHealth,
        setTessaGibson,
        dispatch
      )
    );
  }, []);

  const btn2 = (
    <>
      <div className={styles?.btnText}>Book an Appointment</div>
      <div className={styles?.extraText}>Appointment</div>
    </>
  );
  return (
    <>
      <section id={styles.mainHeroContainer}>
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-lg-5 offset-lg-1 my-auto"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className={styles.heroHeading}>
                <h1 className={styles.mainHeading}>
                  <div className={styles.mainHeadingInner}>
                    {!loading ? (
                      mainHeading
                    ) : (
                      <>
                        <Skeleton />
                      </>
                    )}
                  </div>

                  <div className={styles.HeadingSm}>
                    {!loading ? (
                      internal
                    ) : (
                      <>
                        <Skeleton />
                      </>
                    )}
                  </div>

                  <div className={styles.HeadingBig}>
                    {!loading ? (
                      betterHealth
                    ) : (
                      <>
                        <Skeleton />
                      </>
                    )}
                  </div>
                </h1>
                <hr className={styles.hr} />
                <div className={styles.details}>
                  <p>
                    {!loading ? (
                      tessaGibson
                    ) : (
                      <>
                        <Skeleton />
                      </>
                    )}
                  </p>
                </div>

                <div className={styles.freeCon}>
                  {/* <Link href="/book-on-appointment"> */}
                  

                  {token ? (
                    <div className="pt-2">
                      <Link href="/book-on-appointment">
                        <CommanButton
                          label="Book an Appointment"
                          className={styles.heroButton}
                        />
                      </Link>
                    </div>
                  ) : (
                    <div className="pt-2">
                      <Link href="">
                        <CommanButton
                          label="Book an Appointment"
                          className={styles.heroButton}
                          onClick={(e) => loginHanlder(e)}
                        />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="col-lg-6 p-0">
              <div className={styles.HeroImageContainer}>
                <div className={styles.HeroImage}>
                  {/* <Image
                      src={lady}
                      alt="Picture of the author"
                      // width={700}
                      // height={700}
                      quality={100}
                      sizes="100vw"
                      style={{
                        objectFit: 'cover',
                      }}
                    /> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div
          className={`${styles.modal} modal fade`}
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content" id={styles.modal}>
              <div className="modal-header border-0">
               
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <video loop autoPlay muted className={styles.modalVideo}>
                  <source src="./video/health-video.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
};

export default HeroSection;
