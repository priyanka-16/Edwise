import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeWork from '../screens/HomeWorkUpcoming';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import { Image, Text } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import SelfStudyGoalNotSet from '../screens/SelfStudyGoalNotSet';
import HomeWorkUpperTabNavigator from './HomeWorkUpperTabNavigator';


const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator screenOptions={({ route, navigation }) => {
    return { 
      tabBarLabel: navigation.isFocused() ? route.name : '',
      tabBarLabelStyle:{
        fontSize:12,
        fontWeight:500
      },
      headerShown:false,
      tabBarActiveTintColor:colors.white,
      tabBarStyle:{
        backgroundColor:colors.primary,
        height:50,
        paddingVertical: 5,
        paddingBottom:5,
      }  };}}>
    <Tab.Screen name="Home" component={HomeWorkUpperTabNavigator} options={{
      tabBarIcon: ()=><MaterialCommunityIcons name="home" size={24} color={colors.white}/>
    }} />
    <Tab.Screen name="Self Study" component={SelfStudyGoalNotSet} options={{
      tabBarIcon: ()=><MaterialCommunityIcons name="book-open-page-variant" size={24} color={colors.white}/>
    }}/>
    <Tab.Screen name="Dashboard" component={HomeWork} options={{
      tabBarIcon: ()=><MaterialCommunityIcons name="view-dashboard" size={24} color={colors.white}/>
    }}/>
    <Tab.Screen name="Profile" component={HomeWork} options={{
      tabBarIcon: ()=><MaterialCommunityIcons name="menu" size={24} color={colors.white}/>
    }}/>  
  </Tab.Navigator>
);

function BottomTabNavigator({navigation}) {
  return  (
      <TabNavigator />
  );
}

export default BottomTabNavigator;