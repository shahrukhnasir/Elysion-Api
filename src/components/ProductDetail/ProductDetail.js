import React, { useState, useEffect } from "react";
import styles from "../ProductDetail/ProductDetails.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { FaRegHeart } from "react-icons/fa";
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
  AddToCartHandler,
  WishListAddToListProduct,
  getProductDetailById,
} from "../../Service/CartService";
import { Skeleton } from "antd";


const ProductDetail = () => {
  const [productDetail, setProductDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [steps, setSteps] = useState(1);
  const [variant, setProductVariants] = useState();
  const [milliGram, setMiliId] = useState([]);
  const [variantId, setVariantId] = useState();
  const [tab, setTab] = useState(0);
  const [heartClick, setHeartClick] = useState(false);

  const token = useSelector((state) => state?.authSlice?.authToken);

  const heartClickHandler = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("product_id", slug);
    dispatch(WishListAddToListProduct(token, data,setHeartClick));
    setHeartClick(true);
  };
  const updateSteps = (amount) => {
    setSteps((prevState) => {
      const updatedSteps = prevState + amount;
      console.log(updatedSteps, "//////////////////////////");
      return updatedSteps;
    });
  };
  console.log(productDetail, "productDetail");
  const AddToCartHandle = async (e) => {
    if (token) {
      e.preventDefault();
      setLoading(true);
      let data = new FormData();
      data.append("product_id", slug);
      data.append("product_variant_id", variantId);
      data.append("product_miligram_id", milliGram);
      data.append("qty", steps);
      dispatch(AddToCartHandler(token, data, setLoading, router));
      console.log(loading, "loadingloadingloadingloading");
    } else {
      alert("first signin");
    }
  };
  const router = useRouter();
  const dispatch = useDispatch();

  // tabs
  const handleTab = (tab) => {
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

  useEffect(() => {
    dispatch(
      getProductDetailById(
        slug,
        setProductDetails,
        setLoading,
        setProductVariants
      )
    );
  }, [slug, setProductVariants]);

  // setVarriant(productDetail?.variants);
  // console.log(milliGram?.map((mili,i)=> mili?.miligram_id), "milliGram");
  // console.log(milliGram, "milliGram");
  // console.log(variant, "variant");
  // console.log(productDetail,"productDetail");
  // console.log(
  //   variant?.map((vari, i) => vari?.variant),
  //   "variant"
  // );
  const variantChangeHandler = (selectedVariant) => {
    let filteredMili = productDetail?.mg?.filter(
      (variant) => variant?.miligram === selectedVariant
    );
    setMiliId(filteredMili?.[0]?.id);
  };
  console.log(milliGram, "MiliGram");
  console.log(variantId, "variantId");
  console.log(slug, "ProductId");
  console.log(productDetail?.user_id, "user_id");
  // const [cartFields, setCartFields] = useState({
  //   product_id: slug,
  //   product_variant_id: variantId,
  //   product_miligram_id: milliGram,
  //   qty: productDetail?.unit_price,
  // });

  // console.log(productDetail,"milliGram");
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
                    {heartClick ? (
                      <BsSuitHeartFill
                        onClick={(e) => heartClickHandler(e)}
                        className={styles.heartIcon}
                      />
                    ) : (
                      <FaRegHeart
                        onClick={(e) => heartClickHandler(e)} 
                        className={styles.heartIcon}
                      />
                    )}
                  </div>
                </div>
                <p className={styles.desc}>
                  {loading ? (
                    <>{productDetail && productDetail?.description}</>
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
                    <button
                      className={styles.qtyBtn}
                      onClick={() => updateSteps(-1)}
                    >
                      <AiOutlineMinus />
                    </button>{" "}
                    <span>
                      <button className={styles.qtyResult}> {steps}</button>
                    </span>{" "}
                    <button
                      className={styles.qtyBtn}
                      onClick={() => updateSteps(1)}
                    >
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

                <p>
                  <span className={styles.cardText}>Variants</span>
                  {Array.isArray(variant) && (
                    <select
                      id="variant_select"
                      className={styles.selectField}
                      name="variant"
                      onChange={(e) => {
                        const selectedVariant = e.target.value;
                        setVariantId(
                          variant.find(
                            (vari) => vari.variant === selectedVariant
                          )?.id
                        );
                        variantChangeHandler(selectedVariant);
                      }}
                    >
                      <option value="">Select</option>
                      {variant.map((vari, i) => (
                        <option
                          key={i}
                          value={vari.variant}
                          className={styles.optionField}
                        >
                          {vari.variant}
                        </option>
                      ))}
                    </select>
                  )}
                  {/* {Array.isArray(variant) &&
                    variant.map((vari, i) => (
                      <span key={i} className="mx-2">
                        <input
                          type="checkbox"
                          id={`variant_${i}`}
                          name="variant" 
                          onClick={() => setVariantId(vari?.id)}
                          value={vari?.variant}
                          onChange={() => variantChangeHandler(vari?.variant)}
                        />
                        <label htmlFor={`variant_${i}`}>{vari?.variant}</label>
                      </span>
                    ))} */}

                  {/* {Array.isArray(milliGram) &&
                    milliGram.map((mili, i) => (
                      <span key={i} className="mx-2">
                        <input
                          type="checkbox"
                          id={`miligram_${i}`}
                          name="miligram"
                          value={mili?.variant}
                          onClick={()=> setMili(mili?.miligram_id)}
                          onChange={() => miliGramHandler(mili?.miligram)}
                        />
                        <label htmlFor={`miligram_${i}`}>{mili?.miligram}</label>
                      </span>
                    ))} */}
                </p>
              </div>

              <div className="">
                {loading ? (
                  <Link href="" onClick={AddToCartHandle}>
                    <CommanButton label="Add to Cart" />
                  </Link>
                ) : (
                  <Link href="" onClick={AddToCartHandle}>
                    <CommanButton label="Add..." />
                  </Link>
                )}
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
                  <>{productDetail && productDetail?.description}</>
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
