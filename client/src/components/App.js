import React from 'react';
import { HashRouter } from 'react-router-dom';
import Navbar from './Navbar';

export const appConfig = {
  title: 'Job Huntr'
};

const App = () => {
  return (
    <HashRouter>
      <Navbar title={appConfig.title} />
    </HashRouter>
  );
};

export default App;
