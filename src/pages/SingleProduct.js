import React,{useState,useEffect,useContext} from 'react'
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import "../css/singleProduct.css"
const SingleProduct = () => {
    let { productId } = useParams();
    const [product, setProduct] = useState({})
    const [flag, setFlag] = useState(false);
    const cartContext = useContext(CartContext);
    const fetchProduct = async () => {
        console.log("Effect Triggered:",productId)
        const url = `https://api.escuelajs.co/api/v1/products/${productId}`
        const response = await fetch(url).then((response) => response.json())
        .then((data) => {setProduct(data)
                console.log(data)
                return data});
    }

 useEffect(() => {
        fetchProduct()
    }, [productId])
    const addToCart = () => {
        setFlag(true);
        const result = cartContext.cart.indexOf(product);
        if (result === -1) {

        cartContext.setCart([...cartContext.cart, product]);
        } 
    }
  return (
    Object.keys(product).length > 0 ?
         <div className='product-page'>
    <div className="card mb-3 product-card" >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={product.images[0]} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8 ">
      <div className="card-body product-card-body">
        <h5 className="card-title fs-1">{product.title}</h5>
        <p className="card-text fs-4 fw-light">{product.description}</p>
        <p className="card-text fs-3 fw-bold">₹{product.price}</p>
        {
            flag ? <button className="btn btn-warning fs-5" >Added to Cart</button> : <button className="btn btn-outline-success fs-5" onClick={() => addToCart(product)}>Add to Cart</button>
        }
        
      </div>
    </div>
  </div>
</div>
    </div>
    : null
  )
}

export default SingleProduct