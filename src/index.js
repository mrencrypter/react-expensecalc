import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import expenseReducer from './reducers/expenseReducer';
import App from './App';

ReactDOM.render(
    <Provider store={createStore(expenseReducer)}>
        <App />
    </Provider>,
    document.getElementById('root')
);
