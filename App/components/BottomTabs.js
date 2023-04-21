import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';

function BottomTabs({tname, iconName, selected, setSelected}) {
    return  (
        <TouchableWithoutFeedback onPress={()=>setSelected(tname)}>
        <View style={styles.tabs}>
            <MaterialCommunityIcons name={iconName} size={24} color={colors.white} />
            {selected==tname && <Text style={{color:colors.white}}>{tname}</Text>}
        </View>
        </TouchableWithoutFeedback>   
    );
}

const styles = StyleSheet.create({
    tabs:{
        width:"25%",
        height:50,
        backgroundColor:colors.primary,
        alignItems:'center',
        justifyContent:'center'
    }
});

export default BottomTabs;