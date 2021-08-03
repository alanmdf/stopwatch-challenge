import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Timer extends Component {
  render() {
    let { timerMin, timerSecond } = this.props;
    const TEN_MINUTES = 10;
    const TEN_SECONS = 10;
    timerMin = (timerMin < TEN_MINUTES) ? `0${timerMin}` : timerMin;
    timerSecond = (timerSecond < TEN_SECONS) ? `0${timerSecond}` : timerSecond;

    return (
      <div className="timer-div">
        <span>
          {timerMin}
          :
        </span>
        <span>
          {timerSecond}
        </span>
      </div>
    );
  }
}

Timer.propTypes = {
  timerMin: PropTypes.number.isRequired,
  timerSecond: PropTypes.number.isRequired,
};

export default Timer;
