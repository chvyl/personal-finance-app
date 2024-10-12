import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import ExpenseForm from './ExpenseForm';
import { FaUtensils, FaBus, FaFilm, FaBolt, FaQuestion } from 'react-icons/fa';

// Hàm trả về biểu tượng phù hợp dựa trên category
const getCategoryIcon = (category) => {
  switch (category) {
    case 'Food':
      return <FaUtensils />;
    case 'Transportation':
      return <FaBus />;
    case 'Entertainment':
      return <FaFilm />;
    case 'Utilities':
      return <FaBolt />;
    default:
      return <FaQuestion />;
  }
};

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
      </header>

      <div className="expense-list">
        <h2>Your Expenses</h2>
        <ul>
          {expenses.map((expense, index) => (
            <li key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0' }}>
              <span>
                {getCategoryIcon(expense.category)} {/* Thêm biểu tượng */}
                {' '}{expense.description} ({expense.category})
              </span>
              <span>{expense.amount} VNĐ</span>
            </li>
          ))}
        </ul>
        <h3 className="total-amount">Total: {totalAmount} VNĐ</h3>
      </div>
    </div>
  );
}

export default App;
