import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import CreateSupply from "@/pages/dashboard/CreateSupply";
import Dashboard from "@/pages/dashboard/Dashboard";
import DashboardSupplies from "@/pages/dashboard/DashboardSupplies";
import AllSupplies from "@/pages/home/AllSupplies";
import Home from "@/pages/home/Home";
import SingleSupplyDetails from "@/pages/home/SingleSupplyDetails";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/all-supplies", element: <AllSupplies /> },
      { path: "/supplies/:id", element: <SingleSupplyDetails /> },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      { path: "supplies", element: <DashboardSupplies /> },
      { path: "create-supply", element: <CreateSupply /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);
