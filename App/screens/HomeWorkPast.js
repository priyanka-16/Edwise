import React from 'react';
import { StyleSheet, Text, Image, ScrollView, FlatList } from 'react-native';
import HomeWorkComponent from '../components/HomeWorkComponent';

function HomeWorkPast(props) {
    const hws = [
        {
            "deadline":"Yesterday",
            "hw":[
                {"subject":"maths", "topic":"Calculus", "accuracy":"75%", "teacher":"Abhishek Das sir", "attempted":"20/25"},
                {"subject":"physics", "topic":"Vectors", "accuracy":"55%", "teacher":"Mahesh Sharma sir", "attempted":"15/20"}
        ]},
        {
           "deadline" : "Thursday, 20 Oct",
           "hw":[
                {"subject":"maths", "topic":"Calculus", "accuracy":"75%", "teacher":"Abhishek Das sir", "attempted":"20/25"},
                {"subject":"physics", "topic":"Vectors", "accuracy":"55%", "teacher":"Mahesh Sharma sir", "attempted":"15/20"}
            ],
        }
        ]
    
    const Renderhw = ({deadline,hw}) => {
        return(
            <>
                <Text style={styles.dayText}>{deadline}</Text>
                <FlatList data={hw} keyExtractor={(h)=>h.subject} 
                renderItem={({item})=><HomeWorkComponent leftBottom={item.attempted+" Attempted"} teacher={item.teacher} 
                    subject={item.subject} rightBottom={item.accuracy+" Accuracy"} topic={item.topic}/>}
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

export default HomeWorkPast;