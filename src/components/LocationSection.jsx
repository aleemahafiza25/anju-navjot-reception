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

          {/* Generated decorative frame */}
          <img
            className="map-border"
            src="/weddings/invitation/map-border.png"
            alt=""
          />

          {/* Actual map */}
          <div className="location-map">

            <iframe
              title="Wedding Venue Location"
              src="https://www.google.com/maps?q=The%20Ocean%20Pearl%20Mangalore&output=embed"
              loading="lazy"
              allowFullScreen
            />

          </div>

        </div>


        {/* Venue information */}
        <div className="location-info">

          <h3>
            The Ocean Pearl
          </h3>

          <p>
            Navabharath Circle, Kodialbail
            <br />
            Mangaluru, Karnataka
          </p>

          <a
            href="https://www.google.com/maps/search/?api=1&query=The+Ocean+Pearl+Mangalore"
            target="_blank"
            rel="noopener noreferrer"
            className="location-button"
          >
            View on Map
          </a>

        </div>

      </div>

      {/* Soft bottom fade */}
      <div className="location-fade-bottom" />

    </section>
  );
}