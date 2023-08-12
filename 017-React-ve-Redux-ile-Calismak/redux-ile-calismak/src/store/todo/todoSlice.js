import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.unshift(action.payload)
      console.log("add:::", state, action)
    }, 
    removeTodo(state, action) {
      state.splice(action.payload, 1)
    }
  }
})

export const { addTodo, removeTodo } = todoSlice.actions
export default todoSlice.reducer