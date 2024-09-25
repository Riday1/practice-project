import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Home from "../components/Home/Home";
import AuthenticationLayout from "../layout/AuthenticationLayout";
import NewsDetailsContainer from "../components/NesDetailsContainer/NewsDetailsContainer";
import { loadNewsDetails } from "../Utilities/utilities";
import UserProfile from "../components/UserProfile/UserProfile";
import PrivateRoute from "../AuthProvider/PrivateRoute";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/profile',
                element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
            }

        ]
    },
    {
        path: '/authentication',
        element: <AuthenticationLayout></AuthenticationLayout>,
        children: [
            {
                path: '/authentication/login',
                element: <Login></Login>
            },
            {
                path: '/authentication/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/newsDetails/:id',
        loader: ({ params }) => loadNewsDetails(params.id),
        element: <PrivateRoute><NewsDetailsContainer></NewsDetailsContainer></PrivateRoute>
    }



])