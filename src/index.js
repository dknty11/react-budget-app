import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import { addExpense } from './actions/expenses';
// import { setTextFilter } from './actions/filters';
import './index.css';

import * as serviceWorker from './serviceWorker';

const store = configureStore();

store.dispatch(addExpense({ description: 'Rent', amount: 123, createAt: 1234 }))
store.dispatch(addExpense({ description: 'Water bill', amount: 234, createAt: 12345 }))
store.dispatch(addExpense({ description: 'Gas bill', amount: 345, createAt: -123456 }))
store.dispatch(addExpense({ description: 'Breakfast', amount: 456, createAt: 1234567 }))

// store.dispatch(editExpense( expenseOne.expense.id, { amount: 50 }))
// store.dispatch(removeExpense(expenseOne.expense.id))

// store.dispatch(setTextFilter('breakfast'))
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate(123));
// store.dispatch(setStartDate(123));
// store.dispatch(setEndDate());

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
