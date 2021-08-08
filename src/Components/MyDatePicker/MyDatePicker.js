import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import DateInput from '../DateInput/DateInput';
import Navigation from '../Navigation/Navigation';
import Calendar from '../Calendar/Calendar';

import * as Helper from '../../Utility/Helper';

import './MyDatePicker.css';

let oneDay = 60 * 60 * 24 * 1000;
let todayTimestamp =
  Date.now() -
  (Date.now() % oneDay) +
  new Date().getTimezoneOffset() * 1000 * 60;

const MyDatePicker = () => {
  let date = new Date();
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dateDetails, setDateDetails] = useState({
    year: date.getFullYear(),
    month: date.getMonth(),
    monthDetails: Helper.getMonthDetails(date.getFullYear(), date.getMonth())
  });
  const [selectedDay, setSelectedDay] = useState(todayTimestamp);

  useEffect(() => {
    window.addEventListener('click', addBackDrop);
    return () => {
      window.removeEventListener('click', addBackDrop);
    };
  }, []);

  const addBackDrop = e => {
    if (showDatePicker && !ReactDOM.findDOMNode(this).contains(e.target)) {
      setShowDatePicker(false);
    }
  };

  const isCurrentDay = day => {
    return day.timestamp === todayTimestamp;
  };

  const isSelectedDay = day => {
    return day.timestamp === selectedDay;
  };

  const onDateClick = day => {
    setSelectedDay(day.timestamp);
  };

  const setYear = offset => {
    setDateDetails(prevState => ({
      ...prevState,
      year: prevState.year + offset,
      monthDetails: Helper.getMonthDetails(
        prevState.year + offset,
        prevState.month
      )
    }));
  };

  const setMonth = offset => {
    setDateDetails(prevState => {
      let year = prevState.year;
      let month = prevState.month + offset;
      if (month === -1) {
        month = 11;
        year--;
      } else if (month === 12) {
        month = 0;
        year++;
      }
      return {
        year,
        month,
        monthDetails: Helper.getMonthDetails(year, month)
      };
    });
  };

  const dateChangeHandler = event => {
    const value = new Date(event.target.value);
    const timeStamp = value.getTime();
    if (timeStamp > 0) {
      setSelectedDay(timeStamp);
      setDateDetails({
        year: value.getFullYear(),
        month: value.getMonth(),
        monthDetails: Helper.getMonthDetails(
          value.getFullYear(),
          value.getMonth()
        )
      });
    }
  };

  function formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  return (
    <div className="MyDatePicker">
      <DateInput
        value={formatDate(selectedDay)}
        toggleDatePicker={() => setShowDatePicker(state => true)}
        onChange={dateChangeHandler}
      />
      {showDatePicker && (
        <div className="mdp-container">
          <Navigation
            dateDetails={dateDetails}
            setMonth={setMonth}
            setYear={setYear}
          />
          <Calendar
            monthDetails={dateDetails.monthDetails}
            isCurrentDay={isCurrentDay}
            isSelectedDay={isSelectedDay}
            onDateClick={onDateClick}
          />
        </div>
      )}
    </div>
  );
};

export default MyDatePicker;
