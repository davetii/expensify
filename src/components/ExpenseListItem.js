import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {removeExpense} from '../actions/expenses'


const ExpenseListItem = ({dispatch, description, amount, id, createdAt}) =>
  (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>{amount}- {description} - {createdAt}</p>
        <button onClick={() => {
            dispatch(removeExpense({id: id }));
        }}>Remove</button>
    </div>
    );

const mapStateToProps = (state) => {
    return { expenses: state.expenses };
};

export default connect(mapStateToProps)(ExpenseListItem);