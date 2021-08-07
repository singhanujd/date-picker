import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import DateInput from '../DateInput/DateInput';

import './MyDatePicker.css';

let oneDay = 60 * 60 * 24 * 1000;
let todayTimestamp =
  Date.now() -
  (Date.now() % oneDay) +
  new Date().getTimezoneOffset() * 1000 * 60;

let inputRef = React.createRef();

class MyDatePicker extends Component {
  state = {
    getMonthDetails: []
  };

  constructor() {
    super();
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    this.state = {
      year,
      month,
      selectedDay: todayTimestamp,
      monthDetails: this.getMonthDetails(year, month)
    };
  }

  componentDidMount() {
    window.addEventListener('click', this.addBackDrop);
    this.setDateToInput(this.state.selectedDay);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.addBackDrop);
  }

  addBackDrop = e => {
    if (
      this.state.showDatePicker &&
      !ReactDOM.findDOMNode(this).contains(e.target)
    ) {
      this.showDatePicker(false);
    }
  };

  showDatePicker = (showDatePicker = true) => {
    this.setState({ showDatePicker });
  };

  isCurrentDay = day => {
    return day.timestamp === todayTimestamp;
  };

  isSelectedDay = day => {
    return day.timestamp === this.state.selectedDay;
  };

  getDateFromDateString = dateValue => {
    let dateData = dateValue.split('-').map(d => parseInt(d, 10));
    if (dateData.length < 3) return null;

    let year = dateData[0];
    let month = dateData[1];
    let date = dateData[2];
    return { year, month, date };
  };

  getMonthStr = month =>
    this.monthMap[Math.max(Math.min(11, month), 0)] || 'Month';

  getDateStringFromTimestamp = timestamp => {
    let dateObject = new Date(timestamp);
    let month = dateObject.getMonth() + 1;
    let date = dateObject.getDate();
    return (
      dateObject.getFullYear() +
      '-' +
      (month < 10 ? '0' + month : month) +
      '-' +
      (date < 10 ? '0' + date : date)
    );
  };

  setDate = dateData => {
    let selectedDay = new Date(
      dateData.year,
      dateData.month - 1,
      dateData.date
    ).getTime();
    this.setState({ selectedDay });
    if (this.props.onChange) {
      this.props.onChange(selectedDay);
    }
  };

  updateDateFromInput = () => {
    let dateValue = inputRef.current.value;
    let dateData = this.getDateFromDateString(dateValue);
    if (dateData !== null) {
      this.setDate(dateData);
      this.setState({
        year: dateData.year,
        month: dateData.month - 1,
        monthDetails: this.getMonthDetails(dateData.year, dateData.month - 1)
      });
    }
  };

  setDateToInput = timestamp => {
    let dateString = this.getDateStringFromTimestamp(timestamp);
    inputRef.current.value = dateString;
  };

  onDateClick = day => {
    this.setState({ selectedDay: day.timestamp }, () =>
      this.setDateToInput(day.timestamp)
    );
    if (this.props.onChange) {
      this.props.onChange(day.timestamp);
    }
  };

  setYear = offset => {
    let year = this.state.year + offset;
    let month = this.state.month;
    this.setState({
      year,
      monthDetails: this.getMonthDetails(year, month)
    });
  };

  setMonth = offset => {
    let year = this.state.year;
    let month = this.state.month + offset;
    if (month === -1) {
      month = 11;
      year--;
    } else if (month === 12) {
      month = 0;
      year++;
    }
    this.setState({
      year,
      month,
      monthDetails: this.getMonthDetails(year, month)
    });
  };

  /**
   *  Renderers
   */

  renderCalendar() {
    let days = this.state.monthDetails.map((day, index) => {
      return (
        <div
          className={
            'c-day-container ' +
            (day.month !== 0 ? ' disabled' : '') +
            (this.isCurrentDay(day) ? ' highlight' : '') +
            (this.isSelectedDay(day) ? ' highlight-green' : '')
          }
          key={index}
        >
          <div className="cdc-day">
            <span onClick={() => this.onDateClick(day)}>{day.date}</span>
          </div>
        </div>
      );
    });

    return (
      <div className="c-container">
        <div className="cc-head">
          {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((d, i) => (
            <div key={i} className="cch-name">
              {d}
            </div>
          ))}
        </div>
        <div className="cc-body">{days}</div>
      </div>
    );
  }

  render() {
    return (
      <div className="MyDatePicker">
        <DateInput />
        {this.state.showDatePicker ? (
          <div className="mdp-container">
            <div className="mdpc-head">
              <div className="mdpch-button">
                <div className="mdpchb-inner" onClick={() => this.setYear(-1)}>
                  <span className="mdpchbi-left-arrows" />
                </div>
              </div>
              <div className="mdpch-button">
                <div className="mdpchb-inner" onClick={() => this.setMonth(-1)}>
                  <span className="mdpchbi-left-arrow" />
                </div>
              </div>
              <div className="mdpch-container">
                <div className="mdpchc-year">{this.state.year}</div>
                <div className="mdpchc-month">
                  {this.getMonthStr(this.state.month)}
                </div>
              </div>
              <div className="mdpch-button">
                <div className="mdpchb-inner" onClick={() => this.setMonth(1)}>
                  <span className="mdpchbi-right-arrow" />
                </div>
              </div>
              <div className="mdpch-button" onClick={() => this.setYear(1)}>
                <div className="mdpchb-inner">
                  <span className="mdpchbi-right-arrows" />
                </div>
              </div>
            </div>
            <div className="mdpc-body">{this.renderCalendar()}</div>
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default MyDatePicker;