//https://reactnavigation.org/docs/headers/

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import EmptyWorkout from './screens/EmptyWorkout';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home',
            headerStyle: {
              backgroundColor: '#1c1c1e',
            },
            headerTintColor: '#fff',
          
          }}
          
        />
      <Stack.Screen
          name="EmptyWorkout"
          component={EmptyWorkout}
      
          options={{
            title: 'Workout',
            headerStyle: {
              backgroundColor: '#1c1c1e',
            },
            headerTintColor: '#fff',
          
          }}
          
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
