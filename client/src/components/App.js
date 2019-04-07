import React from 'react';
import { HashRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer';

export const appConfig = {
  title: 'Job Huntr'
};

const App = () => {
  return (
    <HashRouter>
      <Navbar title={appConfig.title} />
      <Main />
      <Footer />
    </HashRouter>
  );
};

export default App;
