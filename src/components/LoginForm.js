import React, { useState } from "react";

export default function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");

  const login = (role) => {
    if (!username.trim()) return alert("Please enter your username.");
    onLogin(username, role);
  };

  return (
    <section className="card">
      <div className="icon">↪</div>
      <p className="eyebrow">Secure entry</p>
      <h2>Welcome back</h2>
      <p className="muted">Enter your name and choose a role to continue.</p>

      <label htmlFor="username">Username</label>
      <input id="username" value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="e.g. Abhay" autoFocus />

      <div className="actions">
        <button className="btn admin" onClick={() => login("Admin")}>Login as Admin</button>
        <button className="btn viewer" onClick={() => login("Viewer")}>Login as Viewer</button>
      </div>
    </section>
  );
}