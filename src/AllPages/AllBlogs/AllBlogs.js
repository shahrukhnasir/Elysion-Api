import React, { useEffect, useState } from "react";
import BlogCard from "../../components/BlogCard/BlogCard";
import TopLayout from "../../components/TopLayout/TopLayout";
import { useDispatch } from "react-redux";
import { BlogsCard } from "../../Service/BlogsService";
import { Skeleton } from "antd";
import { BlogsContent } from "../../Service/HomePageService";
import { useRouter } from "next/router";
const AllBlogs = () => {
  const dispatch = useDispatch();
  const router = useRouter();
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

  const handleGetId = (e, slug) => {
    e.preventDefault();
    console.log(slug, "slug");
    router.push({
      pathname: `blog-detail`,
      query: { slug: slug },
    });
  };
  return (
    <>
      <section>
        {!loading ? (
          <TopLayout
            Heading={blogHeading}
            descriptions={blogDes}
            image={blogImage}
          />
        ) : (
          <>
            <div className="container p-5">
              <Skeleton active loading={loading} />
            </div>
          </>
        )}

        <div className="container py-5">
          <div className="row">
            {!loading ? (
              <>
                {blogs.map((item, key) => {
                  return (
                    <div className="col-lg-4" key={key}>
                      <BlogCard
                        Img={item?.image_url}
                        Title={item?.heading}
                        backDesc={item?.description}
                        id={item?.id}
                        btn="Read more"
                        onClick={(e) => handleGetId(e, item?.id)}
                      />
                    </div>
                  );
                })}
              </>
            ) : (
              <div className="container p-5">
                <Skeleton active avatar loading={loading} />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllBlogs;
