import React, { useCallback, useEffect, useState } from "react";
import styles from "../MyCart/MyCart.module.css";
import { MdOutlineClose } from "react-icons/md";
import Link from "next/link";
import CommanButton from "../../components/CommanButton/CommanButton";
import { useDispatch, useSelector } from "react-redux";
import {
  AddToCartListHandler,
  RemovedAllHandler,
  RemovedToCartHandler,
} from "../../Service/CartService";
import { Skeleton } from "antd";
import { useRouter } from "next/router";
const MyCart = () => {
  const     router = useRouter()
  // const Data = [
  //   {
  //     id: 1,
  //     sNo: "01",
  //     productName: "Lorem ipsum Dolor",
  //     productImage: "./images/modalproduct.png",
  //     unitPrice: "$158.07 ",
  //     qty: "In Stock",
  //     subTotal: "$158.07",
  //   },

  //   {
  //     id: 2,
  //     sNo: "02",
  //     productName: "Lorem ipsum Dolor",
  //     productImage: "./images/modalproduct.png",
  //     unitPrice: "$158.07 ",
  //     qty: "In Stock",
  //     subTotal: "$158.07",
  //   },

  //   {
  //     id: 3,
  //     sNo: "03",
  //     productName: "Lorem ipsum Dolor",
  //     productImage: "./images/modalproduct.png",
  //     unitPrice: "$158.07 ",
  //     qty: "In Stock",
  //     subTotal: "$158.07",
  //   },
  //   {
  //     id: 4,
  //     sNo: "04",
  //     productName: "Lorem ipsum Dolor",
  //     productImage: "./images/modalproduct.png",
  //     unitPrice: "$158.07 ",
  //     qty: "In Stock",
  //     subTotal: "$158.07",
  //   },
  // ];
  const token = useSelector((state) => state?.authSlice?.authToken);
  const dispatch = useDispatch();
  const [cartList, setAddCartList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(AddToCartListHandler(token, setAddCartList, setLoading, dispatch));
  }, [ AddToCartListHandler]);

  const handleRemovedById = (slug) => {
    // e.preventDefault()

    if (slug) {
      dispatch(RemovedToCartHandler(slug, token, setLoading, setAddCartList,router));
      // dispatch(
      //   AddToCartListHandler(token, setAddCartList, setLoading, dispatch)
      // );
      console.log(slug,'useRouter');
      // router.reload();
    }
  };

  const handleClearAll = () => {
    dispatch(RemovedAllHandler(token, setLoading));
    router.reload();
    setAddCartList([]);
  };

  console.log(cartList, "cartList");

  return (
    <>
      <div className="container-fluid p-0">
        <div className={styles.ProfileTopSection}>
          <div className={styles.Title}>
            <h2>My Cart</h2>
          </div>
        </div>

        <div className={`${styles.AppointmentContainer} container`}>
          <div className={styles.bodyTable}>
            <table className="table" id={styles.tableOuterBody}>
              <thead>
                <tr className={`${styles.thead}`}>
                  <th scope="col" className={styles.tHead}>
                    P.Name
                  </th>
                  <th scope="col" className={styles.tHead}>
                    Product Name
                  </th>
                  <th scope="col" className={styles.tHead}>
                    UNIT PRICE
                  </th>
                  <th scope="col" className={styles.tHead}>
                    QUANTITY
                  </th>
                  <th scope="col" className={styles.tHead}>
                    SUB TOTAL
                  </th>

                  <th scope="col" className={styles.tHead}></th>
                </tr>
              </thead>
              {!loading ? (
                <>
                  {cartList  ? (
                    cartList.map((item, i) => (
                      <tbody key={i}>
                        <tr>
                          <td className={styles.tData}>
                            {item?.product?.title}
                          </td>
                          <td className={styles.tDataImage}>
                            <img
                              className="w-25"
                              src={item?.product?.thumbnail_url}
                              alt="image"
                            />
                            {item?.title}
                          </td>
                          <td className={styles.tData}>{item?.price}</td>
                          <td className={styles.tData}>{item?.qty}</td>
                          <td className={styles.tData}>{item?.sub_total}</td>
                          <td
                            className={styles.dataCross}
                            onClick={() => handleRemovedById(item?.id)}
                          >
                            <Link href="">
                              <MdOutlineClose className={styles.crossIcon} />
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    ))
                  ) : (
                    <tbody>
                      <tr className="text-center">
                        <td colSpan="6 ">Product not added</td>
                      </tr>
                    </tbody>
                  )}
                </>
              ) : (
                <tbody>
                  <tr>
                    <td colSpan="6">
                      <Skeleton active loading={cartList} />
                    </td>
                  </tr>
                </tbody>
              )}
            </table>

            <div>
              <div className="row">
                <div className="col-lg-6">
                  <div className={`${styles.inputGrop} input-group mb-3`}>
                    <input
                      type="text"
                      className={` ${styles.inputField} form-control`}
                      placeholder="Enter Promo Code"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <span className={`${styles.applyBtn}`} id="basic-addon2">
                      Apply
                    </span>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-lg-8">
                      {" "}
                      <span className={styles.subTotal}>Total</span>
                    </div>
                    <div className="col-lg-4">
                      {" "}
                      <span className={styles.subPrice}>$ 700.15</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="float-start py-3" id={styles.payment}>
            <CommanButton label="ClearList" onClick={handleClearAll} />
          </div>
          <div className="float-end py-3" id={styles.payment}>
            <Link href="/checkout-details">
              <CommanButton
                label="Proceed to Payment"
                className={styles.p_payment}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCart;
