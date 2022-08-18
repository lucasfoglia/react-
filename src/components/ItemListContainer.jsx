import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../main";
import ItemList from "./ItemList";

export default function ItemListContainer() {
  const [productos, setProductos] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { catId } = useParams();

  function fetchProductos() {
    setIsLoading(true);

    setTimeout(async () => {
      let stockProductos = [];
      const querySnapshot = await getDocs(collection(db, "productos"));

      querySnapshot.forEach((doc) => {
        const { title, description, category, price, image } = doc.data();
        stockProductos = [
          ...stockProductos,
          { id: doc.id, title, description, category, price, image },
        ];
      });

      if (catId) {
        const filteredProducts = stockProductos.filter(
          (item) => item.category === catId
        );
        setProductos(filteredProducts);
      } else {
        setProductos(stockProductos);
      }

      setIsLoading(false);
    }, 2000);
  }

  function buscarProductos() {
    fetchProductos();
  }

  useEffect(() => buscarProductos(), [catId]);

  if (!productos || isLoading) {
    return (
      <div
        class="d-flex justify-content-center align-items-center"
        style={{ height: "100%" }}
      >
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <ItemList items={productos} />
    </div>
  );
}
