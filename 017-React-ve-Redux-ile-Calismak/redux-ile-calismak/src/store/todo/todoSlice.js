import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.unshift(action.payload)
      console.log("add:::", state, action)
    }
  }
})

export const { addTodo } = todoSlice.actions
export default todoSlice.reducer