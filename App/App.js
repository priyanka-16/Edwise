import { StyleSheet, Text, View } from 'react-native';
import SchoolCodeEnteredVerificationPending from './screens/SchoolCodeEnteredVerificationPending';
import Onboarding from './navigation/Onboarding';
import HomeWork from './screens/HomeWorkUpcoming';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import TimeTable from './components/TimeTable';
import Screen from './components/Screen';
import HomeWork2 from './screens/HomeWorkUpcoming';
import SelfStudyGoalNotSet from './screens/SelfStudyGoalNotSet';
import SelfStudySetGoal from './screens/SelfStudySetGoal';
import HomeWorkUpperTabNavigator from './navigation/HomeWorkUpperTabNavigator';
import QuestionScreen from './screens/QuestionScreen';
import OnSubmit from './screens/OnSubmit';
import EnterSchoolCodeScreen from './screens/EnterSchoolCodeScreen';



export default function App() {
  return (
    <Onboarding/>
  );
}

const styles = StyleSheet.create({
  container: {
  
  },
});
