import React, { useState, useEffect } from 'react';

const ExpenseForm = ({ onAddExpense, expenseToEdit, onEditExpense }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');

  useEffect(() => {
    if (expenseToEdit) {
      setDescription(expenseToEdit.description);
      setAmount(expenseToEdit.amount);
      setCategory(expenseToEdit.category);
    } else {
      setDescription('');
      setAmount('');
      setCategory('Food');
    }
  }, [expenseToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const amountValue = parseFloat(amount);
    if (!description || isNaN(amountValue) || amountValue <= 0) {
        alert('Please provide valid values for description and amount.');
        return;
    }
    const expense = { description, amount: amountValue, category };
    if (expenseToEdit) {
      onEditExpense(expenseToEdit._id, expense);
    } else {
      onAddExpense(expense);
    }
    // Đặt lại form
    setDescription('');
    setAmount('');
    setCategory('Food');
};

  

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" required />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Food">Food</option>
        <option value="Transportation">Transportation</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Utilities">Utilities</option>
      </select>
      <button type="submit">{expenseToEdit ? 'Edit Expense' : 'Add Expense'}</button>
    </form>
  );
};

export default ExpenseForm;
