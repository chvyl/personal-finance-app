import React, { useState } from 'react';

const ExpenseForm = ({ onAddExpense }) => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Food'); // Thêm trạng thái cho loại

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddExpense({ amount, description, category }); // Cập nhật để thêm loại chi tiêu
    setAmount('');
    setDescription('');
    setCategory('Food'); // Đặt lại loại về mặc định
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '20px 0' }}>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        required
        style={{ margin: '0 10px', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
        style={{ margin: '0 10px', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)} style={{ margin: '0 10px', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}>
        <option value="Food">Food</option>
        <option value="Transportation">Transportation</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Utilities">Utilities</option>
        <option value="Other">Other</option>
      </select>
      <button type="submit" style={{ padding: '10px 15px', borderRadius: '4px', border: 'none', backgroundColor: '#4caf50', color: 'white' }}>
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
