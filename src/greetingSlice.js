import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchGreeting = createAsyncThunk(
  'greeting/fetchGreeting',
  async () => {
    console.log("in slice")
    const response = await fetch('http://localhost:3000/api/random_greeting');
    console.log("in slice after")
    const data = await response.json();
    console.log("data", data)
    return data.greeting;
  },
);

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    value: '',
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreeting.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchGreeting.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.value = action.payload;
        console.log("in slice", action)
      })
      .addCase(fetchGreeting.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default greetingSlice.reducer;
