import React from "react";
import {Link} from "react-router-dom";

export function Kancelaria() {
    return (
        <section className="kancelaria">
            <h2>Kancelaria Parafialna</h2>

            <div className="kancelaria-hours">
                <h3>Godziny otwarcia</h3>
                <p>Kancelaria jest czynna w dniach:</p>
                <p className="kancelaria-hours-highlight">
                    Poniedziałek, Środa, Piątek: 15:30-16:30
                </p>

                <hr />

                <p>
                    <strong>W sprawach pilnych</strong> (tj. pogrzeb, wizyta u chorych itp.) można kontaktować się telefonicznie:
                </p>
                <p>
                    Tel.: <strong>665-025-565</strong> &nbsp; | &nbsp; Tel.: <strong>(32) 672-98-19</strong>
                </p>

                <p>Kontakt do opiekuna cmentarza: <strong>662-046-723</strong></p>
            </div>

            <div className="kancelaria-info">
                <h3>Sprawy i dokumenty</h3>
                <div className="kancelaria-item">
                    <h4>Chrzest</h4>
                    <p>
                        Informacje dotyczące przygotowania do sakramentu chrztu oraz wymagane dokumenty.
                    </p>
                    <div className="kancelaria-wip">
                        <em>Materiały w trakcie przygotowania</em>
                    </div>
                </div>

                <div className="kancelaria-item">
                    <h4>Sakrament Małżeństwa</h4>
                    <p>
                        Zgłoszenia narzeczonych, formalności przedślubne oraz poradnictwo rodzinne.
                    </p>
                    <div className="kancelaria-wip">
                        <em>Materiały w trakcie przygotowania</em>
                    </div>
                </div>

                <div className="kancelaria-item">
                    <h4>Pogrzeb</h4>
                    <p>
                        Dokumenty i zgłoszenia formalności związane z pogrzebem
                    </p>
                    <div className="kancelaria-wip">
                        <em>Materiały w trakcie przygotowania</em>
                    </div>
                </div>
            </div>

            <div className="kancelaria-back">
                <Link to="/kontakt" className="read-more-link">
                    &laquo; Powrót
                </Link>
            </div>
        </section>
    )
}