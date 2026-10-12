import { useEffect, useRef, useState } from "react";

import EnvelopeOpening from "./components/EnvelopeOpening";
import TimingSection from "./components/TimingSection";
import NikkahSection from "./components/NikkahSection";
import ClosingSection from "./components/ClosingSection";
import LocationSection from "./components/LocationSection";

import "./App.css";

function App() {
const [opened, setOpened] = useState(false);
const [musicPlaying, setMusicPlaying] = useState(false);

const audioRef = useRef(null);
const heroVideoRef = useRef(null);

// Start background music
const startMusic = async () => {
  const audio = audioRef.current;
  if (!audio) return;

  try {
    audio.muted = false;
    audio.volume = 0.35;

    await audio.play();
    setMusicPlaying(true);
  } catch (error) {
    console.log("Browser blocked automatic music playback:", error);
    setMusicPlaying(false);
  }
};

// Prepare the audio element without forcing it to remain muted
const prepareMusic = async () => {
  const audio = audioRef.current;
  if (!audio) return;

  try {
    audio.muted = true;
    audio.volume = 0;
    audio.currentTime = 0;

    await audio.play();
  } catch (error) {
    console.log("Music preparation failed:", error);
  }
};


// Open the invitation after the envelope video finishes
const handleOpen = async () => {
  setOpened(true);

  const audio = audioRef.current;
  if (!audio) return;

  try {
    audio.pause();
    audio.currentTime = 0;
    audio.muted = false;
    audio.volume = 0.35;

    await audio.play();

    setMusicPlaying(true);
  } catch (error) {
    console.log("Automatic music playback was blocked:", error);
    setMusicPlaying(false);
  }
};


// Music button: pause or resume
const toggleMusic = async () => {
  const audio = audioRef.current;
  if (!audio) return;

  if (audio.paused || audio.muted || audio.volume === 0) {
    try {
      audio.muted = false;
      audio.volume = 0.35;

      await audio.play();
      setMusicPlaying(true);
    } catch (error) {
      console.log("Could not play music:", error);
      setMusicPlaying(false);
    }
  } else {
    audio.pause();
    setMusicPlaying(false);
  }
};

  return (
    <div className="app">
      {/* BACKGROUND MUSIC */}
      <audio
        ref={audioRef}
        src="/weddings/opening/wedding-nasheed.mp3"
        loop
        preload="auto"
      />

      {/* ENVELOPE OPENING */}
      {!opened ? (
        <EnvelopeOpening
          onOpen={handleOpen}
          onStart={prepareMusic}
        />
      ) : (
        <main className="invitation">
          {/* MUSIC BUTTON */}
          <button
            className="music-toggle"
            onClick={toggleMusic}
            aria-label={
              musicPlaying
                ? "Pause background music"
                : "Play background music"
            }
          >
            {musicPlaying ? "♫" : "♪"}
          </button>

          {/* PAGE 1 */}
          <section className="hero-page">
            <video
              ref={heroVideoRef}
              className="hero-background"
              src="/weddings/invitation/hero.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              onLoadedMetadata={(e) => {
                e.currentTarget.playbackRate = 0.3;
                e.currentTarget.volume = 1;
              }}
            />

            <div className="hero-overlay"></div>

            <img
              className="bottom-floral-overlay"
              src="/weddings/invitation/bottom-flowers.png"
              alt=""
            />

            <div className="hero-content">
              <p className="hero-welcome">
                You are invited to the
              </p>

              <h1 className="hero-ceremony">
                Reception Ceremony
              </h1>

              <div className="hero-of">
                <span></span>
                <p>of</p>
                <span></span>
              </div>

              <div className="hero-names">
                <span className="hero-name-first">
                  Navjot
                </span>

                <span className="hero-ampersand">
                  &amp;
                </span>

                <span className="hero-name-second">
                  Anju
                </span>
              </div>
            </div>

            <div className="scroll-indicator">
              <span>Scroll down</span>

              <div className="scroll-arrow">
                ⌄
              </div>
            </div>
          </section>

          {/* OTHER INVITATION SECTIONS */}
          <NikkahSection />

          {/* SAVE THE DATE */}
          <section className="direct-date-section">
            <p className="direct-date-eyebrow">
              SAVE THE DATE
            </p>

            <div className="direct-date-divider">
              <span />
              <span className="direct-date-flower">✦</span>
              <span />
            </div>

            <h2 className="direct-date-day">
              Wednesday
            </h2>

            <p className="direct-date-number">25</p>

            <p className="direct-date-month">
              November 2026
            </p>

            <div className="save-date-emblem">
              <img
                src="/weddings/invitation/save-the-date.png"
                alt="Save the date"
              />
            </div>
          </section>

          <TimingSection />

          {/* OPTIONAL SECTIONS */}
          {/* <VerseSection /> */}
          {/* <WeddingTimeline /> */}
          {/* <CountdownSection /> */}

          <LocationSection />
          <ClosingSection />

          {/* <RSVPSection /> */}
        </main>
      )}
    </div>
  );
}

export default App;
