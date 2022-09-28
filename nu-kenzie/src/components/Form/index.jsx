import './style.css'
import { Button } from "../Button";
import { useState } from "react";

export const Form = ({ optionList, addTransaction}) => {
    
  
  const [formData, setFormData] = useState({
    description: "",
    moneyAmount: 0,
    choice: optionList[0]
  })
  
  const onSubmit = (e) => {
  e.preventDefault();
  if(formData.description.length){
    addTransaction(formData)
  } else {
    alert('Dados obrigatórios!')
  }
};


  return (
    <form className="form" onSubmit={onSubmit}>
      <label htmlFor="description">Descrição</label>
      <input
        className='inputs'
        type="text"
        id="description"
        placeholder="Digite aqui sua descrição"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value})}
      />
      
      <small>Ex: Compras de roupas</small>

      <div className='mainDiv'>
      <div className='divs'> 
        <label htmlFor="moneyAmount">Valor</label>
        <input  
        type="number" 
        id="moneyAmount" 
        placeholder="1" 
        value={formData.moneyAmount}
        onChange={(e) => setFormData({...formData, moneyAmount:e.target.value})}
        />
        </div>
        <div className='divs2'>
        <label htmlFor="select">Tipo de valor</label>
        <select 
        onChange={(e) => setFormData({...formData, choice: e.target.value})} 
        defaultValue={formData.choice}
        >
          {optionList.map((choice, index) => (
              <option key={index} value={choice}>
                {choice}
              </option>
          ))}
          </select>
        </div>
      </div>
          
      <Button type='submit' className='button-form' name={'Inserir valor'} />
    </form>
  );
}