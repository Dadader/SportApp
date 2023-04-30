import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Football from './Football';
import Footballdetails from './Footballdetails';

const FootballGame=()=> {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Football"
        component={Football}
      />
      <Stack.Screen name="Football Details" component={Footballdetails} />
    </Stack.Navigator>
  );
}
export default FootballGame;