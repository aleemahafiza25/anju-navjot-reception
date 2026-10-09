import "./LocationSection.css";

export default function LocationSection() {
  return (
    <section className="location-section">

      {/* Soft top fade */}
      <div className="location-fade-top" />

      {/* Decorative flowers */}
      <img
        className="location-flower location-flower-left"
        src="/weddings/invitation/bottom-flowers.png"
        alt=""
      />

      <img
        className="location-flower location-flower-right"
        src="/weddings/invitation/bottom-flowers.png"
        alt=""
      />

      <div className="location-content">

        <p className="location-eyebrow">
          JOIN US THERE
        </p>

        <h2 className="location-title">
          Location
        </h2>

        <div className="location-divider">
          <span></span>
          <b>✦</b>
          <span></span>
        </div>

        {/* Map with decorative border */}
        <div className="location-map-frame">

          <img
            className="map-border"
            src="/weddings/invitation/map-border.png"
            alt=""
          />

          {/* Actual map */}
          <div className="location-map">
            <iframe
              title="Starland Banquet, New Delhi"
              src="https://www.google.com/maps?q=Starland%20Banquet%2C%20A98%2C%20Mayapuri%20Industrial%20Area%20Phase%20II%2C%20New%20Delhi%2C%20Delhi%20110064&output=embed"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

        {/* Venue information */}
        <div className="location-info">

          <h3>
            Starland Banquet
          </h3>

          <p>
            A98, Mayapuri Industrial Area Phase II
            <br />
            Mayapuri, New Delhi, Delhi 110064
          </p>

          <a
            href="https://maps.google.com/maps/place//data=!4m2!3m1!1s0x390d035a0a8fa0c3:0x4415fe12c4be95bc?entry=s&sa=X&ved=2ahUKEwiMha6A5amXAxWmxjgGHaUSBZoQ4kB6BAgWEAA&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="location-button"
          >
            Get Directions
          </a>

        </div>

      </div>

      {/* Soft bottom fade */}
      <div className="location-fade-bottom" />

    </section>
  );
}