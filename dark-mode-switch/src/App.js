import React from 'react';
import Switch from './Switch';

export default () => {
  return (
    <>
      <div
        data-test="cy-test"
        style={{
          float: 'right',
          margin: '30px',
        }}
      >
        <Switch />
      </div>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '40px',
        }}
      >
        Toggle Light/Dark Mode
      </div>
    </>
  );
};
