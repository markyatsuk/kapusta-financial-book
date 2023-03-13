import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';
axios.defaults.baseURL = 'https://finance-book-server.onrender.com/api';

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
    const { data } = await axios.get(`/transactions${credentials}`);
    return data;
  } catch (error) {
    console.log(error);
  }
});

const addTransaction = createAsyncThunk('/transactions', async credentials => {
  try {
    const { data } = await axios.post('/transactions', credentials);
    console.log(data);
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
  '/transactions/report/type',
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
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `/transactions/report/full?month=${credentials.month}&year=${credentials.year}`,
        credentials,
      );
      if (data.transactions.length === 0) {
        Notiflix.Notify.warning('You have no transactions for this month ⚠', {
          timeout: 1500,
        });
      }
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue();
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
