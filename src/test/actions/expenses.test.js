import {addExpense, editExpense, removeExpense} from "../../actions/expenses";

test('should setup remove expense', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE', id: '123abc'
    });
});

test('ensure edit expense updates as expedted', () => {
    const action = editExpense('123abc', {note: 'new note value'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE', id: '123abc', updates: {note: 'new note value'}
    });
});

test('ensure add expense return expedted', () => {
    const data = {
        description:'not rent', amount: 8000, createdAt: 4000, note: 'Not rent'
    };
    const action = addExpense(data);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...data,
            id: expect.any(String)
        }
    });
});

test('ensure add expense return expected with default', () => {
    const action = addExpense({});
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description : '',
            note : '',
            amount : 0,
            createdAt : 0   ,
            id: expect.any(String)
        }
    });
});




