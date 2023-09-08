import { getViewportInfo } from "../../hook/getViewportInfo"

import Topbar from "./Topbar"
import MenuMobile from "./Menu/Mobile"
import MenuDesktop from "./Menu/Desktop"
import Search from "./Search"

import "./index.css"

const Header = () => {
  const { windowSizeWidth } = getViewportInfo()

  return (
    <header className="header">
      <Topbar />

      <div className="header__main">
        {windowSizeWidth < 1026 && <MenuMobile />}

        <a href="/"><img className="header__logo" src="/maeztra-challenge/logo-maeztra-novo.png.png" alt="Logo" /></a>
        
        <Search />

        <div className="header__mainRight">
          <a href="/" className="header__mainRightGroup header__mainRightGroup--user">
            <img className="header__mainRightGroupIcon" src="/maeztra-challenge/icon_user.png" alt="Ícone minha conta" />
            <span className="header__mainRightGroupText">Minha Conta</span>
          </a>

          <a href="/" className="header__mainRightGroup header__mainRightGroup--wishlist">
            <img className="header__mainRightGroupIcon" src="/maeztra-challenge/icon_heart.png" alt="Ícone wishlit" />
            <span className="header__mainRightGroupText">Wishlist</span>
          </a>

          <div className="header__mainRightGroup header__mainRightGroup--cart">
            <img className="header__mainRightGroupIcon" src="/maeztra-challenge/minicart.v2.png" alt="Ícone carrinho" />
            <span className="header__mainRightGroupText">Meu Carrinho</span>
          </div>
        </div>
      </div>

      {windowSizeWidth > 1026 && <MenuDesktop />}
    </header>
  )
}

export default Header