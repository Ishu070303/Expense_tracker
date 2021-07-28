import React from 'react'
import './App.css';
import { Header } from './componets/Header';
import { Balance } from './componets/Balance';
import {IncomeExpences} from './componets/IncomeExpences';
import {TranscationList} from './componets/TranscationList';
import { AddTransaction } from './componets/AddTransaction';
import { Globalprovier } from './Context/GlobalState';

function App() {
  return (
    <Globalprovier>
      <Header />
      <div className='container'>
        <Balance /> 
        <IncomeExpences />
        <TranscationList />
        <AddTransaction />
      </div>
    </Globalprovier>
  );
}

export default App;
