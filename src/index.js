import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'
import './index.css';

import * as serviceWorker from './serviceWorker';

import { createStore, combineReducers } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 2 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({ count = 10 } = {}) => ({
  type: 'SET',
  count
})

const resetCount = ({ count = 0 } = {}) => ({
  type: 'RESET',
  count
})

// Create redux reducer
// 1. Reducers are pure functions
const expensesReducerDefautlState = {
  id: 'default id',
  description: 'unknown',
};

const filtersReducerDefautlState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const expensesReducer = (state = expensesReducerDefautlState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

const filtersReducer = (state = filtersReducerDefautlState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

// Store creation
const newStore = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);
console.log(newStore.getState())

const demoState = {
  expenses: [{
    id: 'random',
    description: 'I don;t know',
    note: 'This is a note',
    amount: 123213,
    createAt: Date().now
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
}

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT': 
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'SET':
      return {
        count: action.count
      }
    case 'RESET':
      return {
        count: action.count
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);

// Subscribe fire every time state changes
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
})

// Increment the count
store.dispatch(incrementCount({ incrementBy: 5 }));

//Decrement the count
store.dispatch(decrementCount({ decrementBy: 10 }));

// Set the counter
store.dispatch(setCount({ count: 100 }))

// Reset the count to 0
store.dispatch(resetCount());


ReactDOM.render(<AppRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
