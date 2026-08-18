import { NavLink, useNavigate } from "react-router-dom";
import "./Sidebar.css";

function Sidebar({ role }) {
  const navigate = useNavigate();

  const vendorNavigation = [
    {
      label: "Dashboard",
      path: "/vendor/dashboard",
      icon: "DB",
    },
    {
      label: "Contractors",
      path: "/vendor/contractors",
      icon: "CT",
    },
    {
      label: "Projects",
      path: "/vendor/projects",
      icon: "PR",
    },
    {
      label: "Timesheets",
      path: "/vendor/timesheets",
      icon: "TS",
    },
    {
      label: "Milestones",
      path: "/vendor/milestones",
      icon: "MS",
    },
    {
      label: "Invoices",
      path: "/vendor/invoices",
      icon: "IN",
    },
  ];

  const clientNavigation = [
    {
      label: "Dashboard",
      path: "/client/dashboard",
      icon: "DB",
    },
    {
      label: "Contractors",
      path: "/client/contractors",
      icon: "CT",
    },
    {
      label: "Timesheets",
      path: "/client/timesheets",
      icon: "TS",
    },
    {
      label: "Milestones",
      path: "/client/milestones",
      icon: "MS",
    },
    {
      label: "Invoices",
      path: "/client/invoices",
      icon: "IN",
    },
    {
      label: "Change Requests",
      path: "/client/change-requests",
      icon: "CR",
    },
  ];

  const navigation =
    role === "vendor"
      ? vendorNavigation
      : clientNavigation;

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <aside className="sidebar">

      {/* Brand */}
      <div className="sidebar-brand">
        <div className="sidebar-brand-mark">
          W
        </div>

        <div>
          <div className="sidebar-brand-name">
            Workforce Hub
          </div>

          <div className="sidebar-brand-subtitle">
            Workforce & Billing
          </div>
        </div>
      </div>

      {/* Workspace */}
      <div className="sidebar-role">
        <span className="sidebar-role-label">
          WORKSPACE
        </span>

        <span className="sidebar-role-value">
          {role === "vendor" ? "Vendor" : "Client"}
        </span>
      </div>

      {/* Navigation */}
      <nav className="sidebar-navigation">
        {navigation.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <span className="sidebar-link-icon">
              {item.icon}
            </span>

            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <div className="sidebar-bottom">
        <button
          type="button"
          className="sidebar-logout"
          onClick={handleLogout}
        >
          <span className="sidebar-link-icon">
            LO
          </span>

          <span>Sign out</span>
        </button>
      </div>

    </aside>
  );
}

export default Sidebar;