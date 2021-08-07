import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

// import DateInput from '../DateInput/DateInput';
// import Helper from '../../Utility/Helper';

import './MyDatePicker.css';

// let oneDay = 60 * 60 * 24 * 1000;
// let todayTimestamp =
//   Date.now() -
//   (Date.now() % oneDay) +
//   new Date().getTimezoneOffset() * 1000 * 60;

// let inputRef = React.createRef();

const MyDatePicker = () => {
  return <h1>HI Ia m her</h1>;
  // let date = new Date();
  // const [showDatePicker, setShowDatePicker] = useState(false);
  // const [dateDetails, setDateDetails] = useState({
  //   year: date.getFullYear(),
  //   month: date.getMonth(),
  //   monthDetails: Helper.getMonthDetails(date.getFullYear(), date.getMonth())
  // });
  // useEffect(() => {
  //   window.addEventListener('click', addBackDrop);
  //   return () => {
  //     window.removeEventListener('click', addBackDrop);
  //   };
  // }, []);
  // const addBackDrop = e => {
  //   if (showDatePicker && !ReactDOM.findDOMNode(this).contains(e.target)) {
  //     setShowDatePicker(false);
  //   }
  // };
  // const isCurrentDay = day => {
  //   return day.timestamp === todayTimestamp;
  // };
  // const isSelectedDay = day => {
  //   return day.timestamp === selectedDay;
  // };
  // const getDateFromDateString = dateValue => {
  //   let dateData = dateValue.split('-').map(d => parseInt(d, 10));
  //   if (dateData.length < 3) return null;
  //   let year = dateData[0];
  //   let month = dateData[1];
  //   let date = dateData[2];
  //   return { year, month, date };
  // };
  // const getMonthStr = month =>
  //   monthMap[Math.max(Math.min(11, month), 0)] || 'Month';
  // const getDateStringFromTimestamp = timestamp => {
  //   let dateObject = new Date(timestamp);
  //   let month = dateObject.getMonth() + 1;
  //   let date = dateObject.getDate();
  //   return (
  //     dateObject.getFullYear() +
  //     '-' +
  //     (month < 10 ? '0' + month : month) +
  //     '-' +
  //     (date < 10 ? '0' + date : date)
  //   );
  // };
  // const setDate = dateData => {
  //   let selectedDay = new Date(
  //     dateData.year,
  //     dateData.month - 1,
  //     dateData.date
  //   ).getTime();
  //   setState({ selectedDay });
  //   if (props.onChange) {
  //     props.onChange(selectedDay);
  //   }
  // };
  // const updateDateFromInput = () => {
  //   let dateValue = inputRef.current.value;
  //   let dateData = getDateFromDateString(dateValue);
  //   if (dateData !== null) {
  //     setDate(dateData);
  //     setState({
  //       year: dateData.year,
  //       month: dateData.month - 1,
  //       monthDetails: getMonthDetails(dateData.year, dateData.month - 1)
  //     });
  //   }
  // };
  // const setDateToInput = timestamp => {
  //   let dateString = getDateStringFromTimestamp(timestamp);
  //   inputRef.current.value = dateString;
  // };
  // const onDateClick = day => {
  //   setState({ selectedDay: day.timestamp }, () =>
  //     setDateToInput(day.timestamp)
  //   );
  //   if (props.onChange) {
  //     props.onChange(day.timestamp);
  //   }
  // };
  // const setYear = offset => {
  //   let year = year + offset;
  //   let month = month;
  //   setState({
  //     year,
  //     monthDetails: getMonthDetails(year, month)
  //   });
  // };
  // const setMonth = offset => {
  //   let year = year;
  //   let month = month + offset;
  //   if (month === -1) {
  //     month = 11;
  //     year--;
  //   } else if (month === 12) {
  //     month = 0;
  //     year++;
  //   }
  //   setState({
  //     year,
  //     month,
  //     monthDetails: getMonthDetails(year, month)
  //   });
  // };
  // return (
  //   <div className="MyDatePicker">
  //     <DateInput
  //       toggleDatePicker={() => setShowDatePicker(state => !state)}
  //       value={selectedDay}
  //       onChange={setSelectedDay}
  //     />
  //     {showDatePicker ? (
  //       <div className="mdp-container">
  //         <div className="mdpc-head">
  //           <div className="mdpch-button">
  //             <div className="mdpchb-inner" onClick={() => setYear(-1)}>
  //               <span className="mdpchbi-left-arrows" />
  //             </div>
  //           </div>
  //           <div className="mdpch-button">
  //             <div className="mdpchb-inner" onClick={() => setMonth(-1)}>
  //               <span className="mdpchbi-left-arrow" />
  //             </div>
  //           </div>
  //           <div className="mdpch-container">
  //             <div className="mdpchc-year">{dateDetails.year}</div>
  //             <div className="mdpchc-month">
  //               {getMonthStr(dateDetails.month)}
  //             </div>
  //           </div>
  //           <div className="mdpch-button">
  //             <div className="mdpchb-inner" onClick={() => setMonth(1)}>
  //               <span className="mdpchbi-right-arrow" />
  //             </div>
  //           </div>
  //           <div className="mdpch-button" onClick={() => setYear(1)}>
  //             <div className="mdpchb-inner">
  //               <span className="mdpchbi-right-arrows" />
  //             </div>
  //           </div>
  //         </div>
  //         <div className="mdpc-body">
  //           <Calendar />
  //         </div>
  //       </div>
  //     ) : null}
  //   </div>
  // );
};

export default MyDatePicker;
