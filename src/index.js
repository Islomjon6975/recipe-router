import React from 'react';
import ReactDOM from 'react-dom';
import { RecipeItemContext } from './context/recipesContext';
import './index.css';
import { Root } from './Root';
import 'react-toastify/dist/ReactToastify.css';
import { SignUpItemContex } from './context/signup';


ReactDOM.render(
  <React.StrictMode>
    <SignUpItemContex>
      <RecipeItemContext> 
        <Root />
    </RecipeItemContext>
   </SignUpItemContex>
  </React.StrictMode>,
  document.getElementById('root')
);
