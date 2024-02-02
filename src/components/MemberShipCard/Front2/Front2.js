import React, { useEffect, useState } from "react";
import styles from "../Front2/Front2.module.css";
import MemberButton from "../../MemberButton/MemberButton";
import { useDispatch, useSelector } from "react-redux";
import { MemberShipCard } from "../../../Service/MemberShipService";
import { Skeleton } from "antd";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
const Front2 = () => {
  const [member, setMember] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(MemberShipCard(setLoading, setMember, dispatch));
  }, []);
  const memberCard = member?.filter(
    (foo) => foo.type === "monthly" && foo.name === "Premium"
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
      toast.error("Please Login to buy membership!");
    }
  };
  return (
    <>
      <div className={styles.flipcardfront}>
        <div>
          <div className={`${styles.cardBody} card-body`}>
          <div className={styles.labelBlue}>Most Popular</div>
            <h6 className={`${styles.carTitle}`}>{mem?.name}</h6>
            <hr className="m-0"/>
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

export default Front2;
