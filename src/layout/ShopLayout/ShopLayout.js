import React, { useState } from "react";
import styles from "../ShopLayout/ShopLayout.module.css";
import ProductCard from "../../components/ProductCard/ProductCard";
const ShopLayout = () => {
  const [getCat, setCat] = useState("");
  const [getActiveCat, setActiveCat] = useState();
  const Products = [
    {
      id: 1,
      title: "Consectetue adlist",
      img: "./images/product/product2.png",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan",
      price: "$20.0",
      status: "All",
    },
    {
      id: 2,
      title: "Dolor Sit Amet",
      img: "./images/product/product1.png",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan",
      price: "$20.0",
      status: "All",
    },

  
    {
      id: 3,
      title: "Sed ut perspiciatis",
      img: "./images/product/product3.png",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan",
      price: "$20.0",
      status: "All",
    },
    {
      id: 4,
      title: "Sed ut perspiciatis",
      img: "./images/product/product4.png",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan",
      price: "$20.0",
      status: "All",
    },

    {
      id: 5,
      title: "Dolor Sit Amet",
      img: "./images/product/product5.png",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan",
      price: "$20.0",
      status: "All",
    },
    {
      id: 6,
      title: "Consectetue adlist",
      img: "./images/product/product6.png",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan",
      price: "$20.0",
      status: "All",
    },

    {
      id: 7,
      title: "Consectetue adlist",
      img: "./images/product/product1.png",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan",
      price: "$20.0",
      status: "Lorem Ipsum",
    },

    {
      id: 8,
      title: "Consectetue adlist",
      img: "./images/product/product5.png",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan",
      price: "$20.0",
      status: "Lorem Ipsum",
    },
    {
      id: 9,
      title: "Consectetue adlist",
      img: "./images/product/product6.png",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan",
      price: "$20.0",
      status: "Sed ut perspiciatis",
    }
  ];

  const filterCats = [
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "Lorem Ipsum",
    },
    {
      id: 3,
      name: "Sed ut perspiciatis",
    },
    {
      id: 4,
      name: "Voluptatem accusan",
    },
  ];

  const filterCatHandler = (e, item, id) => {
    e.preventDefault();
    setCat(item?.name);
    setActiveCat(id);
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
                <ul className={`${styles.SideBarMenu} list-group list-group-flush`}>
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

                  {filterCats?.map((item, i) => (
        <div id={styles.filterMenu}>
                      <li
                      // class="list-group-item"
              
                      className={
                        getActiveCat === i
                          ? styles.filterBtnActive
                          : styles.filterBtn
                      }
                      onClick={(e) => filterCatHandler(e, item, i)}
                    >
                      {item?.name}
                    </li>
                    </div>
           
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-9">
              <div className="container">
                <div className="row">
                  {Products.map((item, i) => {
                    if (getCat == "" || getCat == "All") {
                      return (
                        <div className="col-lg-4">
                          <ProductCard
                            image={item?.img}
                            Title={item?.title}
                            Descriptions={item?.desc}
                            Price={item?.price}
                            id={item?.id}
                          />
                        </div>
                      );
                    } else {
                      if (item?.status == getCat) {
                        return (
                          <ProductCard
                            image={item?.img}
                            Title={item?.title}
                            Descriptions={item?.desc}
                            Price={item?.price}
                            id={item?.id}

                          />
                        );
                      }
                    }
                  })}
                </div>

                <div className="">
                <div className={styles.paginationSec}>
                    <nav aria-label="Page navigation example ">
                        <ul className={`pagination`}>
                            <li className="page-item">
                                <a className={`${styles.pageLink} page-link`} href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            <li className="page-item"><a className={`${styles.pageLink} page-link`} href="#">1</a></li>
                            <li className="page-item"><a className={`${styles.pageLink} page-link`} href="#">2</a></li>
                            <li className="page-item"><a className={`${styles.pageLink} page-link`} href="#">3</a></li>
                            <li className="page-item">
                                <a className={`${styles.pageLink} page-link`} href="#" aria-label="Next">
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
