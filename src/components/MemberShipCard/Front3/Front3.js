import React, { useEffect, useState } from "react";
import styles from "../Front3/Front3.module.css";
import MemberButton from "../../MemberButton/MemberButton";
import { useDispatch, useSelector } from "react-redux";
import { MemberShipCard } from "../../../Service/MemberShipService";
import { Skeleton } from "antd";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
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
      toast.error("Please Login to buy membership!");
    }
  };
  return (
    <>
      <div className={styles.flipcardfront}>
        {!loading ? (
          <>
            {list && list.length > 0 ? (
              <>
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

              </>
            ) : (
              <>
                <div className={styles.dataNotFound}>


                  <img src="/images/No-data.svg" alt='' />
                </div>
              </>

            )}
          </>
        ) : (
          <>
          <div className={`${styles.cardBody} card-body`}>

              <Skeleton />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Front3;
