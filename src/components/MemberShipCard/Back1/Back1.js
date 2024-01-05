import React, { useEffect, useState } from "react";
import styles from "../Back1/Back1.module.css";
import MemberButton from "../../MemberButton/MemberButton";
import { Skeleton } from "antd";
import { useDispatch } from "react-redux";
import { MemberShipCard } from "../../../Service/MemberShipService";
const Back1 = () => {
  const [member, setMember] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(MemberShipCard(setLoading, setMember, dispatch));
  }, []);
  const memberCard = member?.[0];
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
              <span className={styles.BigText}>   {memberCard?.price && memberCard.price * 12}</span> /Yr
            </h6>

            <ul className={styles.pricingListOverFlow}>
            {!loading ? (
              <>
              {list?.slice(6, 20)?.map((memList, i) => (
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
              <li>Annual executive physical</li>
              <li>Tailored weight management</li>
              <li>
              Physician availability after hours for urgent matters
              </li>
              <li>There are no copays for office visits</li>
              <li>
              Labs are not a part of this package and can be billed through insurance
              </li>
             
            </ul>

     
              <MemberButton label="Join Now"
              className={styles.lightBtn} />
      
          </div>
        </div>
      </div>
    </>
  );
};

export default Back1;
