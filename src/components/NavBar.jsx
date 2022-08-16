/* This example requires Tailwind CSS v2.0+ */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";
import CartWidget from "./CartWidget";

export default function NavBar() {
  const { cart } = useContext(CartContext);
  const category = `jewelery`;
console.log(cart)
  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">
          Store
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" to="/">
                Inicio
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to={`/category/${category}`}>
                Jewelery
              </Link>
            </li>
          </ul>
            <Link to={"/cart"}>
              <CartWidget cart={cart} />
            </Link>
        </div>
      </div>
    </nav>
  );
}
