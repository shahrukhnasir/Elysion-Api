import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import { RxCross1 } from "react-icons/rx";
import { CiMenuFries } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import CommanButton from "../../components/CommanButton/CommanButton";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { AllServices } from "../../Service/HomePageService";
import { Skeleton } from "antd";
import Swal from "sweetalert2";

const HorizontalMenu = () => {
  const [servicesData, setServicesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AllServices(setLoading, setServicesData, dispatch));
  }, []);

  const router = useRouter();
  const [search, setsearch] = useState(false);
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState(false);

  const searchHandler = () => {
    setsearch(true);
  };
  const menuHandler = () => {
    setMenu(!menu);
  };
  const navigateHandler = (e, urlPath) => {
    e.preventDefault();
    router.push(urlPath);
  };
  const [dropDown, setDropDown] = useState(false);
  const dropDownHandler = () => {
    setDropDown(!dropDown);
  };

  // const dropServiceHandler = () => {
  //   setDropDown(!dropDown);
  //   router.push({
  //     pathname: "/service",
  //   });
  // };
  // const dropShopHandler = () => {
  //   setDropDown(!dropDown);
  //   router.push({
  //     // pathname: "/shop",
  //     pathname:
  //       "https://us.fullscript.com/welcome/elysionhealth/signup?utm_medium=webreferral&utm_source=other&utm_campaign=abmwebbuttons_dark_200x200.svg&signup_source=website_buttons",
  //   });
  // };
  const Istoken = useSelector((state) => state?.authSlice?.authToken);
  // const btn2 = (
  //   <>
  //     <div className={styles?.btnText}>Free </div>
  //     <div className={styles?.extraText}>Consultation</div>
  //   </>
  // );
  // const serviceMenu = [
  //   {
  //     id: 1,
  //     route: "/services",
  //     label: "Patient Portal",
  //   },
  //   {
  //     id: 1,
  //     route: "/services",
  //     label: "Patient Portal",
  //   },
  // ];

  // const router = useRouter()
  // const navigateTo = (routeId) => {
  //   // router.push(`/services/${routeId}`)
  //   router.push(
  //     {
  //       pathname: `/services/${routeId}`,
  //       query: routeId,
  //     },
  //     `/services/${routeId}`
  //   );
  // };
  const getServiceId = (slug) => {
    router.push({
      pathname: "/service",
      query: {
        serviceId: slug,
      },
    });
  };

  const handlePatientPortal = (e) => {
    e.preventDefault();
    if (Istoken) {
      router.push("profile");
    } else {
      Swal.fire({
        position: "center",
        icon: "info",
        title: "Please Login !",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <>
      <div id={styles?.topMenuBarContainer}>
        <nav className="navbar navbar-expand-lg py-0" id={styles?.topHeader}>
          <div className="container p-0">
            <button
              // onClick={menuHandler}
              onClick={() => setActive(!active)}
              className="navbar-toggler shadow-none border-0"
              id={styles.toggleButton}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span>{menu ? <RxCross1 /> : <CiMenuFries />}</span>
            </button>
            <div
              className={` ${styles.navToggle} collapse navbar-collapse`}
              id="navbarSupportedContent"
            >
              <ul
                className="navbar-nav me-auto mb-2 mb-lg-0"
                id={styles.resNav}
              >
                <li className="nav-item" id={styles?.navItem}>
                  <Link className="nav-link" href="/">
                    Home
                  </Link>
                </li>
                <li
                  className={` ${styles?.dropdown} nav-item`}
                  id={styles?.navItem}
                >
                  <div
                    className={`${styles?.dropbtn} nav-link`}
                    onClick={dropDownHandler}
                  >
                    Services
                    <div className={styles?.dropdownContent}>
                      <div className="row">
                        <div className="col-lg-6">
                          <ul className={styles.dropLinkContainer}>
                            {!loading ? (
                              <>
                                {servicesData?.slice(0, 5)?.map((list, i) => {
                                  return (
                                    <>
                                      <li className={styles?.dropLink} key={i}>
                                        {" "}
                                        <a
                                          onClick={() => getServiceId(list.id)}
                                        >
                                          {list?.name}
                                        </a>
                                      </li>
                                    </>
                                  );
                                })}
                              </>
                            ) : (
                              <>
                                <Skeleton loading={servicesData} row={6} />
                              </>
                            )}
                          </ul>
                        </div>
                        <div className="col-lg-6">
                          <ul className={styles.dropLinkContainer}>
                            {!loading ? (
                              <>
                                {servicesData?.slice(5, 12)?.map((list, i) => {
                                  return (
                                    <>
                                      <li className={styles?.dropLink} key={i}>
                                        {" "}
                                        <a
                                          onClick={() => getServiceId(list.id)}
                                        >
                                          {list?.name}
                                        </a>
                                      </li>
                                    </>
                                  );
                                })}
                              </>
                            ) : (
                              <>
                                <Skeleton loading={servicesData} row={6} />
                              </>
                            )}

                            <u>
                              <li className={styles?.dropLink}>
                                {" "}
                                <Link href="/all-service">View All</Link>
                              </li>
                            </u>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  className={` ${styles?.dropdown} nav-item`}
                  id={styles?.navItem}
                >
                  <div
                    className={`${styles?.dropbtn} nav-link`}
                    onClick={dropDownHandler}
                  >
                    Patient Resources
                    <div className={styles?.dropdownContent}>
                      <div className="row">
                        <div className="col-lg-6">
                          <ul className={styles.dropLinkContainer}>
                            <li className={styles?.dropLink}>
                              {" "}
                              <a href="/patient-form">Patient Forms</a>
                            </li>
                            <li className={styles?.dropLink}>
                              {" "}
                              <Link href="/patient-education">
                                Patient Education{" "}
                              </Link>
                            </li>

                            <li className={styles?.dropLink}>
                              {" "}
                              <Link href="/insurance">Insurance</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-6">
                          <ul className={styles.dropLinkContainer}>
                            <li className={styles?.dropLink}>
                              {" "}
                              <Link href="/billing">Billing</Link>
                            </li>
                            <li className={styles?.dropLink}>
                              {" "}
                              <Link href="" onClick={(e) => handlePatientPortal(e)}>
                                Patient Portal
                              </Link>
                            </li>
                            <li className={styles?.dropLink}>
                              {" "}
                              <Link href="/faq">FAQs </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item" id={styles?.navItem}>
                  <Link className="nav-link" href="/membership">
                    Membership
                  </Link>
                </li>

                <li
                  className={` ${styles?.dropdown} nav-item`}
                  id={styles?.navItem}
                >
                  <Link
                    className={`${styles?.dropbtn} nav-link`}
                    href={"/shop"}
                    // href="https://us.fullscript.com/welcome/elysionhealth/signup?utm_medium=webreferral&utm_source=other&utm_campaign=abmwebbuttons_dark_200x200.svg&signup_source=website_buttons"
                  >
                    Shop
                    {/* Commit as per Client Requirement */}
                    {/* <div className={styles?.dropdownContentSm}>
                      <div>
                        <ul className={styles.dropLinkContainer}>
                          <li className={styles?.dropLink}>
                            {" "}
                            <Link href="/my-cart">My Cart</Link>
                          </li>
                        </ul>
                      </div>
                    </div> */}
                  </Link>
                </li>

                <li
                  className={` ${styles?.dropdown} nav-item`}
                  id={styles?.navItem}
                >
                  <div
                    className={`${styles?.dropbtn} nav-link`}
                    onClick={dropDownHandler}
                  >
                    Learn
                    <div className={styles?.dropdownContentSm}>
                      <div>
                        <ul className={styles.dropLinkContainer}>
                          <li className={styles?.dropLink}>
                            {" "}
                            <Link href="/blogs">Blogs</Link>
                          </li>
                          <li className={styles?.dropLink}>
                            <Link href="/office-policy">Office Policy</Link>
                          </li>
                          {/* <li className={styles?.dropLink}>
                            {" "}
                            <Link href="/health-topics">Health Topics</Link>
                          </li> */}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>

                <li
                  className={` ${styles?.dropdown} nav-item`}
                  id={styles?.navItem}
                >
                  <Link
                    className={`${styles?.dropbtn} nav-link`}
                    href="about-us"
                  >
                    About Us
                    <div className={styles?.dropdownContentSm}>
                      <div>
                        <ul className={styles.dropLinkContainer}>
                          <li className={styles?.dropLink}>
                            {" "}
                            <Link href="/contact-us">Contact us</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Link>
                </li>

                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  {/* <li>
										<Link href="/my-cart">
											<div className={styles.cartIconSec}>
												<div className={styles.cartPoint}>2</div>
												<img
													src="./images/cart.png"
													className={styles.cartIcon}
													alt=""
												/>
											</div>
										</Link>
									</li> */}
                  <li>
                    <Link href="">
                      <FaSearch
                        className={styles?.searchIcon}
                        onClick={searchHandler}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal1"
                      />
                    </Link>
                  </li>

                  <li className="mx-3">
                    {/* <Link href="https://elysionhealth.md-hq.com/schedule_visit" target="_blank"> */}
                    <Link href="/free-consultation">
                      {" "}
                      <CommanButton
                        className={styles?.freeCons}
                        // className={styles.portalBtn}
                        label="Free Consultation"
                      />
                    </Link>
                  </li>
                  <li>
                    {/* <Link href="https://elysionhealth.md-hq.com/" target="_blank"> */}
                    {Istoken ? (
                      <Link href="/profile">
                        <CommanButton
                          label="Patient Portal"
                          className={styles.portalBtn}
                        />
                      </Link>
                    ) : (
                      <Link href="/signin">
                        <CommanButton
                          label="Login"
                          className={styles.portalBtn}
                        />
                      </Link>
                    )}
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </nav>

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
      </div>
    </>
  );
};

export default HorizontalMenu;
