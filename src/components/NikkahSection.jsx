import "./NikkahSection.css";

export default function NikkahSection() {
  return (
    <section className="nikkah-section">

      <div className="nikkah-inner">

        <div className="nikkah-arch">

          <div className="nikkah-arch-inner">

            {/* Invitation heading */}




            {/* Groom */}
            <h2 className="nikkah-name">
              Navjot
            </h2>

            {/* Divider */}
            <div className="nikkah-divider">
              <span></span>
              <b>✦</b>
              <span></span>
            </div>

            {/* Groom parents */}
            <p className="nikkah-relation">
              Grand S/o
            </p>

            <p className="nikkah-parents">
              Late Sd MR Tarsem Kaur &amp; Late Sdn MRS Sucha Singh
            </p>

            {/* With */}
            <p className="nikkah-with">
              With
            </p>

            {/* Bride */}
            <h2 className="nikkah-name nikkah-bride">
              Anju
            </h2>

            {/* Bride parents */}
            <p className="nikkah-relation">
              DAUGHTER OF
            </p>

            <p className="nikkah-parents">
              MR Umrao Singh Bhandari &amp; MRS Chaita D.Bhandari
            </p>

            {/* Message */}
            <h3 className="nikkah-message-title">
              Dear Friends and Family
            </h3>

            <p className="nikkah-message">
              Join us for an evening of love,
              <br />
              laughter, and
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