import React from "react";
import ProfileLayout from "../../../layout/ProfileDashboard/ProfileLayout";
import styles from "../PaymentTransactions/PaymentTransactions.module.css";
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
    return (
        <>
            <ProfileLayout
                Heading="Payment & Transactions"
                pageName="Payment & Transactions"
            >
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
                                            <p className={styles.cardText}>Edit Display Image</p>
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
                        {Data.map((item) => {
                            return (
                                <tbody>
                                    <tr>
                                        <td className={styles.tData}>{item.sNo}</td>
                                        <td className={styles.tData}>{item.transactionID}</td>
                                        <td className={styles.tData}>{item.orderType}</td>
                                        <td className={styles.tData}>{item.date}</td>
                                        <td className={styles.tData}>{item.amount}</td>
                                        <td className={styles.tData}>{item.transactionStatus}</td>
                                        <td className={styles.aData}>{item.action}</td>
                                    </tr>
                                </tbody>
                            );
                        })}
                    </table>

                    <div className={styles.paginationSec}>
                    <nav aria-label="Page navigation example ">
                        <ul className={`pagination`}>
                            <li className="page-item">
                                <a className={`${styles.pageLink} page-link`} href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            <li className="page-item"><a className={`${styles.pageLink} page-link`} href="#">1</a></li>
                            <li className="page-item"><a className={`${styles.pageLink} page-link`} href="#">2</a></li>
                            <li className="page-item"><a className={`${styles.pageLink} page-link`} href="#">3</a></li>
                            <li className="page-item">
                                <a className={`${styles.pageLink} page-link`} href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                </div>

            
            </ProfileLayout>
        </>
    );
};
export default PaymentTransactions;
