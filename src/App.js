import React from 'react';

import Header from './components/Header';
import AddMoney from './components/AddMoney';
import ExpenseContainer from './components/ExpenseContainer';

import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app">
                <h2 style={{ textAlign: 'center' }}>Expense Calculator</h2>
                <div className="container">
                    <div className="col-12 d-flex justify-content-center header-container">
                        <Header/>
                    </div><hr />
                    <div className="col-12 d-flex justify-content-center">
                        <AddMoney/>
                    </div><hr />
                    <div className="col-12">
                        <ExpenseContainer/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;