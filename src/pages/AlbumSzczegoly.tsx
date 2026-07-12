import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { LISTA_ALBUMOW } from "../ts/DaneGalerii";

export function AlbumSzczegoly() {
  const { albumId } = useParams<{ albumId: string }>();
  const [powiekszone, setPowiekszone] = useState<string | null>(null);

  const album = LISTA_ALBUMOW.find((a) => a.id === albumId);

  if (!album) {
    return (
      <section className="album-error">
        <h2>Nie znaleziono albumu</h2>
        <Link to="/z-zycia-parafii" className="read-more-link">&laquo; Powrót do wydarzeń</Link>
      </section>
    );
  }

  // Generujemy ścieżki do WSZYSTKICH zdjęć w albumie
  const wszystkieZdjecia = Array.from(
    { length: album.liczbaZdjec },
    (_, i) => `${process.env.PUBLIC_URL}/images/galeria/${album.id}/${i + 1}.jpeg`
  );

  return (
    <section className="album-szczegoly-strona">
      <div className="album-naglowek">
        <Link to="/z-zycia-parafii" className="powrot-link">&laquo; Powrót do listy wydarzeń</Link>
        <h2>{album.tytul}</h2>
        <p className="album-dokladna-data" style={{ fontStyle: "italic", color: "#666", marginBottom: "1rem" }}>
          Data uroczystości: {album.dataKonkretna}
        </p>
        <p className="album-opis-tekst" style={{ lineHeight: "1.7", textAlign: "justify", marginBottom: "2rem" }}>
          {album.pelnyOpis}
        </p>
      </div>

      <div className="gallery-grid">
        {wszystkieZdjecia.map((url, index) => (
          <div key={index} className="gallery-item" onClick={() => setPowiekszone(url)}>
            <img src={url} alt={`${album.tytul} - foto ${index + 1}`} loading="lazy" />
          </div>
        ))}
      </div>

      {/* Okienko pełnoekranowe po kliknięciu (Lightbox) */}
      {powiekszone && (
        <div className="gallery-lightbox" onClick={() => setPowiekszone(null)}>
          <div className="lightbox-close">&times;</div>
          <img src={powiekszone} alt="Powiększone" />
        </div>
      )}
    </section>
  );
}