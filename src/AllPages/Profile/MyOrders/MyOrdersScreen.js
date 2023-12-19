import React, { useEffect, useState } from "react";
import ProfileLayout from "../../../layout/ProfileDashboard/ProfileLayout";
import styles from "../MyOrders/MyOrdersScreen.module.css";
import { MdOutlineClose } from "react-icons/md";
import Link from "next/link";
import CommanButton from "../../../components/CommanButton/CommanButton";
import CommonModal from "../../../components/CommanModal/CommanModal"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const MyOrdersScreen = () => {
  const [orderFinished, setOrderFinished] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalDetail, setModalDetail] = useState("");

  const Data = [
    {
      id: 1,
      OrderID: "ID #01094658",
      Amount: "$150.0",
      DATE: "8-Oct-2022",
      orderStatus: "Shipped",
      ACTION: "View Detail",
    },

    {
      id: 2,
      OrderID: "ID #01094658",
      Amount: "$160.0",
      DATE: "8-Oct-2022",
      orderStatus: "Shipped",
      ACTION: "View Detail",
    },
    {
      id: 3,
      OrderID: "ID #01094658",
      Amount: "$150.0",
      DATE: "8-Oct-2022",
      orderStatus: "Shipped",
      ACTION: "View Detail",
    },
    {
      id: 4,
      OrderID: "ID #01094658",
      Amount: "$150.0",
      DATE: "8-Oct-2022",
      orderStatus: "Completed",
      ACTION: "View Detail",
    },
  ];

  const handleModal = (item) => {
    setIsModalOpen(true);
    setModalDetail(item);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const orderFinishedHandler = (item) => {
    setOrderFinished(item?.orderStatus);
  };

  return (
    <>
      <ProfileLayout Heading="My Orders" pageName="My Orders">
        <div className={`${styles.TopCatSection} container`}>
          <div className="row">
            <div className="col-lg-12">
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
                      <label for="upload-photo" className={styles.cardText}>
                        Edit Display Image
                      </label>
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
                  Order ID
                </th>

                <th scope="col" className={styles.tHead}>
                  Amount
                </th>
                <th scope="col" className={styles.tHead}>
                  DATE
                </th>
                <th scope="col" className={styles.tHead}>
                  Order Status
                </th>
                <th scope="col" className={styles.tHead}>
                  ACTION
                </th>
                <th scope="col" className={styles.tHead}></th>
              </tr>
            </thead>

            <tbody>
              {Data.map((item, index) => {
                if (item.orderStatus == "Completed") {
                }

                return (
                  <tr>
                    <td className={styles.tData}>{item.OrderID}</td>

                    <td className={styles.tData}>{item.Amount}</td>
                    <td className={styles.tData}>{item.DATE}</td>
                    <td className={styles.tDataBtn}>
                      <button className={styles.dataStatusBtn}>
                        {item.orderStatus}
                      </button>
                    </td>
                    <td className={styles.tDataBtn}>
                      <button
                        type="button"
                        id={styles.dataActionBtn}
                        onClick={() => handleModal(item)}
                      >
                        {item.ACTION}
                      </button>
                    </td>

                    <td onClick={() => orderFinishedHandler(item)}>
                      <span type="button" onClick={() => handleModal(item)}>
                        {item.orderStatus == "Completed" && (
                          <img
                            src="./images/myorder.png"
                            className={styles.OrderModalIcon}
                          />
                        )}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>


        <CommonModal isOpen={isModalOpen} onClose={closeModal}>
          <div className={`${styles.modalBody} modal-body`}>
            <div className="my-orders-view">
              <div className="row">
                <div className="col-md-12">
                  <table
                    className="table table-responsive"
                    id={styles.tableOuterBody}
                  >
                    <thead className={`${styles.THaed}`}>
                      <tr>
                        <th scope="col" className={styles.tHead}>
                          Product
                        </th>

                        <th scope="col" className={styles.tHead}>
                          Product Name
                        </th>
                        <th scope="col" className={styles.tHead}>
                          Price
                        </th>
                        
                        <th scope="col" className={styles.tHead}>
                          SUBTOTAL
                        </th>
                        <th scope="col" className={styles.tHead}></th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr className={styles.tRow}>
                        <td className={styles.tData}>
                          <img src="images/product/product4.png" className={styles.pro_img} alt="" />
                        </td>

                        <td className={styles.tData}>
                          <div className="">
                          Trix 400mg
                          </div>
                        </td>
                        <td className={styles.tData}>200.00</td>
                      

                        <td className={styles.tData}>500.00</td>
                      </tr>
                    </tbody>
                  </table>
                 
                  <div className={styles.order_details}>
                    <h3>ORDER DETAILS</h3>
                    <div className={styles.dvforflex}>
                      <div className="two-stuff">
                        <div className={styles.fordvtext}>
                          <h5>Sub total :</h5>
                        </div>
                      </div>
                      <div className={styles.forprice}>
                        <h4>$152.00</h4>
                      </div>
                    </div>

                    <div className={styles.dvforflex}>
                      <div className="two-stuff">
                        <div className={styles.fordvtext}>
                          <h5>Shipping Charges :</h5>
                        </div>
                      </div>
                      <div className={styles.forprice}>
                        <h4>$152.00</h4>
                      </div>
                    </div>
                    <div className={styles.dvforflex}>
                      <div className="two-stuff">
                        <div className={styles.fordvtext}>
                          <h5>Total :</h5>
                        </div>
                      </div>
                      <div className={styles.forprice}>
                        <h4>$1622.00</h4>
                      </div>
                    </div>
                    <div className={styles.dvforflex}>
                      <div className="two-stuff">
                        <div className={styles.fordvtext}>
                          <h5>Order Status :</h5>
                        </div>
                      </div>
                      <div className={styles.forprice}>
                        <h4>Completed</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CommonModal>

        {/* // <!-- Order Details Modal --> */}
        <div
          className="modal fade"
          id="orderStaticBackdrop"
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

              <div>
                <h6
                  className={`${styles.modalTittle} modal-title`}
                  id="staticBackdropLabel"
                >
                  Order ID
                  <span className={styles.modalId}>
                    #5681740{modalDetail?.id}
                  </span>
                </h6>

                <div className={styles.orderProductSection}>
                  <div
                    className="card border-0 mb-3"
                    id={styles.orderProductSection}
                  >
                    <div className="row g-0">
                      <div className="col-lg-1 my-auto">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <img
                          src="./images/modalproduct.png"
                          className="img-fluid rounded-start"
                          alt="..."
                        />
                      </div>
                      <div className="col-lg-4">
                        <div className="card-body p-0">
                          <span className={styles.productName}>
                            Lorem Ipsum
                          </span>
                          <p className={styles.productQty}>Quantity: 2</p>
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <div className={styles.pdouctPrice}>$158.0</div>
                        <div className={styles.pdouctReview}>Give Review</div>
                      </div>
                    </div>
                    <div className="row g-0 py-3">
                      <div className="col-lg-1 my-auto">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <img
                          src="./images/modalproduct.png"
                          className="img-fluid rounded-start"
                          alt="..."
                        />
                      </div>
                      <div className="col-lg-4">
                        <div className="card-body p-0">
                          <span className={styles.productName}>
                            Lorem Ipsum
                          </span>
                          <p className={styles.productQty}>Quantity: 2</p>
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <div className={styles.pdouctPrice}>$158.0</div>
                        <div className={styles.pdouctReview}>Give Review</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.orderProductBottom}>
                  <div className="row">
                    <h6 className={styles.OrderDetailHeading}>Order Details</h6>
                    <div className="col-lg-6 p-0">
                      <h6 className={styles.orderDetail}>Date:</h6>
                    </div>
                    <div className="col-lg-6 p-0">
                      <h6 className={styles.orderDetailText}>22-Sep-23</h6>
                    </div>

                    <div className="col-lg-6 p-0">
                      <h6 className={styles.orderDetail}>Subtotal:</h6>
                    </div>
                    <div className="col-lg-6 p-0">
                      <h6 className={styles.orderDetailText}>$160.0</h6>
                    </div>

                    <div className="col-lg-6 p-0">
                      <h6 className={styles.orderDetail}>Shipping Fee:</h6>
                    </div>
                    <div className="col-lg-6 p-0">
                      <h6 className={styles.orderDetailText}>$2.00</h6>
                    </div>

                    <div className="col-lg-6 p-0">
                      <h6 className={styles.orderDetail}>Order Status:</h6>
                    </div>
                    <div className="col-lg-6 p-0">
                      <h6 className={styles.orderDetailText}>Completed</h6>
                    </div>
                  </div>
                </div>
                <Link href="/checkout-details" onClick={() => router.reload()}>
                  <CommanButton
                    className={styles.reOrderBtn}
                    label="Re Order"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </ProfileLayout>
    </>
  );
};

export default MyOrdersScreen;
