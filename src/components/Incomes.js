import React from 'react';
import { connect } from 'react-redux';

import { deleteItem } from '../actions';

class Income extends React.Component {
    constructor(props) {
        super(props);
    }

    renderList() {
        return this.props.incomes.map((income) => {
            return (
                <li className="list-group-item item-content" key={income.id}>
                    <span className="item-comment mx-2">{income.comment}</span>:
                        <span className="item-amount mx-2">{income.amount}</span>
                    <span className="item-action mx-2"><a href="#" onClick={e => this.props.deleteItem(income.id, "income")}>Remove</a></span>
                </li>
            )
        });
    }

    render() {
        return (
            <div className="income-list">
                <h5>Your Incomes:</h5>
                <ul className="list-group-flush">
                    {this.renderList()}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        incomes: state.expense.incomes,
        deleteItem
    }
}

export default connect(mapStateToProps, { deleteItem })(Income);