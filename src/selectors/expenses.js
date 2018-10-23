import moment from 'moment';

export default (expenses, { text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const createdMomentAt = moment(expense.createdAt);

        const startDateMatch = startDate ? startDate.isSameOrBefore(createdMomentAt, 'day'): true;
        const endDateMatch = endDate ? endDate.isSameOrBefore(createdMomentAt, 'day'): true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        console.log('sortBy: ' + sortBy);
        if (sortBy ==='date') { return a.createdAt < b.createdAt ? 1 : -1; }
        if (sortBy === 'amount') { return a.amount < b.amount ? -1 : 1; }
    });
};
