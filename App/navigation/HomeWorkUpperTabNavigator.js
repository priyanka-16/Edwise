import React from 'react';
import {View, StyleSheet,TextInput, Text, Image } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeWorkUpcoming from '../screens/HomeWorkUpcoming';
import { NavigationContainer } from '@react-navigation/native';
import colors from '../config/colors';
import defaultStyles from '../config/styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Screen from '../components/Screen';
import HomeWorkPast from '../screens/HomeWorkPast';
import HomeWorkOverdue from '../screens/HomeWorkOverdue';

const Tab = createMaterialTopTabNavigator();
const TabNavigator = () => (
    <Tab.Navigator>
      <Tab.Screen name="Upcoming" component={HomeWorkUpcoming} />
      <Tab.Screen name="Past" component={HomeWorkPast} />
      <Tab.Screen name="Overdue" component={HomeWorkOverdue} />
    </Tab.Navigator>
)
const SearchAndDd = () => {
    return(
        <View style={styles.searchAndDd}>
                <View style={styles.search}>
                    <TextInput placeholder='search' style={defaultStyles.text}/>
                </View>
                <View style={styles.dd}>
                    <Text style={defaultStyles.text}>All</Text>
                    <MaterialCommunityIcons name="menu-down" size={40} color="black" style={{top:0, left:50, position:'absolute'}} />
                </View>
        </View>
    )
}

function HomeWorkUpperTabNavigator(props) {
    return  (
        <Screen>
            <SearchAndDd/>
            <TabNavigator/>
            <Image style={{left:"0%"}} source={require('../assets/tabSelected.png')} resizeMode='stretch'/>
        </Screen>
    );
}

const styles = StyleSheet.create({
    searchAndDd:{
        flexDirection:'row',
        justifyContent:'space-around',
    },
    search:{
        height:40,
        width:250,
        borderColor:colors.dark,
        borderWidth:2,
        borderRadius:5,
        justifyContent:'center',
        padding:5
    },
    dd:{
        height:40,
        width:100,
        borderColor:colors.dark,
        borderWidth:2,
        borderRadius:5,
        padding:5,
        flexDirection:'row',  
        alignItems:'center'
    },
});

export default HomeWorkUpperTabNavigator;