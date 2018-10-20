import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import './styles/style.scss'
import 'normalize.css/normalize.css'
import {addExpense} from './actions/expenses'
import {setTextFilter} from './actions/filters'
import getVisibleExpenses from './selectors/expenses'


const printFilterobject = () => {
    const state = store.getState();
    console.log("getVisibleExpenses", getVisibleExpenses(state.expenses, state.filters));
};

const store = configureStore();

store.subscribe(() => {
    console.log(store.getState());
    /*
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
    */
});

store.dispatch(addExpense({ description: 'Water Bill', amount: 120, createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 120, createdAt: 2000 }));
store.dispatch(setTextFilter('Water'));
printFilterobject();




ReactDOM.render(<AppRouter />, document.getElementById('app'));
