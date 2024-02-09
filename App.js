import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home'
import Passo1 from './Passo1'
import Passo2 from './Passo2'
import Passo3 from './Passo3'
import Passo4 from './Passo4'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{headerShown: false}} component={Home} />
        <Stack.Screen name="Passo1" component={Passo1} />
        <Stack.Screen name="Passo2" component={Passo2} />
        <Stack.Screen name="Passo3" component={Passo3} />
        <Stack.Screen name="Passo4" component={Passo4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

