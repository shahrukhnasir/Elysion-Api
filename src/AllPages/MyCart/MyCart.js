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
import {
  GuestCartListAllClear,
  GuestCartLists,
  GuestRemovedToCartItem,
} from "../../Service/GuestService";
import { setCartList } from "../../Redux/CartList/CartList";
const MyCart = () => {
  const router = useRouter();

  const token = useSelector((state) => state?.authSlice?.authToken);
  const dispatch = useDispatch();
  const [cartList, setAddCartList] = useState([]);
  // console.log(cartList,"lasdkaskj")
  const [loading, setLoading] = useState(false);
  const cart = useSelector((state) => state?.CartListSlice?.cart);
  console.log(cart,'cartcartcart');
  const session_id = useSelector((state) => state?.sessionSlice?.session);

  useEffect(()=>{
    dispatch(setCartList(cartList))
  },[cartList]);
  
  useEffect(() => {
    if (token) {
      dispatch(
        AddToCartListHandler(token, setLoading,setAddCartList, dispatch)
      );
    } else if (!token) {
      dispatch(setCartList(cartList))
      dispatch(
        GuestCartLists(session_id,setLoading,setAddCartList, dispatch)
      );
    }
  }, [session_id]);
  console.log(cartList?.length,"cartList");
  const handleRemovedById = (slug) => {
    if (token) {
      dispatch(
        RemovedToCartHandler(slug, token, setLoading, setAddCartList, router)
      );
      const updatedCartList = cartList.filter((item) => item.id !== slug);
      setAddCartList(updatedCartList);
    } else if (!token) {
      dispatch(
        GuestRemovedToCartItem(
          slug,
          session_id,
          setLoading,
          setAddCartList,
          router
        )
      );
      const updatedCartList = cartList.filter((item) => item.id !== slug);
      setAddCartList(updatedCartList);
    }
  };

  const handleClearAll = () => {
    if (token) {
      dispatch(RemovedAllHandler(token, setLoading));
      setAddCartList("");
    } else if (!token) {
      dispatch(GuestCartListAllClear(session_id));
      setAddCartList("");
    }
  };

  const total = () => {
    const totalSum = cartList.reduce((acc, item) => acc + item.sub_total, 0);
    return totalSum;
  };

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
              {!loading && cartList && cartList.length > 0 && (
                <tbody>
                  {cartList.map((item, i) => (
                    <>
                      <tr key={i}>
                        <td className={styles.tData}>{item?.product?.title}</td>
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
                    </>
                  ))}
                </tbody>
              )}
              {!loading && (!cartList || cartList.length === 0) && (
                <tbody>
                  <tr className="text-center">
                    <td colSpan="6" className={styles.tHead}>
                      Product not added
                    </td>
                  </tr>
                </tbody>
              )}
              {loading && (
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
                {cartList?.length > 0 ? (
                  <div className="col-lg-6">
                    <div className="row">
                      <div className="col-lg-8">
                        {" "}
                        <span className={styles.subTotal}>Total</span>
                      </div>
                      <div className="col-lg-4">
                        {" "}
                        <span className={styles.subPrice}>
                          $ {total(cartList)}
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          {cartList?.length > 0 ? (
            <>
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
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default MyCart;
