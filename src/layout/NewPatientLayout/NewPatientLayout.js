import React, { useEffect, useState } from "react";
// React Calender
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
//css
import styles from "../NewPatientLayout/NewPatientLayout.module.css";
import TopLayout from "../../components/TopLayout/TopLayout";
import TimeButton from "../../components/TimeButton/TimeButton";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Slots } from "../../Service/ServiceProviders";
import { setAppointmentDate } from "../../Redux/Appoinment/appointDate";
import { setAppointmentDetails } from "../../Redux/Appoinment/appointmentDetails";
const NewPatientLayout = ({ children, heading }) => {
  const [date, setDate] = useState(new Date("2024-01-02"));
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(false);
  const [getVariations, setVariations] = useState([]);
  const dispatch = useDispatch();
  const router = useRouter();
  const slug = router.query?.docId || router.query?.service;
  const token = useSelector((state) => state?.authSlice?.authToken);
  //🤞Date Formatting 'YYYY-MM-DD' format
  const formatDate = (date) => {
    var year = date.getFullYear();
    var month = ("0" + (date.getMonth() + 1)).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);
    return year + "-" + month + "-" + day;
  };
  //🤞Slots Clicked Function
  const variationClick = (value) => {
    if (getVariations.includes(value)) {
      const removal = getVariations.filter((varr) => varr !== value);

      setVariations(removal);
      dispatch(setAppointmentDetails(value));
    } else {
      setVariations([...getVariations, value]);
    }
  };
  const Dates = useSelector((state) => state?.currentDate?.currentDate);
  //🤞Date Select set Redux
  const dateSelectHandler = (date) => {
    // console.log(selectedDate, "selectedDate");
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);

    dispatch(Slots(slug, formattedDate, token, setLoading, setSlots));
    setDate(date);
    dispatch(setAppointmentDate(formatDate(date)));
  };
  console.log(slots,"selectedDate  ");
  //Slots Api
  // useEffect(
  //   () => {
  //     dispatch(Slots(slug, Dates, token, setLoading, setSlots));
  //   },
  //   [slug, token],
  //   slots
  // );
  // console.log(selectedDate, "selectedDate");
  const tileContent = ({ date, view }) => {
    if (view === "month" && date.getDate() === currentDate.getDate()) {
      return <span className="current-date-marker"></span>;
    }
    return null;
  };

  const currentDate = new Date();
  const activeStartDate = new Date(2024, 0);
  console.log(slots, "slots");
  return (
    <>
      <section>
        <TopLayout
          Heading={heading}
          descriptions=" Sed ut perspiciatis unde omnis iste natus error sit
         voluptatem accusantium doloremque  laudantium, totam
         rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi  architecto beatae vitae dicta sunt explicabo. Nemo enim
         ipsam voluptatem quia  voluptas sit aspernatur aut
         odit aut fugit, sed quia consequuntur."
          image="../images/new/appointments.webp"
        />

        <div className="container py-5">
          <div className="row">
            <div className="col-lg-8">{children}</div>
            <div className="col-lg-4">
              <span className={styles.selectDate}>
                
                Select Date and Get Available Slots
              </span>

              <div className="calendar-container">
                <Calendar
                  onChange={dateSelectHandler}
                  value={date}
                  selectRange={false}
                  minDate={currentDate}
                  tileContent={tileContent}
                  // activeStartDate={activeStartDate}
                />
              </div>

              <div className="row" id={styles.availableTime}>
                {slots && slots?.length > 0 ? (
                  <>
                    {!loading ? (
                      <>
                        <span className="aTime">Available slots please select</span>
                        { slots.map((item) => {
                          const selected = getVariations?.includes(item);
                          return (
                            <div className="col-lg-6" key={item?.id}>
                              <div id={styles.miniCard}>
                                <TimeButton
                                  from={item.from}
                                  to={item.to}
                                  day={item?.day}
                                  checked={selected}
                                  onClick={() => variationClick(item)}
                                  className={styles.btn}
                                />
                                {/* <TimeButton
                                  style={{
                                    backgroundColor: `${
                                      selected ? "#1c3247" : "#ffffff"
                                    }`,
                                    color: `${selected ? "#fff" : "#000"}`,
                                    border: `${
                                      selected
                                        ? "1px solid #1c3247"
                                        : "1px solid #1c3247"
                                    }`,
                                  }}
                                  onClick={() => variationClick(item)}
                                  from={item.from}
                                  to={item.to}
                                  className={styles.btn}
                                  day={item?.day}
                                  checked={selected}
                                /> */}
                              </div>
                            </div>
                          );
                        })}
                      </>
                    ) : (
                      <div className="text-center py-5">
                        <TimeButton
                          from=""
                          to="Waiting"
                          day=''

                          className={styles.notAvailable}
                        />
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center">
                    <TimeButton
                      from="No Slots"
                      to="not available"
                      day={""}
                      className={styles.notAvailable}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewPatientLayout;
