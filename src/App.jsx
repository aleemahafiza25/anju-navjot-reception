import { useEffect, useRef, useState } from "react";

import ScratchReveal from "./components/ScratchReveal";
import EnvelopeOpening from "./components/EnvelopeOpening";

import "./App.css";

import NikkahSection from "./components/NikkahSection";
import VerseSection from "./components/VerseSection";
import WeddingTimeline from "./components/WeddingTimeline";
import CountdownSection from "./components/CountdownSection";
import LocationSection from "./components/LocationSection";
import RSVPSection from "./components/RSVPSection";

function App() {
  const [opened, setOpened] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);

  const audioRef = useRef(null);

  /*
    Start background music after the invitation opens.
    The browser may block autoplay, so we also provide
    a small music button if needed.
  */
  const startMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      audio.volume = 0.35;
      await audio.play();
      setMusicPlaying(true);
    } catch (error) {
      console.log("Music autoplay was blocked by the browser.");
      setMusicPlaying(false);
    }
  };

const handleOpen = () => {
  setOpened(true);
};

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      try {
        audio.volume = 0.35;
        await audio.play();
        setMusicPlaying(true);
      } catch (error) {
        console.log("Could not play music:", error);
      }
    } else {
      audio.pause();
      setMusicPlaying(false);
    }
  };

  /*
    If autoplay was blocked, listen for the user's
    first interaction after the invitation opens.
  */
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

      {/* =========================
          BACKGROUND MUSIC
         ========================= */}

      <audio
        ref={audioRef}
        src="/weddings/opening/wedding-nasheed.mp3"
        loop
        preload="auto"
      />

      {/* =========================
          ENVELOPE OPENING
         ========================= */}

      {!opened ? (
        <EnvelopeOpening onOpen={handleOpen} />
      ) : (
        <main className="invitation">

          {/* =========================
              MUSIC BUTTON
             ========================= */}

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


          {/* =========================
              PAGE 1
             ========================= */}

          <section className="hero-page">

            <video
              className="hero-background"
              src="/weddings/invitation/hero.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            />

            <div className="hero-overlay"></div>

            <img
              className="bottom-floral-overlay"
              src="/weddings/invitation/bottom-flowers.png"
              alt=""
            />

            <div className="hero-content">


              <h1 className="hero-names">
                <span>Daanish</span>

                <span className="hero-ampersand">
                  &amp;
                </span>

                <span>Adeena</span>
              </h1>

            </div>

            <div className="scroll-indicator">
              <span>Scroll down</span>

              <div className="scroll-arrow">
                ⌄
              </div>
            </div>

          </section>


          {/* =========================
              OTHER SECTIONS
             ========================= */}

          <ScratchReveal />

          <NikkahSection />

          <VerseSection />

          <WeddingTimeline />

          <CountdownSection />

          <LocationSection />

          <RSVPSection />


          {/* =========================
              OLD PAGE 2
             ========================= */}

          {/*
          <section className="details-page">

            <div className="details-corner details-corner-top-left">
              ❦
            </div>

            <div className="details-corner details-corner-top-right">
              ❦
            </div>

            <div className="details-corner details-corner-bottom-left">
              ❦
            </div>

            <div className="details-corner details-corner-bottom-right">
              ❦
            </div>

            <div className="details-content">

              <p className="details-intro">
                WITH JOY AND GRATITUDE
              </p>

              <h2>
                We invite you
              </h2>

              <div className="details-script">
                to celebrate
              </div>

              <div className="floral-divider">

                <span className="divider-line"></span>

                <span className="divider-flower">
                  ❧
                </span>

                <span className="divider-line"></span>

              </div>

              <p className="details-description">
                the beginning of a beautiful journey
                as two hearts come together
                in the blessings of marriage.
              </p>

              <div className="details-names">
                Daanish
                <span>&amp;</span>
                Adeena
              </div>

              <div className="details-date-line">

                <span></span>

                <p>
                  18 January 2027
                </p>

                <span></span>

              </div>

            </div>

          </section>
          */}

        </main>
      )}
    </div>
  );
}

export default App;