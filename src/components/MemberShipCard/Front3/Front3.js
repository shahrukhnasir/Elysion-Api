import React, { useEffect, useState } from "react";
import styles from "../Front3/Front3.module.css";
import MemberButton from "../../MemberButton/MemberButton";
import { useDispatch, useSelector } from "react-redux";
import { MemberShipCard } from "../../../Service/MemberShipService";
import { Skeleton } from "antd";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
const Front3 = () => {
  const [member, setMember] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(MemberShipCard(setLoading, setMember, dispatch));
  }, []);

  const memberCard = member?.filter(
    (foo) => foo.type === "monthly" && foo.name === "Premium Plus"
  );
  const mem = memberCard?.[0];
  const words = mem?.description?.split(".");
  console.log(memberCard, "mem");
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
        title: "Please login first!",
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
            <h6 className={`${styles.carTitle}`}>{mem?.name}</h6>
            <hr />
            <h6 className={`${styles.SubTitle}`}>
              <sup className={styles.card3SmText}>$</sup>{" "}
              <span className={styles.BigText}> {mem?.price && mem.price}</span>{" "}
              /{mem?.type}
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

            <MemberButton label="BUY NOW" onClick={() => getId(mem?.id)} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Front3;
