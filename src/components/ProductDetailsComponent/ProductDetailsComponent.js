import React, { useState, useEffect } from "react";
import styles from "../ProductDetailsComponent/ProductDetailsComponent.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { FaRegHeart } from "react-icons/fa";
import { BsSuitHeartFill } from "react-icons/bs";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import CommanButton from "../CommanButton/CommanButton";
import Link from "next/link";
import { ImStarFull } from "react-icons/im";
import Swal from "sweetalert2";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { NextArrow, PreviousArrow } from "../CustomSlider/SliderArrow";
import SliderProductCard from "../SliderProductCard/SliderProductCard";
import {
  AddToCartHandler,
  AddToCartListHandler,
  GetAllProduct,
  WishListAddToListProduct,
  getCartCount,
  getProductDetailById,
} from "../../Service/CartService";
import {
  AddToCartGuest,
  GuestCartLists,
  getGuestCartCount,
} from "../../Service/GuestService";
import { Skeleton } from "antd";
import { setSessionId } from "../../Redux/Auth/sessionSlice";
import ProductCard from "../ProductCard/ProductCard";
const ProductDetailsComponent = () => {
  const [productDetail, setProductDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [steps, setSteps] = useState(1);
  const [variant, setProductVariants] = useState();
  const [milliGram, setMiliId] = useState([]);
  const [variantId, setVariantId] = useState();
  const [tab, setTab] = useState(0);
  const [heartClick, setHeartClick] = useState(false);
  const [products, setAllProducts] = useState([]);

  const token = useSelector((state) => state?.authSlice?.authToken);
  const { query } = useRouter();
  const slug = query?.productId;
  console.log(productDetail, "productDetailproductDetail");
  console.log(slug, "productId");
  const heartClickHandler = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("product_id", slug);
    dispatch(WishListAddToListProduct(token, data, setHeartClick));
    setHeartClick(true);
  };

  console.log(variant,"variantasdasdasd");
  const handleProductDetail = (productId) => {
    router.push({
      pathname: "/product-detail",
      query: { productId: productId },
    });
  };
  const updateSteps = (amount) => {
    setSteps((prevState) => {
      const updatedSteps = prevState + amount;
      return updatedSteps >= 1 ? updatedSteps : 1; // Ensure steps is not below zero
    });
  };

  const session_id = Math.floor(Math.random() * 100);
  const session = useSelector((state) => state?.sessionSlice?.session);
  const [cartCount, setCartCount] = useState("");
  const [guestCartCount, setGuestCartCount] = useState("");

  console.log(cartCount, guestCartCount, "gnyundy");
  const AddToCartHandle = async (e) => {
    e.preventDefault();
    if (session == null || session == "") {
      dispatch(setSessionId(session_id));
    }
    if (steps === 0) {
      e.preventDefault();
      Swal.fire({
        position: "center",
        icon: "info",
        title: "Select Quantity please",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    if (token) {
      e.preventDefault();
      setLoading(true);
      let data = new FormData();
      data.append("product_id", slug);
      data.append("product_variant_id", variantId);
      data.append("product_miligram_id", milliGram);
      data.append("qty", steps);
      dispatch(AddToCartHandler(token, data, setLoading, router));
    } else if (!token) {
      let data = new FormData();
      data.append("product_id", slug);
      data.append("product_variant_id", variantId);
      data.append("product_miligram_id", milliGram);
      data.append("qty", steps);
      data.append("session_id", session ? session : session_id);
      dispatch(AddToCartGuest(data, setLoading, router));
      // dispatch(getCartList(cartList));
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
    const [varPrice ,setVariantPrice] =useState(productDetail?.unit_price)

  const variantChangeHandler = (selectedVariant) => {

    console.log(varPrice,"selectedVariant");
    setVariantPrice(JSON.parse(selectedVariant));
    let filteredMili = productDetail?.mg?.filter(
      (variant) => variant?.miligram === selectedVariant
    );
    setMiliId(filteredMili?.[0]?.id);
  };

  useEffect(()=>{
    setVariantPrice(productDetail?.unit_price)
  },[productDetail])
  useEffect(() => {
    dispatch(GetAllProduct(setAllProducts));
  }, []);
  console.log(slug, "slugslugslugslug");
  const productCat = productDetail?.categories?.filter(
    (foo) => foo.product_id == slug
  );
  console.log(
    productDetail?.categories?.filter((foo) => foo.product_id == slug)
  );
  return (
    <>
      <div className="container-fluid p-0">
        <div className={styles.ProfileTopSection}>
          <div className={`${styles.Title} `}>
            <h2 className={styles.lineclamp1}>Product Details</h2>
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
                    <h5 className={`${styles.title} ${styles.lineclamp1}`}>
                      {loading ? (
                        <>{productDetail && productDetail?.title}</>
                      ) : (
                        <>
                          <Skeleton />
                        </>
                      )}
                    </h5>
                  </div>
                  {token ? (
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
                  ) : (
                    ""
                  )}
                </div>
                <p className={`${styles.desc}  ${styles.lineclamp1}`}>
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
                  <span className={styles.cardText}>Product Category </span>
                  <span className={styles.cardBlueText}>
                    {productCat?.length >= 0
                      ? productCat?.[0]?.slug
                      : "not found"}
                  </span>
                </p>
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
                        console.log(e.target,"dpoie93737")
                        // setVariantId(
                        //   variant.find(
                        //     (vari) => vari.variant)?.id
                        // );
                        variantChangeHandler(e.target.value);
                      }}
                    >
                      <option value="">Select</option>
                        {variant?.map((vari, i) => {
                          console.log( vari,"asdkjasdj")
return(

  <option
  key={i}
  value={JSON.stringify(vari)}
  className={styles.optionField}
  >
                            {vari?.variant}
                          </option>
                            )
                      }
                        )}
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
                  {products
                    ?.slice(0)
                    .sort(() => Math.random() - 0.5)
                    .slice(0, 6)
                    .map((item, i) => (
                      <div key={item?.id}>
                        <ProductCard
                          image={item?.thumbnail_url}
                          Title={item?.title}
                          Descriptions={item?.description}
                          Price={item?.price}
                          id={item?.id}
                          onClick={() => handleProductDetail(item?.id)}
                        />
                      </div>
                    ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsComponent;
