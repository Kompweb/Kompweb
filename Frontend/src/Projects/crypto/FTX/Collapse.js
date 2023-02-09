import React from 'react';
import '../../../styles/zyx.css';
import { Collapse } from 'antd';

const { Panel } = Collapse;
const text = `
  FREE Algorithm Delivers "Daily Stock Allerts" that can help you manage your investments.
`;

const App = () => (
  <div className="collapse-app">
    <Collapse accordion>
      <Panel header="Receive Critical Market News" key="1">
        <p>{text}</p>
      </Panel>
      <Panel header="Analysis On The  Market" key="2">
        <p>
          Subscribers can effectively make more-effective data-driven decisions
          and stay ahead of market trends.
        </p>
      </Panel>
      <Panel header="Join Discord Community" key="3">
        <p>
          Subscribers are invited to join our community in our private Discord
          channel. Share your strategies and learn from fellow traders, plus
          participate in weekly contests, AMAs, and giveaways in the community.
        </p>
      </Panel>
    </Collapse>
  </div>
);
export default App;
