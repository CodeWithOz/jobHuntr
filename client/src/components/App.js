import React from 'react';
import Navbar from './Navbar';

export const appConfig = {
  title: 'Job Huntr'
};

const App = () => {
  return (
    <div>
      <Navbar title={appConfig.title} />
    </div>
  );
};

export default App;
