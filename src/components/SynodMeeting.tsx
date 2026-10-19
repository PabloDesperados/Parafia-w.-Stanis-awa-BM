import React, { useState, useEffect } from "react";

//Data najbliższego spotkania
const MEETING_DATE = new Date("2026-10-24T10:00:00");

//Ile dni przed spotkaniem, baner ma się pojawić
const DAYS_BEFORE = 7;

export function SynodMeeting() {
    const [isUpcoming, setIsUpcoming] = useState(false);

    useEffect(() => {
        const now = new Date();

        const showFrom = new Date(MEETING_DATE);
        showFrom.setDate(showFrom.getDate() - DAYS_BEFORE);

        const shouldShow = now >= showFrom && now < MEETING_DATE;
        setIsUpcoming(shouldShow);
    }, []);

    //jeśli data już minęła, nic się nie wyświetli
    if (!isUpcoming) {
        return null;
    }

    return (
        <div className="mass-banner">
        <p>
            <strong>Najbliższe spotkanie Parafialnego Zespołu Synodalnego</strong>
        </p>
        <p>
            Sobota, <strong>24 października 2026 r.</strong>, godz. <strong>10:00</strong>
        </p>
        </div>
    );
}