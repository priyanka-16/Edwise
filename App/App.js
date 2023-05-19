import { StyleSheet, Text, View } from 'react-native';
import SchoolCodeEnteredVerificationPending from './screens/SchoolCodeEnteredVerificationPending';
import Onboarding from './navigation/Onboarding';
import HomeWork from './screens/HomeWork';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import TimeTable from './components/TimeTable';
import Screen from './components/Screen';
import HomeWork2 from './screens/HomeWork';
import SelfStudyGoalNotSet from './screens/SelfStudyGoalNotSet';



export default function App() {
  return (
    <BottomTabNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
  
  },
});
