import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';
axios.defaults.baseURL = 'https://finantial-book-kapusta.herokuapp.com/api';

const transactionsOperations = {};
export default transactionsOperations;
