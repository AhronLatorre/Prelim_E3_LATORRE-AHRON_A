import React from "react";

function Settings({ user, setUser }) {
  const toggleDarkMode = () => {
    setUser({ ...user, settings: { darkMode: !user.settings.darkMode } });
  };

  return (
    <div className="container text-center">
      <h2>Settings</h2>
      <div className="form-check form-switch mt-3">
        <input
          className="form-check-input"
          type="checkbox"
          checked={user.settings.darkMode}
          onChange={toggleDarkMode}
        />
        <label className="form-check-label">Dark Mode</label>
      </div>
    </div>
  );
}

export default Settings;
