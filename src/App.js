import React from 'react';

import MyDatePicker from './Components/MyDatePicker/MyDatePicker';

import './style.css';

function onChange(timestamp) {
  console.log(timestamp);
}

function App() {
  return (
    <div className="App">
      <MyDatePicker onChange={onChange} />
    </div>
  );
}

export default App;
