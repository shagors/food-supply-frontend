import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import AddDonor from "@/pages/dashboard/AddDonor";
import CreateSupply from "@/pages/dashboard/CreateSupply";
import CreateTestimonials from "@/pages/dashboard/CreateTestimonials";
import Dashboard from "@/pages/dashboard/Dashboard";
import DashboardSupplies from "@/pages/dashboard/DashboardSupplies";
import Donor from "@/pages/dashboard/Donor";
import Testimonials from "@/pages/dashboard/Testimonials";
import VolunteerForm from "@/pages/dashboard/VolunteerForm";
import AllSupplies from "@/pages/home/AllSupplies";
import Home from "@/pages/home/Home";
import SingleSupplyDetails from "@/pages/home/SingleSupplyDetails";
import Volunteer from "@/pages/home/Volunteer";
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
      { path: "/volunteer", element: <Volunteer /> },
      { path: "/volunteer-form", element: <VolunteerForm /> },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      { path: "supplies", element: <DashboardSupplies /> },
      { path: "create-supply", element: <CreateSupply /> },
      { path: "leaderboard", element: <Donor /> },
      { path: "create-buyer", element: <AddDonor /> },
      { path: "testimonials", element: <Testimonials /> },
      { path: "create-testimonial", element: <CreateTestimonials /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);
