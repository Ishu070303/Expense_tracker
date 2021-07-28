import React,{useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState'

export const TranscationList = () => {
    const { transactions, deletetransactions } =useContext(GlobalContext);
    const sign = transactions.amount < 0 ? '-' : '+'

    // console.log(context);
    return (
        <div>
          <h3>History</h3>
          <ul  className='list'>
            {transactions.map(transaction => {
              return(
                 <li className={transaction.amount < 0 ? 'minus' : 'plus'} key={transaction.id} > 
                 {transaction.text}<span>{sign}${Math.abs(transaction.amount)}</span><button  onClick={() => deletetransactions(transaction.id)} className='delete-btn'>X</button>
                 </li>
              )
            })}
           
          </ul>  
        </div>
    )

}
export default TranscationList