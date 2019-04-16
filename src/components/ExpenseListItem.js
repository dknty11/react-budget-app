import React from 'react';
import { Link } from 'react-router-dom'

const ExpenseListItem = ({ id, description, amount, createAt }) => (
  <div>
    <h2>List expenses item:</h2>
    <Link to={`/edit/${id}`}>
      <p>description: {description}</p>
    </Link>
    <p>amount: {amount}</p>
    <p>createAt: {createAt}</p>
  </div>
)

export default ExpenseListItem;