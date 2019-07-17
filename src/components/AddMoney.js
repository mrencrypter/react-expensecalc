import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../actions';

class AddMoney extends React.Component {
    constructor(props) {
        super(props);

        this.selectRef = React.createRef();
        this.inputRef = React.createRef();
        this.commentRef = React.createRef();
    }

    onFormSubmit(e) {
        e.preventDefault();
        let item = {
            type: this.selectRef.current.value,
            comment: this.commentRef.current.value,
            amount: +this.inputRef.current.value
        };
        this.commentRef.current.value = '';
        this.inputRef.current.value = '';
        this.props.addItem(item);
    }

    render() {
        return (
            <div className="addmoney-content">
                <form className="form-inline" onSubmit={(e) => this.onFormSubmit(e)}>
                    <div className="form-group mx-3">
                        <select ref={this.selectRef} className="form-control">
                            <option value="income">Income</option>
                            <option value="expense">Expense</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input ref={this.commentRef} placeholder="Enter comment" className="form-control"></input>
                    </div>
                    <div className="form-group mx-3">
                        <input ref={this.inputRef} placeholder="Enter amount" className="form-control" name="amount"></input>
                    </div>
                    <button className="btn btn-primary" type="submit">Add</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        addItem
    }
}

export default connect(null, { addItem })(AddMoney);