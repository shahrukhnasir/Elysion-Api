import React, { useEffect, useState } from "react";
import ProfileLayout from "../../../layout/ProfileDashboard/ProfileLayout";
import styles from "../MyAppointments/MyAppointments.module.css";
import { MdOutlineClose } from "react-icons/md";
import Link from "next/link";
import CommonModal from "../../../components/CommanModal/CommanModal";
import { useDispatch, useSelector } from "react-redux";
import {
  AppointmentCancel,
  MyAppointment,
} from "../../../Service/PatientPortal";
const MyAppointments = () => {
  const [getCat, setCat] = useState("");
  const [loading, setLoading] = useState(false);
  const [getActiveCat, setActiveCat] = useState();
  const [data, setMyApp] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalDetail, setModalDetail] = useState("");
  const dispatch = useDispatch();
  const token = useSelector((state) => state?.authSlice?.authToken);
  const openModal = (item) => {
    setIsModalOpen(true);
    setModalDetail(item);
    console.log("Modal opened");
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const filterCatHandler = (e, item, id) => {
    e.preventDefault();
    setCat(item?.name);
    setActiveCat(id);
  };

  useEffect(() => {
    dispatch(MyAppointment(token, setLoading, setMyApp));
  }, [token, setMyApp]);

  //   MyAppointment cancled
  const hanldeCancel = (e, slug) => {
    e.preventDefault();
    console.log(slug, "Slug_I");
    dispatch(AppointmentCancel(slug, token, setLoading));
  };
  const filterCats = [
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "booked",
    },
    {
      id: 3,
      name: "canceled",
    },
    {
      id: 4,
      name: "waiting",
    },
  ];
  return (
    <>
      <ProfileLayout Heading="My Appointments" pageName="My Appointments">
        <div className={`${styles.TopCatSection} container`}>
          <div className="row">
            <div className="col-lg-4">
             
            </div>

            <div className="col-lg-8">
              <div id={styles.filterBox}>
                {filterCats?.map((item, i) => (
                  <button
                    className={
                      getActiveCat === i
                        ? styles.filterBtnActive
                        : styles.filterBtn
                    }
                    onClick={(e) => filterCatHandler(e, item, i)}
                  >
                    {item?.name}
                  </button>
                ))}
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
                  Fees
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
            {data.map((item, i) => {
              if (getCat == "" || getCat == "All") {
                return (
                  <tbody>
                    <tr key={i}>
                      <td className={styles.tData}>#{item.id}</td>
                      <td className={styles.tData}>{item.service?.name}</td>
                      <td className={styles.tData}>{item.total}</td>
                      <td className={styles.tData}>{item.date}</td>
                      <td className={styles.tDataBtn}>
                        <button className={styles.dataStatusBtn}>
                          {item.status}
                        </button>
                      </td>
                      <td className={styles.tDataBtn}>
                        <button
                          type="button"
                          id={styles.dataActionBtn}
                          onClick={() => openModal(item)}
                        >
                          View
                        </button>
                      </td>

                      <td className={styles.tDataBtn}>
                        {item.status == "canceled" ? (
                          ""
                        ) : (
                          <>
                            <button
                              id={styles.dataActionBtn}
                              href=""
                              onClick={(e) => hanldeCancel(e, item?.id)}
                            >
                              Cancel
                            </button>
                          </>
                        )}
                      </td>
                    </tr>
                  </tbody>
                );
              } else {
                if (item?.status == getCat) {
                  return (
                    <tbody>
                      <tr>
                        <td className={styles.tData}>#{item.id}</td>
                        <td className={styles.tData}>{item.service?.name}</td>
                        <td className={styles.tData}>{item.total}</td>
                        <td className={styles.tData}>{item.date}</td>
                        <td className={styles.tDataBtn}>
                          <button className={styles.dataStatusBtn}>
                            {item.status}
                          </button>
                        </td>
                        <td className={styles.tDataBtn}>
                          <button
                            type="button"
                            // onClick={openModal}
                            id={styles.dataActionBtn}
                            onClick={() => openModal(item)}
                          >
                            View
                          </button>
                        </td>

                        <td className={styles.tDataBtn}>
                          {item.status == "canceled" ? (
                            ""
                          ) : (
                            <>
                              <button
                                id={styles.dataActionBtn}
                                href=""
                                onClick={(e) => hanldeCancel(e, item?.id)}
                              >
                                Cancel
                              </button>
                            </>
                          )}
                        </td>
                      </tr>
                    </tbody>
                  );
                }
              }
            })}
          </table>
        </div>

        <CommonModal isOpen={isModalOpen} onClose={closeModal}>
          <div>
            <h6
              className={`${styles.modalTittle} modal-title`}
              id="staticBackdropLabel"
            >
              Appointment ID
              <span className={styles.modalId}>#{modalDetail?.id}</span>
            </h6>
            <div className="row">
              <div className="col-lg-3 p-0">
                <h6 className={styles.modalDetail}>Service</h6>
              </div>
              <div className="col-lg-4 p-0">
                <h6 className={styles.modalText}>
                  {modalDetail?.service?.name}
                </h6>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 p-0">
                <h6 className={styles.modalDetail}>Fees</h6>
              </div>
              <div className="col-lg-4 p-0">
                <h6 className={styles.modalText}>{modalDetail?.total}</h6>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 p-0">
                <h6 className={styles.modalDetail}>Status</h6>
              </div>
              <div className="col-lg-4 p-0">
                <h6>
                  <button className={styles.dataStatusBtn}>
                    {modalDetail?.status}
                  </button>
                </h6>
              </div>
            </div>

            <div className="">
              <h6 className={styles.modalId}>Appointment Detail</h6>
            </div>

            <div className={styles.modalDesc}>
              <p>{modalDetail?.service?.description}</p>
            </div>
          </div>
        </CommonModal>
      </ProfileLayout>
    </>
  );
};

export default MyAppointments;
