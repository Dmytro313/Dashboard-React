import React, { useEffect, useState } from "react";
import ProfileCard from "./components/ProfileCard";
import ActivityCard from "./components/ActivityCard";
import "./App.css";

export default function App() {
  const [data, setData] = useState([]);
  const [period, setPeriod] = useState("daily");

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data.json`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load data.json");
        return res.json();
      })
      .then(setData)
      .catch(console.error);
  }, []);

  return (
    <main className="dashboard">
      <ProfileCard period={period} setPeriod={setPeriod} />
      <section className="cards">
        {data.map((item) => (
          <ActivityCard
            key={item.title}
            title={item.title}
            current={item.timeframes[period].current}
            previous={item.timeframes[period].previous}
          />
        ))}
      </section>
    </main>
  );
}
