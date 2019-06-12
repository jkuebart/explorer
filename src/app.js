import React from 'react';

import { Location } from './contexts/location';
import ExplorerUI from './components/explorer-ui';

const homeUrl = process.env.TOP_LEVEL;

const App = () => {
  return (
    <Location homeUrl={homeUrl}>
      <ExplorerUI />
    </Location>
  );
};

export default App;
