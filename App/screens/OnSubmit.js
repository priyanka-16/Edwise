import React from 'react';
import {View, StyleSheet, Text, FlatList, TouchableWithoutFeedback } from 'react-native';
import Screen from '../components/Screen';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import icons from '../config/icons';

function OnSubmit({navigation, route}) {
    const ques = route.params.quesData
    const TopSummaryBox = ({iconName, stats, statsType})=>{
        return(
            <View style={styles.topSummaryBox}>
                <View style={styles.topSummaryCircle}>
                    <MaterialCommunityIcons name={iconName} size={40} color={colors.primary}/>
                </View>
                <Text style={{fontSize:18, fontWeight:800}}>{stats}</Text>
                <Text style={{fontSize:15, fontWeight:500}}>{statsType}</Text>
            </View>
        )
    }
    const LegendEntry = ({legendColor, legendText}) => {
        return(
            <View style={{flexDirection:'row'}}>
                <View style={[styles.legendSquare,{backgroundColor:legendColor}]}/>
                <Text style={styles.legendText}>{legendText}</Text>
            </View>
        )
    }
    return  (
        <Screen>
            <View style={{flexDirection:'row', marginLeft:5, alignItems:'center'}}>
                <TouchableWithoutFeedback onPress={()=>navigation.navigate('HomePage')}>
                    <MaterialCommunityIcons name='arrow-left-circle' color={colors.primary} size={30}/>
                </TouchableWithoutFeedback>
                <Text style={styles.title}>   General Knowledge Quiz Report</Text>
            </View>
            <View style={styles.topSummaryContainer}>
                <TopSummaryBox iconName={icons.attempted} stats={"20/25"} statsType={"Attempted"}/>
                <TopSummaryBox iconName={icons.accuracy} stats={"16/20"} statsType={"Accuracy"}/>
                <TopSummaryBox iconName={icons.time_taken} stats={"54 mins"} statsType={"Time taken"}/>
            </View>
            <View style={styles.legend}>
                <LegendEntry legendColor={colors.green} legendText={'Correct'}/>
                <LegendEntry legendColor={colors.red} legendText={'Incorrect'}/>
                <LegendEntry legendColor={colors.light} legendText={'Unattempted'}/>
            </View>
            <FlatList data={ques} keyExtractor={(que)=>que.uniqueId.toString()} numColumns={3}
            renderItem={({item})=>(
                <View style={[styles.quesNumContainer,
                {borderColor:item.selectedOpt=="" ? colors.dark : item.selectedOpt == item.answer ? colors.darkGreen : colors.darkRed,
                backgroundColor: item.selectedOpt=="" ? colors.light : item.selectedOpt == item.answer ? colors.green : colors.red}]}>
                    <Text style={styles.queNumText}>{item.uniqueId}</Text>
                    <Text style={styles.timeTaken}>{item.timeTaken}</Text>
                </View>)}/>
        </Screen>
    );
}

const styles = StyleSheet.create({
    topSummaryContainer: {
        flexDirection:'row',
        marginHorizontal:5,
        justifyContent:'space-between',
        paddingVertical:10,
        paddingBottom:20,
        borderBottomColor:colors.medium,
        borderBottomWidth:1
    },
    topSummaryBox:{
        width:120,
        height:120,
        borderRadius:20,
        borderColor:colors.medium,
        borderWidth:1,
        alignItems:'center',
    },
    topSummaryCircle:{
        width:62,
        height:62,
        borderRadius:31,
        backgroundColor:colors.secondaryLight,
        marginVertical:5,
        alignItems:'center',
        justifyContent:'center'
        
    },
    legend:{
        flexDirection:'row',
        paddingHorizontal:20,
        paddingTop: 15,
        justifyContent:'space-between'
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
    quesNumContainer:{
        margin:8,
        width:115,
        height:100,
        borderRadius:20,
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center'

    },
    queNumText:{
        fontSize:36,
        fontWeight:800
    },
    timeTaken:{
        fontSize:16,
        fontWeight:600
    },
    title:{
        fontSize:16,
        fontWeight:700
    }
});

export default OnSubmit;