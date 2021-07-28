import React,{useContext, useState} from 'react'
import { GlobalContext } from '../Context/GlobalState';

export const AddTransaction = () => {
    const[text,setText] =useState(['']);
    const[amount,setAmount] = useState(0);

    const { addtransactions } = useContext(GlobalContext);

    const onsubmit = (e) => {
        e.preventDefault();

        const newTransactions = {
            id : Math.floor(Math.random() * 10000000000),
            text,
            amount : +amount
        }


        addtransactions(newTransactions);
    }

    return (
        <div>
           <h3>Add new Transaction</h3>
           <form  onSubmit={onsubmit}>
               <div className='form-control'>
                   <label htmlFor='text'>Text</label>
                   <input type='text' value={text} onChange={(e)=> setText(e.target.value)} placeholder='Enter text....' />

               </div>
               <div className='form-control'>
                   <label htmlFor='amount'>
                       Amount <br />
                       (negative - expense, positive - income)
                   </label>
                   <input type='number' value={amount} onChange={(e)=> setAmount(e.target.value)} placeholder='Enter Amount...' />
               </div>
               <button className='btn'>Add Transaction</button>
           </form>
            
        </div>
    )
}
