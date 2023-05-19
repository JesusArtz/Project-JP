import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import useSession from './src/hooks/useSession';
import Login from './src/screens/auth/login';
import Home from './src/screens/main';
import Formulario from './src/screens/form';
import Materias from './src/screens/subjects';
import Profile from './src/screens/profile';
import { FormProvider } from './src/components/provider';

export default function App() {
  const Stack = createStackNavigator();
  const [ session, setSession ] = useSession();


  return (
    <FormProvider>
      <NavigationContainer>

        <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen name="Login">
            {props => <Login {...props} callback={setSession} session={session} />}
          </Stack.Screen>

          <Stack.Screen name="Home">
            {props => <Home {...props} session={session} />}
          </Stack.Screen>

          

          <Stack.Screen name="Formulario">
            {props => <Formulario {...props} session={session} />}
          </Stack.Screen>

          <Stack.Screen name="Materias">
            {props => <Materias {...props} session={session} />}
          </Stack.Screen>

          <Stack.Screen name="Profile">
            {props => <Profile {...props} session={session} />}
          </Stack.Screen>


        </Stack.Navigator>

      </NavigationContainer>
    </FormProvider>

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
