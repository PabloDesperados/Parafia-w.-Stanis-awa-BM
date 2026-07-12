import React from "react";
import { AlbumPodglad } from "../components/AlbumPodglad";
import { LISTA_ALBUMOW } from "../ts/DaneGalerii";

export function ZZyciaParafii() {
  return (
    <section className="z-zycia-parafii">
      <h2>Z Życia Parafii</h2>
      <p className="kronika-intro" style={{ textAlign: "center", marginBottom: "30px" }}>
        Kronika fotograficzna najważniejszych wydarzeń i uroczystości w naszej wspólnocie parafialnej.
      </p>

      <div className="kronika-lista">
        {LISTA_ALBUMOW.map((album) => (
          <AlbumPodglad key={album.id} album={album} />
        ))}
      </div>
    </section>
  );
}