import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <div>Error page</div>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path:"/login",
                element: <Login />
            }
        ]
    }
])


export {router}