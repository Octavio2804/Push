import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from './pages/Inicio';
import Instrucciones from './pages/Instrucciones';
import Juego from './pages/Juego';
import Puntaje from './pages/Puntaje';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Inicio'
          component={Inicio}
          options={{
            headerShown: false,
          }}
        />
         <Stack.Screen
          name='Instrucciones'
          component={Instrucciones}
          options={{
            headerShown: false,
          }}
        />
         <Stack.Screen
          name='Juego'
          component={Juego}
          options={{
            headerShown: false,
          }}
        />
         <Stack.Screen
          name='Puntaje'
          component={Puntaje}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
