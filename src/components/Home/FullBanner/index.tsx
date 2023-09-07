import { getViewportInfo } from "../../../hook/getViewportInfo";
import Slider from "react-slick";

import "./index.css"

const FullBanner = () => {
  const settings = {
    className: "fullBanner__slider",
    sliderToShow: 1,
    dots: true,
    arrows: true
  }

  const { windowSizeWidth } = getViewportInfo()
  const imageView = windowSizeWidth < 1026 ? "fullbanner_mobile" : "fullbanner_desktop"

  return (
      <div className="fullBanner">
        <Slider {...settings}>
          <div className="fullBanner__item">
            <img className="fullBanner__image" src={`/${imageView}_1.jpg`} alt="" />
          </div>
          <div className="fullBanner__item">
            <img className="fullBanner__image" src={`/${imageView}_1.jpg`} alt="" />
          </div>
          <div className="fullBanner__item">
            <img className="fullBanner__image" src={`/${imageView}_1.jpg`} alt="" />
          </div>
          <div className="fullBanner__item">
            <img className="fullBanner__image" src={`/${imageView}_1.jpg`} alt="" />
          </div>
        </Slider>
      </div>
  )
}
export default FullBanner