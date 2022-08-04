import React from "react";

export default function ItemDetail(props) {
  return (
    <div class="d-flex flex-column justify-content-center align-items-center">
      <img src={props.image} style={{ width: '50%', height: '50%'}}/>
      <p className='mb-4'>{props.title}</p>
      <p>{props.description}</p>
      <p>$ {props.price}</p>
      <p>Category: {props.category}</p>
    </div>
  );
}
