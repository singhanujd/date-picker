// import './Calendar.css';

// const Calendar = props => {
//   let days = monthDetails.map((day, index) => {
//     return (
//       <div
//         className={
//           'c-day-container ' +
//           (day.month !== 0 ? ' disabled' : '') +
//           (isCurrentDay(day) ? ' highlight' : '') +
//           (isSelectedDay(day) ? ' highlight-green' : '')
//         }
//         key={index}
//       >
//         <div className="cdc-day">
//           <span onClick={() => onDateClick(day)}>{day.date}</span>
//         </div>
//       </div>
//     );
//   });

//   return (
//     <div className="c-container">
//       <div className="cc-head">
//         {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((d, i) => (
//           <div key={i} className="cch-name">
//             {d}
//           </div>
//         ))}
//       </div>
//       <div className="cc-body">{days}</div>
//     </div>
//   );
// };

// export default Calendar;
