import { useState } from "react";
import { createContext } from "react";

const DarkContext = createContext();

// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark((state) => !state);
  };

  return (
    <DarkContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </DarkContext.Provider>
  );
};

export { DarkContext, AppProvider };
