import React from 'react';

import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
} from 'react-vis';

const data = [];

// Backend Update Algorithm here:
for (let i = 0; i < 12; i++) {
  const series = [];
  for (let j = 0; j < 100; j++) {
    series.push({ x: j, y: (i / 10 + 1) * Math.sin((Math.PI * (i + j)) / 50) });
  }
  data.push({ color: i, key: i, data: series, opacity: 0.8 });
}
// _____________ * * * _______________

export default function Redline() {
  return (
    <XYPlot
      width={300}
      height={200}
      colorType="linear"
      colorDomain={[0, 9]}
      colorRange={['tomato', '#61dafb']}
    >
      <HorizontalGridLines />
      <VerticalGridLines />
      <XAxis />
      <YAxis />
      {data.map(props => (
        <LineSeries key={props.id} {...props} />
      ))}
    </XYPlot>
  );
}
