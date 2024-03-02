import DashboardSidebar from "@/pages/dashboard/DashboardSidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="max-w-7xl w-full mx-auto grid grid-cols-12 gap-2">
      <DashboardSidebar />
      <div className="col-span-10">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
