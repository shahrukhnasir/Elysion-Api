
import { CatByProducts, Categories, Products } from "../network/Network";
import "sweetalert2/dist/sweetalert2.min.css";

// 👇Categories Service//
export const CategoryList = (setLoading, setCategory) => (dispatch) => {
  setLoading(true);
  Categories()
    .then((res) => {
      setCategory(res?.data?.response?.data);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
    });
};

//👇Products  Service//
export const ProductList = (setLoading, setProducts) => (dispatch) => {
  setLoading(true);
  Products()
    .then((res) => {
      setProducts(res?.data?.response?.data);
      console.log(res?.data?.response?.data), "product";
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
    });
};

////👇Cat & Products By id
export const CatProductById =
  (setCatByProdutId, slug, setCatByProductList, setLoading) =>
  async (dispatch) => {
    setLoading(true);

    if (slug !== undefined) {
      try {
        const response = await CatByProducts(slug);
        console.log(response?.data,'dsjisd')
        const responseData = response?.data?.response?.data?.data;

        setCatByProdutId(slug);
        setCatByProductList(responseData);
        setLoading(false);
      } catch (err) {
        console.error(err,"dsdmsd");
        setCatByProductList([]);
        setLoading(false);
        // alert('Error: ' + err.message);
      }
    }
  };
