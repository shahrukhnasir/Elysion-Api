import {
  CatByProducts,
  Categories,
  ProductDetails,
  Products,
  SearchProduct,
} from "../network/Network";
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
      // console.log(res?.data?.response?.data), "product";
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
        const responseData = response?.data?.response?.data?.data;

        setCatByProdutId(slug);
        setCatByProductList(responseData);
        setLoading(false);
      } catch (err) {
        console.error(err, "dsdmsd");
        setCatByProductList([]);
        setLoading(false);
      }
    }
  };

////👇Product Details By id
export const getProductDetailById = (slug, setProductDetails, setProductDetailById) => async (dispatch) => {
  try {
    // setLoading(true);

    if (slug !== undefined) {
      const res = await ProductDetails(slug);
      const productData = res?.data?.response?.data;

      setProductDetails(productData);
      dispatch(setProductDetailById(slug));
    }
  } catch (err) {
    console.error(err);
  }
};


////👇Search Products
export const SearchProducts = (slug,search, setSearchProduct, setSearch) => async (dispatch) => {
  try {
    if (search !== undefined) {
      const res = await SearchProduct(slug,search);
      const productData = res?.data?.response?.data?.data;
      setSearchProduct(productData);
      dispatch(setSearch(search));
    }
  } catch (err) {
    console.error(err);
  }
};