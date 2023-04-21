import { StyleSheet, Text, View } from 'react-native';
import Onboarding from './navigation/Onboarding';
import LoginScreen2 from './screens/LoginScreen2';
import LoginScreen3 from './screens/LoginScreen3';
import FirstScreen from './screens/StudentNotJoinedAnySchool';
import LoginScreen from './screens/LoginScreen';
import Login from './navigation/Login'

export default function App() {
  return (
   <FirstScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
  
  },
});
