import React, { useEffect, useState } from "react";
import { calculateNextMass, NextMassInfo } from "../ts/MassSchedule";

export const MassSchedule: React.FC<{ showAlways?: boolean }> = ({
  showAlways = false,
}) => {
  const [info, setInfo] = useState<NextMassInfo | null>(null);

  useEffect(() => {
    const data = calculateNextMass();

    if (!data) return;

    // jeśli showAlways = false → pokazujemy tylko jeśli ≤ 1.5h
    if (!showAlways && data.hoursUtil > 1.5) {
      setInfo(null);
      return;
    }

    setInfo(data);
  }, [showAlways]);

  if (!info) return null;

  return (
    <div className="mass-banner">
      <p>{info.text}</p>
    </div>
  );
};