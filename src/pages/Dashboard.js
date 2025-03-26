import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [savedLayout, setSavedLayout] = useState(null);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedLayout = JSON.parse(localStorage.getItem("savedLayout"));

    if (!isAuthenticated || !storedUser) {
      navigate("/login");
    } else {
      setUser(storedUser);
    }

    if (storedLayout) {
      setSavedLayout(storedLayout);
    }
  }, [navigate]);

  // Save layout details
  const saveLayout = () => {
    if (user) {
      localStorage.setItem("savedLayout", JSON.stringify(user));
      setSavedLayout(user);
      alert("Dashboard layout saved successfully!");
    }
  };

  // Check if user matches the search query
  const isUserVisible =
    user &&
    (user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="dashboard-wrapper">
      <Navbar onSearch={setSearchTerm} />
      <Sidebar />
      <div className="dashboard-container">
        <h2 className="dashboard-heading">User Details</h2>

        {/* User Details Display */}
        {user && isUserVisible ? (
          <div className="user-info">
            <h3>Name: {user.name}</h3>
            <p>Email: {user.email}</p>
          </div>
        ) : (
          <p className="error">No matching user found.</p>
        )}

        {/* Save Layout Button */}
        <button className="save-layout-btn" onClick={saveLayout}>
          Save Layout
        </button>

        {/* Show Saved Layout if available */}
        {savedLayout && (
          <div className="saved-layout">
            <h3>Saved User Details</h3>
            <p>Name: {savedLayout.name}</p>
            <p>Email: {savedLayout.email}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
