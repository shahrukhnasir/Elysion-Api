import React, { useEffect, useState } from "react";
import styles from "../ShopLayout/ShopLayout.module.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useDispatch } from "react-redux";
import {
  CatProductById,
  CategoryList,
  ProductList,
  SearchProducts,
} from "../../Service/CartService";
import { Skeleton } from "antd";
import { useRouter } from "next/router";
import { baseUrl } from "../../network/baseUrl";
import axios from "axios";
const ShopLayout = () => {

  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [catByProductId, setCatByProdutId] = useState([]);
  const [catByProductList, setCatByProductList] = useState([]);
  const [slug, setSlug] = useState([]);
  const [showAllProduct, setAllProducts] = useState(false);
  const dispatch = useDispatch();
  const route = useRouter();
  const { query } = useRouter();
  const slugs = query?.pid;
  useEffect(() => {
    dispatch(CategoryList(setLoading, setCategory, dispatch));
    dispatch(ProductList(setLoading, setProducts, dispatch));
  }, []);

  useEffect(() => {
    dispatch(
      CatProductById(setCatByProdutId, slug, setCatByProductList, setLoading)
    );
  }, [slug]);

  const filterCatHandler = (e, id) => {
    e.preventDefault();
    // setSearchQuery("")
    setSlug(id);
  };
  const AllCatHandler = (e) => {
    e.preventDefault();
    setAllProducts(true);
    setCatByProductList(products);
    // setSearchQuery("")
  };

  const handleProductDetail = (productId) => {
    route.push(`/shop/product/${productId}`);
  };

  // Search Api intrgrated
  const [search, setSearchQuery] = useState("");
  const [searchResults, setSearch] = useState([]);
  const [searchProduct, setSearchProduct] = useState([]);
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (search === "") {
      setSearchProduct(catByProductList);
    }
  };

  useEffect(() => {
    if (search.trim() !== "") {
      dispatch(SearchProducts(slug, search, setSearchProduct, setSearch));
    } else {
      setSearchProduct([]);
    }
  }, [search]);
  console.log(products, "products");

  return (
    <>
      <div className="container-fluid p-0">
        <div className={styles.ProfileTopSection}>
          <div className={styles.Title}>
            <h2>Shop</h2>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div>
                <ul
                  className={`${styles.SideBarMenu} list-group list-group-flush`}
                >
                  <li
                    className={`${styles.activeBar} list-group-item active`}
                    aria-current="true"
                  >
                    All Categories
                  </li>

                  <li className={`${styles.search_sec} list-group-item`}>
                    <input
                      type="text"
                      className={styles.filterField}
                      placeholder="Search Product"
                      value={search}
                      onChange={(e) => handleSearchChange(e)}
                    />
                    <img
                      src="./images/filterIcon.png"
                      className={styles.filterIcon}
                      alt=""
                    />
                  </li>
                  <div id={styles.filterMenu}>
                    <li
                      className={styles.filterBtn}
                      onClick={(e) => AllCatHandler(e)}
                    >
                      All
                    </li>
                  </div>

                  <>
                    {category?.map((item, i) => (
                      <div id={styles.filterMenu} key={i}>
                        <li
                          id={item?.id}
                          className={
                            category === i
                              ? styles.filterBtnActive
                              : styles.filterBtn
                          }
                          onClick={(e) => filterCatHandler(e, item?.id, i)}
                        >
                          {item?.name}
                        </li>
                      </div>
                    ))}
                  </>
                </ul>
              </div>
            </div>

            <div className="col-lg-9">
              <div className="container">
                <div className="row">
                  {!loading ? (
                    <>
                      {searchProduct && searchProduct.length > 0 ? (
                        searchProduct.map((item, i) => (
                          <div className="col-lg-4" key={i}>
                            <ProductCard
                              image={item?.thumbnail_url}
                              Title={item?.title}
                              Descriptions={item?.description}
                              Price={item?.price}
                              id={item?.id}
                              onClick={() => handleProductDetail(item?.id)}
                            />
                          </div>
                        ))
                      ) : (
                        <>
                          {!loading ? (
                            catByProductList &&
                            catByProductList.map((item, i) => (
                              <div className="col-lg-4" key={i}>
                                <ProductCard
                                  image={item?.thumbnail_url}
                                  Title={item?.title}
                                  Descriptions={item?.description}
                                  Price={item?.price}
                                  id={item?.id}
                                  onClick={() => handleProductDetail(item?.id)}
                                />
                              </div>
                            ))
                          ) : showAllProduct ? (
                            <>
                              {products?.map((item, i) => (
                                <div className="col-lg-4" key={i}>
                                  <ProductCard
                                    image={item?.thumbnail_url}
                                    Title={item?.title}
                                    Descriptions={item?.description}
                                    Price={item?.price}
                                    id={item?.id}
                                    onClick={() =>
                                      handleProductDetail(item?.id)
                                    }
                                  />
                                </div>
                              ))}
                            </>
                          ) : (
                            "No products"
                          )}
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      <Skeleton />
                    </>
                  )}
                </div>

                <div className="">
                  <div className={styles.paginationSec}>
                    <nav aria-label="Page navigation example ">
                      <ul className={`pagination`}>
                        <li className="page-item">
                          <a
                            className={`${styles.pageLink} page-link`}
                            href="#"
                            aria-label="Previous"
                          >
                            <span aria-hidden="true">&laquo;</span>
                          </a>
                        </li>
                        <li className="page-item">
                          <a
                            className={`${styles.pageLink} page-link`}
                            href="#"
                          >
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a
                            className={`${styles.pageLink} page-link`}
                            href="#"
                          >
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a
                            className={`${styles.pageLink} page-link`}
                            href="#"
                          >
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a
                            className={`${styles.pageLink} page-link`}
                            href="#"
                            aria-label="Next"
                          >
                            <span aria-hidden="true">&raquo;</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>

                {/* search */}

                {/* <ul>
                  {searchResults.map((item) => (
                    <li key={item.id}>{item.name}</li>
                  ))}
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopLayout;
