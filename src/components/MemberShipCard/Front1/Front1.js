import React, { useEffect, useState } from "react";
import styles from "../Front1/Front1.module.css";
import MemberButton from "../../MemberButton/MemberButton";
import { MemberShipCard } from "../../../Service/MemberShipService";
import { useDispatch, useSelector } from "react-redux";
import { Skeleton } from "antd";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
const Front1 = ({ className }) => {
  const [member, setMember] = useState([]);
  const [loading, setLoading] = useState(false);
  const [memberOne, setMemberOne] = useState([]);
  const dispatch = useDispatch();
  const router = useRouter();

  const memberCard = member?.filter(
    (foo) => foo.type === "monthly" && foo.name === "Focused"
  );
  const mem = memberCard?.[0];
  const words = mem?.description?.split(".");
  const list = words;
  const Istoken = useSelector((state) => state?.authSlice?.authToken);
  const getId = (slug) => {
    if (Istoken) {
      router.push({
        pathname: "checkout-member",
        query: { id: slug },
      });
    } else {
      toast.info("Please Login to buy membership!");
    }
  };

  useEffect(() => {
    dispatch(MemberShipCard(setLoading, setMember, dispatch));
  }, []);

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
                      <sup className={styles.card3SmText}>$</sup>
                      <span className={styles.BigText}>
                        {mem?.price && mem.price}
                      </span>
                      /{mem?.type}
                    </h6>

                    <ul className={styles.pricingListOverFlow}>
                      {!loading ? (
                        <>
                          {list && list.length > 0 ? (
                            <>
                              {list.map((memList, i) => (
                                <li key={i}>
                                  {memList.split(",").map((word, j) => (
                                    <span key={j}>{word.trim()}</span>
                                  ))}
                                </li>
                              ))}
                            </>
                          ) : (
                            <span className={styles.card3SmText}>Data not available</span>

                          )}
                        </>
                      ) : (
                        <>
                          <Skeleton />
                        </>
                      )}

                    </ul>

                    <div>
                      <MemberButton
                        label="BUY NOW"
                        onClick={() => getId(mem?.id)}
                        className={className}
                      />
                    </div>
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

export default Front1;
