import React from 'react'
import styles from '../Blogs/Blogs.module.css';
import CommanButton from '../../../components/CommanButton/CommanButton';
import Link from 'next/link';
import BlogCardComman from '../../../components/BlogCardComman/BlogCardComman';
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
            desc: "Elysion is an unusual name. It is a Greek word that has transformed over time to mean "},
        {
            id: 3,
            image: "/images/new/blog-menopause.webp",
            title: "Thriving in Menopause",
            desc: "Women are the more complex gender of the species. We have become professional multitaskers.",
        },
    ]
    return (
        <div className="container-fluid" id={styles.blogContainer}>
            <div className={`${styles.innerContainer} container`}>
                <h1 className={`${styles.mainHeading}`} data-aos="fade-up"
                    data-aos-duration="2000">Blogs from your health & wellness experts.</h1>

                <div className="row ">
                    <div className="col-lg-6">
                        <p className={`${styles.mainTitle}`} data-aos="fade-down" data-
                            data-aos-duration="2000">

                            Access the most recent announcements, updates, and helpful health articles to stay up to date with the latest happenings at Elysion Clinic and Wellness.
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <div className={`${styles.viewBtn}`} data-aos="fade-up"
                            data-aos-duration="2000">
                            <Link href="/blogs">
                                <CommanButton
                                    label="View All" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="container pb-lg-5">
                    <div className="row">
                        {
                            Blog.map((item, key) => {

                                return (

                                    <div className="col-lg-4" data-aos="fade-up"
                                        data-aos-duration="2000">

                                        <BlogCardComman
                                            Image={item?.image}
                                            Title={item?.title}
                                            Descriptions={item?.desc}
                                            id={item?.id}
                                        />
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs