import "./VerseSection.css";

export default function VerseSection() {
  return (
    <section className="verse-section">

      <div className="verse-content">

        <div className="verse-divider">
          <span></span>
          <b>✦</b>
          <span></span>
        </div>

        <div className="verse-arabic">
          وَخَلَقْنَاكُمْ أَزْوَاجًا
        </div>

        <p className="verse-translation">
          "And We created you in pairs."
        </p>

        <p className="verse-reference">
          (Surah An-Naba 78:8)
        </p>

      </div>

    </section>
  );
}