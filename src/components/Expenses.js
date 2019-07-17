import React from 'react';
import { connect } from 'react-redux';

import { deleteItem } from '../actions';

class Expenses extends React.Component {
    constructor(props) {
        super(props);
    }

    renderList() {
        return this.props.expenses.map((expense) => {
            return (
                <li className="list-group-item item-content" key={expense.id}>
                    <span className="item-comment mx-2">{expense.comment}</span>:
                        <span className="item-amount mx-2">{expense.amount}</span>
                    <span className="item-action mx-2"><a href="#" onClick={e => this.props.deleteItem(expense.id, "expense")}>Remove</a></span>
                </li>
            )
        });
    }

    render() {
        return (
            <div className="income-list">
                <h5>Your Expenses:</h5>
                <ul className="list-group-flush">
                    {this.renderList()}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        expenses: state.expense.expenses,
        deleteItem
    }
}

export default connect(mapStateToProps, { deleteItem })(Expenses);