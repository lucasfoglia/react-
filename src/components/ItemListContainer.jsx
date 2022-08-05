import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

export default function ItemListContainer() {
  const [productos, setProductos] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { catId } = useParams();

  function fetchProductos() {
    setIsLoading(true);
    setTimeout(async () => {
      const response = !catId ? await fetch("https://fakestoreapi.com/products") : await fetch(`https://fakestoreapi.com/products/category/${catId}`);
      const stockProductos = await response.json();
      setProductos(stockProductos);
      setIsLoading(false)
    }, 2000);
  }

  function buscarProductos() {
    fetchProductos();
  }

  useEffect(() => buscarProductos(), [catId]);

  if (!productos || isLoading) {
    return <div class="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
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