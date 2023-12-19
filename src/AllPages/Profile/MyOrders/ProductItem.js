import React from 'react';
import styles from '../MyOrders/productItemStyle.module.css';

const ProductItem = ({ name, quantity, price, productImg }) => {
  return (
    <div className={styles.dvforflex}>
      <div className={styles.twostuff}>
        <div className={styles.stuffimg}>
          <img className="img-fluid" src={productImg} alt="Product Image" />
        </div>
        <div className={styles.fordvtext}>
          <h5>{name}</h5>
          <p>({quantity}x)</p>
        </div>
      </div>
      <div className={styles.forprice}>
        <h4>{`$${price}.00`}</h4>
      </div>
    </div>
  );
};

export default ProductItem;
