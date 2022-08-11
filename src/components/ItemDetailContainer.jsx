import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer(props) {
  const [producto, setProducto] = useState();

  function fetchProducto(id) {
    setTimeout(async () => {
      const respose = await fetch(`https://fakestoreapi.com/products/${id}`);
      const stockProductos = await respose.json();
      setProducto(stockProductos);
    }, 2000);
  }

  function buscarProducto() {
    fetchProducto(props.id);
  }

  useEffect(() => buscarProducto(), []);

  if (!producto) {
    return (
      <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <ItemDetail
      id={producto.id}
      title={producto.title}
      description={producto.description}
      image={producto.image}
      price={producto.price}
      category={producto.category}
    />
  );
}
