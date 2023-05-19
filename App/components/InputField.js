import React from 'react';
import {View, StyleSheet, Text, TextInput } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from '../config/styles';
import colors from '../config/colors';

function InputField({fieldTitle, fieldContent, tops,lefts,heights,...otherProps}) {
    return  (
        <View style={[styles.fieldContainer,{top:tops, left:lefts, height:heights}]}>
            <Text style={styles.fieldTitle}>{fieldTitle}</Text>
            <View style={styles.fieldContentContainer}>
               { fieldContent && <Text style={styles.fieldContent}>{fieldContent}</Text>}
               { fieldContent && <MaterialCommunityIcons name="menu-down" size={30} color={colors.black} />}
                <TextInput style={[defaultStyles.text, {width:'70%'}]} {...otherProps}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    fieldContainer:{
        borderColor:colors.light,
        borderWidth:2,
        borderRadius:5,
        width:'85%',
        padding: 5,
    },
    fieldTitle:{
       color:colors.dark, 
       fontSize:14,
       fontWeight:500,
    },
    fieldContent:{
        color:colors.black,
        fontSize:18,
        fontWeight:500,
    },
    fieldContentContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
});

export default InputField;