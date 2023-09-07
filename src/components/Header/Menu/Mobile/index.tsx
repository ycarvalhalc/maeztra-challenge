import { Menu as MenuIcon } from "lucide-react"

import "./index.css"

/* 
  Só para melhor organização, mas o ideal é ter outros níveis de pasta e separar por componentes
  Tais como Drawer, Content, Header, Footer...
*/
const MenuMobile = () => {
  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    const menuBtnElement = event.currentTarget
    const drawerElement = menuBtnElement.nextElementSibling

    drawerElement?.classList.add("menuMobile__drawer--active")
  }

  const handleCloseMenu = () => {
    const drawerElement = document.getElementsByClassName("menuMobile__drawer")[0]
    drawerElement.classList.remove("menuMobile__drawer--active")
  }

  return (
    <div className="menuMobile">
      <button 
        className="menuMobile__btnMenu" 
        onClick={handleOpenMenu}
      ><MenuIcon className="menuMobile__icon" size={32}/></button>
      <div className="menuMobile__drawer">
        <div className="menuMobile__content"></div>
        <span onClick={handleCloseMenu} className="menuMobile__overlay"></span>
      </div>
    </div>
  )
}

export default MenuMobile