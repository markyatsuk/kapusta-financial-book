import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://finantial-book-kapusta.herokuapp.com/api';

const setBalance = createAsyncThunk('/users/balance', async credentials => {
  try {
    const { data } = await axios.put('/users/balance', credentials);
    return data;
  } catch (error) {
    console.log(error);
  }
});

const getTransactions = createAsyncThunk('/transactions', async credentials => {
  try {
    const { data } = await axios.get('/transactions', credentials);
    return data;
  } catch (error) {
    console.log(error);
  }
});

const addTransaction = createAsyncThunk('/transactions', async credentials => {
  try {
    const { data } = await axios.post('/transactions', credentials);
    return data;
  } catch (error) {
    console.log(error);
  }
});

const deleteTransaction = createAsyncThunk(
  '/transactions/id',
  async credentials => {
    try {
      const { data } = await axios.delete(
        `/transactions/${credentials.id}`,
        credentials,
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  },
);

const getTransactionsByType = createAsyncThunk(
  '/transactions/report/:type',
  async credentials => {
    try {
      const { data } = await axios.get(
        `/transactions/report/${credentials.type}`,
        credentials,
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  },
);

const getFullTransactions = createAsyncThunk(
  '/transactions/report/full',
  async credentials => {
    try {
      const { data } = await axios.get(
        '/transactions/report/full',
        credentials,
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  },
);

const transactionsOperations = {
  setBalance,
  getTransactions,
  addTransaction,
  deleteTransaction,
  getTransactionsByType,
  getFullTransactions,
};
export default transactionsOperations;
