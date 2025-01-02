import React, { useState, useEffect } from "react";
import "../styles/calendar.css"; // .css 파일을 import

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [days, setDays] = useState([]);

  useEffect(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    const calendarDays = [];
    for (let i = 0; i < firstDay; i++) calendarDays.push(null);
    for (let i = 1; i <= lastDate; i++) calendarDays.push(i);

    setDays(calendarDays);
  }, [currentDate]);

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
  };

  return (
    <div className="calendar">
      {" "}
      {/* CSS 클래스명 사용 */}
      <div className="header">
        <button onClick={handlePrevMonth}>◀</button>
        <h2>{`${currentDate.toLocaleString("default", {
          month: "long",
        })} ${currentDate.getFullYear()}`}</h2>
        <button onClick={handleNextMonth}>▶</button>
      </div>
      <div className="grid">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="dayName">
            {day}
          </div>
        ))}
        {days.map((day, index) => (
          <div key={index} className="day">
            {day || ""}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
