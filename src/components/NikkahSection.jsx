import "./NikkahSection.css";

export default function NikkahSection() {
  return (
    <section className="nikkah-section">

      <div className="nikkah-inner">

        <div className="nikkah-arch">

          <div className="nikkah-arch-inner">

            {/* Bismillah */}
            <div className="nikkah-bismillah">
              ﷽
            </div>

            {/* Invitation heading */}
            <p className="nikkah-intro">
              YOU ARE INVITED TO THE
              <br />
              NIKKAH CEREMONY OF
            </p>

            {/* Groom */}
            <h2 className="nikkah-name">
              Daanish
            </h2>

            {/* Divider */}
            <div className="nikkah-divider">
              <span></span>
              <b>✦</b>
              <span></span>
            </div>

            {/* Groom parents */}
            <p className="nikkah-relation">
              SON OF
            </p>

            <p className="nikkah-parents">
              MR &amp; MRS CH. HUSSAINI
            </p>

            {/* With */}
            <p className="nikkah-with">
              With
            </p>

            {/* Bride */}
            <h2 className="nikkah-name nikkah-bride">
              Adeena
            </h2>

            {/* Bride parents */}
            <p className="nikkah-relation">
              DAUGHTER OF
            </p>

            <p className="nikkah-parents">
              MR &amp; MRS CH. FAROOQI
            </p>

            {/* Message */}
            <h3 className="nikkah-message-title">
              Dear Friends and Family
            </h3>

            <p className="nikkah-message">
              Join us for an evening of love,
              <br />
              laughter, duas, and
              <br />
              unforgettable memories as
              <br />
              we begin our forever.
            </p>

          </div>

        </div>

        {/* Bottom divider */}
        <div className="nikkah-bottom-divider">
          <span></span>
          <b>✦</b>
          <span></span>
        </div>

      </div>

    </section>
  );
}