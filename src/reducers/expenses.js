const expensesReducerDefautlState = [];

export default (state = expensesReducerDefautlState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ]
      /*
      Add action.expense to the array.
      We don't use state.push() because it will change the state value.
      We use concat instead
      return state.concat(action.expense)
      Another one is spread operator same as concat:
      [...array, object] describe above
      */
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id)
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.update
          };
        } else {
          return expense
        }
      })
    default:
      return state;
  }
}