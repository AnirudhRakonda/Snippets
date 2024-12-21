import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Auth from "./pages/AuthPage";
import Add from "./pages/Add";
import Profile from "./pages/Profile";
import Landing from "./pages/Landing";
import { onAuthStateChanged } from "firebase/auth";
import auth from "./Firebase"; // Firebase setup file

const ProtectedRoute = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user); // If user exists, set true; otherwise, false
      setLoading(false); // Stop loading once auth state is checked
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  if (loading) return <div>Loading...</div>; // Optional loading state

  return isLoggedIn ? children : <Navigate to="/auth" />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route 
          path="/profile" 
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/add" 
          element={
            <ProtectedRoute>
              <Add />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
};

export default App;
