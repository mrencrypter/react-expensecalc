import React from 'react';

import Incomes from './Incomes';
import Expenses from './Expenses';

export default class ExpenseContainer extends React.Component
{
    constructor(props){
        super(props);
        //console.log(this.props);
    }

    render(){
        return (
            <div className="col-12">
                {/* <h2>Container works</h2> */}
                <div className="col-12 d-flex">
                    <div className="col-6">
                        <Incomes />
                    </div>
                    <div className="col-6">
                        <Expenses />
                    </div>
                </div>
            </div>
        );
    }
}