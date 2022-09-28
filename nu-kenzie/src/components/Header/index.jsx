import './style.css'
import { Button } from '../Button'
import Logo from '../../assets/Nu Kenzie.png'


export const Header = ({logout}) => {
  
    return(
        <div className="header">
            <img src={Logo} alt="Logo" />
            <Button className={"default"} onClick={logout} name={'Início'} />   
        </div>
    )
}