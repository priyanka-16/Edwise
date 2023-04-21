import React from 'react';
import OnboardingComponent from '../components/OnboardingComponent';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import LoginScreen2 from '../screens/LoginScreen2';
import LoginScreen3 from '../screens/LoginScreen3';
import FirstScreen from '../screens/StudentNotJoinedAnySchool';

const Onb1 = () => {
  return(
    <OnboardingComponent id={1} 
    imageLink={require('../assets/onb1.png')}
    title={"Simple & Fast\nHomework Manager"} 
    subtitle={"View all homework assigned by all\nyour teachers in one place"}/>
  )
}

const Onb2 = () => {
  return(
    <OnboardingComponent id={2} 
    imageLink={require('../assets/onb2.png')} 
    title={"Customized\nStudy Plan"} 
    subtitle={"Set your goals, and we will take\nyou there step by step!"}/>
  )
}

const Onb3 = () => {
  return(
    <OnboardingComponent id={3} 
    imageLink={require('../assets/onb3.png')} 
    title={"Video\nLectures"} 
    subtitle={"Get access to lectures of our\nsubject experts and watch it at\nyour own convenience"}/>
  )
}

const Onb4 = () => {
  return(
    <OnboardingComponent id={4} 
    imageLink={require('../assets/onb4.png')} 
    title={"Complete Training\nProgram"} 
    subtitle={"Study from our subject experts\nwith online doubt sessions and\nstudy materials"}/>
  )
}
const Stack = createNativeStackNavigator();
const StackNavigator = ()=> (
    <Stack.Navigator screenOptions={{headerShown: false, animation:'fade'}} >
        <Stack.Screen name="Onb1" component={Onb1} />
        <Stack.Screen name="Onb2" component={Onb2} />
        <Stack.Screen name="Onb3" component={Onb3} />
        <Stack.Screen name="Onb4" component={Onb4} />
        <Stack.Screen name='Onb5' component={LoginScreen}/>
        <Stack.Screen name="Login2" component={LoginScreen2} />
        <Stack.Screen name="Login3" component={LoginScreen3} />
        <Stack.Screen name="Login4" component={FirstScreen}/>
    </Stack.Navigator>
)

function Onboarding(props) {
    return  (
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    );
}

export default Onboarding;