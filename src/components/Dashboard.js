import React, { useEffect, useState } from 'react';
import axios from 'axios';
// Import các biểu tượng nếu bạn sử dụng chúng
import { Container, Grid, Typography } from '@mui/material';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import ExpenseForm from './ExpenseForm';

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);
  const [expenseToEdit, setExpenseToEdit] = useState(null);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/expenses');
      setExpenses(response.data);
    } catch (error) {
      console.error("Error fetching expenses:", error);
    }
  };

  const addExpense = (expense) => {
    // Logic thêm chi phí vào danh sách
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  const editExpense = (expense) => {
    // Logic chỉnh sửa chi phí
    setExpenses((prevExpenses) => 
      prevExpenses.map((exp) => (exp.id === expense.id ? expense : exp))
    );
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10}>
          <Navbar />
          <header style={{ marginBottom: '20px' }}>
            <Typography variant="h4" component="h1" gutterBottom>
              Personal Finance Manager
            </Typography>
            <ExpenseForm 
              onAddExpense={addExpense} 
              expenseToEdit={expenseToEdit} 
              onEditExpense={editExpense} 
            />
          </header>
          {/* Đồ thị và danh sách chi phí giữ nguyên */}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
