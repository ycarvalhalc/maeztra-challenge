import Slider from "react-slick";
import "./index.css"

const Brands = () => {
    const settings = {
      className: "brands__slider",
      slidesToShow: 5,
      slidesToScroll: 1,
      infinite: false,
      dots: false,
      arrows: false,
      responsive: [
        {
          breakpoint: 1026,
          settings: {
            centerMode: true,
            centerPadding: '23px',
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          }
        },
      ]
    }

    return (
        <div className="brands">
          <h3 className="brands__title">Marcas Parceiras</h3>

          <Slider {...settings}>
            <div className="brands__item">
              <img className="brands__itemImage" src="/maeztra-challenge/logo_marcas_comma.png" alt="logo comma" />
            </div>

            <div className="brands__item">
              <img className="brands__itemImage" src="logo_marcas_melissa.png" alt="logo melissa" />
            </div>

            <div className="brands__item">
              <img className="brands__itemImage" src="/maeztra-challenge/logo_marcas_forever21.png" alt="logo forever21" />
            </div>

            <div className="brands__item">
              <img className="brands__itemImage" src="/maeztra-challenge/logo_marcas_zara.png" alt="logo zara" />
            </div>

            <div className="brands__item">
              <img className="brands__itemImage" src="/maeztra-challenge/logo_marcas_ann_taylor.png" alt="logo ann taylor" />
            </div>
          </Slider>
        </div>
    )
}

export default Brands