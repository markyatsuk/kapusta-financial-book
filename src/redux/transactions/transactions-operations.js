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

const fetchCurrentBalance = createAsyncThunk(
  '/balance/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const balance = state.wallet.wallet.balance;
    if (balance === null) {
      return thunkAPI.rejectWithValue();
    }
    try {
      const { data } = await axios.get('/auth/current');
      return data;
    } catch (error) {
      console.log(error);
    }
  },
);
const transactionsOperations = {
  setBalance,
};
export default transactionsOperations;
