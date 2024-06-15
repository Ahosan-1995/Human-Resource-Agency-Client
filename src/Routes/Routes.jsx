import { createBrowserRouter } from "react-router-dom";
import Main from "../RandomAsset/Main";
import Home from "../Home/Home";
import LoginEmployee from "../RandomAsset/LoginEmployee";
import RegisterEmployee from "../RandomAsset/RegisterEmployee";
import RegisterHr from "../RandomAsset/RegisterHr";






export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'/login',
            element:<LoginEmployee></LoginEmployee>
        },
        {
            path:'/registerEmp',
            element:<RegisterEmployee></RegisterEmployee>
        },
        {
            path:'/registerHr',
            element:<RegisterHr></RegisterHr>
        }
        
      ]
    },
 
  ]);
  