import React,{useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import  Catalogue  from './components/Catalogue';
import SingleProduct from './pages/SingleProduct';
import { UserContext } from './context/UserContext';
import {CartContext} from './context/CartContext';
import Cart from './components/Cart';
function App() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  return (
<>
  <Router>
  <UserContext.Provider value={{user, setUser}}>
  <CartContext.Provider value={{cart, setCart}}>
    <Header />
    <Routes>
      <Route path="/" element={<Catalogue />} />
      <Route path="/product/:productId" element={<SingleProduct />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
    </CartContext.Provider>
    </UserContext.Provider>
  </Router>
</>
  );
}

export default App;
