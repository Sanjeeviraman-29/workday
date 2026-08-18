import "./Header.css";

function Header({ role }) {
  const roleName = role === "vendor" ? "Vendor" : "Client";

  return (
    <header className="dashboard-header">

      <div className="header-page-info">
        <span className="header-section-label">
          WORKSPACE
        </span>

        <span className="header-section-name">
          {roleName} Portal
        </span>
      </div>

      <div className="header-user">

        <div className="header-user-info">
          <span className="header-user-name">
            {role === "vendor"
              ? "Vendor Account"
              : "Client Account"}
          </span>

          <span className="header-user-role">
            {roleName}
          </span>
        </div>

        <div className="header-avatar">
          {role === "vendor" ? "V" : "C"}
        </div>

      </div>

    </header>
  );
}

export default Header;