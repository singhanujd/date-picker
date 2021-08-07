import React from 'react';

import './DateInput.css';

const DateInput = props => (
  <div className="mdp-input" onClick={props.toggleDatePicker}>
    <input type="date" onChange={props.onChange} value={props.value} />
  </div>
);

export default DateInput;
