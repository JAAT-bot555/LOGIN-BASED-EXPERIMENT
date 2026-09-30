import React, { useState } from "react";

export default function Dashboard({ user, onLogout }) {
  const [deleted, setDeleted] = useState(false);
  const admin = user.role === "Admin";

  return (
    <section className="card">
      <div className="profile">
        <div className={`avatar ${admin ? "a-admin" : "a-viewer"}`}>
          {user.username[0].toUpperCase()}
        </div>
        <div><p className="eyebrow">Authenticated session</p><h2>Welcome, {user.username}</h2></div>
        <span className={`role ${admin ? "r-admin" : "r-viewer"}`}>{user.role}</span>
      </div>

      <div className="access">
        <div>
          <small>CURRENT PERMISSION</small>
          <h3>{admin ? "Full content access" : "Read-only access"}</h3>
          <p>{admin ? "You can manage posts and perform administrative actions."
                   : "You can view content but cannot perform administrative actions."}</p>
        </div>
        <strong>{admin ? "✓" : "◉"}</strong>
      </div>

      {admin ? (
        <button className="btn danger full" onClick={() => setDeleted(true)} disabled={deleted}>
          {deleted ? "Post Deleted" : "Delete Post"}
        </button>
      ) : (
        <div className="readonly"><b>🔒 Read-only access</b><span>Administrative actions are unavailable for Viewer.</span></div>
      )}

      <button className="logout" onClick={onLogout}>Logout</button>
    </section>
  );
}