import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Settings from "./components/Settings";


function App() {
  const [user, setUser] = useState({ name: "Latorre, Ahron A.", settings: { darkMode: false } });

  return (
    <Router>
      <div className={`container py-3 ${user.settings.darkMode ? "bg-dark text-white" : ""}`}>
        <nav className="nav">
          <Link className="nav-link" to="/Home">Home</Link>
          <Link className="nav-link" to="/Profile">Profile</Link>
          <Link className="nav-link" to="/settings">Settings</Link>
        </nav>

        <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Profile" element={<Profile user={user} setUser={setUser} />} />
        <Route path="/settings" element={<Settings user={user} setUser={setUser} />} />
    
        </Routes>
      </div>
    </Router>
  );
}

export default App;
