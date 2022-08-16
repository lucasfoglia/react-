import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import { Link } from "react-router-dom";
import { useMemo } from "react";


export default function Cart() {
  const { cart, clear, removeItem } = useContext(CartContext);

const precioTotal = useMemo(()=>{
  return cart.reduce(
    (previousValue, currentValue) => previousValue + (currentValue.quantity*currentValue.price),
    0
  );
},[cart])




  if(cart.length === 0) {
    return (<div>
      <p>No hay items en el carrito.</p>
      <Link to="/">Ir al inicio</Link>
    </div>)
  }
  return (
    <div className="m-2 text-start">
      <div className="d-flex flex-row justify-content-between">
        <p className="w-25">Item</p>
        <p className="w-25">Quantity</p>
        <p className="w-25">Price</p>
        <p className="w-25">Subtotal</p>
      </div>
      <>
        {
          cart.map((item) => {
            return (
              <div className="d-flex flex-row justify-content-between text-start" key={item.id}>
                <p className="w-25">{item.name}</p>
                <p className="w-25 ps-4">{item.quantity}</p>
                <p className="w-25 ps-4">{item.price}</p>
                <p className="w-25 ps-4">{item.price * item.quantity}</p>
                <button className='btn btn-danger' onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            )
          })
        }
      </>
      <p>Precio Total: {precioTotal} 
      </p>
      <button className="btn btn-danger m-4" onClick={() => clear()}>Remove all items</button>
    </div>
  );
}
