import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';
axios.defaults.baseURL = 'https://finantial-book-kapusta.herokuapp.com/api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const googleApi = createAsyncThunk('/auth/google', credentials => {
  try {
    return credentials;
  } catch (error) {
    console.log('все плохо');
  }
});

const register = createAsyncThunk('/auth/register', async credentials => {
  try {
    const { data } = await axios.post('/auth/register', credentials);
    // token.set(data.token);
    Notiflix.Notify.success('Success! Now you can login ✔', {
      timeout: 2000,
    });
    return data;
  } catch (error) {
    console.log(error);
    Notiflix.Notify.failure('This user is already registered ⚠', {
      timeout: 2000,
    });
  }
});

const logIn = createAsyncThunk('/auth/login', async credentials => {
  try {
    const { data } = await axios.post('/auth/login', credentials);
    token.set(data.token);
    Notiflix.Notify.success('Welcome ✔', {
      timeout: 2000,
    });
    return data;
  } catch (error) {
    console.log(error);
    Notiflix.Notify.failure('Wrong login or password ❗', {
      timeout: 2000,
    });
    return error.rejectWithValue();
  }
});

const logOut = createAsyncThunk('/auth/logout', async () => {
  try {
    await axios.post('/auth/logout');
    token.unset();
  } catch (error) {
    console.log(error);
  }
});

const fetchCurrentUser = createAsyncThunk(
  '/auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/auth/current');
      return data;
    } catch (error) {
      console.log(error);
    }
  },
);
const logout = createAsyncThunk('/auth/logout', async () => {});
const authOperations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
  googleApi,
  logout,
};
export default authOperations;
