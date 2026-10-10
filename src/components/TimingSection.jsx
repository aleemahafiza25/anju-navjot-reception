import "./TimingSection.css";

export default function TimingSection() {
  return (
    <section className="timing-section">
      <div className="timing-ornament">
        <span />
        <span className="timing-diamond">✦</span>
        <span />
      </div>

      <p className="timing-eyebrow">THE CELEBRATION BEGINS</p>

      <h2 className="timing-heading">Time</h2>

      <div className="timing-clock">
        <span className="timing-clock-icon">◷</span>
        <p>7:30 PM onwards</p>
      </div>

      <p className="timing-note">
        We look forward to celebrate this special evening with you.
      </p>

      <div className="timing-bottom-ornament">❧</div>
    </section>
  );
}