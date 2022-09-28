/* eslint-disable no-restricted-globals */
import './style.css'
import { Form } from '../../components/Form'
import { Header } from '../../components/Header'
import { useState } from 'react'
import { List } from '../../components/List'
import { TotalMoney } from '../../components/TotalMoney'

export const Dashboard = ({logout}) => {
  
  const [listTransactions, setListTransactions] = useState([])

  const optionList = ['Entrada', 'Despesa']

  const [filter, setFilter] = useState('')

  const newlistTransactions = listTransactions.filter((transaction) => filter === '' ? true : transaction.choice === filter)

  const addTransaction = (formData) => {
    if(
      !listTransactions.find(
        transaction => transaction.description.toLowerCase() === formData.description.toLowerCase()
      )
    ) {
      setListTransactions([ ...listTransactions, formData])
    } else {
      alert('Transação já cadastrada!')
    }
  }

  const deleteTransaction = (selectedTransaction) => {
    const filtered = listTransactions.filter(operation => operation !== selectedTransaction
    )
    if(confirm('deseja excluir essa transação?')){
      setListTransactions(filtered)
    }
  }
  
  return(

    <> 
    <Header logout={logout} />

    <div className='content'>
     <div className='data'>
      <Form optionList={optionList} addTransaction={addTransaction} name={"Insira um valor"}/>
      <TotalMoney listTransactions={listTransactions}/>
    </div>
    
      <List listTransactions={newlistTransactions} deleteTransaction={deleteTransaction} optionList={optionList} setFilter={setFilter}/>
    </div>
    </>

  )
}