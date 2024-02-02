import React, { useEffect, useState } from "react";
import styles from "../Back3/Back3.module.css";
import MemberButton from "../../MemberButton/MemberButton";
import { MemberShipCard } from "../../../Service/MemberShipService";
import { useDispatch, useSelector } from "react-redux";
import { Skeleton } from "antd";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
const Back3 = () => {
  const [member, setMember] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(MemberShipCard(setLoading, setMember, dispatch));
  }, []);
  const memberCard = member?.filter(
    (foo) => foo.type === "yearly" && foo.name === "Premium Plus"
  );

  const mem = memberCard?.[0];
  console.log(mem,"memmem");
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
            <h6 className={`${styles.carTitle}`}>{mem?.name}</h6>
            <hr />
            <h6 className={`${styles.SubTitle}`}>
              <sup className={styles.card3SmText}>$</sup>{" "}
              <span className={styles.BigText}>        {mem?.price && mem.price}</span> /{mem?.type}
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
              <li>insurance (coverage dependent on carrier)</li>
              <li>EKG yearly</li>
              <li>Flu test/COVID tests/strep test q 3 months as indicated</li>
              <li>Urine Analysis</li>
              <li>HbA1C in-house check q 3 months</li>
              <li>Home visits per patient need/request</li>
              <li>
                Hospital visits (this cannot entail direct medical supervision)
              </li>
              <li>
                Minor skin procedures, trigger point injections and large joint
                injections
              </li>
              <li>Pap smear+ HPV testing q 5 years</li>
            </ul>

            
              <MemberButton label="BUY NOW" onClick={() => getId(mem?.id)} className={styles.lightBtn} />
         
          </div>
        </div>
      </div>
    </>
  );
};

export default Back3;
