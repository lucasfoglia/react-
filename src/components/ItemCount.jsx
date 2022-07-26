import { Fragment, useState } from "react";

const STOCK = 5;

export default function ItemCount() {
  const [numero, setNumero] = useState(0);

  const setStock = (parametro) => {
    if (numero < STOCK && parametro > 0)   {
      setNumero(numero + parametro);
    }

    if (numero > 0 && parametro < 0)   {
        setNumero(numero + parametro);
      }

  };


  return (
    <div>
      <button class="btn btn-secondary m-4" onClick={() => setStock(-1)}>-</button>
      {numero}
      <button class="btn btn-secondary m-4" onClick={() => setStock(1)}>+</button>
    </div>
  );
}
