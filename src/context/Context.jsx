import { createContext, useContext } from "react";
import { useSessionStorage } from "../hooks/useSessionStorage";
const info = {
  title: "",
  description: "",
  image: "",
  author: "",
  publish_date: "",
  categories: [],
  email: "",
};

const AppContext = createContext({
  info: info,
});


export const AppProvider = ({children}) => {
     const [store, setStore] = useSessionStorage("info", info);
     const [validationErrors, setValidationErrors] = useSessionStorage('blogErrors',{})


    return (
      <AppContext.Provider
        value={{
          info: store,
          setStore,

          setValidationErrors,
          validationErrors,
        }}
      >
        {children}
      </AppContext.Provider>
    );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};