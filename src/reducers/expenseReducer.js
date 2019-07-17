import { combineReducers } from 'redux';

// sample object
// {
//     id: 1,
//     type: income/expense,
//     comment: variableDeclaration,
//     amount: 100
// }

const intialState = {
    incomes: [],
    expenses: [],
    total: {
        income: 0,
        expense: 0
    }
}

let idGenerator = 0;

const expenseReducer = (state = intialState, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            if (action.payload.type === "income") {
                return {
                    ...state,
                    incomes: [...state.incomes, { id: idGenerator++, ...action.payload }],
                    total: {
                        ...state.total,
                        income: state.total.income + action.payload.amount
                    }
                }
            }
            else {
                return {
                    ...state,
                    expenses: [...state.expenses, { id: idGenerator++, ...action.payload }],
                    total: {
                        ...state.total,
                        expense: state.total.expense + action.payload.amount
                    }
                }
            }
        case "DELETE_ITEM":
            if (action.payload.type === "income") {
                return {
                    ...state,
                    incomes: state.incomes.filter(item => item.id !== action.payload.itemId),
                    total: {
                        ...state.total,
                        income: state.total.income - state.incomes.find(item => item.id === action.payload.itemId).amount
                    }
                }
            }
            else {
                return {
                    ...state,
                    expenses: state.expenses.filter(item => item.id !== action.payload.itemId),
                    total: {
                        ...state.total,
                        expense: state.total.expense - state.expenses.find(item => item.id === action.payload.itemId).amount
                    }
                }
            }
        default:
            return state;
    }
}

export default combineReducers({
    expense: expenseReducer
});