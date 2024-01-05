import React, { useEffect, useState } from "react";
import styles from "../Front1/Front1.module.css";
import MemberButton from "../../MemberButton/MemberButton";
import { MemberShipCard } from "../../../Service/MemberShipService";
import { useDispatch } from "react-redux";
import { Skeleton } from "antd";
const Front1 = () => {
  const [member, setMember] = useState([]);
  const [loading, setLoading] = useState(false);
  const [memberOne, setMemberOne] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(MemberShipCard(setLoading, setMember, dispatch));
  }, []);
  const memberCard = member?.[0];
  const words = memberCard?.description?.split(".");
  const list = words;
  const month = "month";
  const getId = (mem) => {
    setMemberOne({
      ...mem,month:month,
    })
  };
  console.log(memberOne, "memberOne");
  return (
    <>
      <div className={styles.flipcardfront} >
        <div>
          <div className={`${styles.cardBody} card-body`}>
            <h6 className={`${styles.carTitle}`}>{memberCard?.name}</h6>
            <hr />
            <h6 className={`${styles.SubTitle}`}>
              <sup className={styles.card3SmText}>$</sup>
              <span className={styles.BigText}>
                {memberCard?.price && memberCard.price}
              </span>
              /Mo
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

            <div className="">
              <MemberButton
                label="Join Now"
                onClick={() => getId(memberCard)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Front1;
