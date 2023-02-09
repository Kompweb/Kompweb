import React, { useState } from 'react';
import '../styles/lightOnOff.css';

function LightOn() {
  const [isOn, setIsOn] = useState(false);

  setTimeout(() => {
    setIsOn(!isOn);
  }, 2000);

  const white =
    'https://tk-assets.lambdaschool.com/0a42bf4e-9454-49a1-b70d-325ba6368fe5_dark-bulb.png';
  const yellow =
    'https://i.pinimg.com/originals/92/94/ba/9294badee7b8f3d93fa9bc6c874641b2.png';

  return (
    <>
      <div className="light-on-off">
        {isOn === false ? (
          <img style={{ width: 100, height: 75 }} src={white} />
        ) : (
          <img style={{ width: 40 }} src={yellow} />
        )}
      </div>
      <div className="coming-soon">
        <p>{isOn ? 'coming' : 'soon...'}</p>
      </div>
    </>
  );
}

export default LightOn;
