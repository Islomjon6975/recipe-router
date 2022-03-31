import React, { useState } from 'react'
import { createContext } from "react";

export const SignUpContext = createContext();


export const SignUpItemContex = ({children}) => {
    const [signup, setSignUp] = useState([])
    console.log(signup)

  return (
    <SignUpContext.Provider value={[signup, setSignUp]}>
        {children}
    </SignUpContext.Provider>
  )
}
