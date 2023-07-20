import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  loading: false,
  error: null ,
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {

  },
});

export default bookSlice.reducer;