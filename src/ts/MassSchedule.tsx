export interface NextMassInfo {
    text: string;
    hoursUtil: number;
  }
  
  interface Schedule {
    [key: string]: string[];
  }
  
  export function calculateNextMass(): NextMassInfo | null {
    const masses: Schedule = {
      niedziela: ["8:30", "11:30", "17:00"],
      poniedziałek: ["17:00"],
      wtorek: ["7:00"],
      środa: ["17:00"],
      czwartek: ["7:00"],
      piątek: ["17:00"],
      sobota: ["17:00"],
    };
  
    const days = [
      "niedziela",
      "poniedziałek",
      "wtorek",
      "środa",
      "czwartek",
      "piątek",
      "sobota",
    ];
  
    const now = new Date();
    const currentDayIndex = now.getDay(); // 0 = niedziela
    const currentTime = now.getHours() + now.getMinutes() / 60;
  
    const parseTime = (time: string): number => {
      const [h, m] = time.split(":").map(Number);
      return h + m / 60;
    };
  
    let nextDay = "";
    let nextTime = "";
    let hoursUtil = 0;
  
    for (let i = 0; i < 7; i++) {
      const dayIndex = (currentDayIndex + i) % 7;
      const day = days[dayIndex];
      const times = masses[day] || [];
  
      for (const time of times) {
        const parsed = parseTime(time);
  
        if (i > 0 || parsed > currentTime) {
          nextDay = day;
          nextTime = time;
  
          const totalHoursDiff = i * 24 + (parsed - currentTime);
  
          hoursUtil = totalHoursDiff;
          break;
        }
      }
  
      if (nextDay) break;
    }
  
    if (!nextDay) return null;
  
    const hours = Math.floor(hoursUtil);
    const minutes = Math.round((hoursUtil - hours) * 60);
  
    const timeLeft =
      hoursUtil > 0.1
        ? ` (za ${
            hours > 0 ? `${hours} godz${hours === 1 ? "" : "iny"}` : ""
          }${minutes > 0 ? ` ${minutes} min` : ""}) `
        : "";
  
    const text = `Najbliższa Msza Święta: ${nextDay}, godz. ${nextTime}${timeLeft}`;
  
    return { text, hoursUtil };
  }