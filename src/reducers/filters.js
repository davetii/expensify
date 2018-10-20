const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
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

export default filterReducer;