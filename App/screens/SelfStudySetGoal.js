import React from 'react';
import {View, StyleSheet, Image, Text } from 'react-native';
import Screen from '../components/Screen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';


function SelfStudySetGoal(props) {
    return  (
        <>
        <Screen>
            <View style={styles.backAndTitle}>
                <MaterialCommunityIcons size={35} color={colors.primary} name='chevron-left'/>
                <Text style={styles.titleText}>Set Goal</Text>
            </View>
            <View style={styles.setGoalBox}>
        
            </View>
        </Screen>
        <Image style={{left:"25%"}} source={require('../assets/tabSelected.png')} resizeMode='stretch'/>
       </>
    );
}

const styles = StyleSheet.create({
    backAndTitle: {
        flexDirection:'row',
        alignItems:'center'
    },
    titleText:{
        color:colors.black,
        fontSize:18,
        fontWeight:700
    },
    setGoalBox:{
        width:"90%", 
        height:142, 
        backgroundColor:colors.primary, 
        alignSelf:'center',
        borderRadius:10,
        padding:15,
        marginVertical:10
    },
});

export default SelfStudySetGoal;