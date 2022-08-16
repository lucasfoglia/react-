import React from "react";

export default function Item(props) {
  return (
    <div
      role="button"
      class="card m-2 max-h-3 d-flex align-items-center justify-content-center"
      style={{ height: 400 }}
    >
      <img src={props.img} class="card-img-top" alt="..." style={{ width: '40%' }} />
      <div className="mt-2">
        <h5 class="card-title">{props.nombre}</h5>
        <p class="card-text">{props.precio}</p>
      </div>
    </div>
  );
}