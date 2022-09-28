import './style.css'
import Logo1 from '../../assets/Nu Kenzie (1).png'

import { Button } from '../../components/Button'

export const LandingPage = ({login} ) => {
    

    return (
        <div className='main'>
            <div className="div1">
                <img src={Logo1} alt="initial Page" />
                <h1>Centralize o controle das suas finanças</h1>
                <p>de forma rápida e segura</p>
                <Button className='button' onClick={login} name={"Iniciar"}/>
            </div>
        <div className="div2">
            <div className="elipse1">

            </div>
            <div className="elipse2">

            </div>
            <div className="elipse3">

            </div>

        </div >
      
    </div>
  )
}

