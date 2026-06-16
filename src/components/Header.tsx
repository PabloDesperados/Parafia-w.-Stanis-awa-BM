import React from "react";
import { Link, useLocation } from "react-router-dom";
import churchImage from "../kosciol_wnetrze.jpg";

export default function Header() {
  const location = useLocation();

  const isActive = (path: string) =>
    location.pathname === path ? "active" : "";

  return (
    <>
      <header>
        <div className="header-left">
          <h1>Parafia p.w. św. Stanisława BM</h1>
        </div>
        <div className="header-right">
          <p>Niech będzie pochwalony Jezus Chrystus!</p>
        </div>
      </header>

      <nav>
        <ul>
          <li><Link className={isActive("/")} to="/">Strona główna</Link></li>
          <li><Link className={isActive("/ogloszenia")} to="/ogloszenia">Ogłoszenia</Link></li>
          <li><Link className={isActive("/msze")} to="/msze">Msze Święte</Link></li>
          <li><Link className={isActive("/o-parafii")} to="/o-parafii">O parafii</Link></li>
          <li><Link className={isActive("/kontakt")} to="/kontakt">Kontakt</Link></li>
        </ul>
      </nav>

      <div className="home-image">
        <img src={churchImage} 
        alt="Wnętrze kościoła parafialnego" 
        />
      </div>
    </>
  );
}