import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ServicesById } from "../../Service/HomePageService";
import { useDispatch, useSelector } from "react-redux";
import ServiceCardComman from "../ServiceCardComman/ServiceCardComman";
import CommanButton from "../CommanButton/CommanButton";
import TopLayout from "../TopLayout/TopLayout";
import styles from "../../ServicesPages/commanStyle.module.css";
import Link from "next/link";
import services from "../../ServicesPages/constant/serviceData";
import { Skeleton } from "antd";
import { getAllAServices } from "../../Redux/AllService/allServices";
const AllServices = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { query } = useRouter();
  const [service,setServiceDetails]= useState([])
  const slug = query?.pid;
  // const service = useSelector(
  //   (state) => state?.AllServiceSlice?.featuredProducts
  // );
  // useEffect(() => {
  //   dispatch(ServicesById( setServicesData,slug,setServiceDetails,setLoading));
  // }, [slug]);
  useEffect(() => {
    dispatch(ServicesById(slug,setServiceDetails));
  }, [slug]);
  console.log(service, 'aaa')
  return <>
      <div className="container-fluid p-0">

      {!loading ? (
                   <TopLayout
                   Heading={service?.name}
                   descriptions={service?.sub_heading}
                   image={service?.image_url}
                   // image="../images/addiction-Medicine.webp"
                 />
                  ) : (
                    <>
                      <Skeleton  loading={service} active paragraph={{ rows: 8 }}/>
                    </>
                  )}
    
       
        <div className="container">
          <div className="row">
            <div className="col-lg-6 py-3">

            {!loading ? (
                  <p className={styles.paragraph}>
                  {service?.description}
                  </p>
                  ) : (
                    <>
                      <Skeleton  loading={service} active paragraph={{ rows: 3 }}/>
                    </>
                  )}
              
             

              <div className="pt-2">
                <Link href="https://elysionhealth.md-hq.com/embedded/schedule.php">
                  <CommanButton label="Book Now" />
                </Link>
              </div>
            </div>
          </div>

          <hr />
        </div>

        {/* People also Search for */}
        <div className="container py-5">
          <h1 className={styles.details}>People also Search for</h1>
          <div className="row">
            {services?.map((item) => {
              return (
                <div className="col-lg-4">
                  <ServiceCardComman
                    link={item?.link}
                    Title={item?.Title}
                    Descriptions={item?.Desc}
                    className={styles.serviceCardCol}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
  
  
  
  
  </>;
};

export default AllServices;
