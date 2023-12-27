import { createContext, useContext, useEffect, useState } from "react";
import { useSessionStorage } from "../hooks/useSessionStorage";
import axios from "axios";
import axiosClient from "../config/axiosClient";
import { ValidateBlog } from "../validation/validation";


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
    const [singleBlog, setSingleBlog] = useState({});

    const getBlogs = async () => {
      try {
        const response = await axiosClient.get("/blogs");
        console.log(response);
        setBlogs(response.data.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    useEffect(() => {
      getBlogs()
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
         const response = await axiosClient.post("/login", {
           email: email,
         });
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


      const isPublished = (publishDate) => {
        const timestamp1 = new Date().getTime();
        const timestamp2 = new Date(publishDate).getTime();

        if (timestamp2 > timestamp1) {
          return true;
        } else {
          return false;
        }
      };


      const handleTextInputChange = (e) => {
        const { value, name } = e.target;
        let formattedValue = value;
        const updatedInfo = {
          ...info,
          [name]: formattedValue,
        };
        const errors = ValidateBlog(updatedInfo);
        setStore((prevInfo) => ({
          ...prevInfo,
          [name]: value,
        }));
        setValidationErrors((prevErrors) => ({
          ...prevErrors,
          [name]: errors[name],
        }));
      };


      const handleImageUpload = (event) => {
        const { files } = event.target;
        if (files && files[0]) {
          const selectedImage = files[0];
          const reader = new FileReader();
          reader.onload = () => {
            const dataUrl = reader.result;
            const fileName = selectedImage.name;
            setStore((prevInfo) => ({
              ...prevInfo,
              image: {
                url: dataUrl,
                name: fileName,
              },
            }));
            const updatedInfo = {
              ...info,
              image: {
                url: dataUrl,
                name: fileName,
              },
            };
            const imageErrors = ValidateBlog(updatedInfo).image;
            setValidationErrors((prevErrors) => ({
              ...prevErrors,
              image: imageErrors,
            }));
          };
          reader.readAsDataURL(selectedImage);
        }
      };


      const handleImageDelete = () => {
        setStore((prevInfo) => ({
          ...prevInfo,
          image: {},
        }));
        setValidationErrors((prevErrors) => ({
          ...prevErrors,
          image: "invalid",
        }));
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
          singleBlog,
          setSingleBlog,
          getBlogs,
          isPublished,
          handleTextInputChange,
          handleImageUpload,
          handleImageDelete,
        }}
      >
        {children}
      </AppContext.Provider>
    );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};