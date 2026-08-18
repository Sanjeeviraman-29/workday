import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [role, setRole] = useState("vendor");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    setError("");

    const vendorEmail = "vendor@workforce.com";
    const vendorPassword = "vendor123";

    const clientEmail = "client@workforce.com";
    const clientPassword = "client123";

    if (
      role === "vendor" &&
      email === vendorEmail &&
      password === vendorPassword
    ) {
      navigate("/vendor/dashboard");
      return;
    }

    if (
      role === "client" &&
      email === clientEmail &&
      password === clientPassword
    ) {
      navigate("/client/dashboard");
      return;
    }

    setError(
      `Invalid ${role === "vendor" ? "Vendor" : "Client"} credentials.`
    );
  };

  return (
    <div className="login-page">
      <div className="login-container">

        <div className="login-brand">
          <div className="brand-mark">W</div>

          <div>
            <h1>Workforce Hub</h1>
            <p>Vendor workforce and billing management</p>
          </div>
        </div>

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
                  onClick={() => {
                    setRole("vendor");
                    setError("");
                  }}
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
                  onClick={() => {
                    setRole("client");
                    setError("");
                  }}
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
                value={email}
                onChange={(event) => setEmail(event.target.value)}
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
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Error */}
            {error && (
              <p className="login-error">
                {error}
              </p>
            )}

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