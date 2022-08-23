import React, { useContext, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";
import CartModal from "./CartModal";

export default function Cart() {
  const { cart, clear, removeItem } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);

  const precioTotal = useMemo(() => {
    return cart.reduce(
      (previousValue, currentValue) =>
        previousValue + currentValue.quantity * currentValue.price,
      0
    );
  }, [cart]);

  if (cart.length === 0) {
    return (
      <div
        style={{ height: "90%" }}
        className="d-flex flex-column align-items-center justify-content-center"
      >
        <p>No hay items en el carrito</p>
        <Link className="btn btn-success mt-4 " to="/">
          Ir al inicio
        </Link>
      </div>
    );
  }
  return (
    <>
      {showModal && (
        <CartModal
          precioTotal={precioTotal}
          toggleModal={(state) => setShowModal(state)}
        />
      )}
      <div className="m-4 text-start">
        <div className="d-flex flex-row justify-content-between">
          <p className="w-25 fw-bold">Item</p>
          <p className="w-25 fw-bold">Cantidad</p>
          <p className="w-25 fw-bold">Precio</p>
          <p className="w-25 fw-bold">Subtotal</p>
        </div>
        <>
          {cart.map((item) => {
            return (
              <div
                className="d-flex flex-row justify-content-between text-start mb-2"
                key={item.id}
              >
                <p className="w-25">{item.name}</p>
                <p className="w-25 ps-4">{item.quantity}</p>
                <p className="w-25 ps-4">${item.price}</p>
                <p className="w-25 ps-4">${item.price * item.quantity}</p>
                <button
                  className="btn btn-danger"
                  onClick={() => removeItem(item.id)}
                >
                  Eliminar
                </button>
              </div>
            );
          })}
        </>
        <div className="d-flex justify-content-end flex-column">
          <div className="w-100 bg-secondary mt-2" style={{ height: 3 }} />
          <p className="fs-4 fw-bold mt-2">Precio Total: ${precioTotal}</p>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <button className="btn btn-danger m-4" onClick={() => clear()}>
            Eliminar carrito
          </button>
          <button
            className="btn btn-success m-4"
            onClick={() => setShowModal((prevShowModal) => !prevShowModal)}
          >
            Comprar carrito
          </button>
        </div>
      </div>
    </>
  );
}
