import { useEffect, useRef, useState } from "react";
import "./WeddingTimeline.css";

const events = [
  {
    time: "11:00 AM",
    title: "Nikah Ceremony",
    description: "The sacred beginning of our journey together.",
    image: "/weddings/photos/nikah.jpg",
  },
  {
    time: "12:30 PM",
    title: "Dua & Family Gathering",
    description: "A moment of blessings, prayers, and togetherness.",
    image: "/weddings/photos/dua.jpg",
  },
  {
    time: "1:30 PM",
    title: "Lunch Reception",
    description: "Join us for a beautiful afternoon of food and family.",
    image: "/weddings/photos/lunch.jpg",
  },
  {
    time: "3:00 PM",
    title: "Celebration & Photos",
    description: "Memories, laughter, and moments to cherish forever.",
    image: "/weddings/photos/celebration.jpg",
  },
];

export default function WeddingTimeline() {
  const timelineRef = useRef(null);
  const [flowerPosition, setFlowerPosition] = useState(0);

  useEffect(() => {
  const handleScroll = () => {
    const timeline = timelineRef.current;

    if (!timeline) return;

    const rect = timeline.getBoundingClientRect();

    const viewportCenter = window.innerHeight / 2;

    // Distance between the timeline's top
    // and the center of the screen
    const distance = viewportCenter - rect.top;

    // Keep the flower inside the timeline
    const minPosition = 0;
    const maxPosition = timeline.offsetHeight - 30;

    const position = Math.max(
      minPosition,
      Math.min(maxPosition, distance)
    );

    setFlowerPosition(position);
  };

  window.addEventListener("scroll", handleScroll, {
    passive: true,
  });

  handleScroll();

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
    <section className="timeline-section">

      <div className="timeline-fade-top" />

      <div className="timeline-content">

        <p className="timeline-eyebrow">
          A DAY TO REMEMBER
        </p>

        <h2 className="timeline-title">
          Our Wedding Day
        </h2>

        <p className="timeline-subtitle">
          Moments we will treasure forever
        </p>

        <div
          className="timeline"
          ref={timelineRef}
        >

          {/* Moving flower */}
<div
  className="timeline-flower"
  style={{
    transform: `translateX(-50%) translateY(${flowerPosition}px)`,
  }}
>
  <img
    src="/weddings/invitation/timeline-flower.png"
    alt=""
  />
</div>

          {events.map((event, index) => (
            <div
              className={`timeline-item ${
                index % 2 === 0
                  ? "timeline-left"
                  : "timeline-right"
              }`}
              key={event.title}
            >

              <div className="timeline-image">
                <img
                  src={event.image}
                  alt={event.title}
                />
              </div>

              <div className="timeline-line">
                <span className="timeline-dot" />
              </div>

              <div className="timeline-info">

                <span className="timeline-time">
                  {event.time}
                </span>

                <h3>
                  {event.title}
                </h3>

                <p>
                  {event.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

      <div className="timeline-fade-bottom" />

    </section>
  );
}