import React from 'react';
import { StyleSheet, Text, ScrollView, FlatList } from 'react-native';
import HomeWorkComponent from '../components/HomeWorkComponent';

function HomeWorkOverdue(props) {
    const hws = [
        {
        "deadline":"Yesterday",
        "hw":[
            {"subject":"maths", "topic":"Calculus", "time":"1 Hour", "teacher":"Abhishek Das sir", "que":25},
            {"subject":"physics", "topic":"Vectors", "time":"45 mins", "teacher":"Mahesh Sharma sir", "que":20}
        ]},
        {
           "deadline" : "Thursday, 20 Oct",
           "hw":[
                {"subject":"maths", "topic":"Trigonometry", "time":"1 Hour", "teacher":"Abhishek Das sir", "que":25},
                {"subject":"physics", "topic":"Vectors", "time":"45 mins", "teacher":"Mahesh Sharma sir", "que":20}
            ],
        }
        ]
    
    const Renderhw = ({deadline,hw}) => {
        return(
            <>
                <Text style={styles.dayText}>{deadline}</Text>
                <FlatList data={hw} keyExtractor={(h)=>h.subject} 
                renderItem={({item})=><HomeWorkComponent leftBottom={item.que+ " Questions"} teacher={item.teacher} 
                    subject={item.subject} rightBottom={item.time} topic={item.topic}/>}
                />
            </>
        )
    }
    return  (
        <ScrollView>
            <FlatList data={hws} keyExtractor={(hw)=>hw.deadline}  
            renderItem={({item})=><Renderhw deadline={item.deadline} hw={item.hw}/>}/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    dayText:{
        fontWeight:600,
        fontSize:20,
        left:20,
        marginTop:10
    },
});

export default HomeWorkOverdue;