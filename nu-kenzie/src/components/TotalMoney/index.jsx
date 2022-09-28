import './style.css'

export const TotalMoney = ({listTransactions}) => {
    
        const total = listTransactions.reduce((acc, currentValue) =>{

            return currentValue.choice === "Entrada" ?  Number(currentValue.moneyAmount) + acc : Number(-currentValue.moneyAmount) + acc
        }, 0)
        
    return(
        <div className='money-box'> 
            <div className='descriptions'>
                <h3>Valor total:</h3>
                <p>O valor se refere ao saldo</p>
            </div>

            <div className='money'>
            <span>
                {total}
            </span>            
            </div>
        </div>
    )
}