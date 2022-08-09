import React,{useState} from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";


export default function ItemDetail(props) { 
  const [numero, setNumero] = useState(0);

const onAdd = (parametro)=>{
setNumero(parametro)
}

  return (
    <div class="d-flex flex-column justify-content-center align-items-center">
      <img src={props.image} style={{ width: '50%', height: '50%'}}/>
      <p className='mb-4'>{props.title}</p>
      <p>{props.description}</p>
      <p>$ {props.price}</p>
      <p>Category: {props.category}</p>
      <ItemCount numero={numero} onAdd={onAdd} />
      <Link class="btn btn-primary" to="/cart">
          Finalizar Compra
        </Link>    </div>
  );
}
