import ScratchReveal from "./components/ScratchReveal";
import { useState } from "react";
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

  return (
    <div className="app">
      {!opened ? (
        <EnvelopeOpening onOpen={() => setOpened(true)} />
      ) : (
        <main className="invitation">

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
            />

            <div className="hero-overlay"></div>

<img
  className="bottom-floral-overlay"
  src="/weddings/invitation/bottom-flowers.png"
  alt=""
/>

            <div className="hero-content">

              <p className="hero-small">
                YOU ARE CORDIALLY INVITED TO THE MARRIAGE OF
              </p>

              <h1 className="hero-names">
                <span>Daanish</span>
                <span className="hero-ampersand">&amp;</span>
                <span>Adeena</span>
              </h1>

            </div>

            <div className="scroll-indicator">
              <span>Scroll down</span>
              <div className="scroll-arrow">⌄</div>
            </div>

          </section>
<ScratchReveal />
<NikkahSection />
<VerseSection />
<WeddingTimeline />
<CountdownSection />
<LocationSection />
<RSVPSection />

          {/* =========================
              PAGE 2
          ========================= */}

          {/* <section className="details-page">

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
      <p>18 January 2027</p>
      <span></span>
    </div>

  </div>

</section> */}

        </main>
      )}
    </div>
  );
}

export default App;