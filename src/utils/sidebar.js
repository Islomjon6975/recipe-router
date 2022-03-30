import { Generic } from "../components/Generic";
import { AddRecipe } from "../pages/AddRecipe";
import { Contact } from "../pages/Contact";
import { HomeBody } from "../pages/HomeBody";
import { Logout } from "../pages/Logout";

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
        id: 1, 
        title: 'Contact',
        path: '/contact',
        element: <Contact />,
        child:[],
        hidden: false,
        isPrivate: false,
    },
    {
        id: 1, 
        title: 'Logout',
        path: '/logout',
        element: <Logout />,
        child:[],
        hidden: false,
        isPrivate: false,
    }
]