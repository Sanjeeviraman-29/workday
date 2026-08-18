import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Login";

import VendorDashboard from "./pages/vendor/VendorDashboard";
import ClientDashboard from "./pages/client/ClientDashboard";

import DashboardLayout from "./layouts/DashboardLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Vendor */}
        <Route
          path="/vendor"
          element={<DashboardLayout role="vendor" />}
        >
          <Route
            path="dashboard"
            element={<VendorDashboard />}
          />
        </Route>

        {/* Client */}
        <Route
          path="/client"
          element={<DashboardLayout role="client" />}
        >
          <Route
            path="dashboard"
            element={<ClientDashboard />}
          />
        </Route>

        {/* Root */}
        <Route
          path="/"
          element={<Navigate to="/login" replace />}
        />

        {/* Unknown routes */}
        <Route
          path="*"
          element={<Navigate to="/login" replace />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;