import { menuProps, linkProps } from "../types"

const Accordion = ({ title, links }: menuProps) => {
  const handleAccordionClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const buttonEelment = event.currentTarget
    const panelElement = buttonEelment.nextElementSibling;

    buttonEelment.classList.toggle('menuFooter__btnAccordion--active')
    panelElement?.classList.toggle('menuFooter__panel--active')

    if (panelElement?.classList.contains('menuFooter__panel--active')) {
      panelElement?.setAttribute("style", `height: ${panelElement?.scrollHeight}px`)
    } else {
      panelElement?.setAttribute("style", "height: 0")
    }
  }

  return (
    <div className="menuFooter__accordion">
      <button 
        className="menuFooter__btnAccordion"
        onClick={handleAccordionClick}
      >{title}</button>
      <div className="menuFooter__panel">
        {links.map((link: linkProps) => 
          <a 
            key={link.id} 
            className="menuFooter__links" 
            href={link.href}
          >{link.text}</a>
        )}
      </div>
    </div>
  )
}

export default Accordion