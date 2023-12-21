import React, { useEffect, useState } from "react";
import styles from "../ShopLayout/ShopLayout.module.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useDispatch } from "react-redux";
import {
  CatProductById,
  CategoryList,
  ProductList,
} from "../../Service/CartService";
import { Skeleton } from "antd";
const ShopLayout = () => {
  // const [getCat, setCat] = useState("");
  const [getActiveCat, setActiveCat] = useState();

  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [catByProductId, setCatByProdutId] = useState([]);
  const [catByProductList, setCatByProductList] = useState([]);
  const [slug, setSlug] = useState([]);
  const [allProducts, setAllProducts] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CategoryList(setLoading, setCategory, dispatch));
    dispatch(ProductList(setLoading, setProducts, dispatch));
  }, []);

  useEffect(() => {
    dispatch(
      CatProductById(setCatByProdutId, slug, setCatByProductList, setLoading)
    );
  }, [slug]);
console.log(catByProductList,"catByProductList");
  const filterCatHandler = (e, id) => {
    e.preventDefault();
    setSlug(id);
  };
  const AllCatHandler = (e) => {
    e.preventDefault();
    setAllProducts(true)
  };

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
                      placeholder="Search"
                      className={styles.filterField}
                      name=""
                      id=""
                    />
                    <img
                      src="./images/filterIcon.png"
                      className={styles.filterIcon}
                      alt=""
                    />
                  </li>

                  <li
                    id={styles.filterMenu}
                    className={
                      allProducts ? styles.filterBtnActive : styles.filterBtn
                    }
                    onClick={(e) => AllCatHandler(e)}
                  >
                    All
                  </li>

                 
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
                      {catByProductList && catByProductList.length > 0 ? (
                        catByProductList.map((item, i) => (
                          <div className="col-lg-4" key={i}>
                            <ProductCard
                              image={item?.thumbnail_url}
                              Title={item?.title}
                              Descriptions={item?.description}
                              Price={item?.price}
                              id={item?.id}
                            />
                          </div>
                        ))
                      ) : (
                        "Data Not Available"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopLayout;
