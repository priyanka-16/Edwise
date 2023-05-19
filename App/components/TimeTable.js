import React, { useState } from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback, FlatList } from 'react-native';
import colors from '../config/colors';

function TimeTable({monDate, tts}) {
    [selected,setSelected]=useState("Sun")
    const RenderDate = ({date,day})=>{
        return(
            <TouchableWithoutFeedback onPress={()=>setSelected(day)}>
                <View style={selected==day ? styles.selDate :styles.date}>
                    <Text style={{fontSize:16, fontWeight:800, color:selected==day ? colors.white : colors.dark}}>{date}{"\n"}{day}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }
    const dates = [{"date":monDate, "day":"Mon"},
                {"date":monDate+1, "day":"Tue"},
                {"date":monDate+2, "day":"Wed"},
                {"date":monDate+3, "day":"Thu"},
                {"date":monDate+4, "day":"Fri"},
                {"date":monDate+5, "day":"Sat"},
                {"date":monDate+6, "day":"Sun"}]
    const RenderTT = ({startTime,endTime,topic,teacher}) => {
        return(
        <View style={styles.ttRow}>
            <View style={styles.ttTime}>
                <Text style={styles.ttTimeText}>{startTime} - {endTime}</Text>
            </View>
            <View style={styles.ttDetail}>
               <Text style={styles.ttDetailText}>{topic} {teacher}</Text> 
            </View>
        </View>
        )
    }
    
    return  (
        <View style = {styles.container}>
            <Text style={{fontSize:18, fontWeight:800, alignSelf:'flex-start', left:15}}>Time Table</Text>
            <FlatList horizontal data={dates} keyExtractor={(date)=>date.day} style={styles.dates}
            renderItem={({item}) => <RenderDate date={item.date} day={item.day}/>}/>

            <View style={[styles.triangle,{left:
            selected=="Mon" ? 27 :
            selected=="Tue" ? 80 :
            selected=="Wed" ? 133 :
            selected=="Thu" ? 186 :
            selected=="Fri" ? 239 :
            selected=="Sat" ? 292 : 345 }]}/>

            <FlatList data={tts} keyExtractor={(tt)=>tt.startTime} style={styles.tt}
            renderItem={({item})=> <RenderTT startTime={item.startTime} endTime={item.endTime} topic={item.topic} teacher={item.teacher}/>}/> 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        marginVertical:10
    },
    dates:{
        flexDirection:'row',
        marginTop:10
    },
    date:{
        width:45,
        height:45,
        borderRadius:10,
        borderColor:colors.dark,
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:4
    },
    selDate:{
        width:45,
        height:45,
        borderRadius:10,
        backgroundColor:colors.primary,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:4
    },
    tt:{
        width:"95%",
        height:245,
        borderColor:colors.primary,
        borderWidth:1,
        borderRadius:10,
        paddingHorizontal:10
    },
    ttRow:{
        height:35,
        width:"100%",
        borderBottomWidth:1,
        borderBottomColor:colors.primary,
        paddingVertical:5,
        flexDirection:'row'
    },
    ttTime:{
        width:"40%",
        height:"100%",
        borderRightColor:colors.primary,
        borderRightWidth:1,
        alignItems:'center',
        justifyContent:'center'
    },
    ttTimeText:{
        fontSize:14,
        fontWeight:600
    },
    ttDetail:{
        alignItems:'center',
        justifyContent:'center',
        width:"60%",
        height:"100%",
    },
    ttDetailText:{
        fontSize:14,
        fontWeight:700
    },
    triangle:{
        width:0,
        height:0,
        borderLeftWidth:10,
        borderRightWidth:10,
        borderTopWidth:20,
        borderTopColor:colors.primary,
        borderLeftColor:'transparent',
        borderRightColor:'transparent',
        alignSelf:'flex-start'
    }
});

export default TimeTable;