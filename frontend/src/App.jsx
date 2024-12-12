import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your pages
import Auth from "./pages/Auth";
import Add from "./pages/Add";
import Profile from "./pages/Profile";
import Landing from "./pages/Landing";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={< Landing/>} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </Router>
  );
};

export default App;
