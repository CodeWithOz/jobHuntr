import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

const Main = () => {
  return (
    <main>
      <Route exact path="/" component={LandingPage} />
    </main>
  );
};

export default Main;
