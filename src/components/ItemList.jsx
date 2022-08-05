import React from "react";
import { Link } from 'react-router-dom'
import Item from "./Item";

export default function ItemList(props) {

  return (
      <div class="d-flex flex-wrap justify-content-center">
        {props.items.map((item) => (
          <Link key={item.id} to={`/item/${item.id}`} style={{ width: "30%" }}>
            <Item
            nombre={item.title}
            precio={item.price}
            img={item.image}
            id={item.id}
          />
          </Link>
        ))}
      </div>
  );
}
