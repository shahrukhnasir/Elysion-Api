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
  const slug = router.query?.docId;
  const token = useSelector((state) => state?.authSlice?.authToken);

  //🤞Date Formatting 'YYYY-MM-DD' format
  var year = date.getFullYear();
  var month = ("0" + (date.getMonth() + 1)).slice(-2);
  var day = ("0" + date.getDate()).slice(-2);
  var formattedDate = year + "-" + month + "-" + day;

  //🤞Slots Clicked Function
  const variationClick = (value) => {
    console.log(value, "value");
    if (getVariations.includes(value)) {
      const removal = getVariations.filter((varr) => varr !== value);
      console.log(removal);
      setVariations(removal);
      dispatch(setAppointmentDetails(value));
    } else {
      setVariations([...getVariations, value]);
    }
  };
  //🤞Date Select set Redux

  const dateSeelectHandler = () =>{
    dispatch(setAppointmentDate(formattedDate));
  }



  //Slots Api
  useEffect(() => {
    dispatch(Slots(slug, token, setLoading, setSlots));
  }, [slug, token]);

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
              <span className={styles.selectDate} >
                Select Date As per Available Time
              </span>

              <div className="calendar-container">
                <Calendar onChange={setDate}  onClick={(e)=> dateSeelectHandler(e)} value={date} selectRange={false} />
              </div>
              <div className="row" id={styles.availableTime}>
                {slots && slots?.length > 0 ? (
                  <>
                    {!loading ? (
                      <div>
                        {slots.map((item) => {
                          const selected = getVariations?.includes(item);
                          return (
                            <div className="col-lg-6" key={item?.id}>
                              <div id={styles.miniCard}>
                                <TimeButton
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
                                  to={item.from}
                                  className={styles.btn}
                                  day={item?.day}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <>
                        <div className="text-center">
                          <TimeButton
                            style={{
                              backgroundColor: `${"#1c3247"}`,
                              color: `${"#fff"}`,
                            }}
                            from="Waiting"
                            to="..."
                            className={styles.btn}
                          />
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    <span className="text-center">
                      <TimeButton
                        style={{
                          backgroundColor: `${"#1c3247"}`,
                          color: `${"#fff"}`,
                        }}
                        from="No Slots"
                        to="Available"
                        className={styles.btn}
                       
                      />
                    </span>
                  </>
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
