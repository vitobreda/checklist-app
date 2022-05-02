import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import ChecklistDetails from './screens/ChecklistDetails';
import ChecklistCreate from './screens/ChecklistCreate';
import ChecklistUpdate from './screens/ChecklistUpdate';

const Stack = createStackNavigator();

function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Checklist Details" component={ChecklistDetails} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Checklist Update" component={ChecklistUpdate} />
      <Stack.Screen name="CheckList Create" component={ChecklistCreate} />
    </Stack.Navigator>
  );
}

export default Routes;