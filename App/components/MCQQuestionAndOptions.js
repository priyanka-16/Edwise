import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import colors from '../config/colors';

function MCQQuestionAndOptions({questionsArray, responseArray, i, setResponse}) {
    const [selected, setSelected]=useState("")
    useEffect(()=>{
        // if que changes selected should change to that questions selected option
        setSelected(questionsArray[i].selectedOpt)
    },[i])
    useEffect(()=>{
        questionsArray[i].selectedOpt = selected
    },[selected])
    useEffect(() => {
        // Update the selectedOpt property in the response array when the selected variable changes
        const updatedResponse = responseArray.map((item, index) => {
          if (index === i) {
            return { ...item, selectedOpt:selected };
          }
          return item;
        });
        setResponse(updatedResponse);
      }, [selected]);

    const Options = ({optionLabel, optionText}) => {
        return(
            <TouchableWithoutFeedback onPress={()=>selected==optionLabel ? setSelected("") : setSelected(optionLabel)}>
                <View style={selected==optionLabel ? styles.selOptionContainer : styles.optionContainer}>
                    <View style={selected==optionLabel ? styles.selOptionLabel : styles.optionLabel}>
                        <Text style={styles.optionText}>{optionLabel}</Text>
                    </View>
                    <Text style={styles.optionText}>{optionText}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }
    return  (
        <>
            <View style={styles.questionContainer}>
                <Text style={styles.queText}>{questionsArray[i].queText}</Text>
                <Image source={questionsArray[i].queImg}/>
            </View>
            <Options optionLabel={"A"} optionText={questionsArray[i].optA}/>
            <Options optionLabel={"B"} optionText={questionsArray[i].optB}/>
            <Options optionLabel={"C"} optionText={questionsArray[i].optC}/>
            <Options optionLabel={"D"} optionText={questionsArray[i].optD}/>
        </>
    );
}

const styles = StyleSheet.create({
    questionContainer:{
        marginVertical:10,
        width:'96%',
        backgroundColor:colors.primary,
        alignSelf:'center',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:10
    },
    optionContainer:{
        marginVertical:10,
        width:'92%',
        borderColor:colors.medium,
        borderWidth:1,
        alignSelf:'center',
        borderRadius:10,
        alignItems:'center',
        flexDirection:'row',
        paddingVertical:10
    },
    selOptionContainer:{
        marginVertical:10,
        width:'92%',
        borderColor:colors.primary,
        backgroundColor:colors.secondaryLight,
        borderWidth:1,
        alignSelf:'center',
        borderRadius:10,
        alignItems:'center',
        flexDirection:'row',
        paddingVertical:10
    },
    optionLabel:{
        width:36,
        height:36,
        borderRadius:18,
        backgroundColor:colors.light,
        marginHorizontal:10,
        alignItems:'center',
        justifyContent:'center'
    },
    selOptionLabel:{
        width:36,
        height:36,
        borderRadius:18,
        backgroundColor:colors.secondary,
        marginHorizontal:10,
        alignItems:'center',
        justifyContent:'center'
    },
    optionText:{
        fontSize:18,
        fontWeight:500,
        color:colors.black
    },
    queText:{
        marginHorizontal:10,
        color:colors.white,
        fontSize:18,
        fontWeight:400,
        marginBottom:5
    }
});

export default MCQQuestionAndOptions;