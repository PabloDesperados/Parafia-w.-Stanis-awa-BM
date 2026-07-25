export interface TypAlbumu {
  id: string;        // nazwa folderu i końcówka linku, np. "peregrynacja"
  tytul: string;     // nazwa wydarzenia wyświetlana na stronie
  liczbaZdjec: number; // łączna liczba wszystkich zdjęć w folderze
  dataKonkretna: string;
  pelnyOpis: string;
}

export const LISTA_ALBUMOW: TypAlbumu[] = [
  {
    id: "boze-cialo",
    tytul: "Uroczystość Bożego Ciała",
    liczbaZdjec: 0, // zmień na Twoją faktyczną liczbę zdjęć
    dataKonkretna: "4 czerwca 2026 r.",
    pelnyOpis: "W tym roku Uroczystość Najświętszego Ciała i Krwi Chrystusa zgromadziła rzesze wiernych naszej parafii. Po uroczystej Mszy Świętej wyruszyła Procesja Eucharystyczna do czterech ołtarzy, które zostały pięknie przygotowane przez mieszkańców parafii. Serdeczne Bóg zapłać za zaangażowanie, wspólnotową modlitwę oraz świadectwo wiary."
  },
  {
    id: "peregrynacja",
    tytul: "Peregrynacja Obrazu Matki Bożej Częstochowskiej",
    liczbaZdjec: 8, // zmień na Twoją faktyczną liczbę zdjęć
    dataKonkretna: "21-22 marca 2026 r.",
    pelnyOpis: "Dni 21 i 22 marca zapiszą się na stałe w historii naszej parafii pw. św. Stanisława BM. Przeżywaliśmy wyjątkowy czas nawiedzenia Kopii Cudownego Obrazu Matki Bożej Częstochowskiej. Nasza wspólnota powitała Czarną Madonnę w atmosferze głębokiej modlitwy i wzruszenia. Przez całą dobę parafianie czuwali przed świętym wizerunkiem, zawierzając Maryi swoje rodziny, sprawy i troski."
  }
];