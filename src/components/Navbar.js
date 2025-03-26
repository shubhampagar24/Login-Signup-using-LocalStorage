// import React, { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";
// import defaultAvatar from "../assets/user.png"; // Ensure this exists inside /src/assets/

// function Navbar() {
//   const { user, logout } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const handleLogout = () => {
//     logout();
//     navigate("/login");
//   };

//   const handleDeleteAccount = () => {
//     if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
//       localStorage.clear();
//       navigate("/");
//     }
//   };

//   return (
//     <nav className="navbar">
//       <h1>My App</h1>
//       <div className="user-container">
//         {user ? (
//           <div className="user-dropdown">
//             <img style={{width:"30px"}}
//               src={user.avatar && user.avatar.trim() ? user.avatar : defaultAvatar}
//               alt="User Avatar"
//               className="user-avatar"
//               onError={(e) => (e.target.src = defaultAvatar)} // Fallback if image fails
//               onClick={() => setDropdownOpen(!dropdownOpen)}
//             />
//             {dropdownOpen && (
//               <div className="dropdown-menu">
//                 <p className="user-name">{user.name}</p>
                
//                 <p className="user-email">({user.email})</p>
//                 <button className="logout-btn" onClick={handleLogout}>Logout</button>
//                 <button className="delete-btn" onClick={handleDeleteAccount}>Delete Account</button>
//               </div>
//             )}
//           </div>
//         ) : (
//           <>
//             <a href="/">Sign Up</a>
//             <a href="/login">Login</a>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import defaultAvatar from "../assets/user.png"; // Ensure this exists inside /src/assets/

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [avatar, setAvatar] = useState(defaultAvatar);

  useEffect(() => {
    // Ensure avatar updates after login
    if (user?.avatar && user.avatar.trim()) {
      setAvatar(user.avatar);
    } else {
      setAvatar(defaultAvatar);
    }
  }, [user]); // Update avatar when user changes

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleDeleteAccount = () => {
    if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      localStorage.clear();
      navigate("/");
    }
  };

  return (
    <nav className="navbar">
      <h1>My App</h1>
      <div className="user-container">
        {user ? (
          <div className="user-dropdown">
            <img
              src={avatar}
              alt="User Avatar"
              className="user-avatar"
              onError={() => setAvatar(defaultAvatar)} // Set default avatar if loading fails
              onClick={() => setDropdownOpen(!dropdownOpen)}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                objectFit: "cover",
                cursor: "pointer",
                border: "2px solid #ddd",
              }}
            />
            {dropdownOpen && (
              <div className="dropdown-menu">
                <p className="user-name">{user.name}</p>
                <p className="user-email">({user.email})</p>
                <button className="logout-btn" onClick={handleLogout}>
                  Logout
                </button>
                <button className="delete-btn" onClick={handleDeleteAccount}>
                  Delete Account
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="auth-links">
            <a href="/">Sign Up</a>
            <a href="/login">Login</a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
