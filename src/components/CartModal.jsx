import { addDoc, collection } from "firebase/firestore";
import React, { useContext, useState } from "react";

import { CartContext } from "../CartContext";
import { db } from "../main";

export default function CartModal(props) {
  const { cart } = useContext(CartContext);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [orderId, setOrderId] = useState("");

  const buyCart = async () => {
    setIsLoading(true);
    const itemsArray = cart.map((item) => {
      return { id: item.id, title: item.name, price: item.price };
    });
    const order = {
      buyer: { name, phone, email },
      items: itemsArray,
      date: new Date(),
      total: props.precioTotal,
    };

    const docRef = await addDoc(collection(db, "ordenes"), order);
    setOrderId(docRef.id);
    setIsLoading(false);
  };

  return (
    <div
      style={{ minHeight: "65%", minWidth: "60%" }}
      className="d-flex flex-column justify-content-center align-items-center position-absolute bg-white top-50 start-50 translate-middle border border-success rounded-3"
    >
      <div
        style={{ position: "absolute", top: 10, right: 10, cursor: "pointer" }}
        onClick={() => props.toggleModal(false)}
      >
        <i style={{ fontSize: 40 }} class="bi bi-x "></i>
      </div>
      {isLoading && (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100%" }}
        >
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {!isLoading && orderId && (
        <div>
          <p>Tu número de órden es:</p>
          <p className="fw-bold fs-4 text-primary mb-4">{orderId}</p>
          <p>Estado de órden:</p>
          <p className="fw-bold fs-4 text-success">En proceso</p>
        </div>
      )}
      {!isLoading && !orderId && (
        <>
          <p className="mt-2 fw-bold">Datos de Compra</p>
          <div
            style={{ width: "90%" }}
            className="m-3 d-flex flex-column justify-content-start align-items-start"
          >
            <div
              style={{ width: "100%" }}
              className="d-flex flex-column justify-items-start align-items-start m-3"
            >
              <label for="nombre" class="form-label">
                Nombre
              </label>
              <input
                type="text"
                class="form-control"
                id="nombre"
                placeholder="Jose Perez"
                onChange={(ev) => setName(ev.target.value)}
              />
            </div>
            <div
              style={{ width: "100%" }}
              className="d-flex flex-column justify-items-start align-items-start m-3"
            >
              <label for="telefono" class="form-label">
                Telefono
              </label>
              <input
                type="phone"
                class="form-control"
                id="telefono"
                placeholder="011 47182211"
                onChange={(ev) => setPhone(ev.target.value)}
              />
            </div>
            <div
              style={{ width: "100%" }}
              className="d-flex flex-column justify-items-start align-items-start m-3"
            >
              <label for="email" class="form-label">
                Email
              </label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="name@example.com"
                onChange={(ev) => setEmail(ev.target.value)}
              />
            </div>
          </div>
          <p className="mt-2 fw-bold">
            Precio total: ${props.precioTotal.toFixed(2)}
          </p>

          <button className="btn btn-success m-4" onClick={buyCart}>
            Comprar
          </button>
        </>
      )}
    </div>
  );
}
