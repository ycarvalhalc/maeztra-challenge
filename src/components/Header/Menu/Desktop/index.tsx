import "./index.css"

const MenuDesktop = () => {

  return (
    <div className="menuDesktop">
      <ul className="menuDesktop__list">
        <li className="menuDesktop__item">
          <a className="menuDesktop__link menuDesktop__link--news" href="/">
            <img className="menuDesktop__linkImage" src="/icon_dress.png" alt="" />
            Novidades
          </a>
        </li>
        <li className="menuDesktop__item">
          <a className="menuDesktop__link" href="/">Vestidos</a>
        </li>
        <li className="menuDesktop__item">
          <a className="menuDesktop__link" href="/">Roupas</a>
        </li>
        <li className="menuDesktop__item">
          <a className="menuDesktop__link" href="/">Sapatos</a>
        </li>
        <li className="menuDesktop__item">
          <a className="menuDesktop__link" href="/">Lingerie</a>
        </li>
        <li className="menuDesktop__item">
          <a className="menuDesktop__link" href="/">Acessórios</a>
        </li>
        <li className="menuDesktop__item">
          <a className="menuDesktop__link" href="/">OUTLET</a>
        </li>
      </ul>
    </div>
  )
}

export default MenuDesktop