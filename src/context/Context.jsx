import { createContext, useContext } from "react";
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

  
     const nums = [1,2,3]

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




    return (
      <AppContext.Provider
        value={{
          info: store,
          setStore,

          setValidationErrors,
          validationErrors,
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