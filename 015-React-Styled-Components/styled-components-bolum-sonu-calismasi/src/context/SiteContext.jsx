import { createContext, useState } from "react";

export const SiteContext = createContext();

export function SiteContextProvider({ children }) {
  const [themeName, setThemeName] = useState("light");
  
  function handleTheme() {
    setThemeName((prev) => {
      const themeInfo = prev === "light" ? "dark" : "light";
      return themeInfo;
    });
  }

  return (
    <SiteContext.Provider value={{ themeName, handleTheme }}>
      {children}
    </SiteContext.Provider>
  );
}
