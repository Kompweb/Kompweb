import React, { Component } from 'react';
import '../../../styles/zyx.css';
// import AxiosWith from '../../../hooks/AxiosWith';
import {
  XYPlot,
  //   XAxis,
  //   YAxis,
  RadialChart,
  //   ArcSeries,
  //   HeatmapSeries,
  //   HexbinSeries,
  //   LineMarkSeries,
  MarkSeries,
  VerticalBarSeries,
  //   VerticalGridLines,
  //   HorizontalGridLines,
} from 'react-vis';

class BitcoinChart extends Component {
  render() {
    const data = [
      { x: 0, y: 24, color: '#61dafb' },
      { x: 1, y: 22, color: 'tomato' },
      { x: 2, y: 20, color: 'tomato' },
      { x: 3, y: 18, color: 'tomato' },
      { x: 4, y: 16, color: 'tomato' },
      { x: 5, y: 17, color: '#61dafb' },
      { x: 6, y: 7, color: '#61dafb' },
      { x: 7, y: 4, color: 'tomato' },
      { x: 8, y: 1, color: 'tomato' },
      { x: 9, y: 2, color: '#61dafb' },
      { x: 10, y: 2, color: '#61dafb' },
      { x: 11, y: 0.5, color: 'tomato' },
      { x: 12, y: 1, color: '#61dafb' },
    ];

    const myData = [
      { x: 0, y: 12, angle: 1, color: 'tomato' },
      { x: 2, y: 8, angle: 5, color: '#61dafb' },
    ];

    return (
      <>
        <div className="vis">
          <div className="monthy-chart">
            <XYPlot height={120} width={300} color="#61dafb">
              <MarkSeries colorType="literal" data={data} />
            </XYPlot>
            <h5>6/Mo Chart</h5>
          </div>
          <div className="community-votes">
            <XYPlot height={120} width={300}>
              <VerticalBarSeries colorType="literal" data={data} />
            </XYPlot>
            <h5>Community Votes</h5>
            {/* <AxiosWith /> */}
          </div>
          <div className="radial-pie">
            <RadialChart
              // animation
              colorType="literal"
              data={myData}
              width={300}
              height={120}
            />
            <h5>Radial Pie</h5>
          </div>
        </div>
      </>
    );
  }
}

export default BitcoinChart;
