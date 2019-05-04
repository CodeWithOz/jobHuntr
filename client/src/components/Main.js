import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DemoPage from './pages/DemoPage';

const Main = () => {
  return (
    <main>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/demo" component={DemoPage} />
    </main>
  );
};

export default Main;
