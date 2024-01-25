import React, { useEffect, useState } from "react";
import styles from "../Back2/Back2.module.css";
import MemberButton from "../../MemberButton/MemberButton";
import { MemberShipCard } from "../../../Service/MemberShipService";
import { useDispatch, useSelector } from "react-redux";
import { Skeleton } from "antd";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
const Back2 = () => {

  const [member, setMember] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(MemberShipCard(setLoading, setMember, dispatch));
  }, []);
  const memberCard = member?.filter(
    (foo) => foo.type === "yearly" && foo.name === "Premium"
  );

  const mem = memberCard?.[0];
  const words = mem?.description?.split(".");
  const list = words;
  const router = useRouter();
  const Istoken = useSelector((state) => state?.authSlice?.authToken);

  const getId = (slug) => {
    if (Istoken) {
      router.push({
        pathname: "checkout-member",
        query: { id: slug },
      });
    } else {
      Swal.fire({
        position: "center",
        icon: "info",
        title: "Please Login !",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <>
      <div className={styles.flipcardfront}>
        <div>
          <div className={`${styles.cardBody} card-body`}>
            <div className={styles.label}>Most Popular</div>
            <h6 className={`${styles.carTitle}`}>{mem?.name}</h6>
            <hr className="m-0" />
            <h6 className={`${styles.SubTitle}`}>
              <sup className={styles.card3SmText}>$</sup>{" "}
              <span className={styles.BigText}> {mem?.price && mem.price}</span> /{mem?.type}
            </h6>

            <ul className={styles.pricingListOverFlow}>
            {!loading ? (
              <>
              {list?.map((memList, i) => (
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

            
 
              <MemberButton label="BUY NOW" 
              className={styles.lightBtn}
              onClick={() => getId(mem?.id)}
              />
          </div>
        </div>
      </div>
    </>
  );
};

export default Back2;
