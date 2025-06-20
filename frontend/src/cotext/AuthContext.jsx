
// import {useContext,createContext,useState } from "react";



// export const  AuthContext=createContext();

// export const useAuthContext=()=>{
//     return useContext(AuthContext);
    
// }

// export const AuthContextProvider=({children})=>{
//     const [authUser,setAuthUser]=useState(JSON.parse(localStorage.getItem("auth-user"))||null);
//     return <AuthContext.Provider value={{authUser,setAuthUser}}>
//     {children}
//     </AuthContext.Provider>
// }
import { useContext, createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ Track loading

  useEffect(() => {
    const storedUser = localStorage.getItem("auth-user");
    if (storedUser) {
      setAuthUser(JSON.parse(storedUser));
    }
    setLoading(false); // ✅ Done loading after checking localStorage
  }, []);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
