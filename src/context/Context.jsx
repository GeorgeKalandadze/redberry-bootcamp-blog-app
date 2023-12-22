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
    const [email, setEmail] = useSessionStorage("email", "");
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

     const loginUser = async (email) => {
       try {
         const response = await axios.post(
           "https://api.blog.redberryinternship.ge/api/login",
           {
             email: email,
           },
           {
             headers: {
               Authorization: `Bearer${"282c0587589f7516edf61b215c828ba8047b67aabbe141c5d17ec45c0d624fd0"}`,
             },
           }
         );
         console.log("Login successful:", response);

         if (response.status === 204) {
           setIsLogged("isLogged");
         } else {
           setIsLogged("isNotLogged");
         }

         return response.data;
       } catch (error) {
         console.error("Error during login:", error.response);
         setIsLogged("isNotLogged");
       }
     };




        const animations = {
          initial: { opacity: 0, x: 100 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: -100 },
        };


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
          setBlogs,
          animations,
          email,
          setEmail,
          loginUser,
        }}
      >
        {children}
      </AppContext.Provider>
    );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};