import React, { useState } from "react";
import Item from "./Item";
import ItemDetailContainer from "./ItemDetailContainer";

export default function ItemList(props) {
  const [productId, setProductId] = useState(null);

  return (
    <>
      {productId && (
        <div class="modal d-block">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Detalle de producto</h5>
                <button
                  type="button"
                  class="btn-close"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <ItemDetailContainer id={productId} />
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  onClick={() => setProductId(null)}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div class="d-flex flex-wrap justify-content-center">
        {props.items.map((item) => (
          <Item
            key={item.id}
            nombre={item.title}
            precio={item.price}
            img={item.image}
            id={item.id}
            onClick={setProductId}
          />
        ))}
      </div>
    </>
  );
}
