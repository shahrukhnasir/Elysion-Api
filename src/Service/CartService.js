import Swal from "sweetalert2";
import {
  AddToCart,
  AddToCartList,
  CartCount,
  CatByProducts,
  Categories,
  CheckOut,
  GetAllProducts,
  ProductDetails,
  Products,
  RemovedToAll,
  RemovedToCart,
  SearchProduct,
  WishList,
  getProducts,
} from "../network/Network";
import "sweetalert2/dist/sweetalert2.min.css";
import { setCartList } from "../Redux/CartList/CartList";
import { toast } from "react-toastify";

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
export const getProductDetailById =
  (slug, setProductDetails, setProductDetailById, setProductVariants) =>
  async (dispatch) => {
    try {
      // setLoading(true);

      if (slug !== undefined) {
        const res = await ProductDetails(slug);
        const productData = res?.data?.response?.data;
        const productVarriant = res?.data?.response?.data?.variants;
        // const productMilliGram = res?.data?.response?.data?.mg;
        // console.log(res?.data?.response?.data?.mg, "M_G");
        setProductDetails(productData);
        setProductVariants(productVarriant);
        // setProductMilliGram(productMilliGram);
        dispatch(setProductDetailById(slug));
      }
    } catch (err) {
      console.error(err);
    }
  };

////👇Search Products
export const SearchProducts =
  (slug, search, setSearchProduct, setSearch) => async (dispatch) => {
    try {
      if (search !== undefined) {
        const res = await SearchProduct(slug, search);
        const productData = res?.data?.response?.data?.data;
        setSearchProduct(productData);
        dispatch(setSearch(search));
      }
    } catch (err) {
      console.error(err);
      setSearchProduct([]);
    }
  };

////👇// Add TO Cart
export const AddToCartHandler = (token, data, setLoading, router) => () => {
  AddToCart(token, data)
    .then((res) => {
      if (res) {
        setLoading(false);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Add to Cart successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        // console.log(res, "uyyy");
        router.push("/my-cart");
      } else {
        console.log("Something");
      }
    })
    .catch((err) => {
      console.log(err?.response?.data?.errors?.product_miligram_id?.[0], "err");
      // console.log("data", res?.response?.data?.message);
      // setLoading(true);
      Swal.fire({
        position: "center",
        icon: "info",
        title:
          (err?.response?.data?.errors?.product_miligram_id &&
            "Please select Variant") ||
          err?.response?.data?.errors?.qty ||
          err?.response?.data?.message,
        showConfirmButton: false,
        timer: 1500,
      });
    });
};

////👇Add TO Cart List
export const AddToCartListHandler =
  (token, setLoading, setAddCartList, dispacth) => (dispatch) => {
    setLoading(true);
    AddToCartList(token)
      .then((res) => {
        // dispacth(setCartList(res?.data?.response?.data))
        setAddCartList(res?.data?.response?.data);
        setLoading(false);
        // console.log(res?.data?.response?.data, "res");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

////👇Removed To Cart  item
export const RemovedToCartHandler =
  (slug, token, setLoading, router) => async () => {
    setLoading(true);
    try {
      const res = await RemovedToCart(slug, token);
      console.log(res?.data?.message === "success");
      if (res?.data?.message === "success") {
        setLoading(false);
        await Swal.fire({
          position: "center",
          icon: "success",
          title: "Removed to Cart successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        // router.reload();

        // dispatch(AddToCartHandler(token))
      }
    } catch (error) {
      // setLoading(false);
      console.error("Error in Password Update:", error);

      await Swal.fire({
        position: "center",
        icon: "error",
        title: "Cart Not Removed ",
        text: "Cart Not Removed ",
        showConfirmButton: false,
        timer: 1500,
      });
      setLoading(false);
    }
  };

////👇Removed To All
export const RemovedAllHandler =
  (token, data, setLoading) => async (dispatch) => {
    // setLoading(true);
    try {
      const res = await RemovedToAll(token, data);
      console.log(res?.data, "RRRRRRRRRRRRR");
      if (res?.data?.message === "success") {
        // setLoading(false);
        await Swal.fire({
          position: "center",
          icon: "success",
          title: "Clear All Cart List successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      // setLoading(false);
      console.error("Error in Password Update:", error?.message);

      await Swal.fire({
        position: "center",
        icon: "error",
        title: error?.message,
        text: "please login",
        showConfirmButton: false,
        timer: 1000,
      });
      // setLoading(false);
    }
  };

////👇Check Out
export const CheckOutHandler =
  (token, data, setLoading, route) => async (dispatch) => {
    setLoading(true);
    try {
      const res = await CheckOut(token, data);
      console.log(res);
      if (res?.data?.message === "success") {
        setLoading(false);
        await Swal.fire({
          position: "center",
          icon: "success",
          title: "Order successfully completed",
          showConfirmButton: false,
          timer: 1500,
        });
        route.push("myorders");
      }
    } catch (error) {
      // setLoading(false);
      console.error(error?.response?.data?.errors, "errr");

      await Swal.fire({
        position: "center",
        icon: "error",
        title:
          error?.response?.data?.errors?.billing_address ||
          error?.response?.data?.errors?.billing_email ||
          error?.response?.data?.errors?.billing_first_name ||
          error?.response?.data?.errors?.billing_last_name ||
          error?.response?.data?.errors?.billing_phone ||
          error?.response?.data?.errors?.shipper_address ||
          error?.response?.data?.errors?.shipper_email ||
          error?.response?.data?.errors?.shipper_first_name ||
          error?.response?.data?.errors?.shipper_phone ||
          error?.response?.data?.errors?.shipper_last_name,
        text: error?.response?.data?.message,
        showConfirmButton: true,
        customClass: {
          confirmButton: "theme-button-bg",
        },
      });
      // setLoading(false);
    }
  };

////👇// WishList Add Product List
export const WishListAddToListProduct = (token, data, setHeartClick) => () => {
  setHeartClick(false);
  WishList(token, data)
    .then((res) => {
      if (res) {
        setHeartClick(true);
        toast.success('Add WishList successfully');
      }
      if (res?.message) setHeartClick(true);
    })
    .catch((res) => {
      toast.error(res?.response?.data?.message);
      
    });
};

// Product

export const productData =
  (
    slug,
    search,
    setProduct,
    setLoading,
    setPerPage,
    setTotalPage,
    setCurrentPage
  ) =>
  async () => {
    setLoading(true);
    getProducts(slug, search)
      .then((res) => {
        setProduct(res?.data?.response?.data?.data);
        setPerPage(res?.data?.response?.data?.per_page);
        setTotalPage(res?.data?.response?.data?.total);
        setCurrentPage(res?.data?.response?.data?.current_page);
        setPage(res?.data?.response?.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });

    // try {
    //   const response = await getProducts(slug, search);
    //   const responseData =
    //     response?.data?.response?.data?.data !== undefined
    //       ? response?.data?.response?.data?.data
    //       : response?.data?.response?.data;
    //   console.log(response?.data?.response?.data?.data, "responseData");
    //   setProduct(response?.data?.response?.data?.data);
    //   setPerPage(response?.data?.response?.data?.per_page);
    //   setTotalPage(response?.data?.response?.data?.total);
    //   setCurrentPage(response?.data?.response?.data?.current_page);
    //   // console.log (response?.data?.response?.data?.current_page, "dskhjasdhads");
    //   // setCatByProdutId(slug);
    //   setPage(response?.data?.response?.data);
    //   setLoading(false);
    // } catch (err) {
    //   console.error(err, "error loading");
    //   setProduct([]);
    //   setLoading(false);
    // }
  };

// 👇Cart item counting
export const getCartCount = (Istoken, setCartCount) => async () => {
  CartCount(Istoken)
    .then((res) => {
      console.log(res?.data?.response?.data, "CartCount");
      setCartCount(res?.data?.response?.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

// 👇Cart item counting
export const GetAllProduct = (setAllProducts) => async () => {
  GetAllProducts()
    .then((res) => {
      console.log(res?.data?.response?.data?.data, "Khskdhjdg");
    
      setAllProducts(res?.data?.response?.data?.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
