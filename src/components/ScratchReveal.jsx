import { useEffect, useRef, useState } from "react";
import "./ScratchReveal.css";

function ScratchCard({ value, label, type, onReveal }) {
  const canvasRef = useRef(null);
  const cardRef = useRef(null);

  const [scratching, setScratching] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const card = cardRef.current;

    if (!canvas || !card) return;

    const ctx = canvas.getContext("2d");

    const setup = () => {
      const rect = card.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      ctx.globalCompositeOperation = "source-over";

      // Scratch surface
      ctx.fillStyle = "#d7c09f";
      ctx.fillRect(0, 0, rect.width, rect.height);

      // Soft texture
      for (let i = 0; i < 120; i++) {
        const x = Math.random() * rect.width;
        const y = Math.random() * rect.height;
        const radius = Math.random() * 1.5 + 0.5;

        ctx.fillStyle = "rgba(255,255,255,0.10)";

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Scratch text
      ctx.fillStyle = "#725638";
      ctx.font = "500 8px Montserrat, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      ctx.fillText(
        "SCRATCH",
        rect.width / 2,
        rect.height / 2
      );
    };

    setup();

    window.addEventListener("resize", setup);

    return () => {
      window.removeEventListener("resize", setup);
    };
  }, []);

  const scratch = (clientX, clientY) => {
    const canvas = canvasRef.current;

    if (!canvas || revealed) return;

    const rect = canvas.getBoundingClientRect();

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const ctx = canvas.getContext("2d");

    ctx.globalCompositeOperation = "destination-out";

    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fill();

    checkProgress();
  };

  const checkProgress = () => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const sample = ctx.getImageData(
      0,
      0,
      canvas.width,
      canvas.height
    );

    let transparent = 0;
    let total = 0;

    for (let i = 3; i < sample.data.length; i += 32) {
      total++;

      if (sample.data[i] < 30) {
        transparent++;
      }
    }

    const percentage = transparent / total;

    if (percentage > 0.48 && !revealed) {
      setRevealed(true);

      if (type === "year" && onReveal) {
        onReveal();
      }
    }
  };

  const handlePointerDown = (e) => {
    e.preventDefault();

    setScratching(true);

    scratch(e.clientX, e.clientY);

    canvasRef.current?.setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!scratching) return;

    e.preventDefault();

    scratch(e.clientX, e.clientY);
  };

  const handlePointerUp = (e) => {
    setScratching(false);

    try {
      canvasRef.current?.releasePointerCapture?.(
        e.pointerId
      );
    } catch {}
  };

  return (
    <div className="date-card-wrapper">

      <div
        ref={cardRef}
        className={`date-card ${
          revealed ? "revealed" : ""
        }`}
      >

        <div className="date-card-hidden">

          {type === "day" && (
            <span className="date-number">
              {value}
            </span>
          )}

          {type === "month" && (
            <span className="date-word">
              {value}
            </span>
          )}

          {type === "year" && (
            <span className="date-number year">
              {value}
            </span>
          )}

        </div>

        <canvas
          ref={canvasRef}
          className="date-scratch-canvas"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        />

      </div>

      <span className="date-card-label">
        {label}
      </span>

    </div>
  );
}


export default function ScratchReveal() {

  const [yearRevealed, setYearRevealed] =
    useState(false);

  return (
    <section className="scratch-page">

      {/* GOLDEN CELEBRATION */}

      {yearRevealed && (
        <div
          className="date-popper"
          aria-hidden="true"
        >

          {Array.from({ length: 22 }).map(
            (_, index) => {

              const random = (min, max) =>
                Math.random() *
                (max - min) +
                min;

              return (
                <span
                  key={index}
                  style={{
                    "--left": `${random(20, 80)}%`,
                    "--delay": `${random(
                      0,
                      2.8
                    )}s`,
                    "--duration": `${random(3, 4.5)}s`,
                    "--drift": `${random(
                      -70,
                      70
                    )}px`,
                    "--rotate": `${random(
                      -360,
                      360
                    )}deg`,
                    "--size": `${random(
                      5,
                      8
                    )}px`,
                  }}
                />
              );
            }
          )}

        </div>
      )}


      <div className="scratch-content">

        <p className="scratch-eyebrow">
          A LITTLE SURPRISE
        </p>

        <h2>
          Scratch to Reveal
        </h2>

        <p className="scratch-description">
          Discover the date of our special day
        </p>


        <div className="date-cards">

          <ScratchCard
            value="18"
            label="DAY"
            type="day"
          />

          <ScratchCard
            value="JAN"
            label="MONTH"
            type="month"
          />

          <ScratchCard
            value="2027"
            label="YEAR"
            type="year"
            onReveal={() =>
              setYearRevealed(true)
            }
          />

        </div>

      </div>

    </section>
  );
}