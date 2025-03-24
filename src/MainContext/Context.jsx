import React, { createContext, useState } from 'react'
import { toast } from 'react-toastify';

//Context API is used to share the data between multiple components without passing the props
let CartContext = createContext();

export default function Context({ children }) {

  //get data from the local-storage
  var userLogin = JSON.parse(localStorage.getItem('userLogin'));
  var userLogin = userLogin ? true : false;

  //multiple states and functions can be created
  let [isLogin, setIsLogin] = useState(userLogin);  

  //these multiple states and functions can shared within a single variable in the form of Props
  let contextData = {isLogin, setIsLogin}

  return (
    <CartContext.Provider value={ contextData }>
        { children }
    </CartContext.Provider>
  )
}

export  { CartContext };
