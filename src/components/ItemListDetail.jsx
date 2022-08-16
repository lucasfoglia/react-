import React from "react";
import { useParams } from "react-router-dom";
import ItemDetailContainer from "./ItemDetailContainer";

export default function ItemListDetail() {
  const { id } = useParams();

  return (
    <div>
     <h5 class="modal-title mb-4 fs-4 fw-bold">Detalle de producto</h5>
      <ItemDetailContainer id={id} />
    </div>
  );
}
