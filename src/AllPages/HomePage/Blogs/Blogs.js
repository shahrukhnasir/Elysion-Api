import React, { useEffect, useState } from "react";
import styles from "../Blogs/Blogs.module.css";
import CommanButton from "../../../components/CommanButton/CommanButton";
import Link from "next/link";
import BlogCardComman from "../../../components/BlogCardComman/BlogCardComman";
import { BlogsCard } from "../../../Service/BlogsService";
import { BlogsContent } from "../../../Service/HomePageService";
import { useDispatch } from "react-redux";

const Blogs = () => {
  const Blog = [
    {
      id: 1,
      image: "/images/new/blog-wellness-model.webp",
      title: "The Wellness model of healthcare",
      desc: "Approximately 3% of healthcare dollars are directed toward public health and prevention. ",
    },
    {
      id: 2,
      image: "/images/new/blog-Elysion-origins.webp",
      title: "Elysion Origins of the Name",
      desc: "Elysion is an unusual name. It is a Greek word that has transformed over time to mean ",
    },
    {
      id: 3,
      image: "/images/new/blog-menopause.webp",
      title: "Thriving in Menopause",
      desc: "Women are the more complex gender of the species. We have become professional multitaskers.",
    },
  ];
  const dispatch = useDispatch();
  const [blogs, setBlog] = useState([]);
  const [loading, setLoading] = useState(false);
  const [blogHeading, setBlogHeading] = useState([]);
  const [blogDes, setBlogDes] = useState([]);
  const [blogImage, setBlogImage] = useState([]);

  useEffect(() => {
    dispatch(BlogsCard(setLoading, setBlog));
    dispatch(
      BlogsContent(setLoading, setBlogHeading, setBlogDes, setBlogImage)
    );
  }, []);

  return (
    <div className="container-fluid" id={styles.blogContainer}>
      <div className={`${styles.innerContainer} container`}>
        <h1
          className={`${styles.mainHeading}`}
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          {setBlogHeading}
        </h1>

        <div className="row ">
          <div className="col-lg-6">
            <p
              className={`${styles.mainTitle}`}
              data-aos="fade-down"
              data-
              data-aos-duration="2000"
            >
              {setBlogDes}
            </p>
          </div>
          <div className="col-lg-6">
            <div
              className={`${styles.viewBtn}`}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <Link href="/blogs">
                <CommanButton label="View All" />
              </Link>
            </div>
          </div>
        </div>

        <div className="container pb-lg-5">
          <div className="row">
            {Blog.map((item, key) => {
              return (
                <div
                  className="col-lg-4"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <BlogCardComman
                    Image={item?.image}
                    Title={item?.title}
                    Descriptions={item?.desc}
                    id={item?.id}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
