import React from 'react';
import ReactDOM from 'react-dom';
import { RecipeItemContext } from './context/recipesContext';
import './index.css';
import { Root } from './Root';


ReactDOM.render(
  <React.StrictMode>
    <RecipeItemContext> 
      <Root />
   </RecipeItemContext>
  </React.StrictMode>,
  document.getElementById('root')
);
