// currently not in use


import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import LoginScreen2 from '../screens/LoginScreen2';
import LoginScreen3 from '../screens/LoginScreen3';
import FirstScreen from '../screens/StudentNotJoinedAnySchool';

const Stack = createNativeStackNavigator();
const StackNavigator = ()=> (
    <Stack.Navigator screenOptions={{headerShown: false, animation:'fade'}} >
        <Stack.Screen name="Login1" component={LoginScreen} />
        <Stack.Screen name="Login2" component={LoginScreen2} />
        <Stack.Screen name="Login3" component={LoginScreen3} />
        <Stack.Screen name="Login4" component={FirstScreen} />
    </Stack.Navigator>
)

function Login(props) {
    return (
        <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    );
}

export default Login;