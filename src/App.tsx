import React from 'react';
import SpeedLogger from './components/SpeedLogger';
import Chart from './components/Chart';
import './styles/App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Internet Speed Logger</h1>
      <SpeedLogger />
      <Chart />
    </div>
  );
};

export default App;