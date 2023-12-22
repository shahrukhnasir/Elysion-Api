import React, { Component, useState } from "react";
import Image from "next/image";
import styles from "./navbar.module.css";
import { IoMdCart } from "react-icons/io";
import Link from "next/link";
import CommanButton from "../../components/CommanButton/CommanButton";
import { useRouter } from "next/router";
import { FaSearch } from "react-icons/fa";
import CommanButtonLight from "../../components/CommanButtonLight/CommanButtonLight";
import { useSelector } from "react-redux";

const SideMenu = () => {
  const router = useRouter();

  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [search, setsearch] = useState(false);
  const [menu, setMenu] = useState(false);

  const searchHandler = () => {
    setsearch(true);
  };
  const dropDownHandler = () => {
    setDropDown(!dropDown);
  };
  const Istoken = useSelector((state) => state?.authSlice?.authToken);
  const btn = (
    <>
      <div className={styles?.btnText}>Patient Portal </div>
      <div className={styles?.extraText}>John Doe</div>
    </>
  );
  const btn2 = (
    <>
      <div className={styles?.btnText}>Book an</div>
      <div className={styles?.extraText}>Appointment</div>
    </>
  );

  const [canvas, setCanvas] = useState(false);

  const navigateHandler = (e, urlPath) => {
    e.preventDefault();
    router.push(urlPath);
    setCanvas(false);
  };
  return (
    <>
      {/* side menu start  */}
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <Link href="/" onClick={(e) => navigateHandler(e, "/")}>
              {" "}
              <img
                src="./images/elysion-white-logo.png"
                alt="logo"
                className={styles.img}
              />
            </Link>

            <div className="row">
              <div className="col my-auto">
                {/* <Link
                  href="/my-cart"
                  onClick={(e) => navigateHandler(e, "/my-cart")}
                >
                  <div className={styles.cartIconSec}>
                    <div className={styles.cartPoint}>2</div>
                    <IoMdCart className={styles.cart} />
                  </div>
                </Link> */}
              </div>
              <div className="col">
                <Link href="">
                  <FaSearch
                    className={styles?.searchIcon}
                    onClick={searchHandler}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal1"
                  />
                </Link>
              </div>
            </div>

            <div onClick={() => setCanvas(true)}>
              <div
                className={active ? styles.activeHamburger : styles.hamburber}
              />
            </div>
          </div>
        </div>
        {/* {/ Mobile Header Start Here /} */}
        <div className={canvas ? "mobileheader active" : "mobileheader"}>
          <Link href="/" onClick={(e) => navigateHandler(e, "/")}>
            <div className="logo-box">
              <img
                src="./images/elysion-white-logo.png"
                alt="logo"
                className={styles.img}
              />
            </div>
          </Link>
          <div className="inner-box">
            <div className="menu-inner">
              <div className="cancel">
                <button onClick={() => setCanvas(false)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="currentColor"
                    class="bi bi-x"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </button>
              </div>
              <ul className="menus">
                <li className="menu-items">
                  <Link
                    href="/"
                    className="menu-link"
                    onClick={(e) => navigateHandler(e, "/")}
                  >
                    Home
                  </Link>
                </li>
                <li className="menu-items">
                  <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingTwo">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="true"
                          aria-controls="collapseTwo"
                        >
                          Services
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body">
                          <ul className="menus">
                            <li className="menu-items">
                              <Link
                                href={`/Internal-Integrative-medicine`}
                                className="menu-link"
                                onClick={(e) =>
                                  navigateHandler(e, "/Internal-Integrative-medicine")
                                }
                              >
                                Internal And Integrative Medicine
                              </Link>
                            </li>
                            <li className="menu-items">
                              <Link
                                href={`/functional-medicine`}
                                className="menu-link"
                                onClick={(e) =>
                                  navigateHandler(e, "/functional-medicine")
                                }
                              >
                                Functional Medicine
                              </Link>
                            </li>
                            <li className="menu-items">
                              <Link
                                href={`/women-wellness`}
                                className="menu-link"
                                onClick={(e) =>
                                  navigateHandler(e, "/women-wellness")
                                }
                              >
                               Women’s Wellness
                              </Link>
                            </li>
                            <li className="menu-items">
                              <Link
                                href={`/hormone-bioidentical-treatment`}
                                className="menu-link"
                                onClick={(e) =>
                                  navigateHandler(e, "/hormone-bioidentical-treatment")
                                }
                              >
                                Hormone Balance And Bioidentical Treatment
                              </Link>
                            </li>
                            <li className="menu-items">
                              <Link
                                href={`/menopause-treatment`}
                                className="menu-link"
                                onClick={(e) =>
                                  navigateHandler(e, "/menopause-treatment")
                                }
                              >
                               Menopause And Perimenopausal Treatment

                              </Link>
                            </li>
                            <li className="menu-items">
                              <Link
                                href={`/addiction-medicine`}
                                className="menu-link"
                                onClick={(e) =>
                                  navigateHandler(e, "/addiction-medicine")
                                }
                              >
                                Addiction Medicine
                              </Link>
                            </li>
                            <li className="menu-items">
                              <Link
                                href={`/weight-loss-management`}
                                className="menu-link"
                                onClick={(e) =>
                                  navigateHandler(e, "/weight-loss-management")
                                }
                              >
                               Weight Loss Management

                              </Link>
                            </li>
                            <li className="menu-items">
                              <Link
                                href={`/weight-management`}
                                className="menu-link"
                                onClick={(e) =>
                                  navigateHandler(e, "/weight-management")
                                }
                              >
                                GLP-1 Weight Management
                              </Link>
                            </li>
                            <li className="menu-items">
                              <Link
                                href={`/iv-hydration-therapy`}
                                className="menu-link"
                                onClick={(e) =>
                                  navigateHandler(e, "/iv-hydration-therapy")
                                }
                              >
                                {" "}
                                IV Hydration & Vitamin Therapy
                              </Link>
                            </li>

                            <li className="menu-items">
                              <Link
                                href={`/botox-filler`}
                                className="menu-link"
                                onClick={(e) =>
                                  navigateHandler(e, "/botox-filler")
                                }
                              >
                                {" "}
                                Botox, Dysport, Jeuveau & Fillers

                              </Link>
                            </li>
                            <li className="menu-items">
                              <Link
                                href="/service"
                                className="menu-link"
                                onClick={(e) => navigateHandler(e, "/service")}
                              >
                                View All
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="menu-items">
                  <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingThree">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Patient resources
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body">
                          <ul className="menus">
                            <li className="menu-items">
                              <Link href="/patient-form" className="menu-link" onClick={(e) =>
                                navigateHandler(e, "/patient-form")
                              }>
                                Patient forms
                              </Link>
                            </li>
                            <li className="menu-items">
                              <Link
                                href="/patient-education"
                                className="menu-link"
                                onClick={(e) =>
                                  navigateHandler(e, "/patient-education")
                                }
                              >
                                Patient Education
                              </Link>
                            </li>
                            <li className="menu-items">
                              <Link
                                href="/insurance"
                                className="menu-link"
                                onClick={(e) =>
                                  navigateHandler(e, "/insurance")
                                }
                              >
                                Insurance
                              </Link>
                            </li>
                            <li className="menu-items">
                              <Link
                                href="/billing"
                                className="menu-link"
                                onClick={(e) => navigateHandler(e, "/billing")}
                              >
                                Billing
                              </Link>
                            </li>
                            <li className="menu-items">
                              <Link
                                href="/register"
                                className="menu-link"
                                onClick={(e) => navigateHandler(e, "/register")}
                              >
                                Patient portal
                              </Link>
                            </li>
                            <li className="menu-items">
                              <Link
                                href="/faq"
                                className="menu-link"
                                onClick={(e) => navigateHandler(e, "/faq")}
                              >
                                FAQ's
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="menu-items">
                  <Link
                    href="/membership"
                    className="menu-link"
                    onClick={(e) => navigateHandler(e, "/membership")}
                  >
                    Membership
                  </Link>
                </li>
                <li className="menu-items">
                  <Link
                    href="/shop"
                    className="menu-link"
                    onClick={(e) => navigateHandler(e, "/shop")}
                  >
                    Shop
                  </Link>
                </li>

                <li className="menu-items">
                  <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingFour">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          Learn
                        </button>
                      </h2>
                      <div
                        id="collapseFour"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body">
                          <ul className="menus">
                            <li className="menu-items">
                              <Link
                                href="/blogs"
                                className="menu-link"
                                onClick={(e) => navigateHandler(e, "/blogs")}
                              >
                                Blogs
                              </Link>
                            </li>
                            <li className="menu-items">
                              <Link
                                href="/office-policy"
                                className="menu-link"
                                onClick={(e) => navigateHandler(e, "/office-policy")}
                              >
                                Office Policy
                              </Link>
                            </li>
                            {/* <li className="menu-items">
                              <Link
                                href="/health-topics"
                                className="menu-link"
                                onClick={(e) =>
                                  navigateHandler(e, "/health-topics")
                                }
                              >
                                Health Topics
                              </Link>
                            </li> */}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="menu-items">
                  <Link
                    href="/about-us"
                    className="menu-link"
                    onClick={(e) => navigateHandler(e, "/about-us")}
                  >
                    About Us
                  </Link>
                </li>
                <li className="menu-items">
                  <Link
                    href="/contact-us"
                    className="menu-link"
                    onClick={(e) => navigateHandler(e, "/contact-us")}
                  >
                    Contact Us
                  </Link>
                </li>
                {Istoken ? (
                       <li className="menu-items">
                       <Link
                         href="/register"
                         onClick={(e) => navigateHandler(e, "/profile")}
                       >
                         <CommanButtonLight label="Patient Portal" />
                       </Link>
                     </li>
                     
                    ) : (
                      <li className="menu-items">
                      <Link
                        href="/signin"
                        onClick={(e) => navigateHandler(e, "/signin")}
                      >
                        <CommanButtonLight label="Login" />
                      </Link>
                    </li>
                    )}
                
                <li className="menu-items">
                  <Link href="/free-consultation">
                    <CommanButtonLight
                      className={styles?.bookNow}
                      // className={styles.portalBtn}
                      label="Free Consultation"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* {/ Mobile Header End Here /} */}
      </div>
      {!search == true ? (
        ""
      ) : (
        <div
          class="modal fade"
          id="exampleModal1"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  <img src="/images/logo.svg" alt="Picture of the author" />
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <input
                  type="text"
                  placeholder="Search..."
                  className={styles.inputField}
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {/* side menu end  */}
    </>
  );
};

export default SideMenu;
