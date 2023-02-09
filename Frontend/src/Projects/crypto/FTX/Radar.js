import React from 'react';
import { XYPlot, ArcSeries } from 'react-vis';
// import { EXTENDED_DISCRETE_COLOR_RANGE } from 'theme';

const PI = Math.PI;

function getSeconds() {
  return Math.floor(new Date().getTime() / 1000);
}

export default class ClockExample extends React.Component {
  state = {
    time: 0,
  };

  componentDidMount() {
    this._timerId = setInterval(
      () => this.setState({ time: getSeconds() }),
      100
    );
  }

  componentWillUnmount() {
    clearInterval(this._timerId);
    this.setState({ timerId: false });
  }

  render() {
    const { time } = this.state;
    const seconds = time % 60;
    const minutes = (time / 60) % 60;
    const hours = (time / (60 * 24)) % 24;
    return (
      <XYPlot
        xDomain={[-3, 3]}
        yDomain={[-3, 3]}
        width={300}
        getAngle={d => d.time}
        // getAngle0={d => 0}
        height={260}
        // colorType="linear"
      >
        <ArcSeries
          animation={{
            damping: 9,
            stiffness: 300,
          }}
          radiusDomain={[0, 3]}
          data={[
            {
              time: (seconds / 60) * 2 * PI,
              radius0: 1,
              radius: 1.5,
              color: 0,
            },
            {
              time: (minutes / 60) * 2 * PI,
              radius0: 1.6,
              radius: 2.1,
              color: 1,
            },
            {
              time: (hours / 24) * 2 * PI,
              radius0: 2.2,
              radius: 2.7,
              color: 2,
            },
          ]}
          colorRange={['#61dafb', 'black']}
        />
      </XYPlot>
    );
  }
}
