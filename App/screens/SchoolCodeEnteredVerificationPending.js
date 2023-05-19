import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableWithoutFeedback } from 'react-native';
import colors from '../config/colors';
import BottomTabs from '../components/BottomTabs';
import BottomTab from '../components/BottomTab';
import Screen from '../components/Screen';

function SchoolCodeEnteredVerificationPending({navigation, route}) {
    return (
        <Screen>
            <View style={styles.container}>
               <View>
                <Text style={styles.text}>You have Entered School code as{"\n"}{route.params.schoolCode}</Text>
                <Text style={styles.subText}>Awaiting approval from your school</Text>
               </View>
               <TouchableWithoutFeedback onPress={()=>navigation.navigate("Login5")}>

                <View style={styles.joinButton}>
                    <Text style={styles.buttonText}>Change school code</Text>
                </View>
               </TouchableWithoutFeedback>
                
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
        backgroundColor:"#FF994F",
        borderRadius:10,
        padding:10,
        justifyContent:'space-around'
    },
    text:{
        fontSize:18,
        fontWeight:700,
        color: colors.white
    },
    subText:{
        fontSize:14,
        fontWeight:600,
        color: colors.white,
        top:0
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

export default SchoolCodeEnteredVerificationPending;