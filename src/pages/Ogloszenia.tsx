import React from "react";
import PdfViewer from "../components/PdfViewer";
import ogloszeniaPdf from "../pdf/ogloszenia.pdf";
import ustawaPdf from "../pdf/ustawa.pdf";

export function Ogloszenia() {
  return (
    <section className="ogloszenia">
      <h2>Ogłoszenia parafialne</h2>
      <p>Aktualne ogłoszenia można zobaczyć poniżej:</p>

      <PdfViewer fileUrl={ogloszeniaPdf} />
      <PdfViewer fileUrl={ustawaPdf} />
    </section>
  );
};