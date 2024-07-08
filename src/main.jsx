import * as React from "react";
import  ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import MenuNav from "./components/menu_nav/MenuNavi";
import Blog from "./pages/blog/Blog";
import ContactUs from "./pages/contact_us/ContactUs";
import { ProviderTheme } from "./context/contextTheme";

const router = createBrowserRouter(
  [
    {
      element: <MenuNav />,
      children: [
        {
          path: "/blog",
          element: <Blog/>,
        },
        {
          path: "/contact_us",
          element: <ContactUs/>,
        },
        {
          path: "/",
          element: <App/>,
        },
        
        
      ],
    },
    { errorElement: <div>erro</div> },
  ],
  {
    basename: import.meta.env.VITE_SUBDOMAIN ?? '',
  },
);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProviderTheme>
      <RouterProvider router={router} />
    </ProviderTheme>
  </React.StrictMode>
);