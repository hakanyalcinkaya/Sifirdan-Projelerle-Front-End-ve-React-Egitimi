import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 100 },
  reducers: {
    increment(state) {
      state.value++;
    }
  }
})

export const { increment } = counterSlice.actions
export default counterSlice.reducer