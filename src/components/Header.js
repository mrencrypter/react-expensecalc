import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component
{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="col-6 header-content">
                <div className="header-title">Balance:<span className="header-amount">{this.props.totalIncome - this.props.totalExpense}</span></div>
                <div className="header-title">Total Income:<span className="header-amount">{this.props.totalIncome}</span></div>
                <div className="header-title">Total Expense:<span className="header-amount">{this.props.totalExpense}</span></div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        totalIncome: state.expense.total.income,
        totalExpense: state.expense.total.expense
    }
}

export default connect(mapStateToProps)(Header);