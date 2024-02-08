import React, { useEffect, useState } from "react";
import ProfileLayout from "../../../layout/ProfileDashboard/ProfileLayout";
import styles from "../MyOrders/MyOrdersScreen.module.css";
import { MdOutlineClose } from "react-icons/md";
import Link from "next/link";
import CommanButton from "../../../components/CommanButton/CommanButton";
import CommonModal from "../../../components/CommanModal/CommanModal";
import { useDispatch, useSelector } from "react-redux";
import { OrderList } from "../../../Service/PatientPortal";
import { Skeleton } from "antd";
import withAuth from "../../../pages/utils/withAuth";
const MyOrdersScreen = () => {
  const token = useSelector((state) => state?.authSlice?.authToken);
  const [orderFinished, setOrderFinished] = useState("");
  const [order, setOrderList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalDetail, setModalDetail] = useState("");

  const dispatch = useDispatch();

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

  useEffect(() => {
    dispatch(OrderList(token, setLoading, setOrderList));
  }, []);

  return (
    <>
      <ProfileLayout Heading="My Orders" pageName="My Orders">
        <div className={`${styles.AppointmentContainer} container  py-3`}>
          {order?.length > 0 ? (
            <table
              className="table table-responsive"
              id={styles.tableOuterBody}
            >
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
              {!loading ? (
                <tbody>
                  {order.map((item, index) => {
                    if (item.order_status == "completed") {
                    }

                    return (
                      <tr key={index}>
                        <td className={styles.tData}>#{item?.id}</td>

                        <td className={styles.tData}>
                          ${Math.ceil(item?.total_amount)}
                        </td>
                        <td className={styles.tData}>
                          {new Date(item.updated_at).toDateString()}
                        </td>
                        <td className={styles.tDataBtn}>
                          <button className={styles.dataStatusBtn}>
                            {item.order_status}
                          </button>
                        </td>
                        <td className={styles.tDataBtn}>
                          <button
                            type="button"
                            id={styles.dataActionBtn}
                            onClick={() => handleModal(item)}
                          >
                            View
                          </button>
                        </td>

                        <td onClick={() => orderFinishedHandler(item)}>
                          <span type="button" onClick={() => handleModal(item)}>
                            {item.order_status == "completed" && (
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
              ) : (
                <>
                  <tbody>
                    <tr>
                      <td>
                        <Skeleton />
                      </td>
                      <td>
                        <Skeleton />
                      </td>
                      <td>
                        <Skeleton />
                      </td>
                      <td>
                        <Skeleton />
                      </td>
                    </tr>
                  </tbody>
                </>
              )}
            </table>
          ) : (
            <div className={`${styles.tData} text-center`}>
              OrderList is Empty
            </div>
          )}
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
                          <img
                            src={modalDetail?.details?.map(
                              (item, i) => item?.product?.thumbnail_url
                            )}
                            className={styles.pro_img}
                            alt=""
                          />
                        </td>

                        <td className={styles.tData}>
                          <div className="">
                            {modalDetail?.details?.map(
                              (item) => item?.product?.title
                            )}
                          </div>
                        </td>
                        <td className={styles.tData}>
                          ${modalDetail?.total_amount}
                        </td>

                        <td className={styles.tData}>
                          ${Math.ceil(modalDetail?.total_amount)}
                        </td>
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
                        <h4>${Math.ceil(modalDetail?.total_amount)}</h4>
                      </div>
                    </div>

                    <div className={styles.dvforflex}>
                      <div className="two-stuff">
                        <div className={styles.fordvtext}>
                          <h5>Shipping Charges :</h5>
                        </div>
                      </div>
                      <div className={styles.forprice}>
                        <h4>$50</h4>
                      </div>
                    </div>
                    <div className={styles.dvforflex}>
                      <div className="two-stuff">
                        <div className={styles.fordvtext}>
                          <h5>Total :</h5>
                        </div>
                      </div>
                      <div className={styles.forprice}>
                        <h4>${Math.ceil(modalDetail?.total_amount) + 50}</h4>
                      </div>
                    </div>
                    <div className={styles.dvforflex}>
                      <div className="two-stuff">
                        <div className={styles.fordvtext}>
                          <h5>Order Status :</h5>
                        </div>
                      </div>
                      <div className={styles.forprice}>
                        <h4>{modalDetail?.order_status}</h4>
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
                  <span className={styles.modalId}>#{modalDetail?.id}</span>
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

export default withAuth(MyOrdersScreen);
