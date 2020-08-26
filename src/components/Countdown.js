import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Divider } from '@material-ui/core';
import CountdownBlock from '../components/CountdownBlock';
import '../Pages/TextGradient.css';

const CountdownDisplay = (props) => {
  const { days, hours, minutes, seconds } = props;

  return (
    <>
      <Typography className="text-center txt--gradient-orange font-sans xs:text-2xl text-4xl">
        Coding period begins in ⏳
      </Typography>

      <div className="flex w-full justify-center mt-4">
        <CountdownBlock>
          {String(days).padStart(2, 0)}
          <br /> Days
        </CountdownBlock>
        <CountdownBlock>
          {String(hours).padStart(2, 0)}
          <br /> Hours
        </CountdownBlock>
        <CountdownBlock>
          {String(minutes).padStart(2, 0)}
          <br /> Minutes
        </CountdownBlock>
        <CountdownBlock>
          {String(seconds).padStart(2, 0)}
          <br /> Seconds
        </CountdownBlock>
      </div>
    </>
  );
};

CountdownDisplay.propTypes = {
  days: PropTypes.number.isRequired,
  asDays: PropTypes.number.isRequired,
  hours: PropTypes.number.isRequired,
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
};

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { now: new Date() };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ now: new Date() });
    }, this.props.intervalDelay);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { now } = this.state;
    const { toDate } = this.props;
    const delta = toDate - now;

    return this.props.children({
      days: Math.floor((delta / 1000 / 60 / 60 / 24) % 30),
      hours: Math.floor((delta / 1000 / 60 / 60) % 24),
      minutes: Math.floor((delta / 1000 / 60) % 60),
      seconds: Math.floor((delta / 1000) % 60),
      milliseconds: delta,
      asDays: Math.floor(delta / 1000 / 60 / 60 / 24),
    });
  }
}

Countdown.propTypes = {
  toDate: PropTypes.instanceOf(Date).isRequired,
  intervalDelay: PropTypes.number,
};

Countdown.defaultProps = {
  intervalDelay: 1000,
};

export default function CountdownTimer(props) {
  return (
    <Countdown toDate={props.toDate} className="txt--gradient-orange">
      {(props) => (
        <CountdownDisplay
          days={props.days}
          asDays={props.asDays}
          hours={props.hours}
          minutes={props.minutes}
          seconds={props.seconds}
        />
      )}
    </Countdown>
  );
}
