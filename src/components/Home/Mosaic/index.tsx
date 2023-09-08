import { getViewportInfo } from "../../../hook/getViewportInfo"

import "./index.css"

const Mosaic = () => {
    const { windowSizeWidth } = getViewportInfo()
    const imageView = windowSizeWidth < 1026 ? "mobile" : "desktop"

    return (
        <div className="mosaic">
            <div className="mosaic__description">
                <h3 className="mosaic__title">Lorem ipsum</h3>
                <p className="mosaic__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer. Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet luctus ut vulputate scelerisque.
                </p>
            </div>
            <img className="mosaic__image" src={`/maeztra-challenge/mosaic_banner_${imageView}.jpg`}/>
        </div>
    )
}

export default Mosaic