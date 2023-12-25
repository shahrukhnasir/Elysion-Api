import React, { useEffect, useState } from "react";
import styles from "../Front3/Front3.module.css";
import MemberButton from "../../MemberButton/MemberButton";
import { useDispatch } from "react-redux";
import { MemberShipCard } from "../../../Service/MemberShipService";
import { Skeleton } from "antd";
const Front3 = () => {
  const [member, setMember] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(MemberShipCard(setLoading, setMember, dispatch));
  }, []);
  const memberCard = member?.[2];
  const words = memberCard?.description?.split(".");
  const list = words;
  return (
    <>
      <div className={styles.flipcardfront}>
        <div>
          <div className={`${styles.cardBody} card-body`}>
            <h6 className={`${styles.carTitle}`}>{memberCard?.name}</h6>
            <hr />
            <h6 className={`${styles.SubTitle}`}>
              <sup className={styles.card3SmText}>$</sup>{" "}
              <span className={styles.BigText}>        {memberCard?.price && memberCard.price.substring(0, 3)}</span> /Mo
            </h6>

            <ul className={styles.pricingListOverFlow}>
            {!loading ? (
                <>
                  {list?.slice(0, 12)?.map((memList, i) => (
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
              <li>Nutritional optimization for disease prevention and treatment</li>
              <li>Bioelectrical Impedance Analysis by InBody</li>
              <li> Scheduled office visits per individualized needs and health goals</li>
              <li>Telemedicine visits</li>
              <li>Access to direct text messaging with physician</li>
              <li>Physician availability after hours for urgent matters</li>
              <li>Telemedicine visits</li>
              <li>
              15% discount on all additional services
              </li>
              <li>Basic annual labs</li>
              <li>
              Any additional labs requested will incur a discounted charge or can be billed to 
              </li> */}
          
            </ul>

       
              <MemberButton label="Join Now" />
       
          </div>
        </div>
      </div>
    </>
  );
};

export default Front3;
