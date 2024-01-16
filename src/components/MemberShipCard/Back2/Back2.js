import React, { useEffect, useState } from "react";
import styles from "../Back2/Back2.module.css";
import MemberButton from "../../MemberButton/MemberButton";
import { MemberShipCard } from "../../../Service/MemberShipService";
import { useDispatch } from "react-redux";
import { Skeleton } from "antd";
import { useRouter } from "next/router";
const Back2 = () => {

  const [member, setMember] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(MemberShipCard(setLoading, setMember, dispatch));
  }, []);
  const memberCard = member?.[1];
  const words = memberCard?.description?.split(".");
  const list = words;
  const router = useRouter();
  const getId = (slug) => {

    router.push({
      pathname: "checkout-member",
      query: { id: slug },
    });
  };
  return (
    <>
      <div className={styles.flipcardfront}>
        <div>
          <div className={`${styles.cardBody} card-body`}>
            <div className={styles.label}>Most Popular</div>
            <h6 className={`${styles.carTitle}`}>{memberCard?.name}</h6>
            <hr className="m-0" />
            <h6 className={`${styles.SubTitle}`}>
              <sup className={styles.card3SmText}>$</sup>{" "}
              <span className={styles.BigText}> {memberCard?.price && memberCard.price * 12}</span> /Yr
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
              {/* <li>
              Physician availability after hours for urgent matters
              </li>
              <li>12% discount on all additional services
Basic annual labs
                EKG yearly</li>
              <li>
                Flu test/COVID tests/strep test q 3 months as indicated
                Urine Analysis
              </li>
              <li>HbA1C in-house check q 3 months</li> */}
            </ul>

            
 
              <MemberButton label="Join Now" 
              className={styles.lightBtn}
              onClick={() => getId(memberCard?.id)}
              />
          </div>
        </div>
      </div>
    </>
  );
};

export default Back2;
