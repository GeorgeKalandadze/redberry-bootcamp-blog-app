import { createContext, useContext, useEffect, useState } from "react";
import { useSessionStorage } from "../hooks/useSessionStorage";
import axios from "axios";
import axiosClient from "../config/axiosClient";
const info = {
  title: "",
  description: "",
  image: {},
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
    const [isLogged, setIsLogged] = useSessionStorage("isLoggedin", "");
    const [categories, setCategories] = useState([]);
    const [blogs, setBlogs] = useState([]);


    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axiosClient.get("/blogs");
          console.log(response);
          setBlogs(response.data.data);
        } catch (error) {
          console.error("Error fetching data: ", error);
        }
      };

      fetchData();
    }, []);

    


     useEffect(() => {
       const fetchData = async () => {
         try {
           const response = await axios.get(
             "https://api.blog.redberryinternship.ge/api/categories"
           );
           console.log(response.data.data);
           setCategories(response.data.data);
         } catch (error) {
           console.error("Error fetching data: ", error);
         }
       };

       fetchData();
     }, []);




    return (
      <AppContext.Provider
        value={{
          isLogged,
          setIsLogged,
          info: store,
          setStore,
          setValidationErrors,
          validationErrors,
          categories,
          blogs,
        }}
      >
        {children}
      </AppContext.Provider>
    );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};