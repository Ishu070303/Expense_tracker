import React,{createContext, useReducer} from 'react';
import AppReducer from './AppReducer'

//Intial state
const intialState = {
    transactions:[
        {id:1, text : 'flower', amount:-20},
        {id:2, text : 'salary', amount:300},
        {id:3, text : 'Book', amount:-10},
        {id:4, text : 'Camera', amount:150}
    ]
}

//create context
export const GlobalContext = createContext(intialState)

//Provider
export const Globalprovier = ( props ) => {
    const [state, dispatch] = useReducer(AppReducer, intialState);

    //Actions
    function deletetransactions(id){
        console.log(id);
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    function addtransactions(transactions){
        console.log(transactions);
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transactions
        })
    }

    return(
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deletetransactions,
            addtransactions
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}