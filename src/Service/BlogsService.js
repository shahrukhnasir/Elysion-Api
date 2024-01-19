import { BlogDetails, Blogs } from "../network/Network";

// 👇Blog's//
export const BlogsCard = (setLoading, setBlog) => (dispatch) => {
  setLoading(true);
  Blogs()
    .then((res) => {
      setBlog(res?.data?.response?.data);
      // setFaqAns(res?.data?.response?.data?.[0]?.name);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
    });
};

// 👇Blog's Details//
export const BlogDetailById = (slug, setBlog, setLoading) => () => {
  setLoading(true);
  BlogDetails(slug)
    .then((res) => {
      setBlog(res?.data?.response?.data);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
    });
};
