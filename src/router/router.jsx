import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <div>Error page</div>,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    }
])


export {router}