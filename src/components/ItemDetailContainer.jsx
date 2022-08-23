import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../main";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer(props) {
  const [producto, setProducto] = useState();

  function fetchProducto(id) {
    setTimeout(async () => {
      const docRef = doc(db, "productos", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const { title, description, image, price, category } = docSnap.data();
        setProducto({ id, title, description, image, price, category });
      } else {
        console.log("No such document!");
      }
    }, 2000);
  }

  function buscarProducto() {
    fetchProducto(props.id);
  }

  useEffect(() => buscarProducto(), []);

  if (!producto) {
    return (
      <div style={{ height: "90%" }} class="d-flex justify-content-center">
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
