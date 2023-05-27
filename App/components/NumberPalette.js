import React from 'react';
import {View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';

function NumberPalette({closeNumPalette}) {
    const LegendEntry = ({legendColor, legendText}) => {
        return(
            <View style={styles.legendEntry}>
                <View style={[styles.legendSquare,{backgroundColor:legendColor}]}/>
                <Text style={styles.legendText}>{legendText}</Text>
            </View>
        )
    }
    return  (
        <View style={styles.numPaletteContainer}>
        <View style={styles.paletteTitle}>
            <Text style={styles.titleQuestions}>Questions</Text>
            <TouchableWithoutFeedback onPress={closeNumPalette}>
                <MaterialCommunityIcons size={24} name='close'/>
            </TouchableWithoutFeedback>
        </View>
        <View style={styles.legend}>
            <LegendEntry legendColor={colors.green} legendText={'Attempted'}/>
            <LegendEntry legendColor={colors.light} legendText={'Unattempted'}/>
            <LegendEntry legendColor={colors.yellow} legendText={'Review'}/>
        </View>
        <View style={[styles.questionIcon, {backgroundColor:colors.green}]}>
            <Text style={styles.queNo}>01</Text>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    numPaletteContainer:{
        width:"90%",
        height:"84%",
        backgroundColor:colors.white,
        alignSelf:'center',
        top:40,
        borderRadius:10,
        borderWidth:1
    },
    paletteTitle:{
        flexDirection:'row', 
        padding:10,
        marginHorizontal:10,
        borderBottomWidth:2,
        borderColor:colors.light,
        justifyContent:'space-between'
    },
    questionIcon:{
        width:60,
        height:60,
        borderRadius:20,
        left:20,
        alignItems:'center',
        justifyContent:'center'
    },
    queNo:{
        fontSize:20,
        fontWeight:700
    },
    legend:{
        flexDirection:'row',
        paddingHorizontal:20,
        paddingVertical: 15,
        justifyContent:'space-between'
    },
    legendEntry:{
        flexDirection:'row',
    },
    legendSquare:{
        width:18, 
        height:18, 
        borderRadius:5,
    },
    legendText:{
        fontSize:14,
        fontWeight:700,
        marginLeft: 5
    },
    titleQuestions:{
        fontSize:18,
        fontWeight:700,
    },

});

export default NumberPalette;