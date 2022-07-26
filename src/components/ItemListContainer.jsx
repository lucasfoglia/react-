import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";

export default function ItemListContainer() {
  const [productos, setProductos] = useState();

  function fetchProductos() {
    setTimeout(async () => {
      const respose = await fetch("https://fakestoreapi.com/products");
      const stockProductos = await respose.json();
      setProductos(stockProductos);
    }, 2000);
  }

  function buscarProductos() {
    fetchProductos();
  }

  useEffect(() => buscarProductos(), []);

  if (!productos) {
    return <div class="d-flex justify-content-center">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>;
  }

  return (
    <div>
      <ItemList items={productos} />
    </div>
  );
}
