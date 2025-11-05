import React from "react";

export default function ActivityCard({ title, current, previous }) {
  const colors = {
    Work: "hsl(15, 100%, 70%)",
    Play: "hsl(195, 74%, 62%)",
    Study: "hsl(348, 100%, 68%)",
    Exercise: "hsl(145, 58%, 55%)",
    Social: "hsl(264, 64%, 52%)",
    "Self Care": "hsl(43, 84%, 65%)",
  };

  const slug = title.toLowerCase().replace(" ", "");

  return (
    <div className={`card ${slug}`}>
      <div className="card-bg" style={{ background: colors[title] }}></div>
      <div className="card-content">
        <div className="card-header">
          <h3>{title}</h3>
          <span className="dots">•••</span>
        </div>
        <div className="card-body">
          <p className="hours">{current}hrs</p>
          <p className="previous">Last Week - {previous}hrs</p>
        </div>
      </div>
    </div>
  );
}
