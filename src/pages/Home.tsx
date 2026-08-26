import React from "react";
import { MassSchedule } from "../components/MassBanner";
import { Link } from "react-router-dom";
// import PdfViewer from "../components/PdfViewer";
// import wieczor_uwielbienia from "../pdf/wieczor_uwielbienia.pdf";

export function Home() {
  return (
    <section className="home">
      <MassSchedule showAlways />

      <h2>Parafia św. Stanisława BM w Chruszczobrodzie</h2>

      {/* <div className="home-image">
        <img
          src="kosciol_wnetrze.jpg"
          alt="Wnętrze kościoła parafialnego"
        />
      </div> */}

      {/* <PdfViewer fileUrl={wieczor_uwielbienia} /> */}

      <article className="home-intro">
        <p>
          Parafia św. Stanisława BM w Chruszczobrodzie została erygowana w
          1459 roku. Obecny kościół parafialny pochodzi z XVIII wieku i
          zachwyca barokowym wnętrzem.
        </p>
      </article>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Link to="/o-parafii" className="read-more-link">
          Czytaj więcej &raquo;
        </Link>
      </div>

      <div className="home-gallery-lead" style={{ textAlign: "center", marginTop: "40px", padding: "20px", background: "#f9f9f9", borderRadius: "8px" }}>
        <h3>Wspomnienia i Kronika Wspólnoty</h3>
        <p>Zachęcamy do obejrzenia galerii zdjęć z najważniejszych wydarzeń z życia naszej parafii</p>
        <Link to="/z-zycia-parafii" className="read-more-link">
          Przejdź do galerii zdjęć &raquo;
        </Link>
      </div>
    </section>
  );
};

//Archiwalny kod javascript, który dynamicznie aktualizował informację o najbliższej Mszy Świętej. Obecnie jest to realizowane w komponencie React MassSchedule.tsx

// setTimeout(() => {
//     showNextMass();
//   }, 0);
// Po załadowaniu DOM, dynamicznie aktualizujemy informację o Mszy
// document.addEventListener("DOMContentLoaded", () => {
//   const container = document.getElementById("next-mass-info");
//   if (!container) return;

//   const now = new Date();
//   const day = now.getDay(); // niedziela = 0
//   const hour = now.getHours();
//   const minute = now.getMinutes();

//   // Plan Mszy
//   const schedule = {
//     sunday: ["08:30", "11:30", "17:00"],
//     weekday: ["07:00", "18:00"], // zimą 17:00
//   };

//   // Zimowy czas (grudzień–luty)
//   const isWinter = [11, 0, 1].includes(now.getMonth());
//   if (isWinter) schedule.weekday = ["07:00", "17:00"];

//   // Ustal, które godziny obowiązują dziś
//   const times =
//     day === 0
//       ? schedule.sunday
//       : day === 2 || day === 4
//       ? schedule.weekday
//       : schedule.weekday;

//   // Oblicz czas w minutach
//   const currentTime = hour * 60 + minute;
//   let nextMass: string | null = null;
//   for (const t of times) {
//     const [h, m] = t.split(":").map(Number);
//     const total = h * 60 + m;
//     if (total > currentTime) {
//       nextMass = t;
//       break;
//     }
//   }

//   // Komunikat końcowy
//   const message = nextMass
//     ? `Najbliższa Msza Święta dziś o <strong>${nextMass}</strong>.`
//     : "Dziś wszystkie Msze Święte już się odbyły.";

//   container.innerHTML = `<p>${message}</p>`;
// });