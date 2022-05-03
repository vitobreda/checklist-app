import React from 'react';
import Route from './routes';
import {NavigationContainer} from '@react-navigation/native';

import ChecklistContext from './models/Checklist';

const {RealmProvider} = ChecklistContext;

function App() {
  return (
    <RealmProvider>
      <NavigationContainer>
        <Route />
      </NavigationContainer>
    </RealmProvider>
  );
}

export default App;
