import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CheckList from './screens/Checklist';
import ChecklistDetails from './screens/ChecklistDetails';
import ChecklistCreate from './screens/ChecklistCreate';
import ChecklistUpdate from './screens/ChecklistUpdate';

const Stack = createStackNavigator();

function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CheckList" component={CheckList} />
      <Stack.Screen name="Checklist Update" component={ChecklistUpdate} />
      <Stack.Screen name="CheckList Create" component={ChecklistCreate} />
      <Stack.Screen name="Checklist Details" component={ChecklistDetails} />
    </Stack.Navigator>
  );
}

export default Routes;
