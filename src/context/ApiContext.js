import { useState, createContext } from "react";

const ApiContext = createContext();

function ApiContextProvider({children}) {
  // const [category, setCategory] = useState('health');
  const [list, setList] = useState([]);
  const [activeLink, setActiveLink] = useState('home');
  const [loading, setLoading] = useState(true)
  return(
    <ApiContext.Provider value={{list, setList, loading, setLoading, activeLink, setActiveLink}}>
      {children}
    </ApiContext.Provider>
  );
}

export {ApiContextProvider, ApiContext}