import React from "react";

export const Msze: React.FC = () => {
  return (
    <section className="msze">
      <h2>Msze Święte</h2>

      <div className="msze-content">
        <h3>W niedziele i święta:</h3>
        <p>
          Godziny: <strong>8:30, 11:30, 17:00</strong>
        </p>

        <h3>W dni powszednie:</h3>
        <p>
          Godziny: <strong>wtorek i czwartek 7:00</strong>, pozostałe dni{" "}
          <strong>17:00</strong>.
        </p>
      </div>
    </section>
  );
};