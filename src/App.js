import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";

export default function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (username, role) => {
    if (username.trim()) setUser({ username: username.trim(), role });
  };

  return (
    <main className="app">
      <div className="shell">
        <header className="brand">
          <div className="brand-mark">RA</div>
          <div><p className="eyebrow">React Practical</p><h1>Role Access</h1></div>
        </header>
        {!user ? <LoginForm onLogin={handleLogin}/> :
          <Dashboard user={user} onLogout={() => setUser(null)}/>}
        <footer>Authentication • Authorization • Conditional Rendering</footer>
      </div>
    </main>
  );
}