import React from 'react';
import { StyleSheet, Text, ScrollView, FlatList } from 'react-native';
import HomeWorkComponent from '../components/HomeWorkComponent';

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

function HomeWorkOverdue(props) {
    const hws = [
        {
        "deadline":"Yesterday",
        "hw":[
            {"subject":"maths", "topic":"Calculus", "time":"1 Hour", "teacher":"Abhishek Das sir", "que":25,"quesData":quesData},
            {"subject":"physics", "topic":"Vectors", "time":"45 mins", "teacher":"Mahesh Sharma sir", "que":20,"quesData":quesData}
        ]},
        {
           "deadline" : "Thursday, 20 Oct",
           "hw":[
                {"subject":"maths", "topic":"Trigonometry", "time":"1 Hour", "teacher":"Abhishek Das sir", "que":25,"quesData":quesData},
                {"subject":"physics", "topic":"Vectors", "time":"45 mins", "teacher":"Mahesh Sharma sir", "que":20,"quesData":quesData}
            ],
        }
        ]
    
    const Renderhw = ({deadline,hw}) => {
        return(
            <>
                <Text style={styles.dayText}>{deadline}</Text>
                <FlatList data={hw} keyExtractor={(h)=>h.subject} 
                renderItem={({item})=><HomeWorkComponent leftBottom={item.que+ " Questions"} teacher={item.teacher} 
                    subject={item.subject} rightBottom={item.time} topic={item.topic} quesData={item.quesData}/>}
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