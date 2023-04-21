import React from 'react';
import {View, StyleSheet, Text } from 'react-native';
import colors from '../config/colors';
import { TouchableWithoutFeedback } from 'react-native';

function WideButton({title, tops, onPress, errors, touched}) {
    var color = (!errors && touched) ? colors.primary : colors.dark
    
    return  (
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={[styles.button,{top:tops, backgroundColor:color}]}>
            <Text style={{color:colors.white, fontSize:20, fontWeight:500}}>{title}</Text>
        </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    button:{
        justifyContent:'center',
        alignItems:'center',
        height:60,
        borderRadius:30,
        width:"85%",
        alignSelf:'center'
    }
});

export default WideButton;