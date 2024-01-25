import React, { useEffect, useState } from "react";
import styles from "../Front1/Front1.module.css";
import MemberButton from "../../MemberButton/MemberButton";
import { MemberShipCard } from "../../../Service/MemberShipService";
import { useDispatch, useSelector } from "react-redux";
import { Skeleton } from "antd";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
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
      Swal.fire({
        position: "center",
        icon: "info",
        title: "Please Login first!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  useEffect(() => {
    dispatch(MemberShipCard(setLoading, setMember, dispatch));
  }, []);

  return (
    <>
      <div className={styles.flipcardfront}>
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
      </div>
    </>
  );
};

export default Front1;
