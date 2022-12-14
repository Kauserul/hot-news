import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Cetegory from "../../Pages/Cetegory/Cetegory/Cetegory";
import Home from "../../Pages/Home/Home/Home";
import News from "../../Pages/News/News/News";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element : <Home></Home>
            },
            {
                path : '/category/:id',
                element : <Cetegory></Cetegory>
            },
            {
                path : '/news/:id',
                element : <News></News>
            }
        ]
    }
])