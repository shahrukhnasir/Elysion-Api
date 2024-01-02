import React, { useEffect, useState } from "react";
import styles from "../Front2/Front2.module.css";
import MemberButton from "../../MemberButton/MemberButton";
import { useDispatch } from "react-redux";
import { MemberShipCard } from "../../../Service/MemberShipService";
import { Skeleton } from "antd";
const Front2 = () => {
  const [member, setMember] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(MemberShipCard(setLoading, setMember, dispatch));
  }, []);
  const memberCard = member?.[1];
  const words = memberCard?.description?.split(".");
  const list = words;
  return (
    <>
      <div className={styles.flipcardfront}>
        <div>
          <div className={`${styles.cardBody} card-body`}>
          <div className={styles.labelBlue}>Most Popular</div>
            <h6 className={`${styles.carTitle}`}>{memberCard?.name}</h6>
            <hr className="m-0"/>
            <h6 className={`${styles.SubTitle}`}>
              <sup className={styles.card3SmText}>$</sup>{" "}
              <span className={styles.BigText}> {memberCard?.price && memberCard.price.substring(0, 3)}</span> /Mo
            </h6>

            <ul className={styles.pricingListOverFlow}>
            {!loading ? (
              <>
              {list?.slice(0, 6)?.map((memList, i) => (
                <li key={i}>
                  {memList.split(",").map((word, i) => (
                    <span key={i}>{word.trim()}</span>
                    ))}
                </li>
              ))}
              </>
            ) : (
              <>
                <Skeleton />
              </>
            )}
              {/* <li>Annual executive physical</li>
              <li>Tailored weight management</li>
              <li>
                Nutritional optimization for disease prevention and treatment
              </li>
              <li>Bioelectrical Impedance Analysis by InBody</li>
              <li>
                Scheduled office visits per individualized needs and health
                goals Telemedicine visits
              </li>
              <li>Access to direct text messaging with physician</li> */}
            </ul>

           
              <MemberButton label="Join Now" 
              className={styles.lightBtn}
              />
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Front2;
