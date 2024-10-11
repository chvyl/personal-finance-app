import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import ExpenseForm from './ExpenseForm';

function App() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    const response = await axios.get('http://localhost:5000/api/expenses');
    setExpenses(response.data);
  };

  const addExpense = async (expense) => {
    await axios.post('http://localhost:5000/api/expenses', expense);
    fetchExpenses(); // Cập nhật lại danh sách chi tiêu sau khi thêm
  };

  const totalAmount = expenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Personal Finance Manager</h1>
        <ExpenseForm onAddExpense={addExpense} />
        <h2>Your Expenses</h2>
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>
              {expense.description} ({expense.category}): {expense.amount} VNĐ
            </li>
          ))}
        </ul>
        <h3>Total: {totalAmount} VNĐ</h3>
      </header>
    </div>
  );
}

export default App;
