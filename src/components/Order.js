import React,{useState,useContext} from 'react'
import {CartContext} from '../context/CartContext'
import "../css/order.css"
const Order = ({order,grandTotal}) => {
    const cartContext = useContext(CartContext);
    const [flag,setFlag] = useState(false);
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zip, setZip] = useState('')

    const validate = (text,id) => {
        if (text.length > 0) {
            if (/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(text)) {
                document.getElementById(id).style.display = "Inline";
                document.getElementById(id).innerHTML = "*Invalid Input";
                return false;
            }
            else {
                document.getElementById(id).style.display = "None";
                return true;
            }
        }
        else {
            document.getElementById(id).style.display = "inline";
            return false;
        }
    }
    const validateZip = (text,id) => {
        if (text.length > 0 && text.length < 7) {
            if (!/([1-9]{1}[0-9]{5}|[1-9]{1}[0-9]{3}\\s[0-9]{3})/.test(text)) {
                document.getElementById(id).style.display = "Inline";
                document.getElementById(id).innerHTML = "*Invalid zipcode";
                return false;
            }
            else {
                document.getElementById(id).style.display = "None";
                return true;
            }
        }
        else {
            document.getElementById(id).style.display = "inline";
            return false;
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const nameVerify = validate(firstName,"fname");
        const lnameVerify = validate(lastName,"lname");
        const cityVerify = validate(city,"city");
        const stateVerify = validate(state,"state");
        const zipVerify = validateZip(zip,"zip");
        if (nameVerify && lnameVerify && cityVerify && stateVerify && zipVerify) {
        setFlag(true);
        }
    }


  return (
    flag ? <div className="order" >
    <h1>Order</h1>
    <div className="table-responsive">
    <table className="table">
    <thead >
        <tr className='table-font'>
        <th scope="col">Product</th>
        <th scope="col"></th>
        <th scope="col">Price</th>
        <th scope="col">Quantity</th>
        <th scope="col">Total</th>
        <th scope="col"></th>
        </tr>
    </thead>
        {order.map((product) => (
    <tbody>
        <tr>
        <td scope="row">{product.item.title}</td>
        <td><img src={product.item.images[0]} alt="product" className="cart-image" style={{width:"25%"}} /></td>
        <td>{product.item.price}</td>
        <td>{product.quantity}</td>
        <td>{product.item.price}</td>

        </tr>
    </tbody>
        ))}
    </table>
    <div className='fs-3'>Grand-Total: ₹{grandTotal} </div>
    </div>
        <h1 className='text-success fw-bold'>Order Placed Successfully</h1>
        <p className='fs-6'>Thank you for being our valued customer. We hope our product will meet your expectations. Let us know if you have any questions.</p>
     </div> : 
    <div className='order'>
        
        
        <h1>Please Enter Personel Details</h1>
        <form className="row g-3 needs-validation" novalidate>
  <div className="col-md-4">
    <label for="validationCustom01" className="form-label">First name</label>
    <input type="text" className="form-control" id="validationCustom01" value={firstName} onChange={e => setFirstName(e.target.value)} required/>
    <span id='fname' className='input-error'>
      Enter valid First Name
    </span>
  </div>
  <div className="col-md-4">
    <label for="validationCustom02" className="form-label">Last name</label>
    <input type="text" className="form-control" id="validationCustom02" value={lastName} onChange={e => setLastName(e.target.value)} required/>
    <span id='lname' className='input-error'>
      Enter valid Last Name
    </span>
  </div>

  <div className="col-md-6">
    <label for="validationCustom03" className="form-label">City</label>
    <input type="text" className="form-control" id="validationCustom03" value={city} onChange={e => setCity(e.target.value)} required/>
    <span id='city' className='input-error'>
      Please provide a valid city.
    </span>
  </div>
  <div className="col-md-3">
    <label for="validationCustom04" className="form-label">State</label>
    <input type="text" className="form-control" id="validationCustom03" value={state} onChange={e => setState(e.target.value)} required/>

    <span  id="state" className='input-error'>
      Please provide a valid state.
    </span>
  </div>
  <div className="col-md-3">
    <label for="validationCustom05" className="form-label">Zip</label>
    <input type="text" className="form-control" id="validationCustom05" value={zip} onChange={e => setZip(e.target.value)} required />
    <span id="zip" className='input-error'>
      Please provide a valid zip.
    </span>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
      <label className="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <span className='input-error'>
        You must agree before submitting.
      </span>
    </div>
  </div>
  <div className="col-12">
    <button className="btn btn-primary" onClick={e => handleSubmit(e)} type="submit">Submit form</button>
  </div>
</form>
    </div>
    
  )
}

export default Order