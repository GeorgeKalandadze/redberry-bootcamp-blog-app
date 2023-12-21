import { createContext, useContext, useEffect, useState } from "react";
import { useSessionStorage } from "../hooks/useSessionStorage";
import axios from "axios";
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

     const makeBlog = async (email) => {
       try {
         const formData = new FormData;
         formData.append("title", store.title);
         formData.append("description", store.description);
         formData.append("author", store.author);
         formData.append("publish_date", store.publish_date);
         formData.append("email", store.email);
         const categoryIds = store.categories
           .map((category) => category.id)
           .join(",");
         formData.append("categories", `[${categoryIds}]`);

         const response = await fetch(store.image.url);
         const blob = await response.blob();
         formData.append("image", blob, store.image.url);

         const blogResponse = await axios.post(
           "https://api.blog.redberryinternship.ge/api/blogs",
           formData,
           {
             headers: {
               Authorization: `Bearer ${"b5e0db82076215b2884e6558888b370b48558754b602fa59a385177db3a8e3ab"}`,
               "Content-Type": "multipart/form-data",
             },
           }
         );

         console.log("Blog created successfully:", blogResponse);
       } catch (error) {
         console.error("Error creating blog:", error);
       }
     };


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
          makeBlog,
        }}
      >
        {children}
      </AppContext.Provider>
    );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};