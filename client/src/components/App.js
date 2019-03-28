import React from 'react';
import { HashRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Main from './Main';

export const appConfig = {
  title: 'Job Huntr'
};

const App = () => {
  return (
    <HashRouter>
      <Navbar title={appConfig.title} />
      <Main />
    </HashRouter>
  );
};

export default App;
