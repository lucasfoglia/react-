import React from "react";
import { useParams } from "react-router-dom";
import ItemDetailContainer from "./ItemDetailContainer";

export default function ItemListDetail() {
  const { id } = useParams();

  return (
    <div>
      <h5 class="modal-title">Detalle de producto</h5>
      <ItemDetailContainer id={id} />
    </div>
  );
}
