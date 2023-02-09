import React from 'react';
import { XYPlot, PolygonSeries, XAxis, YAxis, GradientDefs } from 'react-vis';

function buildTriangle(sideWidth, lowerLeftCoord) {
  const { x, y } = lowerLeftCoord;
  const triangle = [
    [
      { x, y },
      { x, y: y + sideWidth },
      { x: x + sideWidth, y },
    ],
  ];
  if (sideWidth < 0.5) {
    return triangle;
  }
  const newWidth = sideWidth * 0.5;
  const a = buildTriangle(newWidth, lowerLeftCoord);
  const b = buildTriangle(newWidth, { x: x + sideWidth, y });
  const c = buildTriangle(newWidth, { x, y: y + sideWidth });
  return triangle.concat(a).concat(b).concat(c);
}

const triangles = buildTriangle(7, { x: 0, y: 0 });

export default class Example extends React.Component {
  state = {
    hoveredIndex: false,
  };

  render() {
    const { hoveredIndex } = this.state;

    return (
      <XYPlot width={300} height={240}>
        <GradientDefs>
          <radialGradient
            id="grad1"
            cx="75%"
            cy="50%"
            r="50%"
            fx="75%"
            fy="50%"
          >
            <stop offset="0%" stopColor="black" stopOpacity="0" />
            <stop offset="100%" stopColor="#61dafb" stopOpacity="1" />
          </radialGradient>
        </GradientDefs>
        <XAxis />
        <YAxis />
        {triangles.map((triangle, index) => {
          return (
            <PolygonSeries
              key={`triangle-${index}`}
              data={triangle}
              onSeriesMouseOver={() => this.setState({ hoveredIndex: index })}
              onSeriesMouseOut={() => this.setState({ hoveredIndex: false })}
              color={index !== hoveredIndex ? 'url(#grad1)' : null}
              style={{
                strokeWidth: 0.5,
                strokeOpacity: 1,
                opacity: 0.5,
                fill: index === hoveredIndex ? '#EF5D28' : null,
              }}
            />
          );
        })}
      </XYPlot>
    );
  }
}
