import React from 'react';
import '../../../styles/zyx.css';
import AxiosWith from '../../../hooks/AxiosWith';
import BlockchainHeroCard from './BlockchainHeroCard';
import BitcoinChart from './BitcoinChart';
import Collapse from './Collapse';
import Tour from './Tour';
import Drawer from './Drawer';
import Radar from './Radar';

import Triangles from './Triangles';
import Redline from './Redline';
// import Coins from '../../../components/Coins';

function App() {
  return (
    <div className="Zyx">
      {/* <Coins /> */}
      <BlockchainHeroCard />
      <h3>A simple application for your investment options</h3>
      <p style={{ fontSize: 16, paddingBottom: 20 }}>
        We supply a series of AI principles and practical patterns connected
        with high quality algebric algorithmically resources to help users
        manage their investments more efficiently.
      </p>
      <BitcoinChart />
      {/* <h4>Subscribers Benefits:</h4> */}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <p
          style={{
            fontSize: 16,
            width: 342,
            paddingBottom: 20,
            // textAlign: 'justify',
          }}
        >
          The machine learning algorithm automatically combs through thousands
          of relevant sources and instantly alerts subscribers when potential
          market-moving events are detected.
        </p>
        <p
          style={{
            fontSize: 16,
            width: 342,
            paddingBottom: 20,
            // textAlign: 'justify',
          }}
        >
          The Signals are snapped from sources such as exchanges, posts, or
          Twitter accounts. We identified various types of news: exchange
          listings, staking, and announcements.
        </p>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Triangles />
        <Redline />
        <Radar />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <p style={{ fontSize: 16, width: '90%', paddingBottom: 20 }}>
          A real-time tool that assesses current market conditions from a
          variety of perspectives including sentiment, market volume, tweet
          volume, price over time, and so on… and compares them to occasions
          those conditions have been seen in the past.
        </p>
        <ul
          style={{
            color: 'white',
            fontSize: 16,
            textAlign: 'left',
            fontWeight: 600,
          }}
        >
          <li>Volume</li>
          <li>Outlook</li>
          <li>Price</li>
          <li>Tweet Volume</li>
          <li>Elevation</li>
          <li>Confidence</li>
          <li>Sentiment</li>
        </ul>
      </div>
      <div>
        <p
          style={{
            fontSize: 16,
            width: '90%',
            paddingBottom: 20,
            paddingTop: 40,
          }}
        >
          So when the conditions are just right… when the market sentiment and
          the tweet volume and the price movement and the trading patterns line
          up just so… ...And those conditions have historically led to a market
          movement...
        </p>
        <h3>You can be the first to know!</h3>
      </div>
      <Drawer />
      <Collapse />
      <AxiosWith />
      <Tour />
    </div>
  );
}

export default App;
