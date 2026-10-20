export interface TypAlbumu {
  id: string;        // nazwa folderu i końcówka linku, np. "peregrynacja"
  tytul: string;     // nazwa wydarzenia wyświetlana na stronie
  liczbaZdjec: number; // łączna liczba wszystkich zdjęć w folderze
  dataKonkretna: string;
  pelnyOpis: string;
}

export const LISTA_ALBUMOW: TypAlbumu[] = [
  {
    id: "dozynki-parafialne-2026",
    tytul: "Dożynki parafialne",
    liczbaZdjec: 17, // zmień na Twoją faktyczną liczbę zdjęć
    dataKonkretna: "15 sierpnia 2026 r.",
    pelnyOpis: "Tradycyjne dziękczynienie za tegoroczne plony rozpoczęliśmy uroczystą procesją spod remizy OSP w Chruszczobrodzie do świątyni. Wspaniałe wieńce dożynkowe przygotowały KGW „Dolomitki” (Chruszczobród), KGW „Rafałki” (Chruszczobród-Piaski) oraz Sołectwo Trzebyczka. Po dziękczynnej Mszy Świętej mieszkańcy i goście wzięli udział w zorganizowanym festynie dożynkowym."
  },
  {
    id: "pielgrzymka-na-jasna-gore-2026",
    tytul: "Pielgrzymka Bielsko-Żywiecka na Jasną Górę",
    liczbaZdjec: 8, // zmień na Twoją faktyczną liczbę zdjęć
    dataKonkretna: "6-7 sierpnia 2026 r.",
    pelnyOpis: "W dniach 6 i 7 sierpnia nasza parafia miała radość gościć pątników Pieszej Pielgrzymki Diecezji Bielsko-Żywieckiej zmierzających na Jasną Górę. Po wieczornym przyjęciu pielgrzymów na nocleg i wspólnym odpoczynku, 7 sierpnia o godz. 8:30 sprawowana była Msza Święta, po której pątnicy z modlitwą i śpiewem wyruszyli w dalszą drogę do Częstochowy."
  },
  // {
  //   id: "wieczor-uwielbienia-lipiec-2026",
  //   tytul: "Wieczór Uwielbienia - lipiec 2026",
  //   liczbaZdjec: 0, // zmień na Twoją faktyczną liczbę zdjęć
  //   dataKonkretna: "24 lipca 2026 r.",
  //   pelnyOpis: "W tym roku Uroczystość Najświętszego Ciała i Krwi Chrystusa zgromadziła rzesze wiernych naszej parafii. Po uroczystej Mszy Świętej wyruszyła Procesja Eucharystyczna do czterech ołtarzy, które zostały pięknie przygotowane przez mieszkańców parafii. Serdeczne Bóg zapłać za zaangażowanie, wspólnotową modlitwę oraz świadectwo wiary."
  // },
  {
    id: "boze-cialo",
    tytul: "Uroczystość Bożego Ciała",
    liczbaZdjec: 23, // zmień na Twoją faktyczną liczbę zdjęć
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