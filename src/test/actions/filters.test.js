import {setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate} from "../../actions/filters";
import moment from 'moment';


test('should generate start date', () => {
    const v = moment(0);
    const action = setStartDate(v);
    expect(action).toEqual({
        type: 'SET_START_DATE', startDate: v
    });


});

test('should generate end date', () => {
    const v = moment(0);
    const action = setEndDate(v);
    expect(action).toEqual({
        type: 'SET_END_DATE', endDate: v
    });
});

test('ensure text filter returns expected', () => {
    const action = setTextFilter('test');
    expect(action).toEqual({
        type: 'EDIT_TEXT_FILTER', text: 'test'
    });
});

test('ensure text filter returns expected', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test('ensure sortByDate returns expected', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});