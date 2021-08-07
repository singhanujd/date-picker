import React from 'react';

import './Calendar.css';

const WEEK_DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

const Calendar = props => {
  let days = props.monthDetails.map((day, index) => {
    return (
      <div
        className={
          'c-day-container ' +
          (day.month !== 0 ? ' disabled' : '') +
          (props.isCurrentDay(day) ? ' highlight' : '') +
          (props.isSelectedDay(day) ? ' highlight-green' : '')
        }
        key={index}
        onClick={() => props.onDateClick(day)}
      >
        {day.date}
      </div>
    );
  });

  return (
    <div className="mdpc-body">
      <div className="c-container">
        <div className="cc-head">
          {WEEK_DAYS.map((d, i) => (
            <div key={i} className="cch-name">
              {d}
            </div>
          ))}
        </div>
        <div className="cc-body">{days}</div>
      </div>
    </div>
  );
};

export default Calendar;
