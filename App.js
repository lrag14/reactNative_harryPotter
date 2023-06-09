import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useColorScheme } from 'nativewind';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HouseScreen from './src/components/screens/House Screen.js';
import CharacterScreen from './src/components/screens/CharacterScreen.js';
import HomeScreen from './src/components/screens/HomeScreen.js';

const Stack = createNativeStackNavigator();

export default function App() {
   return (
      <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="House" component={HouseScreen} />
            <Stack.Screen name="Character" component={CharacterScreen} />
         </Stack.Navigator>
      </NavigationContainer>
   );
}
