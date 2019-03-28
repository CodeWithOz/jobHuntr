import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

const Main = () => {
  return (
    <div>
      <Route exact path="/" component={LandingPage} />
    </div>
  );
};

export default Main;
