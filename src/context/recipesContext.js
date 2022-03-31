import React from 'react'
import { createContext, useState } from "react";
import {recipes} from '../utils/recipes'

export const RecipeContext = createContext();


export const RecipeItemContext = ({children}) => {
    const [recipe, setRecipe] = useState(recipes)
    console.log(recipe)
  return (
    <RecipeContext.Provider value={[recipe, setRecipe]}>
        {children}
    </RecipeContext.Provider>
  )
}
