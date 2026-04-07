import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layout/RootLayout"; // ✅ import RootLayout here
import AppLayout from "../Layout/AppLayout";
import Home from "../pages/Home";
import Done from "../pages/Done";
import About from "../pages/About";
import Todos from "../pages/Todos";
// import Login from "../pages/Login";
import Season from "../pages/Season";
import CropSelection from "../pages/CropSelection";
import Dashboard from "../pages/Dashboard";
import DashboardTra from "../pages/DashboardTra";
import MarketPriceTrends from "../pages/MarketTrends";
import Profile from "../pages/Profile";
import Login from "../pages/LoginUs";
import Signup from "../pages/Login";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // RootLayout wraps all child routes
    children: [
      { 
        index: true,
         element: <Home /> 
        },
        {
          path:"/Todos",
          element:<Todos/>
        },
        {
          path:"/Done",
          element:<Done/>
        },
       { 
         path:"/About",
         element: <About/> 

        },
        {
          path:"/login",
          element:<Login/>
        },
         {
          path:"/signup",
          element:<Signup/>
        },
        
         {
          path:"/season",
          element:<Season/>
        },
         {
          path:"/crop-selection",
          element:<CropSelection/>
        },
         {
          path:"/dashboardtra",
          element:<DashboardTra/>
        },
        {
          element: <AppLayout />,
          children: [
            {
              path: "dashboard",
              element: <Dashboard />,
            },
            {
              path: "market-trends",
              element: <MarketPriceTrends />,
            },
            {
              path: "profile",
              element: <Profile />,
            },
          ],
        }
    ],
  },
]);
