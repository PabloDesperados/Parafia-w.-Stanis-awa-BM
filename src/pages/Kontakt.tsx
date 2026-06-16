import React from "react";

export const Kontakt: React.FC = () => {
  return (
    <section className="kontakt">
      <h1>Kontakt</h1>

      <h3>Parafialny numer konta:</h3>
      <p>
        Parafia Rzymsko-Katolicka pw. Św. Stanisława BM w Chruszczobrodzie
        <br />
        PKO Bank Polski 53 1020 2498 0000 8002 0714 6527
        <br />
        <strong>Za wszystkie ofiary serdeczne Bóg zapłać!</strong>
      </p>

      <h3>Adres:</h3>
      <p>Bema 2, 42-456 Chruszczobród</p>

      <h3>Telefon:</h3>
      <p>
        32 672 98 19
        <br />
        +48 665 025 565
      </p>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps?q=Parafia%20%C5%9Bw.%20Stanis%C5%82awa%20BM%20Chruszczobr%C3%B3d&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};