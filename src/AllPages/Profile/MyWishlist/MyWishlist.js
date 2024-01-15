import React, { useEffect, useState } from "react";
import ProfileLayout from "../../../layout/ProfileDashboard/ProfileLayout";
import styles from "../MyWishlist/MyWishlist.module.css";
import { MdOutlineClose } from "react-icons/md";
import Link from "next/link";
import { IoIosCall } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  AllRemovedWishListHandler,
  MyWishList,
  RemovedWishListHandler,
} from "../../../Service/PatientPortal";
import { useRouter } from "next/router";
import Skeleton from "react-loading-skeleton";
const MyWishlist = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [modalDetail, setModalDetail] = useState("");
  const [wishList, setWishList] = useState([]);
  const [loading, setLoading] = useState(false);
  const token = useSelector((state) => state?.authSlice?.authToken);
  const handleModal = (item) => {
    setShowModal(true);
    setModalDetail(item);
  };
  useEffect(() => {
    dispatch(MyWishList(token, setLoading, setWishList));
  }, []);

  const AddToCartHandler = (productId) => {
    router.push(`/shop/product/${productId}`);
  };

  {
  }
  const handleRemovedById = (slug) => {
    // console.log(slug,'slug');
    // return;
    if (slug) {
      dispatch(RemovedWishListHandler(slug, token, setLoading));
      const updatedWishList = wishList.filter((item) => item.id !== slug);
      setWishList(updatedWishList);
    }
  };

  const allClearhandler = (e) => {
    e.preventDefault();
    dispatch(AllRemovedWishListHandler(token, setLoading));
    setWishList([]);
  };
  return (
    <>
      <ProfileLayout Heading="My Appointments" pageName="My Appointments">
        <div className={`${styles.TopCatSection} container`}> </div>

        <div className={`${styles.AppointmentContainer} container`}>
          {wishList?.length > 0 ? (
            <>
            <table
              className="table table-responsive"
              id={styles.tableOuterBody}
            >
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
              {!loading ? (
                <>
                  {wishList?.map((item, i) => (
                    <tbody>
                      <tr key={`${i}`}>
                        <td className={styles.tData}>#{i + 1}</td>
                        <td className={styles.tData}>
                          <img
                            className={styles.prodcut_image}
                            src={item?.product?.thumbnail_url}
                            alt=""
                          />{" "}
                          {item.productName}
                        </td>
                        <td className={styles.tData}>
                          {item.product?.unit_price}
                        </td>
                        <td className={styles.tData}>{item?.product?.qty}</td>
                        <td className={styles.tDataBtn}>
                          <button
                            type="button"
                            onClick={() => AddToCartHandler(item?.product?.id)}
                            id={styles.dataActionBtn}
                          >
                            Add to Cart
                          </button>
                        </td>
                        <td>
                          <Link href="">
                            <MdOutlineClose
                              onClick={() => handleRemovedById(item?.id)}
                              className={styles.crossIcon}
                            />
                          </Link>{" "}
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </>
              ) : (
                <Skeleton />
              )}
             
            </table>
             <Link
             href=""
             className={styles.clearWishList}
             onClick={allClearhandler}
           >
             Clear Wishlist
           </Link>
           </>
          ) : (
            <div className={`${styles.tData} text-center`}>
              WishList is Empty
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

export default MyWishlist;
