
import { useEffect, useRef, useState } from "react";
import "./EnvelopeOpening.css";

export default function EnvelopeOpening({ onOpen, onStart }) {
  const videoRef = useRef(null);

  const [started, setStarted] = useState(false);
  const [finishing, setFinishing] = useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);

  // Automatically play the envelope video when the page loads
  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.playbackRate = 1.8;

    const startVideo = async () => {
      try {
        await video.play();

        setStarted(true);
        setAutoplayBlocked(false);

        // Prepare background music while the envelope video plays
        if (onStart) {
          await onStart();
        }
      } catch (error) {
        console.log("Autoplay was blocked by the browser:", error);
        setAutoplayBlocked(true);
      }
    };

    startVideo();
  }, [onStart]);

  // Fallback only if the browser blocks autoplay
  const handleOpen = async () => {
    if (started || finishing) return;

    const video = videoRef.current;

    if (!video) return;

    try {
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;
      video.playbackRate = 1.8;

      if (onStart) {
        await onStart();
      }

      await video.play();

      setStarted(true);
      setAutoplayBlocked(false);
    } catch (error) {
      console.error("Video could not start:", error);
      setAutoplayBlocked(true);
    }
  };

  // Show the invitation after the opening video finishes
  const handleVideoEnd = () => {
    if (finishing) return;

    setFinishing(true);

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
      } ${finishing ? "finishing" : ""} ${
        autoplayBlocked ? "autoplay-blocked" : ""
      }`}
      onClick={autoplayBlocked ? handleOpen : undefined}
    >
      <video
        ref={videoRef}
        className="opening-video"
        src="/weddings/opening/opening.mp4"
        autoPlay
        playsInline
        muted
        preload="auto"
        onEnded={handleVideoEnd}
      />

      {autoplayBlocked && !started && (
        <button
          type="button"
          className="tap-to-open"
          onClick={handleOpen}
        >
          Tap to Open
        </button>
      )}
    </section>
  );
}
