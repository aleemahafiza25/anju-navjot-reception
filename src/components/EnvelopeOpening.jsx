import { useEffect, useRef, useState } from "react";
import "./EnvelopeOpening.css";

export default function EnvelopeOpening({ onOpen, onStart }) {
  const videoRef = useRef(null);

  const [started, setStarted] = useState(false);
  const [finishing, setFinishing] = useState(false);

const handleOpen = async () => {
  if (started) return;

  setStarted(true);

  try {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.8;

      if (onStart) {
        await onStart();
      }

      await videoRef.current.play();
    }
  } catch (error) {
    console.error("Video could not start:", error);
    setStarted(false);
  }
};

  const handleVideoEnd = () => {
    // Start the fade-out instead of immediately removing the screen
    setFinishing(true);

    // Wait for the fade to finish, then show the invitation
setTimeout(() => {
  if (onOpen) {
    onOpen();
  }
}, 400);
  };

  return (
  <section
    className={`envelope-screen ${
      started ? "video-started" : ""
    } ${finishing ? "finishing" : ""}`}
    onClick={!started ? handleOpen : undefined}
  >
    <video
      ref={videoRef}
      className="opening-video"
      src="/weddings/opening/opening.mp4"
      playsInline
      preload="auto"
      muted
      onEnded={handleVideoEnd}
      
    />


    {!started && (
      <div className="tap-message">
        <span className="tap-dot"></span>
        <p>Tap to open</p>
      </div>
    )}
  </section>

  
);
}