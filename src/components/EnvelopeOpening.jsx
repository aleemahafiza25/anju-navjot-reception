import { useRef, useState } from "react";
import "./EnvelopeOpening.css";

export default function EnvelopeOpening({ onOpen }) {
  const videoRef = useRef(null);
  const [started, setStarted] = useState(false);

  const handleOpen = async () => {
    if (started) return;

    setStarted(true);

    setTimeout(async () => {
      try {
        await videoRef.current?.play();
      } catch (error) {
        console.error("Video could not start:", error);
      }
    }, 50);
  };

  const handleVideoEnd = () => {
    if (onOpen) {
      onOpen();
    }
  };

  return (
    <section
      className={`envelope-screen ${
        started ? "video-started" : ""
      }`}
      onClick={!started ? handleOpen : undefined}
    >

      {!started && (
        <div className="envelope-stage">

          <img
            src="/weddings/opening/envelope.png"
            alt="Wedding invitation envelope"
            className="envelope-image"
          />

          <div className="tap-message">
            <span className="tap-dot"></span>
            <p>Tap to open</p>
          </div>

        </div>
      )}

      {started && (
        <video
  ref={videoRef}
  className="opening-video"
  src="/weddings/opening/opening.mp4"
  playsInline
  preload="auto"
  onEnded={handleVideoEnd}
/>
      )}

    </section>
  );
}