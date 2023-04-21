import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableWithoutFeedback } from 'react-native';
import colors from '../config/colors';
import BottomTabs from '../components/BottomTabs';
import BottomTab from '../components/BottomTab';
import Screen from '../components/Screen';


function FirstScreen(props) {
    return (
        <Screen>
            <View style={styles.container}>
                <Text style={styles.text}>Can’t find anything from {"\n"}your school?</Text>
                <View style={styles.joinButton}>
                    <Text style={styles.buttonText}>Join your school</Text>
                </View>
                
            </View>
            <BottomTab/>
        </Screen>
       
    );
}

const styles = StyleSheet.create({
    container:{
        top:10,
        width:"85%",
        alignSelf:'center',
        height: 142,
        backgroundColor:colors.primary,
        borderRadius:10,
        padding:10,
        justifyContent:'space-around'
    },
    text:{
        fontSize:18,
        fontWeight:700,
        color: colors.white
    },
    joinButton:{
        width:175,
        height:36,
        alignSelf:'flex-end',
        backgroundColor:colors.white,
        borderRadius:18,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText:{
        fontSize:16,
        fontWeight: 500,
    }
    
})

export default FirstScreen;