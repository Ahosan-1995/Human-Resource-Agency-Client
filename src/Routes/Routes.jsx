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
import EmployeeHome from "../HomeForEmployee/EmployeeHome";
import MyAsset from "../HomeForEmployee/AllEmployeeRoutes/MyAsset";
import MyTeam from "../HomeForEmployee/AllEmployeeRoutes/MyTeam";
import RequestAsset from "../HomeForEmployee/AllEmployeeRoutes/RequestAsset";
import EmployeeProfile from "../HomeForEmployee/AllEmployeeRoutes/EmployeeProfile";
import Main3 from "../HomeForEmployee/Main3";
import PrivateRoute from "./PrivateRoute";
import ProfileHR_Employee from "../SharedComponents/ProfileHR_Employee";







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
        },
        {
          path:'/profile',
          element:<PrivateRoute><ProfileHR_Employee></ProfileHR_Employee></PrivateRoute>
        }
        
      ]
    },
    {
      path: "hr",
      element: <PrivateRoute><MainForHr></MainForHr></PrivateRoute>,
      children:[
       {
        path:'home',
        element:<HomeHrMain></HomeHrMain>
       },
       {
        path:'addAsset',
        element:<PrivateRoute><AddAsset></AddAsset></PrivateRoute>
       },
       {
        path:'allRequest',
        element:<PrivateRoute><AllRequest></AllRequest></PrivateRoute>
       },
       {
        path:'employeeList',
        element:<PrivateRoute><MyEmployeeList></MyEmployeeList></PrivateRoute>
       },
       {
        path:'addEmployee',
        element:<PrivateRoute><AddEmployee></AddEmployee></PrivateRoute>,
        loader: ()=>fetch('https://assignment12-server-side-smoky.vercel.app/allUsers')
       },
       {
        path:'profile',
        element:<PrivateRoute><HrProfile></HrProfile></PrivateRoute>
       },
       {
        path:'list',
        element:<PrivateRoute><AssetList></AssetList></PrivateRoute>
       }  
      ]
    },

    {
      path: "employee",
      element: <PrivateRoute><Main3></Main3></PrivateRoute>,
      children:[
       {
        path:'myAsset',
        element:<PrivateRoute><MyAsset></MyAsset></PrivateRoute>
       },
       {
        path:'myTeam',
        element:<PrivateRoute><MyTeam></MyTeam></PrivateRoute>
       },
       {
        path:'request',
        element:<PrivateRoute><RequestAsset></RequestAsset></PrivateRoute>
       },
       {
        path:'profile',
        element:<PrivateRoute><EmployeeProfile></EmployeeProfile></PrivateRoute>
       },
       {
        path:'home',
        element:<PrivateRoute><EmployeeHome></EmployeeHome></PrivateRoute>
       },
      ]
    }
 
  ]);
  