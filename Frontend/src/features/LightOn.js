import React, { useState } from 'react';
// import reactDom from 'react-dom';

function LightOn() {
  const [isOn, setIsOn] = useState(false);

  setTimeout(() => {
    setIsOn(!isOn);
  }, 1000);

  return (
    <div
      style={{
        borderRadius: '8px',
        fontSize: 24,
        color: '#61dafb',
        marginBottom: '10px',
      }}
    >
      {isOn ? 'coming' : 'soon...'}
    </div>
  );
}
export default LightOn;

// const white =
//   'https://tk-assets.lambdaschool.com/0a42bf4e-9454-49a1-b70d-325ba6368fe5_dark-bulb.png';
// const yellow =
//   'https://i.pinimg.com/originals/92/94/ba/9294badee7b8f3d93fa9bc6c874641b2.png';

// function App() {
//   const [lightOn, setLightOn] = useState(true);

//   setTimeout(() => {
//     setLightOn(!lightOn);
//   }, 1000);

//   return (
//     <div
//       style={{
//         // fontSize: 64,
//         width: '10%',
//         height: '10%',
//       }}
//     >
//       {lightOn === false ? <img src={white} /> : <img src={yellow} />}
//     </div>
//   );
// }

// export default App;
