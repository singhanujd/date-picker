import React from 'react';

import * as Helper from '../../Utility/Helper';
import './Navigation.css';

const Navigation = props => {
  return (
    <div className="mdpc-head">
      <div className="mdpch-button">
        <div className="mdpchb-inner" onClick={() => props.setYear(-1)}>
          <span className="mdpchbi-left-arrows" />
        </div>
      </div>
      <div className="mdpch-button">
        <div className="mdpchb-inner" onClick={() => props.setMonth(-1)}>
          <span className="mdpchbi-left-arrow" />
        </div>
      </div>
      <div className="mdpch-container">
        <div className="mdpchc-year">{props.dateDetails.year}</div>
        <div className="mdpchc-month">
          {Helper.getMonthStr(props.dateDetails.month)}
        </div>
      </div>
      <div className="mdpch-button">
        <div className="mdpchb-inner" onClick={() => props.setMonth(1)}>
          <span className="mdpchbi-right-arrow" />
        </div>
      </div>
      <div className="mdpch-button" onClick={() => props.setYear(1)}>
        <div className="mdpchb-inner">
          <span className="mdpchbi-right-arrows" />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
