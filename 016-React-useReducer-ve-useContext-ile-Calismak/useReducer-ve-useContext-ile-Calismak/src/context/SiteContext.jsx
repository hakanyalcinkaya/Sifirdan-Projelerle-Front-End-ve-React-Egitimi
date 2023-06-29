import { createContext, useReducer } from "react";
import { countReducer, intialCountState } from "../reducer";

const SiteContext = createContext();

function SiteContextProvider({ children }) {
  const [count, dispatch] = useReducer(countReducer, intialCountState)

  const context = { counter: { state: count, dispatch } }

  return <SiteContext.Provider value={context}>
    {children}
  </SiteContext.Provider>
}

export { SiteContext, SiteContextProvider }