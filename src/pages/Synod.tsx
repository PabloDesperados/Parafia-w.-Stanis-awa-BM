import React from "react";
import PdfViewer from "../components/PdfViewer";
import poslaniePdf from "../pdf/poslanie-synod.pdf";

export function Synod(){
    return (
        <section className="synod">
            <h2>Synod Diecezjalny</h2>

            <div className="synod-intro">
                <p>
                    Inicjatywa synodu w diecezji sosnowieckiej stanowi wezwanie do odnowy wspólnoty diecezjalnej poprzez autentyczny dialog i współodpowiedzialność za Kościół. Synod nie jest jedynie formalnym spotkaniem, ale procesem, w którym wspólnie rozeznajemy wolę Bożą dla naszej diecezji. Jednym z kluczowych narzędzi tej pracy będzie <strong>Rozmowa w Duchu Świętym</strong>, stosowana podczas spotkań zespołu synodalnego. Opiera się ona na trzech etapach: osobistym dzieleniu się refleksją, uważnym przyjmowaniu głosu bliźniego oraz wspólnej modlitwie, co pozwala wznieść się ponad podziały i usłyszeć to, co Duch Święty mówi dziś do naszego Kościoła.
                    Zadaniem zespołu jest wspólna modlitwa, rozeznawanie oraz wsłuchiwanie się w głos bliźnich dla dobra wspólnoty Kościoła.
                </p>
                <p>
                    Informacje dotyczące synodu oraz spotkań Zespołu Synodalnego będą podawane na bieżąco na stronie parafialnej.
                </p>
            </div>

            <div className="synod-invite">
                <h3>Włącz się w dzieło Synodu</h3>
                <p>
                    <em>„Dlatego zachęcajcie się wzajemnie i budujcie jedni drugich”</em> (1 Tes 5, 11) <br />
                    Synod to wspólna droga wszystkich wiernych. Jeśli leży Ci na sercu dobro naszej parafii,
                    chcesz podzielić się swoimi spostrzeżeniami, pomysłami lub włączyć się w prace zespołu synodalnego,
                    serdecznie zapraszamy do kontaktu z ks. proboszczem lub członkami zespołu.
                    Każdy głos i każda modlitwa są cenne dla naszej parafii. <br />
                    <em>„Podobnie jak jedno jest ciało, choć składa się z wielu członków, a wszystkie członki, mimo iż są liczne, stanowią jedno ciało, tak też jest i z Chrystusem. [...] Wy przeto jesteście Ciałem Chrystusa i poszczególnymi członkami.”</em> <br /> (1 Kor 12, 12.27)
                </p>
            </div>
            
            <div className="synod-dokument">
                <h3>Dokument posłania Parafialnego Zespołu Synodalnego</h3>
                <p>Poniżej można zapoznać się z oficjalnym dokumentem posłania:</p>

                <PdfViewer fileUrl={poslaniePdf} />
            </div>
        </section>
    )
}