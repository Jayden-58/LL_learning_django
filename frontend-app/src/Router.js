import {createBrowserRouter} from "react-router-dom";

import App from './App';
import ErrorPage from "./Pages/ErrorPage";
import AlbumsPage from "./Pages/AlbumsPage";


const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
        path: "/albums",
        element: <AlbumsPage />
    }
  ]);

export default router