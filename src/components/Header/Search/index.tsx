import { useState } from "react"
import { getViewportInfo } from "../../../hook/getViewportInfo"

import "./index.css"

const Search = () => {
  const [searchInput, setSearchInput] = useState<string>("")

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value)
  }

  const handleSearchSubmit = () => {
    console.log("searchInput => ", searchInput)
    /* Lógica para buscar o que foi pesquisado */
  }
  
  const { windowSizeWidth } = getViewportInfo()
  
  return windowSizeWidth < 1026 
    ? <img className="search__icon" src="/maeztra-challenge/header.png" alt="search icon" />
    : (
      <div className="search">
        <div className="search__group">
          <input 
            className="search__input" 
            type="searchInput" 
            name="searchInput" 
            id="searchInput" 
            onChange={handleInputChange}
            placeholder="O Que Você Busca?"
          />
          <button 
            className="search__btnSubmit" 
            type="submit"
            onClick={handleSearchSubmit}
          >Buscar</button>
        </div>
      </div>
    )
    
}

export default Search