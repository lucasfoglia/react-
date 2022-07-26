import React from "react";
import Item from "./Item";

export default function ItemList(props) {
  return (
    <div class="d-flex flex-wrap justify-content-center">
      {props.items.map((item) => (
        <Item
        key={item.id}
          nombre={item.title}
          precio={item.price}
          img={item.image}
        />
      ))}
    </div>
  );
}
