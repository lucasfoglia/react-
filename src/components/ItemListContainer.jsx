import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

export default function ItemListContainer() {
  const [productos, setProductos] = useState();
  const { category } = useParams()

  function fetchProductos() {
    setTimeout(async () => {
      const response = !category ? await fetch("https://fakestoreapi.com/products") :  await fetch(`'https://fakestoreapi.com/products/category/${category}'`);
      const stockProductos = await response.json();
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
