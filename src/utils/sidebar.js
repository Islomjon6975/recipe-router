import { Generic } from "../components/Generic";
import { AddRecipe } from "../pages/AddRecipe";
import { Contact } from "../pages/Contact";
import { HomeBody } from "../pages/HomeBody";
import { Login } from "../pages/Login";
import { Logout } from "../pages/Logout";
import { SignUp } from "../pages/SignUp";

export const sidebar = [
    {
        id: 1, 
        title: 'Home',
        path: '/',
        element: <HomeBody />,
        child:[],
        hidden: false,
        isPrivate: false,
    },
    {
        id: 2, 
        title: 'Add Recipe',
        path: '/add-recipe',
        element: <AddRecipe />,
        child:[],
        hidden: false,
        isPrivate: false,
    },
    {
        id: 3, 
        title: 'Contact',
        path: '/contact',
        element: <Contact />,
        child:[],
        hidden: false,
        isPrivate: false,
    },
    {
        id: 4, 
        title: 'Login',
        path: '/login',
        element: <Login />,
        child:[],
        hidden: false,
        isPrivate: false,
    },
    {
        id: 5, 
        title: 'Logout',
        path: '/logout',
        element: <Logout />,
        child:[],
        hidden: false,
        isPrivate: false,
    },
    {
        id: 6, 
        title: 'Sign Up',
        path: '/sign-up',
        element: <SignUp />,
        child:[],
        hidden: false,
        isPrivate: false,
    }
]