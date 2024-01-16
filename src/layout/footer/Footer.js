import { useEffect, useState } from "react";
import styles from "../footer/footer.module.css";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  FooterContent,
  FooterNewsLatterEmail,
} from "../../Service/HomePageService";
import Skeleton from "react-loading-skeleton";
const Footer = () => {
  const token = useSelector((state) => state?.authSlice?.authToken);
  const dispatch = useDispatch();
  const router = useRouter();
  const [foo, setFooter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [chatFields, setChatFields] = useState({
    email: "",
  });

  useEffect(() => {
    dispatch(FooterContent(token, setLoading, setFooter));
  }, [token]);


  const handleEmailSend = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (chatFields.email.length === 0) {
      setError(true);
      setLoading(false);
      return;
    }
    setError(false);
    setLoading(true);
    let data = new FormData();
    data.append("email", chatFields?.email);
    dispatch(FooterNewsLatterEmail(data, setLoading, setChatFields, router));
    // router.push('/thank-you');
  };
  const handleChange = (e) => {
    e.preventDefault();
    setChatFields((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <div className={`${styles.footerContainer} container-fluid py-2`}>
        <div className="container" id={styles.container}>
          <div className="row">
            <div className="col-lg-4 px-0">
              <div className={styles.firstSection}>
                <Link href="/">
                  <img
                    src="/images/elysion-white-logo.png"
                    className="img-fluid"
                    alt="logo"
                  />
                  <p className={styles.decs}>
                    {!loading ? foo?.about : <Skeleton />}
                  </p>
                </Link>

                <div className="">
                  <span>
                    <Image src="/images/badge2.png" width={60} height={60} />
                  </span>

                  <span>
                    <Image src="/images/badge.png" width={60} height={60} />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-2 px-0">
              <div className="">
                <div className={`${styles.secoundSection}`}>
                  <h2 className={styles.QuikHeading}>Quick Links</h2>
                  <ul className={`${styles.LinkSec} p-0`}>
                    <li>
                      <Link href="/" className={styles.footerLink}>
                        {" "}
                        Home{" "}
                      </Link>
                    </li>
                    <li>
                      <Link href="/about-us" className={styles.footerLink}>
                        {" "}
                        About Us{" "}
                      </Link>
                    </li>
                    <li>
                      <Link href="/service" className={styles.footerLink}>
                        {" "}
                        Service{" "}
                      </Link>
                    </li>
                    <li>
                      <Link href="/membership" className={styles.footerLink}>
                        {" "}
                        Membership{" "}
                      </Link>
                    </li>
                    <li>
                      <Link href="/faq" className={styles.footerLink}>
                        {" "}
                        FAQ's{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 px-0">
              <div className={`${styles.thirdSection}`}>
                <ul className={`${styles.LinkSec} p-0`}>
                  <li>
                    <Link href="/blogs" className={styles.footerLink}>
                      {" "}
                      Blogs{" "}
                    </Link>
                  </li>
                  <li>
                    <Link href="/termservice" className={styles.footerLink}>
                      {" "}
                      Terms of Service{" "}
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy" className={styles.footerLink}>
                      {" "}
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact-us" className={styles.footerLink}>
                      {" "}
                      Contact Us
                    </Link>
                  </li>

                  <li>
                    <Link href="/disclaimer" className={styles.footerLink}>
                      {" "}
                      Disclaimer
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 px-0">
              <div className={`${styles.fourthSection}`}>
                <h2 className={styles.QuikHeading}>Join Our Email List</h2>

                <div>
                  <input
                    type="email"
                    value={chatFields?.email}
                    className={styles.inputField}
                    placeholder="Enter Email"
                    onChange={handleChange}
                    name="email"
                  />
                </div>
                {error && chatFields?.email.length <= 0 ? (
                  <div className={styles.warning}>Email can't be Empty!</div>
                ) : (
                  ""
                )}
                <div>
                  {!loading ? (
                    <button
                      onClick={handleEmailSend}
                      className={styles.GeneralButton}
                    >
                      Submit
                    </button>
                  ) : (
                    <button
                      className={styles.GeneralButton}
                      type="button"
                      disabled
                    >
                      <span
                        class="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      Sending...
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="col-lg-1 px-0">
              <div className="">
                <ul className={styles.iconsSection}>
                  <li className="text-white">
                    <div className={styles.rouded}>
                      <Link
                        target="_blank"
                        href={`${!loading ? `${foo?.instagram}` : undefined}`}
                      >
                        <FaInstagram className={styles.icon} />
                      </Link>
                    </div>
                  </li>

                  <li className="text-white">
                    <div className={styles.rouded}>
                      <Link
                        target="_blank"
                        href={`${!loading ? `${foo?.facebook}` : undefined}`}
                      >
                        <FaFacebookF className={styles.icon} />
                      </Link>
                    </div>
                  </li>
                  <li className="text-white">
                    <div className={styles.rouded}>
                      <Link
                        target="_blank"
                        href={`${!loading ? `${foo?.twitter}` : undefined}`}
                      >
                        <FaTiktok className={styles.icon} />
                      </Link>
                    </div>
                  </li>
                  {/* <li className="text-white">
										<div className={styles.rouded}>
											<Link href="https://twitter.com/?lang=en">
												<FaTwitter className={styles.icon} />
											</Link>
										</div>
									</li>

									<li className="text-white">
										<div className={styles.rouded}>
											<Link href="">
												<FaMapMarkerAlt className={styles.icon} />
											</Link>
										</div>
									</li> */}
                </ul>
              </div>
            </div>
          </div>

          <hr className={styles.line} />

          <div className="text-center">
            <p className={styles.copyRight}>
              {!loading ? foo?.copy_write : <Skeleton />}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
