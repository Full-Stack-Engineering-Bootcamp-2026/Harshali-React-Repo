import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-60 bg-backgound text-white p-5">
      <h2 className="text-xl font-bold mb-6">Components</h2>

      <nav className="flex flex-col gap-3">
        <NavLink
          to="/table"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-700 p-2 rounded"
              : "hover:bg-gray-800 p-2 rounded"
          }
        >
          Table
        </NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;