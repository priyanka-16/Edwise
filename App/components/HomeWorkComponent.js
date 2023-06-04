import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import colors from '../config/colors';
import icons from '../config/icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function HomeWorkComponent({subject, topic, teacher, leftBottom, rightBottom, quesData}) {
    const navigation=useNavigation();
   
    // const iconName = (subject=="maths"?'math-compass':subject=="physics"?'magnet-on':true)
    return  (
    <TouchableWithoutFeedback onPress={()=>navigation.navigate('QuestionScreen',{"quesData":quesData})}>
        <View style={[styles.container,{borderColor:colors[subject]}]}>
            <View style={[styles.icon, {backgroundColor:colors[subject]}]}>
                <MaterialCommunityIcons size={50} color={colors.white} name={icons[subject]} />
            </View>
            <View style={{marginLeft:10, marginTop:5}}>
                <Text style={{fontSize:18, fontWeight:800}}>{topic}</Text>
                <Text style={{fontSize:16, fontWeight:600}}>{teacher}</Text>
                <View style={{flexDirection:'row'}}>
                    <Text style={{marginRight:20, fontSize:14, fontWeight:400}}>{leftBottom}</Text>
                    <Text style={{fontSize:14, fontWeight:400}}>{rightBottom}</Text>
                </View>
            </View>
        </View>
    </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        width:'90%',
        height:80,
        borderWidth:2,
        alignSelf:'center',
        borderRadius:12,
        marginTop:10,
        flexDirection:'row',
    },
    icon:{
        width:"22%",
        height:"100%",
        justifyContent:'center',
        alignItems:'center',
    }
});

export default HomeWorkComponent;