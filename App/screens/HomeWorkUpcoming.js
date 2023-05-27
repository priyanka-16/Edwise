import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView, FlatList } from 'react-native';
import HomeWorkComponent from '../components/HomeWorkComponent';
import TimeTable from '../components/TimeTable';

function HomeWorkUpcoming(props) {
    const hws = [
        {
        "deadline":"Today",
        "hw":[
            {"subject":"maths", "topic":"Calculus", "time":"1 Hour", "teacher":"Abhishek Das sir", "que":25},
            {"subject":"physics", "topic":"Vectors", "time":"45 mins", "teacher":"Mahesh Sharma sir", "que":20}
        ]},
        {
           "deadline" : "Tommorow",
           "hw":[
                {"subject":"maths", "topic":"Trigonometry", "time":"1 Hour", "teacher":"Abhishek Das sir", "que":25},
                {"subject":"physics", "topic":"Vectors", "time":"45 mins", "teacher":"Mahesh Sharma sir", "que":20}
            ],
        }
        ]

    const notices = [
        {"id":1, "notice": "There will be a holiday on 10th September 2021 because of Ganesh Chaturthi."},
        {"id":2, "notice": "We are making a cricket team for inter school competition to be held on 10th  October 2021. Interested students can give their name to Mahesh sir before 31 August 2021. Final selection will be done on 2nd sept 2021. Practice will start from 3rd September 2021 after school time."},
        {"id":3, "notice": "There will be no Physics class on 28 August 2021. Instead there will be a games period."},
    ]

    const tts = [{"startTime":"7:30 AM", "endTime":"8:30 AM", "topic":"Maths", "teacher":"by Abhishek Das sir"},
                {"startTime":"8:30 AM", "endTime":"9:30 AM", "topic":"Physics", "teacher":"by Mahesh Sharma sir"},
                {"startTime":"9:30 AM", "endTime":"10:30 AM", "topic":"Maths", "teacher":"by Abhishek Das sir"},
                {"startTime":"10:30 AM", "endTime":"11:00 AM", "topic":"Recess", "teacher":""},
                {"startTime":"11:00 AM", "endTime":"12:00 PM", "topic":"Maths", "teacher":"by Abhishek Das sir"},
                {"startTime":"12:00 PM", "endTime":"1:00 PM", "topic":"Maths", "teacher":"by Abhishek Das sir"},
                {"startTime":"1:00 AM", "endTime":"2:00 PM", "topic":"Maths", "teacher":"by Abhishek Das sir"}]
    
    const Renderhw = ({deadline,hw}) => {
        return(
            <>
                <Text style={styles.dayText}>{deadline}</Text>
                <FlatList data={hw} keyExtractor={(h)=>h.subject} 
                renderItem={({item})=><HomeWorkComponent leftBottom={item.que+" Questions"} teacher={item.teacher} 
                    subject={item.subject} rightBottom={item.time} topic={item.topic}/>}
                />
            </>
        )
    }

    const NoticeBoard = ()=>{
        return(
            <View style={styles.dayWiseHW}>
                <Text style={styles.dayText}>Notice Board</Text>
                <FlatList data={notices} keyExtractor={(notice)=>notice.id.toString()} style={{marginRight:5}}
                renderItem={({item})=> <Text style={styles.notice}>{item.id}. {item.notice}</Text>}/>
            </View>
        )
    }

    return (
    <ScrollView>
        <FlatList data={hws} keyExtractor={(hw)=>hw.deadline} style={styles.dayWiseHW} 
        renderItem={({item})=><Renderhw deadline={item.deadline} hw={item.hw}/>}/>
        <NoticeBoard/>
        <TimeTable monDate={24} tts={tts}/>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    dayText:{
        fontWeight:600,
        fontSize:20,
        left:20
    },
    dayWiseHW:{
        marginTop:10
    },
    notice:{
        fontSize: 16,
        left:20,
        marginTop:5,
        marginRight:5
    }
    
})

export default HomeWorkUpcoming;