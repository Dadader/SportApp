import {Image} from 'react-native';
import React, {useEffect} from 'react';
import * as SplashScreen from 'expo-splash-screen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import CricketGame from './src/screens/CricketGame';
import FootballGame from './src/screens/FootballGame';

export default function App() {
  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="Cricket Game"
          component={CricketGame}
          options={{
            tabBarLabel: 'Cricket',
            tabBarIcon: () => (
              <Image
                source={require('./assets/cricket.png')}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Football Game"
          component={FootballGame}
          options={{
            tabBarLabel: 'Football',
            tabBarIcon: () => (
              <Image
                source={require('./assets/football.png')}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}