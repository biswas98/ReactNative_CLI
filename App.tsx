import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Platform
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './components/Login/Login'

const Stack = createNativeStackNavigator();

function App() {
	// console.log(Platform.OS);
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name='Login' component={Login}/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default App;
