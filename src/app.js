import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import './styles/style.scss'
import 'normalize.css/normalize.css'
import {addExpense} from './actions/expenses'
import {setTextFilter} from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import {Provider} from 'react-redux';


const printFilterobject = () => {
    const state = store.getState();
    console.log("getVisibleExpenses", getVisibleExpenses(state.expenses, state.filters));
};

const store = configureStore();

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(addExpense({ description: 'Water Bill', amount: 4500, createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 120, createdAt: 2000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 1250000, createdAt: 3000 }));
/*
store.dispatch(setTextFilter('Water'));
printFilterobject();
setTimeout(() => {
    store.dispatch(setTextFilter('Bill'));
}, 2000);
*/

const jsx = (
    <Provider store={store}><AppRouter /></Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
