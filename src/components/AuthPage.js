// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles/styles.css";

// const AuthPage = () => {
//   const [isSignup, setIsSignup] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   // Handle form submission for Login/Signup
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!email || !password || (isSignup && !name)) {
//       setError("All fields are required!");
//       return;
//     }

//     if (isSignup) {
//       // Store user data in localStorage (Signup)
//       localStorage.setItem("user", JSON.stringify({ name, email }));
//       localStorage.setItem("isLoggedIn", "true");
//     } else {
//       // Check login credentials
//       const storedUser = JSON.parse(localStorage.getItem("user"));

//       if (storedUser && storedUser.email === email) {
//         localStorage.setItem("isLoggedIn", "true");
//         navigate("/dashboard"); // Redirect to Dashboard
//       } else {
//         setError("Invalid credentials!");
//         return;
//       }
//     }

//     setError("");
//     navigate("/dashboard"); // Redirect after login/signup
//   };

//   return (
//     <>
//       {/* Navbar (Fixed at Top) */}
//       <div className="navbar">
//         <h1>My App</h1>
//       </div>

//       {/* Login/Signup Page */}
//       <div className="page-container">
//         <div className="auth-container">
//           <h2>{isSignup ? "Signup" : "Login"}</h2>
//           {error && <p className="error">{error}</p>}

//           <form onSubmit={handleSubmit}>
//             {isSignup && (
//               <input
//                 type="text"
//                 placeholder="Full Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//               />
//             )}
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <button type="submit">{isSignup ? "Signup" : "Login"}</button>
//           </form>

//           {/* Toggle Button for Switching Between Login & Signup */}
//           <p>
//             {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
//             <span
//               className="toggle-link"
//               onClick={() => setIsSignup(!isSignup)}
//             >
//               {isSignup ? "Login" : "Signup"}
//             </span>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AuthPage;
