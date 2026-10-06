import { useEffect, useState } from "react";
import "./CountdownSection.css";

const targetDate = new Date("2027-01-18T00:00:00");

function getTimeLeft() {
  const now = new Date();
  const difference = targetDate - now;

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor(
      (difference / (1000 * 60 * 60)) % 24
    ),
    minutes: Math.floor(
      (difference / (1000 * 60)) % 60
    ),
    seconds: Math.floor(
      (difference / 1000) % 60
    ),
  };
}

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="countdown-section">

<img
  className="countdown-floral-bg"
  src="/weddings/invitation/bottom-flowers.png"
  alt=""
/>

      {/* TOP DECORATION */}
      <div className="countdown-top-decoration">
        <span></span>
        <b>◆</b>
        <span></span>
      </div>

      {/* MAIN CONTENT */}
      <div className="countdown-content">

        <h2 className="countdown-title">
          The Celebration Begins
        </h2>

        <div className="countdown-divider">
          <span></span>
          <b>✦</b>
          <span></span>
        </div>

        {/* COUNTDOWN */}
        <div className="countdown-grid">

          <div className="countdown-item">
            <span className="countdown-number">
              {String(timeLeft.days).padStart(2, "0")}
            </span>
            <span className="countdown-label">
              Days
            </span>
          </div>

          <div className="countdown-item">
            <span className="countdown-number">
              {String(timeLeft.hours).padStart(2, "0")}
            </span>
            <span className="countdown-label">
              Hours
            </span>
          </div>

          <div className="countdown-item">
            <span className="countdown-number">
              {String(timeLeft.minutes).padStart(2, "0")}
            </span>
            <span className="countdown-label">
              Minutes
            </span>
          </div>

          <div className="countdown-item">
            <span className="countdown-number">
              {String(timeLeft.seconds).padStart(2, "0")}
            </span>
            <span className="countdown-label">
              Seconds
            </span>
          </div>

        </div>

      </div>

      {/* FLORAL DECORATION */}

      <div className="countdown-fade-bottom"></div>

    </section>
  );
}