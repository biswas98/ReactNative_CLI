import React from 'react';
import {StyleSheet, Text, View, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import API from './components/API/API';
import WeatherAPI from './components/API/WeatherAPI';
import FlatListPractice from './components/API/FlatListPractice';
import Test from './components/Test/Test';

const Stack = createNativeStackNavigator();

function App() {
  // console.log(Platform.OS);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name='Login' component={Login}/>
				<Stack.Screen name='Dashboard' component={Dashboard}/>
				<Stack.Screen name='API' component={API}/> */}
        {/* <Stack.Screen name='WeatherAPI' component={WeatherAPI}/> */}
        {/* <Stack.Screen name="FlatListPractice" component={FlatListPractice} /> */}
        <Stack.Screen name="Test" component={Test} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
