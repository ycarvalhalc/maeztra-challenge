import { useEffect, useState } from 'react';
import Slider from "react-slick";

import Product from './Product';
import data from './products-mock.json'

import "./index.css"

const Shelf = () => {
  const [slickListElement, setSlickListElement] = useState<any | null>(null)
  const settings = {
    className: "shelf__slider",
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true
        }
      },
      {
        breakpoint: 1025,
        settings: {
          centerMode: true,
          centerPadding: '20px',
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      },
    ]
  }

  const { products } = data

  /* 
    Gambiarra feita para ter comportamento igual ao layout, 
    mas em um caso real o melhor seria conversar com o designer e
    achar uma solução mais plausível onde o mesmo não seja necessário.
  */
  const getSlickListElement = () => {
    const slickListElement = document.querySelector(".slick-slider.shelf__slider .slick-list")
    if (slickListElement) {
      setSlickListElement(slickListElement)
    } else {
      getSlickListElement()
    }
  }
  
  useEffect(() => {
    if (slickListElement) slickListElement.setAttribute("style", "padding-left: 8px;")
  }, [slickListElement])

  useEffect(() => {
    getSlickListElement()
  }, [])

  return (
    <div className="shelf">
      <h3 className="shelf__title">As Mais Pedidas</h3>
      <Slider {...settings}>
        {products.map((product) => (
          <Product {...product} key={product.id}/>
        ))}
      </Slider>
    </div>
  )
}

export default Shelf