import React, { useEffect, useState } from "react";
import ProfileLayout from "../../../layout/ProfileDashboard/ProfileLayout";
import styles from "../MyMemberships/MyMemberships.module.css";
import { MdOutlineClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { IoIosCall } from "react-icons/io";
import { Subscriptions } from "../../../Service/Subscription";
import Link from "next/link";
const MyMemberships = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state?.authSlice?.authToken);
  const [showModal, setShowModal] = useState(false);
  const [modalDetail, setModalDetail] = useState("");
  const [sub, setSubscription] = useState([]);
  const [status, setSatus] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleModal = (item) => {
    setShowModal(true);
    setModalDetail(item);
  };

  useEffect(() => {
    dispatch(Subscriptions(token, setLoading, setSubscription, setSatus));
  }, [token]);
  console.log(sub, "sdsvdj");
  return (
    <>
      <ProfileLayout Heading="My Appointments" pageName="My Appointments">
        <div className={`${styles.TopCatSection} container`}></div>

        <div className={`${styles.AppointmentContainer} container`}>
          {sub && sub ? (
            <>

              <table
                className="table table-responsive"
                id={styles.tableOuterBody}
              >
                <thead className={`${styles.TSection}`}>
                  <tr>
                    <th scope="col" className={styles.tHead}>
                      My membership
                    </th>

                    <th scope="col" className={styles.tHead}>
                      Amount Paid
                    </th>

                    <th scope="col" className={styles.tHead}>
                      Status
                    </th>
                    <th scope="col" className={styles.tHead}>
                      Amount
                    </th>
                    {/* <th scope="col" className={styles.tHead}>
                  ACTION
                </th> */}
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className={styles.tData}>{sub?.name}</td>
                    <td className={styles.tData}>
                      {/* {status.type == "annually" ? }{sub.price}:"" */}
                      {status.type}
                    </td>
                    <td className={styles.tData}>{status.type}</td>
                    <td className={styles.tData}>{sub?.price}$</td>

                    <td className={styles.tDataBtn}>
                      {/* <Link
                    href="membership"
                    type="button"
                    id={styles.dataActionBtn}
                  >
                    Renew Now
                  </Link> */}
                    </td>
                  </tr>
                </tbody>
              </table>

              <div>
                <div className="row ms-3">
                  <div className="col-lg-6 mt-3">
                    <span className={styles.extraInfoText}>
                      Need Help With Account?
                    </span>
                  </div>

                  <div className="col-lg-6">
                    <div className="row mt-3">
                      <div className="col-lg-6">
                        <span className={styles.extraInfoText}>
                          Submit A Request Or Call Us{" "}
                        </span>
                      </div>
                      <div className="col-lg-6">
                        <span>
                          <IoIosCall className={styles.contactIcon} />
                        </span>{" "}
                        <a href="tel:+470-300-2259" className={styles.contactNum}>
                          470-300-2259
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>) : (
            <div className={`${styles.tData} text-center`}>
              MemberShip List is Empty
            </div>
          )}


        </div>
        {/* // <!-- Modal --> */}
        <div
          className="modal fade"
          class="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered ">
            <div className="modal-content">
              <div className={styles.closeBtn}>
                <MdOutlineClose
                  className={`${styles.btnClose} btn-close`}
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>

              <div className={`${styles.modalBoody} modal-body`}>
                <h6
                  className={`${styles.modalTittle} modal-title`}
                  id="staticBackdropLabel"
                >
                  Appointment ID{" "}
                  <span className={styles.modalId}>
                    #5681740{modalDetail?.id}
                  </span>
                </h6>
                <div className="row">
                  <div className="col-lg-3 p-0">
                    <h6 className={styles.modalDetail}>Service</h6>
                  </div>
                  <div className="col-lg-4 p-0">
                    <h6 className={styles.modalText}>{modalDetail?.Service}</h6>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3 p-0">
                    <h6 className={styles.modalDetail}>Amount</h6>
                  </div>
                  <div className="col-lg-4 p-0">
                    <h6 className={styles.modalText}>{modalDetail?.Amount}</h6>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3 p-0">
                    <h6 className={styles.modalDetail}>Status</h6>
                  </div>
                  <div className="col-lg-4 p-0">
                    <h6>
                      <button className={styles.dataStatusBtn}>
                        Completed
                      </button>
                    </h6>
                  </div>
                </div>

                <div className="">
                  <h6 className={styles.modalId}>Appointment Detail</h6>
                </div>

                <div className={styles.modalDesc}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ProfileLayout>
    </>
  );
};

export default MyMemberships;
