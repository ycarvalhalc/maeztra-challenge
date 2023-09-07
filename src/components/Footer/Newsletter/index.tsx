import { useState } from "react"
import "./index.css"

const Newsletter = () => {
  const [email, setEmail] = useState<string>("")

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handleNewsletterSubmit = () => {
    console.log("email => ", email)
    /* Lógica para gravar no banco de dados.*/
  }

  return (
    <div className="newsletter">
      <div className="newsletter__wrapper">
        <h3 className="newsletter__title">Receba Nosa Newsletter</h3>
        <div className="newsletter__group">
          <input 
            className="newsletter__input" 
            type="email" 
            name="email" 
            id="email" 
            onChange={handleInputChange}
            placeholder="Digite seu e-mail"
          />
          <button 
            className="newsletter__btnSubmit" 
            type="submit"
            onClick={handleNewsletterSubmit}
          >Enviar</button>
        </div>
      </div>
    </div>
  )
}

export default Newsletter