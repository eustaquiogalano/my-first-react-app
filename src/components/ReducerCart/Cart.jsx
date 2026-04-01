import React from "react";
import { motorcycles } from "./Products";
import styles from "./Cart.module.css";

function Cart() {
  return (
    <div className={styles.cart}>
      {motorcycles &&
        motorcycles.map((mc) => {
          return (
            <div>
              <p>Brand: {mc.brand}</p>
              <p>Model: {mc.modelName}</p>
              <p>Displacement: {mc.displacement}</p>
              <p>Type: {mc.type}</p>
            </div>
          );
        })}
    </div>
  );
}

export default Cart;
