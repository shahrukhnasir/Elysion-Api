import React, { useEffect, useState } from "react";
import styles from "../BlogDetail/styles.module.css";
import TopLayout2 from "../../components/TopLayout2/TopLayout2";
import Shadow from "../../components/Shadow/Shadow";
import { BlogDetailById } from "../../Service/BlogsService";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Skeleton from "react-loading-skeleton";
const BlogDetails = () => {
  const dispatch = useDispatch();
  const [blogDetail, setBlog] = useState([]);
  const [loading, setLoading] = useState(false);
  const { query } = useRouter();
  const  slug  = query?.slug;
  useEffect(() => {
    dispatch(BlogDetailById(slug, setBlog, setLoading));
  }, []);
  console.log(query?.slug, "asasadd");

  return (
    <>
      <section>
        {!loading ? (
          <TopLayout2
            Heading={!loading ?  blogDetail?.heading : <Skeleton/>}
            descriptions={blogDetail?.description}
            image={blogDetail?.image_url}
          />
        ) : (
          <Skeleton />
        )}

        <div className={`${styles.subContainer} container`}>
          <h1 className={styles.subHeading}>{blogDetail?.sub_heading}</h1>

          <div className={styles.setShaowRight}>
            <Shadow />
          </div>
          <div className="pb-5">
            <p className={styles.para}>{blogDetail?.sub_description}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
