import React, { useEffect, useState } from "react";
import ProfileLayout from '../../../layout/ProfileDashboard/ProfileLayout'
import styles from "../MyWishlist/MyWishlist.module.css";
import { MdOutlineClose } from "react-icons/md";
import Link from "next/link";
import { IoIosCall } from "react-icons/io";
const MyWishlist = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalDetail, setModalDetail] = useState("");

  const handleModal = (item) => {
    setShowModal(true);
    setModalDetail(item);
  };
  const Data = [
    {
      id: 1,
      sNo: "01",
      productName: "Lorem ipsum Dolor",
      productImage:"./images/modalproduct.png",
      productPrice:"$158.07 ",
      stockStatus: "In Stock",
      action: "Add to Cart",
    },

    {
      id: 2,
      sNo: "02",
      productName: "Lorem ipsum Dolor",
      productImage:"./images/modalproduct.png",
      productPrice:"$138.07 ",
      stockStatus: "In Stock",
      action: "Add to Cart",
    },

    {
      id: 3,
      sNo: "03",
      productName: "Lorem ipsum Dolor",
      productImage:"./images/modalproduct.png",
      productPrice:"$178.07 ",
      stockStatus: "In Stock",
      action: "Add to Cart",
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
                S.No
                </th>
                <th scope="col" className={styles.tHead}>
                Product Name
                </th>
                <th scope="col" className={styles.tHead}>
                Price
                </th>
             
                <th scope="col" className={styles.tHead}>
                Stock Status
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
                    <td className={styles.tData}>{item.sNo}</td>
                    <td className={styles.tData}><img className="w-25" src={item?.productImage} alt="" /> {item.productName}</td>
                    <td className={styles.tData}>{item.productPrice}</td>
                    <td className={styles.tData}>{item.stockStatus}</td>
                   <td className={styles.tDataBtn}>
                      <button
                        type="button"
                   
                        id={styles.dataActionBtn}
                 
                      >
                        {item.action}
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
            <div className="row pb-3">
             <span className={styles.clearWishList}>Clear Wishlist</span>

            
            </div>
          </div>
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

export default MyWishlist;
