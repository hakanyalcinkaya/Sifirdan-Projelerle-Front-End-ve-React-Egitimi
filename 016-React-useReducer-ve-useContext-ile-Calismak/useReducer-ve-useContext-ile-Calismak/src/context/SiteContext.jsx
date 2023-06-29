import { createContext, useReducer } from "react";
import { countReducer, intialCountState } from "../reducer/counter";
import { initial, todoReducer } from "../reducer/todo";

const SiteContext = createContext();

function SiteContextProvider({ children }) {
  const [count, counterDispatch] = useReducer(countReducer, intialCountState)
  const [todos, todoDispatch] = useReducer(todoReducer, initial)

  const context = { 
    counter: { state: count, dispatch: counterDispatch },
    todos: { state: todos, dispatch: todoDispatch } 
  }

  return <SiteContext.Provider value={context}>
    {children}
  </SiteContext.Provider>
}

export { SiteContext, SiteContextProvider }