import Slider from "react-slick";

import "./index.css"

const Deals = () => {
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: false,
    dots: false,
    arrows: false,
    className: "deals__slider",
    responsive: [
      {
        breakpoint: 1026,
        settings: {
          centerMode: true,
          centerPadding: '23px',
          infinite: false,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  }

  return (
      <div className="deals">
        <h3 className="deals__title">Por que comprar na Maeztra?</h3>

        <Slider {...settings}>
          <div className="deals__item">
            <div className="deals__itemContent">
              <img src="/maeztra-challenge/deals_produtos_importados.jpg" alt="Produtos importados" className="deals__itemImage" />
            </div>
          </div>

          <div className="deals__item">
            <div className="deals__itemContent">
              <img src="/maeztra-challenge/deals_estoque_brasil.jpg" alt="Estoque do brasil" className="deals__itemImage" />
            </div>
          </div>

          <div className="deals__item">
            <div className="deals__itemContent">
              <img src="/maeztra-challenge/deals_trocas_garantidas.jpg" alt="Trocas garantidas" className="deals__itemImage" />
            </div>
          </div>

          <div className="deals__item">
            <div className="deals__itemContent">
              <img src="/maeztra-challenge/deals_off.jpg" alt="Ganhe 5% off" className="deals__itemImage" />
            </div>
          </div>

          <div className="deals__item">
            <div className="deals__itemContent">
              <img src="/maeztra-challenge/deals_frete_gratis.jpg" alt="Frete Grátis" className="deals__itemImage" />
            </div>
          </div>
        </Slider>
      </div>
  )
}

export default Deals