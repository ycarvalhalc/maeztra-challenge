import Accordion from './Accordion'
import data from './menu-mock.json'
import { menuProps } from "./types"
import "./index.css"

const MenuFooter = () => {
  const { menus } = data

  return (
    <div className="menuFooter">
      <div className="menuFooter__wrapper">
        {menus.map((menu: menuProps) => 
          <Accordion {...menu} key={menu.id}/>
        )}
      </div>
    </div>
  )
}

export default MenuFooter