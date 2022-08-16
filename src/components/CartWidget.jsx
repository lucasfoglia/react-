import React, { useContext, useMemo } from "react";
import { CartContext } from "../CartContext";

export default function CartWidget(props) {
  console.log(props)
  const cantidadTotal = useMemo(() => {
    return props.cart.reduce(
      (previousValue, currentValue) => previousValue + currentValue.quantity,
      0
    );
  }, [props.cart]);

  return (
    <div>
      <i class="bi bi-cart" style={{ color: "black" }} />
      <p>{cantidadTotal}</p>
    </div>
  );
}
