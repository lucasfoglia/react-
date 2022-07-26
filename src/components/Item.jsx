import React from "react";
import ItemCount from "./ItemCount";

export default function Item(props) {
  return (
    <div class="card m-2" style={{ width: '30%'}}>
      <img src={props.img} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{props.nombre}</h5>
        <p class="card-text"> 
          {props.precio}
        </p>
       <ItemCount/>
      </div>
    </div>
  );
}
