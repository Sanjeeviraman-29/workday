import { useState } from "react";
import "./Login.css";

function Login() {
  const [role, setRole] = useState("vendor");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Selected role:", role);

    // Dashboard navigation will be added later.
  };

  return (
    <div className="login-page">
      <div className="login-container">

        {/* Brand */}
        <div className="login-brand">
          <div className="brand-mark">W</div>

          <div>
            <h1>Workforce Hub</h1>
            <p>Vendor workforce and billing management</p>
          </div>
        </div>

        {/* Login Card */}
        <div className="login-card">

          <div className="login-heading">
            <h2>Welcome back</h2>
            <p>Sign in to access your workspace.</p>
          </div>

          <form onSubmit={handleSubmit}>

            {/* Role Selection */}
            <div className="form-group">
              <label>Login as</label>

              <div className="role-selection">

                <button
                  type="button"
                  className={`role-option ${
                    role === "vendor" ? "selected" : ""
                  }`}
                  onClick={() => setRole("vendor")}
                >
                  <div className="role-icon">V</div>

                  <div className="role-content">
                    <span className="role-title">Vendor</span>
                    <span className="role-description">
                      Manage workforce & billing
                    </span>
                  </div>
                </button>

                <button
                  type="button"
                  className={`role-option ${
                    role === "client" ? "selected" : ""
                  }`}
                  onClick={() => setRole("client")}
                >
                  <div className="role-icon">C</div>

                  <div className="role-content">
                    <span className="role-title">Client</span>
                    <span className="role-description">
                      Review & approve work
                    </span>
                  </div>
                </button>

              </div>
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">Email</label>

              <input
                id="email"
                type="email"
                placeholder="you@company.com"
                required
              />
            </div>

            {/* Password */}
            <div className="form-group">
              <label htmlFor="password">Password</label>

              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Submit */}
            <button type="submit" className="login-button">
              Sign in as {role === "vendor" ? "Vendor" : "Client"}
            </button>

          </form>

          <p className="demo-text">
            Hackathon prototype · Demo authentication
          </p>

        </div>
      </div>
    </div>
  );
}

export default Login;