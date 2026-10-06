import { useState } from "react";
import "./RSVPSection.css";

export default function RSVPSection() {
  const [showForm, setShowForm] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="rsvp-section">

      {/* Top floral decoration */}
      <img
        className="rsvp-top-flower"
        src="/weddings/invitation/bottom-flowers.png"
        alt=""
      />

      <div className="rsvp-content">

        <h2 className="rsvp-title">
          Confirm Your Attendance
        </h2>

        <div className="rsvp-divider">
          <span></span>
          <b>✦</b>
          <span></span>
        </div>

        <p className="rsvp-text">
          To help us prepare for a joyful
          <br />
          celebration, kindly confirm your
          <br />
          attendance by 30 November 2026
        </p>

        {/* RSVP BUTTON */}
        {!showForm && !submitted && (
          <button
            className="rsvp-button"
            onClick={() => setShowForm(true)}
          >
            RSVP
          </button>
        )}

        {/* RSVP FORM */}
        {showForm && !submitted && (
          <form
            className="rsvp-form"
            onSubmit={handleSubmit}
          >

            <input
              type="text"
              placeholder="Your Name"
              required
            />

            <input
              type="number"
              min="1"
              max="10"
              placeholder="Number of Guests"
              required
            />

            <select required defaultValue="">
              <option value="" disabled>
                Will you attend?
              </option>

              <option value="yes">
                Joyfully Accept
              </option>

              <option value="no">
                Regretfully Decline
              </option>
            </select>

            <textarea
              placeholder="Leave a message for the couple..."
              rows="3"
            />

            <button
              type="submit"
              className="rsvp-submit"
            >
              Confirm Attendance
            </button>

          </form>
        )}

        {/* SUCCESS MESSAGE */}
        {submitted && (
          <div className="rsvp-success">
            <div className="rsvp-success-symbol">
              ✦
            </div>

            <h3>
              Thank You
            </h3>

            <p>
              Your response has been received.
              <br />
              We look forward to celebrating with you.
            </p>
          </div>
        )}

        <h3 className="rsvp-closing">
          Hope to see you there
        </h3>

        <div className="rsvp-credit">
          <p>Designed with love</p>
          <span>Wedding Invitations</span>
        </div>

      </div>

      {/* Bottom flowers */}
      <img
        className="rsvp-flower rsvp-flower-left"
        src="/weddings/invitation/bottom-flowers.png"
        alt=""
      />

      <img
        className="rsvp-flower rsvp-flower-right"
        src="/weddings/invitation/bottom-flowers.png"
        alt=""
      />

    </section>
  );
}