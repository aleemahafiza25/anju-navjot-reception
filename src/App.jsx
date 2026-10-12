
import { useEffect, useRef, useState } from "react";

// import ScratchReveal from "./components/ScratchReveal";
import EnvelopeOpening from "./components/EnvelopeOpening";
import TimingSection from "./components/TimingSection";

import "./App.css";

import NikkahSection from "./components/NikkahSection";
import ClosingSection from "./components/ClosingSection";
// import VerseSection from "./components/VerseSection";
// import WeddingTimeline from "./components/WeddingTimeline";
// import CountdownSection from "./components/CountdownSection";
import LocationSection from "./components/LocationSection";
// import RSVPSection from "./components/RSVPSection";

function App() {
  const [opened, setOpened] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);

  const audioRef = useRef(null);
  const heroVideoRef = useRef(null);

  // Start background music after the invitation opens.
  const startMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      audio.muted = false;
      audio.volume = 0.35;

      await audio.play();

      setMusicPlaying(true);
    } catch (error) {
      console.log("Music autoplay was blocked by the browser.");
      setMusicPlaying(false);
    }
  };

  // Prepare music silently when the guest taps the envelope.
  const prepareMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      audio.volume = 0;
      audio.muted = true;

      await audio.play();
    } catch (error) {
      console.log("Music preparation was blocked:", error);
    }
  };

  // Reveal the invitation when the envelope video finishes.
  const handleOpen = () => {
    setOpened(true);
  };

  // Toggle music using the music button.
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

  // Start music when the first invitation page appears.
  useEffect(() => {
    if (!opened) return;

    startMusic();

    const tryStartMusic = () => {
      startMusic();
    };

    window.addEventListener("pointerdown", tryStartMusic, {
      once: true,
    });

    return () => {
      window.removeEventListener("pointerdown", tryStartMusic);
    };
  }, [opened]);

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
