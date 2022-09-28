import './style.css'
import { Button } from "../../Button"
import { FaTrash } from 'react-icons/fa'

export const Card = ({transaction, deleteTransaction, className}) => {
    return(
        
            <li className={className}>
            <div className='first'>
            <h3>
            {transaction.description}
            </h3>
            <option>
            {transaction.choice}
            </option>
            </div>
            <div className='second'>
            <span>{transaction.moneyAmount}</span>
            <Button className="icon-Button" onClick={() => deleteTransaction(transaction)} name={<FaTrash />} />
            </div>
            </li>   
    )
}