import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext';
import {CartContext} from '../context/CartContext';
import "../css/header.css"
const Header = () => {
    const userContext = useContext(UserContext);
    const cartContext = useContext(CartContext);
  return (
    <nav className="navbar  navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand fs-1" to="/">Ecommerce Website</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse fs-2  navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>

    
        <li className="nav-item">
          <Link className="nav-link " to="/cart">
          <button type="button" className="btn btn-outline-success fs-5 position-relative">
            Cart
             <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">{cartContext.cart.length}
            </span>
            </button>
          </Link>
        </li>
      </ul>

    </div>
  </div>
</nav>
  )
}

export default Header