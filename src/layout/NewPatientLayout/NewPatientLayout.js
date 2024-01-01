import React, { useEffect, useState } from "react";
// React Calender
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
//css
import styles from "../NewPatientLayout/NewPatientLayout.module.css";
import CommanButton from "../../components/CommanButton/CommanButton";
import TopLayout from "../../components/TopLayout/TopLayout";
import { useDispatch, useSelector } from "react-redux";
import { Slots } from "../../Service/ServiceProviders";
import { useRouter } from "next/router";
import TimeButton from "../../components/TimeButton/TimeButton";
import Skeleton from "react-loading-skeleton";
const NewPatientLayout = ({ children, heading }) => {
  const [value, onChange] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const [getVariations, setVariations] = useState([]);
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState([]);
  const token = useSelector((state) => state?.authSlice?.authToken);
  const router = useRouter();
  const slug = router.query.docId;

  const TimeSelect = (value) => {
    console.log(value, "value");
    if (getVariations.includes(value)) {
      const removal = getVariations.filter((varr) => varr !== value);
      console.log(removal);
      setVariations(removal);
    } else {
      setVariations([...getVariations, value]);
    }
  };

  const dispacth = useDispatch();
  useEffect(() => {
    if (slug) {
      dispacth(Slots(slug, token, setLoading, setSlots));
    }
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
              <span className={styles.selectDate}>Select Date</span>

              <div className="calendar-container">
                <Calendar onChange={setDate} value={date} selectRange={false} />
              </div>
              <div className="row" id={styles.availableTime}>
                {slots.length > 0 ? (
                  <>
                    <span className={styles.aTime}>Available Time</span>

                    {slots?.map((item) => {
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
                              onClick={() => TimeSelect(item)}
                              from={item.from}
                              to={item.from}
                              day={item.day}
                              className={styles.btn}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </>
                ) : (
                  <TimeButton
                    from="No Slots"
                    style={{
                      backgroundColor: `${"#1c3247"}`,
                      color: `${"#ffff"}`,
                    }}
                    className={styles.btn}
                  />
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
