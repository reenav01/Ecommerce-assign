import React,{useState,useEffect} from 'react'

import "../css/catalouge.css"
import Products from './Products';
const Catalogue = () => {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    useEffect(() => {
        const response = fetch('https://api.escuelajs.co/api/v1/categories').then((response) => response.json())
        .then((data) => {setCategories(data)
             return data}).catch(err => console.error(err));

    }, [])
    


  return (
    <div className='catalogue'>
    {console.log(categories)}
    {categories.length > 0 ?
    
                categories.map((category) => <Products category={category} />)
                
            : 
            null
        }


    </div>
  )
}

export default Catalogue