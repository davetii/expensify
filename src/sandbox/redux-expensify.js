import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
    ) => ({
     type: 'ADD_EXPENSE',
    expense: {
         id: uuid(),
        description, note, amount, createdAt
    }
});

const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE', id
});

const editExpense = (id, updates = {}) => ({
    type: 'EDIT_EXPENSE', id, updates
});

const editFilter = (updates = {}) => ({
    type: 'EDIT_FILTER', updates
});

const setTextFilter = ( text) => ({
    type: 'EDIT_TEXT_FILTER', text
});

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

const setStartDate = (newDate) => ({
    type: 'SET_START_DATE', newDate
});

const setEndDate = (newDate) => ({
    type: 'SET_END_DATE', newDate
});


const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map(
                (item) => {
                    if(item.id === action.id) {
                        return {
                            ...item, ...action.updates
                        }
                    }
                    return item;
                }
            );
        default:
            return state;
    }
};


const filtersReducerDefaultState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
};

const filterReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        case 'EDIT_FILTER':
            return {...state, ...action.updates}
        case 'EDIT_TEXT_FILTER':
            return {...state, text: action.text}
        case 'SORT_BY_AMOUNT':
            return {...state, sortBy: 'amount'}
        case 'SORT_BY_DATE':
            return {...state, sortBy: 'date'}
        case 'SET_START_DATE':
            return {...state, startDate: action.newDate}
        case 'SET_END_DATE':
            return {...state, endDate: action.newDate}
        default:
            return state;
    }
};


const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        console.log('sortBy: ' + sortBy);
        if (sortBy ==='date') { return a.createdAt < b.createdAt ? 1 : -1; }
        if (sortBy === 'amount') { return a.amount < b.amount ? 1 : -1; }
    });
};

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
   console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'rent', amount: 120, createdAt: 1000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 222.20, createdAt: -1000 }));
const expenseThree = store.dispatch(addExpense({ description: 'Ammo', amount: 19.20, createdAt: 100000 }));

//store.dispatch(setStartDate(5));
//store.dispatch(setEndDate(10001));
//store.dispatch(setTextFilter('ammo'));
store.dispatch(sortByAmount());
/*
store.dispatch(removeExpense({id: expenseOne.expense.id }));
store.dispatch(editExpense(expenseTwo.expense.id, {amount: 999}));
store.dispatch(editFilter({text:'rent'}));
store.dispatch(editFilter({text:''}));
store.dispatch(setTextFilter('randomg workds'));
store.dispatch(setTextFilter(''));

store.dispatch(sortByDate());
store.dispatch(setStartDate(125));
store.dispatch(setStartDate());
store.dispatch(setEndDate(12145));
store.dispatch(setEndDate());
*/

const demoState = {
    expenses : [{
            id: 'radnomid1',
            description: 'January Rent',
            note: 'Final payment of the address',
            amount: 1200,
            createdAt: 0
        }],
        filters: {
            text: 'rent',
            sortBy: 'amount',
            startDate: undefined,
            endDate: undefined
        }

};


//const user = { name: 'bob jones', age: '24'};
//console.log("user: ",{...user, location: 'detroit'});

//const a =  ['1','2']
//console.log([...a, '3']);

