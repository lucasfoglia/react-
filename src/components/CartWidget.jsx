import React, { useMemo } from "react";

export default function CartWidget(props) {
  const cantidadTotal = useMemo(() => {
    return props.cart.reduce(
      (previousValue, currentValue) => previousValue + currentValue.quantity,
      0
    );
  }, [props.cart]);

  return (
    <div className="d-flex flex-row">
      <i className="bi bi-cart" style={{ color: "black" }} />
      <p className="ms-2">{cantidadTotal}</p>
    </div>
  );
}