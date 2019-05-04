import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DemoPage from './pages/DemoPage';

const mainConfig = {
  routes: {
    landingPage: {
      path: '/',
      component: LandingPage
    },
    demoPage: {
      path: '/demo',
      component: DemoPage
    }
  }
};

const Main = () => {
  const { landingPage, demoPage } = mainConfig.routes;

  return (
    <main>
      <Route exact {...landingPage} />
      <Route exact {...demoPage} />
    </main>
  );
};

export default Main;
