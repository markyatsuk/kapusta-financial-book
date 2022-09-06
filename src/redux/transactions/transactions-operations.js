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

const transactionsOperations = {
  setBalance,
};
export default transactionsOperations;
