import React,{useState,useEffect} from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';
const Products = ({category}) => {
    const [products,setProducts] = useState([]);
    useEffect(() =>{
        const url = `https://api.escuelajs.co/api/v1/categories/${category.id}/products`
        const response = fetch(url).then((response) => response.json())
        .then((data) => {setProducts(data)
             return data});
    },[])
    const responsive = {
      
        desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 3,
            partialVisibilityGutter: 40
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 2,
            partialVisibilityGutter: 30
          }
      };
  return (
    <>
    <div className='fs-1 text-center pt-5'>{category.name}</div>
    <div className='caraousel-container d-flex align-items-stretch'>


    <Carousel additionalTransfrom={0}

  arrows
  autoPlaySpeed={3000}
  centerMode={false}
  className=""
  containerClass="container"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite={false}
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={responsive}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={1}
  swipeable
>

            

        {products.map((product) => (
            <div className='card carousel-product' id={product.id} style={{marginLeft:"5%"}}>
            <Link to={`/product/${product.id}`} className="link">
                <img src={product.images[0]} alt="product image" className=' card-img-top product-image'/>
                <div className="card-img-overlay">
                 <h5 className="card-title product-overlay">{product.title} | ₹{product.price}</h5>

            </div>
            </Link>
            </div>
        ))}
        </Carousel>
    </div>
    </>
  )
}

export default Products