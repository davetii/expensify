export const setTextFilter = ( text) => ({
    type: 'EDIT_TEXT_FILTER', text
});

export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

export const setStartDate = (newDate) => ({
    type: 'SET_START_DATE', newDate
});

export const setEndDate = (newDate) => ({
    type: 'SET_END_DATE', newDate
});
