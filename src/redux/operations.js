import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { nanoid } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// const tokenValue = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2IzMmQ3ZDI2NTFmZTAwMTZjNjgzZTciLCJpYXQiOjE2NzI2ODkzMjl9.IYT6wVHy_l5RjavytgVkeQ1rfMDhTrVQlV6rGvaKRTs";






// export const userRegister = createAsyncThunk(
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.post('/users/signup', {
//         "name": "Oleh Oleh",
//         "email": "oleh@mail.com",
//         "password": "QWEQWE"
//       });
//       console.log("UserRegister");
//       return response.data
//     } catch (e) {return thunkAPI.rejectWithValue(e.message)}
//   }
// );


// export const userLogin = createAsyncThunk(
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.post('/users/login', {
//         "name": "Oleh Oleh",
//         "email": "oleh@mail.com",
//         "password": "QWEQWE"
//       });
//       console.log("UserLogin");
//       return response.data
//     } catch (e) {return thunkAPI.rejectWithValue(e.message)}
//   }
// );








export const fetchContacts = createAsyncThunk(
  'fetchContacts',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.get('/contacts', credentials);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'deleteContact',
  async (contactID, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactID}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const setContact = createAsyncThunk(
  'tasks/addTask',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', {
        // token: tokenValue,
        // id: nanoid(),
        name: contact.name,
        number: contact.number,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
