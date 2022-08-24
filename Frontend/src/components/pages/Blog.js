import React from 'react';
import { BugOutlined } from '@ant-design/icons';
import LightOn from '../../features/LightOn';

function Blog() {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => setData(data.message));
  }, []);

  return (
    <>
      <div>
        <h1>BOG</h1>
        <BugOutlined
          style={{
            fontSize: 64,
            backgroundColor: '#61dafb',
            borderRadius: '8px',
            marginBottom: '200px',
          }}
        />
        <p className="express-content">
          {!data ? 'Loading... dont wait' : data}
        </p>
        <LightOn />
      </div>
    </>
  );
}

export default Blog;
