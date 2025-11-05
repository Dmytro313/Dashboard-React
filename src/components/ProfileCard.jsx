import React from "react";

export default function ProfileCard({ period, setPeriod }) {
  return (
    <section className="profile">
      <div className="profile-header">
        <img src={`${import.meta.env.BASE_URL}avatar_male.png`} alt="Avatar" className="avatar" />
        <div className="profile-text">
          <p>Report for</p>
          <h1>
            Dmytro<br />Lykhota
          </h1>
        </div>
      </div>

      <div className="period-select">
        {["daily", "weekly"].map((p) => (
          <button
            key={p}
            className={`period-btn ${period === p ? "active" : ""}`}
            onClick={() => setPeriod(p)}
          >
            {p[0].toUpperCase() + p.slice(1)}
          </button>
        ))}
      </div>
    </section>
  );
}
