import React, { useState } from 'react';
import {View, StyleSheet, Text, TouchableWithoutFeedback, Modal } from 'react-native';
import Screen from '../components/Screen';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function QuestionScreenHeading({queNum, numOfQue, openNumPalette}) {
    
    return  (
        <>
        <View style={styles.headingContainer}>
            <TouchableWithoutFeedback onPress={openNumPalette}>
                <View style={styles.queContainer}>
                    <View style={styles.queTextContainer}>
                        <Text style={styles.queText}>Question</Text>
                    </View>
                    <View style={styles.queNum}>
                        <Text style={styles.queId}>{queNum}</Text>
                        <Text style={styles.queLen}>/{numOfQue}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <View style={styles.timer}>
                <MaterialCommunityIcons size={28} name='alarm' color={colors.primary}></MaterialCommunityIcons>
                <Text style={styles.timeLeft}>2:35</Text>
            </View>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    headingContainer: {
        flexDirection:'row',
        width:'96%',
        alignSelf:'center',
    },
    queContainer:{
        flexDirection:'row',
        left:'33%',
    },
    queTextContainer:{
        backgroundColor:colors.primary,
        paddingVertical:6,
        paddingHorizontal:9,
        borderTopLeftRadius:5,
        borderBottomLeftRadius:5
    },
    queText:{
        color:colors.white,
        fontSize:14,
        fontWeight:500
    },
    queNum:{
        flexDirection:'row',
        borderColor:colors.primary,
        borderWidth:1,
        paddingVertical:3,
        paddingHorizontal:10,
        borderBottomRightRadius:5,
        borderTopRightRadius:5,
        alignItems:'flex-end'
    },
    queId:{
        fontSize:18,
        fontWeight:700,
        color:colors.primary,
    },
    queLen:{
        color:colors.secondary,
        fontSize:14,
        fontWeight:700
    },
    timer:{
        position:'absolute',
        right:0,
        flexDirection:'row'
    },
    timeLeft:{
        color:colors.primary,
        fontSize:22,
        fontWeight:700,
        marginLeft:1
    }
});

export default QuestionScreenHeading;