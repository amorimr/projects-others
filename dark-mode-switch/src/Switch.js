import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export default () => {
  const initialMode = !!localStorage.getItem('dark-mode');
  const [isDarkMode, setMode] = useState(initialMode);

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark' : 'light';
    if (initialMode !== isDarkMode) {
      window.localStorage.setItem('dark-mode', isDarkMode ? 'dark' : '');
    }
  });

  const Label = styled.label`
    & {
      position: relative;
      width: 60px;
      height: 10px;
      border-radius: 5px;
      background-color: #eee;
      display: inline-block;
    }

    &:before {
      content: '${isDarkMode ? '\\1F31B' : '\\1F31E'}';
      font-size: 20px;
      position: absolute;
      top: -8px;
      left: ${isDarkMode ? '40px' : '-8px'};
    }
  `;

  const Input = styled.input`
    opacity: 0;
  `;

  return (
    <>
      <Label htmlFor="toggleMode" />
      <Input
        id="toggleMode"
        type="checkbox"
        checked={isDarkMode}
        onChange={() => setMode(!isDarkMode)}
      />
    </>
  );
};
