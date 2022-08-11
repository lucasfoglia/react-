import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../CartContext";
import ItemCount from "./ItemCount";


export default function ItemDetail(props) {
  const [numero, setNumero] = useState(0);
  const { addItem } = useContext(CartContext)

  const onAdd = (parametro) => {
    setNumero(parametro)
  }

  return (
    <div class="d-flex flex-column justify-content-center align-items-center">
      <img src={props.image} style={{ width: '50%', height: '50%' }} />
      <p className='mb-4'>{props.title}</p>
      <p>{props.description}</p>
      <p>$ {props.price}</p>
      <p>Category: {props.category}</p>
      <div class="d-flex flex-row align-items-center">
        <ItemCount numero={numero} onAdd={onAdd} />
        <button className="btn btn-success h-50" onClick={() => addItem(props.id, props.title, props.price, numero)}>Agregar al carrito</button>
      </div>
      <Link class="btn btn-primary" to="/cart">
        Finalizar Compra
      </Link>
    </div>
  );
}