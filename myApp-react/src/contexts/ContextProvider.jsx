import { createContext, useContext, useState } from "react";


 const StateContext = createContext({
    user: null,
    token: null,
    setUser: () => {},
    setToken: () => {}
 })


 export const ContextProvider = ({children})=>
 {
   const [user, setUser] = useState({});
   const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));

   const setToken = (newToken) => {

    _setToken(newToken)
     
    if(newToken){
        localStorage.setItem('ACCESS_TOKEN' , newToken);
    } else {
        localStorage.removeItem('ACCESS_TOKEN');
    }

   }
     

    return (
        <div>
            <StateContext.Provider value={{
             user,
             token,
             setUser,
             setToken
            }}>
                {children}
            </StateContext.Provider>
        </div>
    )
 }

 export const useStateContext = () => useContext(StateContext);