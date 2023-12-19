import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";
import SideMenu from "./SideMenu";
import HorizontalMenu from "./HorizontalMenu";


const Navbar = () => {
  const [search, setsearch] = useState(false);

  const size = useWindowSize();;



  // Hook
  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
  }

  return (
    <>
 
        <div className={`${styles?.topbar} container`}>
          <div className="row">
            <div className="col-lg-6">
              <Link href="/" legacyBehavior>
                <a className="navbar-brand" id={styles?.logo} href="/">
                  <Image
                    src="/images/elysion-blue-logo.png"
                    alt="Picture of the author"
                    width={165}
                    height={200}
                    className="img-fluid"
                  />
                </a>
              </Link>
            </div>
            <div className="col-lg-6">
              <div className={styles?.content}>
                  <ul className={styles?.TopLinks}>
                    <li className={styles?.textCall}>Text / Call</li>
                    <li className={styles?.contactNum}>
                      <a  href="tel:+470-300-2259">
                       
                        470-300-2259
                      </a>
                    </li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
   

      {size?.width !== undefined && size?.width >= 992 ? (
        <HorizontalMenu />
      ) : (
        <SideMenu />
      )}

      {!search == true ? (
        ""
      ) : (
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  <img src="/images/logo.svg" alt="Picture of the author" />
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <input
                  type="text"
                  placeholder="Search..."
                  className={styles.inputField}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Navbar;
