import './style.css'
import { Card } from "./Card";
import { FilterTransaction } from "./FilterTransaction";
import Empty from './Empty';


export const List = ({
  listTransactions,
  deleteTransaction,
  optionList,
  setFilter
}) => {
  return (
    <div className="list-Content">
      <div className='header-filter'>
        <h3>Resumo financeiro</h3>
        <div className='filters'>
          <FilterTransaction optionList={optionList} setFilter={setFilter} />
        </div>
      </div>

      {listTransactions.length ? (
        <ul>
          {listTransactions.map((transaction, index) => (
            <Card
              key={index}
              transaction={transaction}
              deleteTransaction={deleteTransaction}
              className={transaction.choice === 'Entrada' ? 'card-green' : 'card-grey'} />
          ))}
        </ul>
      ) : (
        <div className='empty-Content'>
        <h3>Você ainda não possui nenhum lançamento</h3>
        <Empty />
        <Empty />
        <Empty />

        </div>

      )}
    </div>
  );
};
