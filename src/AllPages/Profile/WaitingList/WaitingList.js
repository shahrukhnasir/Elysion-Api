import React, { useEffect, useState } from "react";
import ProfileLayout from "../../../layout/ProfileDashboard/ProfileLayout";
import styles from "../WaitingList/WaitingList.module.css";
import { MdOutlineClose } from "react-icons/md";
import Link from "next/link";
import CommonModal from "../../../components/CommanModal/CommanModal";
import { IoIosCall } from "react-icons/io";
const WaitingList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalDetail, setModalDetail] = useState("");

  const openModal = (item) => {
      setIsModalOpen(true);
      setModalDetail(item);
      console.log("Modal opened");
  };

  const closeModal = () => {
      setIsModalOpen(false);
  };
  const Data = [
    {
      id: 1,
      BookingID: "ID #01094658",
      Service: "Pediatric Care",
      Amount: "$150.0",
      DATE: "8-Oct-2022",
      Status: "Waiting",
      ACTION: "View Detail",
    },
  ];
  return (
    <>
      <ProfileLayout Heading="My Appointments" pageName="My Appointments">
        <div className={`${styles.TopCatSection} container`}>
          <div className="row">
            <div className="col-lg-6">
              <div className="mb-3">
                <div className="row g-0">
                  <div className="col-lg-2">
                    <img
                      src="./images/profileMan.png"
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-lg-10">
                    <div className={styles.cardBody}>
                      <h5 className={styles.cardTitle}>John Doe</h5>
                      <label for="upload-photo" className={styles.cardText}>Edit Display Image</label>
                    <input type="file" name="photo" id="upload-photo" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.AppointmentContainer} container`}>
          <table className="table table-responsive" id={styles.tableOuterBody}>
            <thead className={`${styles.TSection}`}>
              <tr>
                <th scope="col" className={styles.tHead}>
                  Booking ID
                </th>
                <th scope="col" className={styles.tHead}>
                  Service
                </th>
                <th scope="col" className={styles.tHead}>
                  Amount
                </th>
                <th scope="col" className={styles.tHead}>
                  DATE
                </th>
                <th scope="col" className={styles.tHead}>
                  Status
                </th>
                <th scope="col" className={styles.tHead}>
                  ACTION
                </th>
                <th scope="col" className={styles.tHead}></th>
              </tr>
            </thead>
            {Data.map((item) => {
              return (
                <tbody>
                  <tr>
                    <td className={styles.tData}>{item.BookingID}</td>
                    <td className={styles.tData}>{item.Service}</td>
                    <td className={styles.tData}>{item.Amount}</td>
                    <td className={styles.tData}>{item.DATE}</td>
                    <td className={styles.tDataBtn}>
                      <button className={styles.dataStatusBtn}>
                        {item.Status}
                      </button>
                    </td>
                    <td className={styles.tDataBtn}>
                      <button
                        type="button"
                      
                        id={styles.dataActionBtn}
                        onClick={() => openModal(item)}
                      >
                        {item.ACTION}
                      </button>
                    </td>

                    <td>
                      <Link href="">
                        <MdOutlineClose className={styles.crossIcon} />
                      </Link>{" "}
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>

          <div>
            <div className="row">
              <div className="col-lg-6">
                <div id={styles.infoBox}>
                  <span className={styles.extraInfoText}>
                    Ongoing Appointment/Booking ID
                  </span>

                  <span className={styles.extraInfoId}># 01090</span>

                  <span className={styles.extraInfoText}>
                    Ongoing Appointment/Booking ID
                  </span>

                  <span className={styles.extraInfoId}># 01090</span>
                </div>
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
                    <span className={styles.contactNum}>0123 456 7890</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* // <!-- Modal --> */}
 
        <CommonModal isOpen={isModalOpen} onClose={closeModal}>
         

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
        
              </CommonModal>
      </ProfileLayout>
    </>
  );
};

export default WaitingList;
