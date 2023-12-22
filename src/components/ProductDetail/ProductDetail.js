import React, { useState, useEffect } from "react";
import styles from "../ProductDetail/ProductDetails.module.css";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { BsSuitHeartFill } from "react-icons/bs";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import CommanButton from "../../components/CommanButton/CommanButton";
import Link from "next/link";
import { ImStarFull } from "react-icons/im";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  NextArrow,
  PreviousArrow,
} from "../../components/CustomSlider/SliderArrow";
import SliderProductCard from "../../components/SliderProductCard/SliderProductCard";
import {
  ProductDetailById,
  getProductDetailById,
} from "../../Service/CartService";
import { Skeleton } from "antd";
const Products = [
  {
    id: 1,
    title: "Dolor Sit Amet",
    img: "/images/product/product1.png",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan",
    price: "$20.0",
    status: "All",
  },

  {
    id: 2,
    title: "Consectetue adlist",
    img: "/images/product/product2.png",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan",
    price: "$20.0",
    status: "All",
  },
  {
    id: 3,
    title: "Sed ut perspiciatis",
    img: "/images/product/product3.png",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan",
    price: "$20.0",
    status: "All",
  },
  {
    id: 4,
    title: "Sed ut perspiciatis",
    img: "/images/product/product4.png",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan",
    price: "$20.0",
    status: "All",
  },

  {
    id: 5,
    title: "Dolor Sit Amet",
    img: "/images/product/product5.png",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan",
    price: "$20.0",
    status: "All",
  },
  {
    id: 6,
    title: "Consectetue adlist",
    img: "/images/product/product6.png",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan",
    price: "$20.0",
    status: "All",
  },

  {
    id: 7,
    title: "Consectetue adlist",
    img: "/images/product/product1.png",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan",
    price: "$20.0",
    status: "Lorem Ipsum",
  },

  {
    id: 8,
    title: "Consectetue adlist",
    img: "/images/product/product5.png",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan",
    price: "$20.0",
    status: "Lorem Ipsum",
  },
  {
    id: 9,
    title: "Consectetue adlist",
    img: "/images/product/product6.png",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan",
    price: "$20.0",
    status: "Sed ut perspiciatis",
  },

  {
    id: 10,
    title: "Consectetue adlist",
    img: "/images/product/product2.png",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan",
    price: "$20.0",
    status: "Voluptatem accusan",
  },
];

const ProductDetail = () => {
  const [productDetail, setProductDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [steps, setSteps] = useState(0);
  const [tab, setTab] = useState(0);
  const router = useRouter();
  const dispatch = useDispatch();

  const increment = () => {
    setSteps((prevState) => prevState + 1);
  };

  const decrement = () => {
    setSteps((prevState) => prevState - 1);
  };
  // tabs
  const handleTab = (tab) => {
    console.log(tab);
    setTab(tab);
  };
  // slider
  var settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PreviousArrow />,
    nextArrow: <NextArrow />,
    isBreak: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const { query } = useRouter();
  const slug = query?.pid;
  // console.log(query?.pid);

  useEffect(() => {
    dispatch(getProductDetailById(slug, setProductDetails, setLoading));
  }, [slug]);
  return (
    <>
      <div className="container-fluid p-0">
        <div className={styles.ProfileTopSection}>
          <div className={styles.Title}>
            <h2>Product Details</h2>
          </div>
        </div>
      </div>

      <div className={`${styles.productDetailsContainer} container`}>
        <div className={`${styles.productDetails} card mb-3`}>
          <div className="row g-0">
            <div className="col-md-4">
              {loading ? (
                <>
                  <img
                    src={productDetail && productDetail?.thumbnail_url}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </>
              ) : (
                <>
                  <Skeleton />
                </>
              )}
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6">
                    <h5 className={styles.title}>
                      {loading ? (
                        <>{productDetail && productDetail?.title}</>
                      ) : (
                        <>
                          <Skeleton />
                        </>
                      )}
                    </h5>
                  </div>

                  <div className="col-lg-6" id={styles.heart_icon_sec}>
                    <BsSuitHeartFill className={styles.heartIcon} />
                  </div>
                </div>
                <p className={styles.desc}>

                {loading ? (
                <>
                 {productDetail && productDetail?.description}
                </>
              ) : (
                <>
                  <Skeleton />
                </>
              )}
                  
                </p>

                <hr />

                <p>
                  <span className={styles.cardText}>Price</span>
                  <span className={styles.cardBlueText}>
                    {productDetail && productDetail?.unit_price}
                  </span>
                </p>

                <p>
                  <span className={styles.cardText}>Quantity</span>
                  <span className={styles.priceText}>
                    <button className={styles.qtyBtn} onClick={decrement}>
                      <AiOutlineMinus />
                    </button>{" "}
                    <span>
                      <button className={styles.qtyResult}> {steps}</button>
                    </span>{" "}
                    <button className={styles.qtyBtn} onClick={increment}>
                      <AiOutlinePlus />
                    </button>
                  </span>
                </p>

                <p>
                  <span className={styles.cardText}>Stock Status</span>
                  <span className={styles.cardBlueText}>
                    
                    {productDetail?.qty}
                  </span>
                </p>
              </div>

              <div className="">
                <Link href="/my-cart">
                  <CommanButton label="Add to Cart" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.outerReviewSec}>
          <span
            onClick={() => handleTab(0)}
            className={tab === 0 ? styles.active : styles.noneActive}
          >
            Details
          </span>
          <span className={styles.middleLine}>|</span>

          <span
            onClick={() => handleTab(1)}
            className={tab === 1 ? styles.active : styles.noneActive}
          >
            Reviews
          </span>
        </div>
        <div>
          {tab === 0 && (
            <div>
              <p className={styles.detailsReview}>
              {loading ? (
                <>
                 {productDetail && productDetail?.description}
                </>
              ) : (
                <>
                  <Skeleton />
                </>
              )}
              </p>
            </div>
          )}
          {tab === 1 && (
            <>
              <div class="card border-0 mb-3">
                {/* Review Card 1 */}
                <div class="row g-0">
                  <div class="col-md-1">
                    <img
                      src="/images/reviews1.png"
                      class="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-11">
                    <div class="card-body px-0">
                      <div className="row">
                        <div className="col">
                          <span className={styles.clntName}>John Doe | </span>
                          <span>
                            {" "}
                            <ImStarFull className={styles.starIcon} />
                          </span>
                          <span>
                            {" "}
                            <ImStarFull className={styles.starIcon} />
                          </span>
                          <span>
                            {" "}
                            <ImStarFull className={styles.starIcon} />
                          </span>
                          <span>
                            {" "}
                            <ImStarFull className={styles.starIcon} />
                          </span>
                          <span>
                            {" "}
                            <ImStarFull className={styles.starLightIcon} />
                          </span>
                          <span className={styles.lightText}>4.0</span>
                        </div>
                      </div>
                      <p className={styles.reviewParagraph}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Review Card 2 */}
                <div class="row g-0">
                  <div class="col-md-1">
                    <img
                      src="/images/reviews2.png"
                      class="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-11">
                    <div class="card-body px-0">
                      <div className="row">
                        <div className="col">
                          <span className={styles.clntName}>John Doe | </span>
                          <span>
                            {" "}
                            <ImStarFull className={styles.starIcon} />
                          </span>
                          <span>
                            {" "}
                            <ImStarFull className={styles.starIcon} />
                          </span>
                          <span>
                            {" "}
                            <ImStarFull className={styles.starIcon} />
                          </span>
                          <span>
                            {" "}
                            <ImStarFull className={styles.starIcon} />
                          </span>
                          <span>
                            {" "}
                            <ImStarFull className={styles.starLightIcon} />
                          </span>
                          <span className={styles.lightText}>4.0</span>
                        </div>
                      </div>
                      <p className={styles.reviewParagraph}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        <hr />

        <h6 className={styles.sliderHeading}>People also Search for</h6>

        <div className={`${styles.sliderContainer} container`}>
          <div className="row">
            <div className="col-lg-12">
              <div className="pb-5">
                <Slider {...settings}>
                  <div>
                    <SliderProductCard
                      Title="Sed ut perspiciatis"
                      image="/images/product/product1.png"
                      Descriptions="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan"
                      Price="$20.0"
                    />
                  </div>
                  <div>
                    <SliderProductCard
                      Title="Sed ut perspiciatis"
                      image="/images/product/product2.png"
                      Descriptions="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan"
                      Price="$20.0"
                    />
                  </div>
                  <div>
                    <SliderProductCard
                      Title="Sed ut perspiciatis"
                      image="/images/product/product3.png"
                      Descriptions="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan"
                      Price="$20.0"
                    />
                  </div>
                  <div>
                    <SliderProductCard
                      Title="Sed ut perspiciatis"
                      image="/images/product/product4.png"
                      Descriptions="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan"
                      Price="$20.0"
                    />
                  </div>
                  <div>
                    <SliderProductCard
                      Title="Sed ut perspiciatis"
                      image="/images/product/product5.png"
                      Descriptions="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan"
                      Price="$20.0"
                    />
                  </div>
                  <div>
                    <SliderProductCard
                      Title="Sed ut perspiciatis"
                      image="/images/product/product6.png"
                      Descriptions="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan"
                      Price="$20.0"
                    />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
