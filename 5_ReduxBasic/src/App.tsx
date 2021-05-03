import React from 'react';
import './App.css';
import {credit1AC, credit2AC, debitAC, setBalanceAC, updateBalanceAC} from "./Redux/Reducer";
import {useDispatch, useSelector} from "react-redux";
import {reducer} from "./Redux/Reducer";
import {} from "./Redux/Store"


// -----------------------------STORE with redux dev tool------------------
import { createStore, compose } from "redux";

  declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, undefined, composeEnhancers());
//@ts-ignore
window.store = store;

// ---------------------------------------------------------------------


function App() {

    const balance=useSelector<any>(state=>state.number)
    const dispatch=useDispatch()

    const updateBalance = function handler() {
      dispatch(updateBalanceAC())
   }
   const credit1 = function handler() {
      dispatch(credit1AC())
   }
   const credit2 = function handler() {
      dispatch(credit2AC())
   }
   const setBalance = function handler() {
      dispatch(setBalanceAC())
   }
   const debit = function handler() {
      dispatch(debitAC())
   }


  return (
    <div className="App">

       <div> balance:{ balance } </div>


    <button onClick={updateBalance}>updateBalanceAC</button>
    <button onClick={credit1}>credit1</button>
    <button onClick={credit2}>credit2</button>
    <button onClick={setBalance}>setBalance</button>
    <button onClick={debit}>debit</button>
    </div>
  );
}

export default App;



