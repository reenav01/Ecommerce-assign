import React,{useState,useContext} from 'react'
import { Link } from 'react-router-dom';
import {CartContext} from '../context/CartContext';
import Order from './Order';
import "../css/order.css";
const Cart = () => {
    const cartContext = useContext(CartContext);
    const [flag, setFlag] = useState(false);
    const [order,setOrder] = useState([]);
    const [total,setTotal] = useState(0);
    let grandTotal = 0;
    const grandTotalCalc = () => {
        cartContext.cart.map((item) => {    
            grandTotal += item.price;
        })
    }
    grandTotalCalc();
    const cart = cartContext.cart;
    const removeItem = (item) => {
        cartContext.setCart(cart.filter((i) => i.id !== item.id));
        grandTotalCalc();
    }
    const placeOrder = () => {
        cart.map((item) => {
            setOrder([...order,{item,quantity:1}]);
        })
        setFlag(true);
    }
  return (
    <div className="container ">
    {flag ? <Order order={order} grandTotal={total}/> :
    <div className="cart order d-flex align-items-center justify-content-center flex-md-column" >
   
        <h1>Cart</h1>
        {
            cart.length <= 0 ? <h2>Cart is Empty</h2> :
        
           <div className="table-responsive">
    <table className="table">
    <thead>
        <tr>
        <th scope="col">Product</th>
        <th scope="col"></th>
        <th scope="col">Price</th>
        <th scope="col">Quantity</th>
        <th scope="col">Total</th>
        <th scope="col"></th>
        </tr>
    </thead>
        {cart.map((item) => (
    <tbody>
        <tr>
        <td scope="row">{item.title}</td>
        <td><Link className='link' to={`/product/${item.id}`} > <img src={item.images[0]} alt="product" className="cart-image" style={{width:"25%"}} /> </Link></td>
        <td>{item.price}</td>
        <td>1</td>
        <td>{item.price}</td>
        <td><button className="btn btn-danger" onClick={() => removeItem(item)}>Remove</button></td>
        </tr>
    </tbody>
        ))}
    </table>
    <div className='fs-3'>Grand-Total: ₹{grandTotal} </div>
    <button className="btn btn-success" onClick={() => placeOrder(cart)}>Place Order</button>
    </div>
        }
    </div>
    }
    </div>
  )
}

export default Cart