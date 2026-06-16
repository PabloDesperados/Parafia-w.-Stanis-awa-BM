import React from "react";
import PdfViewer from "../components/PdfViewer";
import ogloszeniaPdf from "../pdf/ogloszenia.pdf";

export const Ogloszenia: React.FC = () => {
  return (
    <section className="ogloszenia">
      <h2>Ogłoszenia parafialne</h2>
      <p>Aktualne ogłoszenia można zobaczyć poniżej:</p>

      <PdfViewer fileUrl={ogloszeniaPdf} />
    </section>
  );
};