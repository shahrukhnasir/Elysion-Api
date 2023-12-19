import React from "react";
import BlogCard from "../../components/BlogCard/BlogCard";
import TopLayout from "../../components/TopLayout/TopLayout";
const AllBlogs = () => {
  const Blog = [
    {
      id: 1,
      image: "/images/new/blog-wellness-model.webp",
      title: "The Wellness model of healthcare",
      btn:"Read more",
      desc: "Approximately 3% of healthcare dollars are directed toward public health and prevention.",
      url:"/wellness-healthcare"
    },
    {
      id: 2,
      image: "/images/new/blog-Elysion-origins.webp",
      title: "Elysion Origins of the Name",
      btn:"Read more",
      desc: "Elysion is an unusual name. It is a Greek word that has transformed over time to mean “any place or state of bliss or delight.” I chose this name for my medical practice after seeing a Sci Fi movie Elysium approximately 10 years ago.",
      url:"/elysion-origins"
    },
    {
      id: 3,
      image: "/images/new/blog-menopause.webp",
      title: "Thriving in Menopause",
      btn:"Read more",
      desc: "Women are the more complex gender of the species. We have become professional multitaskers. We are working women, caregivers for our families, personal Ubers for our kids, cheerleaders, chefs etc.",
      url:"/thriving-menopause"
    },
    {
      id: 4,
      image: "/images/new/blog-Fasting.webp",
      title: "The Skinny on Fasting",
      btn:"Read more",
      desc: "Is fasting a new concept? Not at all, an old Hebrew proverb states “He that eats until he is sick must fast until he is well.” We all fast when we sleep. However, this fasting window has lessened over time as food has become more readily accessible at all hours of the day.",
      url:"/skinny-fasting"
    },
    {
      id: 5,
      image: "/images/new/Blog-Inbody.jpg",
      title: "Body composition monitoring with InBody",
      btn:"Read more",
      desc: "Elysion is proud to offer the InBody 570. This device uses an advanced form of Bioelectrical Impedance Analysis (BIA) that combines direct segmental measurements with multiple frequencies to precisely measure body composition. This is conveniently stored in an app on patients’ phones to allow changes to be tracked over time. Problems can be specifically targeted such as muscle or fat imbalances.",
      url:"/composition-inbody"
    },
    {
      id: 6,
      image: "/images/new/blog-current-healthcare.jpg",
      title: "Current health care model",
      btn:"Read more",
      desc: "The health care system has evolved to include a range of administrative roles and support personnel alongside the traditional doctor-patient model, all aimed at enhancing the quality of care and customer service. In fact, there is now an approximate 1:10 ratio of doctors to other staff members that have purely administrative roles. While these additional support roles have brought some benefits, they have also introduced a significant amount of extra documentation, accountability to various individuals, and increased time spent on administrative responsibilities. Providers now allocate roughly 35% of their time to documenting patient data. This shift undeniably takes away from the precious time dedicated to patient care. In a typical outpatient setting, physicians are often limited to just 15 minutes for follow-up visits and 30 minutes for new patients. This time constraint can sometimes result in patients seeing physicians who appear rushed, trying to complete their visits promptly to accommodate the next patient's appointment. For physicians, this means making decisions about how much personal time they should allocate to reviewing patient charts, hospital records, and documenting visits after hours to ensure they can provide patients with a full 15 minutes of face-to-face time. Many physicians invest extra hours before or after clinic hours in documenting patient visits or meeting quality measure requirements. They may also find themselves working on weekends, either from home or the office, to ensure timely chart completion. In essence, providers often find themselves working for the insurance and the system, rather than solely for the benefit of the patient.",
      url:"/health-care-model"
    }
   
  ];

  return (
    <>
      <section>
        <TopLayout
          Heading="Blogs"
          descriptions=" Access the most recent announcements, updates, and helpful health articles to stay up to date with the latest happenings at Elysion Clinic and Wellness."
          image="/images/new/Blogs.webp"
        />

        <div className="container py-5">
          <div className="row">
            {Blog.map((item, key) => {
              return (
                <div className="col-lg-4">
                  <BlogCard
                    Img={item?.image}
                    Title={item?.title}
                    backDesc={item?.desc}
                    id={item?.id}
                    btn={item?.btn}
                    hrf={item?.url}

                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllBlogs;
