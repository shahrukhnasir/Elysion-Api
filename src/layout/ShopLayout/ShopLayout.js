import React, { useEffect, useState } from "react";
import styles from "../ShopLayout/ShopLayout.module.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useDispatch } from "react-redux";
import { CategoryList, productData } from "../../Service/CartService";
import { Skeleton } from "antd";
import { useRouter } from "next/router";

const ShopLayout = () => {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [slug, setSlug] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const [productss, setProduct] = useState([]);

  useEffect(() => {
    dispatch(CategoryList(setLoading, setCategory, dispatch));
  }, []);

  const filterCatHandler = (e, id) => {
    e.preventDefault();
    setSlug(id);
  };
  const AllCatHandler = (e) => {
    e.preventDefault();
    router.push("/shop");
    router.reload();
  };

  const handleProductDetail = (productId) => {
    router.push({
      pathname: '/product-detail',
      query: { productId: productId },
    });
  };

  // Search Api intrgrated
  const [search, setSearchQuery] = useState("");
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  useEffect(() => {
    dispatch(productData(slug, search, setProduct, setLoading));
  }, [slug, search]);


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
                {/* <div className="row">
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
                </div> */}
                <div className="row">
                  {!loading ? (
                    <>
                      {productss && productss.length > 0 ? (
                        productss.map((item, i) => (
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
                        <div className="col-lg-2">
                        <p className={styles.Title}>
                          <h2>Product not found</h2>
                        </p>
                        </div>
                      )}
                    </>
                  ) : (
                    <Skeleton />
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
