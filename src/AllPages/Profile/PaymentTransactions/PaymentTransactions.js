import React, { useEffect, useState } from "react";
import ProfileLayout from "../../../layout/ProfileDashboard/ProfileLayout";
import styles from "../PaymentTransactions/PaymentTransactions.module.css";
import { PaymentTransaction } from "../../../Service/PatientPortal";
import { useDispatch, useSelector } from "react-redux";
import { Skeleton } from "antd";
import withAuth from "../../../pages/utils/withAuth";
const PaymentTransactions = () => {
  const Data = [
    {
      id: 1,
      sNo: "012",
      transactionID: "23456789",
      orderType: "Product",
      date: "23-Mar-23",
      amount: "150.0",
      transactionStatus: "Transaction Successful",
      action: "Download PDF",
    },
    {
      id: 2,
      sNo: "012",
      transactionID: "23456789",
      orderType: "Service",
      date: "23-Mar-23",
      amount: "150.0",
      transactionStatus: "Transaction Successful",
      action: "Download PDF",
    },
    {
      id: 3,
      sNo: "012",
      transactionID: "23456789",
      orderType: "Product",
      date: "23-Mar-23",
      amount: "150.0",
      transactionStatus: "Transaction Successful",
      action: "Download PDF",
    },
    {
      id: 4,
      sNo: "012",
      transactionID: "23456789",
      orderType: "Membership",
      date: "23-Mar-23",
      amount: "150.0",
      transactionStatus: "Transaction Successful",
      action: "Download PDF",
    },
    {
      id: 5,
      sNo: "012",
      transactionID: "23456789",
      orderType: "Service",
      date: "23-Mar-23",
      amount: "150.0",
      transactionStatus: "Transaction Successful",
      action: "Download PDF",
    },
  ];
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [transsaction, setTransactions] = useState([]);
  const token = useSelector((state) => state?.authSlice?.authToken);

  useEffect(() => {
    dispatch(PaymentTransaction(token, setLoading, setTransactions));
  }, []);

  return (
    <>
      <ProfileLayout
        Heading="Payment & Transactions"
        pageName="Payment & Transactions"
      >
        <div className={`${styles.TopCatSection} container`}></div>

        <div className={`${styles.AppointmentContainer} container`}>
          {transsaction && transsaction.length > 0 ? (
            <table
              className="table table-responsive"
              id={styles.tableOuterBody}
            >
              <thead className={`${styles.TSection}`}>
                <tr>
                  <th scope="col" className={styles.tHead}>
                    S no
                  </th>
                  <th scope="col" className={styles.tHead}>
                    Transaction ID
                  </th>
                  <th scope="col" className={styles.tHead}>
                    Order Type
                  </th>
                  <th scope="col" className={styles.tHead}>
                    DATE
                  </th>
                  <th scope="col" className={styles.tHead}>
                    Amount
                  </th>
                  <th scope="col" className={styles.tHead}>
                    Transaction Status
                  </th>
                  <th scope="col" className={styles.tHead}>
                    ACTION
                  </th>
                </tr>
              </thead>
              {!loading ? (
                <>
                  <>
                    {transsaction?.map((item, i) => {
                      return (
                        <tbody>
                          <tr>
                            <td className={styles.tData}>#{i + 1}</td>
                            <td className={styles.tData}>{item.id}</td>
                            <td className={styles.tData}>{item.type}</td>
                            <td className={styles.tData}>
                              {" "}
                              {new Date(item.created_at).toLocaleDateString()}
                            </td>
                            <td className={styles.tData}>
                              ${item.total_amount}
                            </td>
                            <td className={styles.tData}>{item.status}</td>
                            <td className={styles.aData}>Download PDF</td>
                          </tr>
                        </tbody>
                      );
                    })}
                  </>
                </>
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
              Transactions is Empty
            </div>
          )}
          {/* <div className={styles.paginationSec}>
            <nav aria-label="Page navigation example ">
              <ul className={`pagination`}>
                <li className="page-item">
                  <a
                    className={`${styles.pageLink} page-link`}
                    href="#"
                    aria-label="Previous"
                  >
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className={`${styles.pageLink} page-link`} href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className={`${styles.pageLink} page-link`} href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className={`${styles.pageLink} page-link`} href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className={`${styles.pageLink} page-link`}
                    href="#"
                    aria-label="Next"
                  >
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div> */}
        </div>
      </ProfileLayout>
    </>
  );
};
export default withAuth(PaymentTransactions);
