import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { CartContext } from "../CartContext";
import ItemCount from "./ItemCount";

export default function ItemDetail(props) {
  const [numero, setNumero] = useState(0);
  const { addItem, isInCart } = useContext(CartContext);

  const onAdd = (parametro) => {
    setNumero(parametro);
  };

  const addToCart = () => {
    if (isInCart(props.id) === -1) {
      addItem(props.id, props.title, props.price, numero);
      toast.success("Producto Agregado");
    }
  };

  return (
    <div class="d-flex flex-column justify-content-center align-items-center">
      <p className="mb-2 fw-bold fs-3">{props.title}</p>
      <p className="mb-4">Category: {props.category}</p>
      <img src={props.image} style={{ width: "30%" }} />
      <p style={{ width: "30%", marginTop: 30 }}>{props.description}</p>
      <p className="m-2 fw-bold fs-4">$ {props.price.toFixed(2)}</p>
      <div class="d-flex flex-row align-items-center">
        <ItemCount numero={numero} onAdd={onAdd} />
        <button className="btn btn-success h-50" onClick={addToCart}>
          Agregar al carrito
        </button>
      </div>
      <Link class="btn btn-primary" to="/cart">
        Finalizar Compra
      </Link>
    </div>
  );
}
