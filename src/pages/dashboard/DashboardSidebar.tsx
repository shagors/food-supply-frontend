import { cn } from "@/lib/utils";
import {
  FilePenLineIcon,
  PanelsTopLeftIcon,
  ReceiptTextIcon,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const DashboardSidebar = () => {
  return (
    <aside className="col-span-2 bg-gray-200 h-screen shadow-md rounded-tr-lg sticky top-0 left-0 overflow-auto p-3 lg:p-5">
      <nav className="flex flex-col">
        <NavLink
          to="/dashboard"
          className="text-2xl font-bold mb-5 text-purple-400 hover:text-purple-700 truncate"
        >
          Food Supplies
        </NavLink>

        <NavLink
          to="/dashboard"
          className="p-3 bg-slate-300 font-semibold rounded-md hover:bg-slate-600 hover:text-white transition-all flex items-center gap-2"
        >
          <PanelsTopLeftIcon className="size-4 shrink-0" />
          <span className="truncate">Dashboard</span>
        </NavLink>

        <NavLink
          to="/dashboard/supplies"
          className={({ isActive }) =>
            cn(
              "p-3 bg-slate-300 font-semibold rounded-md transition-all my-5 flex items-center gap-2",
              {
                "bg-slate-600 text-white": isActive,
              }
            )
          }
        >
          <ReceiptTextIcon className="size-4 shrink-0" />
          <span className="truncate">All Supplies</span>
        </NavLink>

        <NavLink
          to="/dashboard/create-supply"
          className={({ isActive }) =>
            cn(
              "p-3 bg-slate-300 font-semibold rounded-md transition-all flex items-center justify-evenly gap-2",
              {
                "bg-slate-600 text-white": isActive,
              }
            )
          }
        >
          <FilePenLineIcon className="size-4 shrink-0" />
          <span className="truncate">Create Supply</span>
        </NavLink>

        <NavLink
          to="/"
          className="p-3 bg-slate-300 font-semibold rounded-md hover:bg-slate-600 hover:text-white mt-5"
        >
          Back to Home
        </NavLink>
      </nav>
    </aside>
  );
};

export default DashboardSidebar;
