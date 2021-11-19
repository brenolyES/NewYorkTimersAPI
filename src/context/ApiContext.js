import { useState, createContext } from "react";

const ApiContext = createContext();

function ApiContextProvider({children}) {
  const [category, setCategory] = useState('health');
  const [list, setList] = useState([]);
  return(
    <ApiContext.Provider value={{category, setCategory, list, setList}}>
      {children}
    </ApiContext.Provider>
  );
}

export {ApiContextProvider, ApiContext}