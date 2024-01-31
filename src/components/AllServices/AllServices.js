import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { AllServiceCards, ServicesById } from "../../Service/HomePageService";
import { useDispatch, useSelector } from "react-redux";
import ServiceCardComman from "../ServiceCardComman/ServiceCardComman";
import CommanButton from "../CommanButton/CommanButton";
import TopLayout from "../TopLayout/TopLayout";
import styles from "../../ServicesPages/commanStyle.module.css";
import Link from "next/link";
import services from "../../ServicesPages/constant/serviceData";
import { Skeleton } from "antd";
import Swal from "sweetalert2";
const AllServices = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { query } = useRouter();
  const [service, setServiceDetails] = useState();
  const [services, setServicesData] = useState([]);
  const slug = query?.serviceId;
  useEffect(() => {
    dispatch(ServicesById(slug, setServiceDetails, setLoading));
    dispatch(AllServiceCards(setLoading, setServicesData, dispatch));
  }, [slug]);
  const token = useSelector((state) => state?.authSlice?.authToken);

  console.log(services, "servicesservices");
  const loginHanlder = (e) => {
    e.preventDefault();

    Swal.fire({
      position: "center",
      icon: "info",
      title: "please login first",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <>
      <div className="container-fluid p-0">
        {loading ? (
          <>
            <div className="container pt-5">
              <Skeleton loading={loading} active paragraph={{ rows: 8 }} />
            </div>
          </>
        ) : (
          <>
            {!loading ? (
              <TopLayout
                Heading={service?.name}
                descriptions={service?.sub_heading}
                image={service?.image_url}
                // image="../images/addiction-Medicine.webp"
              />
            ) : (
              <>
                <Skeleton loading={loading} active paragraph={{ rows: 8 }} />
              </>
            )}

            <div className="container">
              <div className="row">
                <div className="col-lg-6 py-3">
                  {!loading ? (
                    <p className={styles.paragraph}>{service?.description}</p>
                  ) : (
                    <>
                      <Skeleton
                        loading={loading}
                        active
                        paragraph={{ rows: 3 }}
                      />
                    </>
                  )}
                  {token ? (
                    <div className="pt-2">
                      <Link href="/book-on-appointment">
                        <CommanButton label="Book Now" />
                      </Link>
                    </div>
                  ) : (
                    <div className="pt-2">
                      <Link href="">
                        <CommanButton
                          label="Book Now"
                          onClick={(e) => loginHanlder(e)}
                        />
                      </Link>
                    </div>
                  )}
                </div>
              </div>

              <hr />
            </div>
          </>
        )}

        {/* People also Search for */}
        <div className="container py-5">
          <h1 className={styles.details}>People also Search for</h1>
          <div className="row">
            {services
              ?.slice(0) // Create a shallow copy of the array
              .sort(() => Math.random() - 0.5) // Randomize the order of elements
              .slice(0, 3) 
              .map((item, i) => {
                return (
                  <div className="col-lg-4" key={i}>
                    <ServiceCardComman
                      Title={item?.name}
                      Descriptions={item?.description}
                      className={styles.serviceCardCol}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllServices;
