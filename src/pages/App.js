import React from 'react';
import logo from './../assets/logo.svg';
import './App.css';

import { version, Button } from "antd";

const App = () => {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div>Current antd version: {version}</div>
      <div style={{ marginTop: "16px" }}>
        <Button type="primary">button</Button>
      </div>
    </div>
  );
}

export default App;
