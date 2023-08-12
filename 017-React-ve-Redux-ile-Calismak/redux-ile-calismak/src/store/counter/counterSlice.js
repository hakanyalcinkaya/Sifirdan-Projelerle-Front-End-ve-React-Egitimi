import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 100 }

const counterSlice = createSlice({
  name: "counter",
  // initialState,
  initialState: initialState,
  reducers: {
    increment(state) {
      console.log("increment", state)
      state.value++;
    },
    addMore(state, action) {
      console.log("addMore", state, action)
      console.log("addMore", action.payload)
      state.value += action.payload.item
    },
    reset(state) {
      return initialState
    }
  }
})

export const { addMore, increment, reset } = counterSlice.actions
export default counterSlice.reducer