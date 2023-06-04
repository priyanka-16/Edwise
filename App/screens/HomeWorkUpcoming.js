/* 1. The quesData array contains a list of question objects.
2. The HomeWorkUpcoming component renders a scrollable view containing homework items, a notice board, and a timetable.
3. The hws array contains homework data, including the deadline, subject, topic, time, teacher, and number of questions for each homework item. It also includes the quesData array for the first homework item, which can be passed as a prop to the HomeWorkComponent component.
4. The notices array contains notice data, including an ID and notice text.
5. The tts array contains timetable data, including the start time, end time, topic, and teacher for each class period.
6. The Renderhw component is a helper component that renders a list of homework items for a specific deadline. It uses the HomeWorkComponent component to render each homework item.
7. The NoticeBoard component renders the notice board section, displaying the notices from the notices array.
8. The HomeWorkUpcoming component uses FlatList to render the list of homework items based on the hws array. It also renders the notice board and timetable.
The component returns a ScrollView that contains the rendered homework items, notice board, and timetable. */

import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView, FlatList } from 'react-native';
import HomeWorkComponent from '../components/HomeWorkComponent';
import TimeTable from '../components/TimeTable';
import { useNavigation } from '@react-navigation/native';

const quesData = [   // Define the questions array
    {
      "uniqueId": "1",
      "queText": "What is the capital of France?",
      "queImg": "",
      "optA": "Paris",
      "optB": "Madrid",
      "optC": "London",
      "optD": "Rome",
      "answer": "A",
      "selectedOpt": "",
      "review": false,
      "bookmark": false,
      "notes": ""
    },
    {
      "uniqueId": "2",
      "queText": "Which planet is known as the Red Planet?",
      "queImg": "",
      "optA": "Mars",
      "optB": "Venus",
      "optC": "Jupiter",
      "optD": "Saturn",
      "answer": "A",
      "selectedOpt": "",
      "review": false,
      "bookmark": false,
      "notes": ""
    },
    {
      "uniqueId": "3",
      "queText": "Who painted the Mona Lisa?",
      "queImg": "",
      "optA": "Pablo Picasso",
      "optB": "Vincent van Gogh",
      "optC": "Leonardo da Vinci",
      "optD": "Michelangelo",
      "answer": "C",
      "selectedOpt": "",
      "review": false,
      "bookmark": false,
      "notes": ""
    },
    {
      "uniqueId": "4",
      "queText": "What is the tallest mountain in the world?",
      "queImg": "",
      "optA": "Mount Kilimanjaro",
      "optB": "Mount Everest",
      "optC": "Mount McKinley",
      "optD": "Mount Fuji",
      "answer": "B",
      "selectedOpt": "",
      "review": false,
      "bookmark": false,
      "notes": ""
    },
    {
      "uniqueId": "5",
      "queText": "Which country is known as the Land of the Rising Sun?",
      "queImg": "",
      "optA": "China",
      "optB": "India",
      "optC": "Japan",
      "optD": "Australia",
      "answer": "C",
      "selectedOpt": "",
      "review": false,
      "bookmark": false,
      "notes": ""
    },
    {
      "uniqueId": "6",
      "queText": "What is the chemical symbol for gold?",
      "queImg": "",
      "optA": "Ag",
      "optB": "Fe",
      "optC": "Au",
      "optD": "Hg",
      "answer": "C",
      "selectedOpt": "",
      "review": false,
      "bookmark": false,
      "notes": ""
    },
    {
      "uniqueId": "7",
      "queText": "Who wrote the play 'Romeo and Juliet'?",
      "queImg": "",
      "optA": "William Shakespeare",
      "optB": "George Bernard Shaw",
      "optC": "Anton Chekhov",
      "optD": "Oscar Wilde",
      "answer": "A",
      "selectedOpt": "",
      "review": false,
      "bookmark": false,
      "notes": ""
    },
    {
      "uniqueId": "8",
      "queText": "Which ocean is the largest?",
      "queImg": "",
      "optA": "Pacific Ocean",
      "optB": "Atlantic Ocean",
      "optC": "Indian Ocean",
      "optD": "Arctic Ocean",
      "answer": "A",
      "selectedOpt": "",
      "review": false,
      "bookmark": false,
      "notes": ""
    },
    {
      "uniqueId": "9",
      "queText": "What is the largest planet in our solar system?",
      "queImg": "",
      "optA": "Mars",
      "optB": "Venus",
      "optC": "Jupiter",
      "optD": "Saturn",
      "answer": "C",
      "selectedOpt": "",
      "review": false,
      "bookmark": false,
      "notes": ""
    },
    {
      "uniqueId": "10",
      "queText": "Who is credited with inventing the telephone?",
      "queImg": "",
      "optA": "Thomas Edison",
      "optB": "Alexander Graham Bell",
      "optC": "Albert Einstein",
      "optD": "Isaac Newton",
      "answer": "B",
      "selectedOpt": "",
      "review": false,
      "bookmark": false,
      "notes": ""
    }
  ]

function HomeWorkUpcoming(props) {
    const hws = [
        {
        "deadline":"Today",
        "hw":[
            {"subject":"maths", "topic":"Calculus", "time":"1 Hour", "teacher":"Abhishek Das sir", "que":25,"quesData":quesData },
            {"subject":"physics", "topic":"Vectors", "time":"45 mins", "teacher":"Mahesh Sharma sir", "que":20,"quesData":quesData}
        ]},
        {
           "deadline" : "Tommorow",
           "hw":[
                {"subject":"maths", "topic":"Trigonometry", "time":"1 Hour", "teacher":"Abhishek Das sir", "que":25,"quesData":quesData},
                {"subject":"physics", "topic":"Vectors", "time":"45 mins", "teacher":"Mahesh Sharma sir", "que":20,"quesData":quesData}
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
                    subject={item.subject} rightBottom={item.time} topic={item.topic} quesData={item.quesData}/>}
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