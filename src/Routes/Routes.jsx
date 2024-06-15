import { createBrowserRouter } from "react-router-dom";
import Main from "../RandomAsset/Main";
import Home from "../Home/Home";
import LoginEmployee from "../RandomAsset/LoginEmployee";
import RegisterEmployee from "../RandomAsset/RegisterEmployee";
import RegisterHr from "../RandomAsset/RegisterHr";
import MainForHr from "../HomeForHr/MainForHr";
import HomeHrMain from "../HomeForHr/HomeHrMain";
import AddAsset from "../HomeForHr/HrAllRoutes/AddAsset";
import AllRequest from "../HomeForHr/HrAllRoutes/AllRequest";
import MyEmployeeList from "../HomeForHr/HrAllRoutes/MyEmployeeList";
import AddEmployee from "../HomeForHr/HrAllRoutes/AddEmployee";
import HrProfile from "../HomeForHr/HrAllRoutes/HrProfile";
import AssetList from "../HomeForHr/HrAllRoutes/AssetList";






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
    {
      path: "hr",
      element: <MainForHr></MainForHr>,
      children:[
       {
        path:'home',
        element:<HomeHrMain></HomeHrMain>
       },
       {
        path:'addAsset',
        element:<AddAsset></AddAsset>
       },
       {
        path:'allRequest',
        element:<AllRequest></AllRequest>
       },
       {
        path:'employeeList',
        element:<MyEmployeeList></MyEmployeeList>
       },
       {
        path:'addEmployee',
        element:<AddEmployee></AddEmployee>
       },
       {
        path:'profile',
        element:<HrProfile></HrProfile>
       },
       {
        path:'list',
        element:<AssetList></AssetList>
       }
       
        
      ]
    }
 
  ]);
  