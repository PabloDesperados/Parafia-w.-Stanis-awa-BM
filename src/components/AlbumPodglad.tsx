import React from "react";
import { Link } from "react-router-dom";
import { TypAlbumu } from "../ts/DaneGalerii";

interface AlbumPodgladProps {
  album: TypAlbumu;
}

export function AlbumPodglad({ album }: AlbumPodgladProps) {
  // Wybieramy tylko pierwsze 5 zdjęć do podglądu
  const miniaturaLiczba = Math.min(album.liczbaZdjec, 5);
  const miniatury = Array.from(
    { length: miniaturaLiczba },
    (_, i) => `${process.env.PUBLIC_URL}/images/galeria/${album.id}/${i + 1}.jpeg`
  );

  return (
    <div className="album-podglad-sekcja">
      <h3>{album.tytul}</h3>
      
      <div className="album-podglad-content">
        {/* Siatka z 5 małymi zdjęciami */}
        <div className="album-podglad-grid">
          {miniatury.map((url, idx) => (
            <div key={idx} className="album-podglad-item">
              <img src={url} alt={`${album.tytul} podgląd ${idx + 1}`} loading="lazy" />
            </div>
          ))}
        </div>

        {/* Przycisk Zobacz więcej obok */}
        <div className="album-podglad-link-box">
          <Link to={`/z-zycia-parafii/${album.id}`} className="read-more-link">
            Zobacz więcej zdjęć &raquo;
          </Link>
        </div>
      </div>
    </div>
  );
}