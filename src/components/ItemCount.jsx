
const STOCK = 5;

export default function ItemCount(props) {

  const setStock = (parametro) => {
    if (props.numero < STOCK && parametro > 0)   {
      props.onAdd(props.numero + parametro);
    }

    if (props.numero > 0 && parametro < 0)   {
      props.onAdd(props.numero + parametro);
      }

  };


  return (
    <div>
      <button class="btn btn-secondary m-4" onClick={() => setStock(-1)}>-</button>
      {props.numero}
      <button class="btn btn-secondary m-4" onClick={() => setStock(1)}>+</button>
    </div>
  );
}
