import React from "react";

export default function ItemDetail(props) {
  return (
    <div class="d-flex flex-wrap justify-content-center">
      <img src={props.image} />
      <p>{props.title}</p>
      <p>{props.description}</p>
      <p>{props.price}</p>
      <p>{props.category}</p>
    </div>
  );
}
